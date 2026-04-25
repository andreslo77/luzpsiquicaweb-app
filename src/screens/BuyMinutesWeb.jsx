import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLang } from "../context/LanguageContext.jsx";
import AppLayoutWeb from "../components/layout/AppLayoutWeb.jsx";
import { API_BASE_URL } from "../config/env.web.js";

const RAW_API_URL = API_BASE_URL;

function normalizeApiBase(url) {
  if (!url) return null;
  const base = String(url).trim().replace(/\/+$/, "");
  if (!base) return null;
  return base.endsWith("/api") ? base : `${base}/api`;
}

const API_URL = normalizeApiBase(RAW_API_URL);

const PACKAGES = [
  { id: "pkg20", minutes: 20 },
  { id: "pkg50", minutes: 50 },
  { id: "pkg100", minutes: 100 },
  { id: "pkg200", minutes: 200 },
];

function getDiscountRateForMinutes(minutes) {
  if (minutes >= 200) return 0.1;
  if (minutes >= 100) return 0.06;
  if (minutes >= 50) return 0.03;
  return 0.0;
}

function formatDiscountLabel(template, pct) {
  const tpl = String(template ?? "").trim();
  const safeTpl = tpl.length ? tpl : "Descuento: {{pct}}%";

  if (safeTpl.includes("{{pct}}")) return safeTpl.replaceAll("{{pct}}", String(pct));
  if (safeTpl.includes("%")) return safeTpl.replace("%", `${pct}%`);

  return `${safeTpl} ${pct}%`;
}

function formatMinutesValue(value, lang) {
  const n = Number(value ?? 0);
  if (!Number.isFinite(n)) return "--";

  try {
    const localeMap = {
      es: "es-CO",
      en: "en-US",
      fr: "fr-FR",
      de: "de-DE",
      pt: "pt-BR",
      it: "it-IT",
    };

    return new Intl.NumberFormat(localeMap[lang] || "es-CO", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(n);
  } catch {
    return n.toFixed(2);
  }
}

function extractMinutesFromMeResponse(data) {
  const candidates = [
    data?.minutes,
    data?.user?.minutes,
    data?.data?.minutes,
    data?.profile?.minutes,
  ];

  for (const value of candidates) {
    const n = Number(value);
    if (Number.isFinite(n)) return n;
  }

  return 0;
}

function getAuthToken() {
  return (
    localStorage.getItem("auth_token") ||
    localStorage.getItem("token") ||
    localStorage.getItem("authToken") ||
    localStorage.getItem("accessToken") ||
    null
  );
}

function extractOrderIdFromUrl() {
  try {
    const params = new URLSearchParams(window.location.search);
    return params.get("token") || params.get("orderId") || null;
  } catch {
    return null;
  }
}

export default function BuyMinutesWeb() {
  const { t, lang } = useLang();

  const [currentMinutes, setCurrentMinutes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [buyingId, setBuyingId] = useState(null);
  const [pendingOrder, setPendingOrder] = useState(null);
  const [capturing, setCapturing] = useState(false);

  const lastCapturedOrderRef = useRef(null);

  const isPayPalPending = useMemo(() => !!pendingOrder?.orderId, [pendingOrder]);

  const formatDiscountLegend = (minutes) => {
    const pct = Math.round(getDiscountRateForMinutes(minutes) * 100);
    return formatDiscountLabel(t("discount_label"), pct);
  };

  const loadMinutes = async () => {
    if (!API_URL) throw new Error(t("err_no_config"));

    const token = getAuthToken();
    if (!token) throw new Error(t("err_not_auth"));

    const res = await fetch(`${API_URL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data?.message || t("err_load_minutes"));

    setCurrentMinutes(extractMinutesFromMeResponse(data));
  };

  const createPaypalOrder = async (minutes) => {
    const token = getAuthToken();
    if (!token) throw new Error(t("err_not_auth"));

    const res = await fetch(`${API_URL}/payments/create-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ minutes, lang }),
    });

    const data = await res.json().catch(() => ({}));

    console.log("[BuyMinutesWeb][create-order] status:", res.status);
    console.log("[BuyMinutesWeb][create-order] response:", data);

    if (!res.ok) throw new Error(data?.message || t("err_create_order"));

    const normalizedOrderId =
      data?.orderId ||
      data?.orderID ||
      data?.id ||
      data?.result?.id ||
      data?.paypal?.id;

    const normalizedApproveUrl =
      data?.approveUrl ||
      data?.approvalUrl ||
      data?.approve_url ||
      data?.approveLink ||
      data?.links?.find?.((l) => l?.rel === "approve" || l?.rel === "payer-action")?.href ||
      data?.result?.links?.find?.((l) => l?.rel === "approve" || l?.rel === "payer-action")?.href;

    if (!normalizedOrderId || !normalizedApproveUrl) {
      throw new Error(
        "Respuesta inválida creando la orden. No se encontró orderId / approveUrl."
      );
    }

    return {
      ...data,
      orderId: normalizedOrderId,
      approveUrl: normalizedApproveUrl,
    };
  };

  const capturePaypalOrder = async (orderId) => {
    const token = getAuthToken();
    if (!token) throw new Error(t("err_not_auth"));

    const res = await fetch(`${API_URL}/payments/capture`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ orderId }),
    });

    const data = await res.json().catch(() => ({}));

    if (res.status === 409) return { __conflict409: true, ...data };
    if (!res.ok) throw new Error(data?.message || t("err_capture_payment"));

    return data;
  };

  const finalizeAfterCapture = async (result) => {
    const nextMinutes = Number(result?.newMinutes);

    if (Number.isFinite(nextMinutes)) {
      setCurrentMinutes(nextMinutes);
    } else {
      await loadMinutes();
    }

    setPendingOrder(null);
    localStorage.removeItem("lp_pending_paypal_order");

    window.alert(
      `${t("purchase_success_title")}\n\n${String(t("purchase_success_body")).replaceAll(
        "{{added}}",
        String(result?.addedMinutes ?? "—")
      )}`
    );
  };

  const handleCapture = async (orderId) => {
    if (!orderId) return;
    if (lastCapturedOrderRef.current === orderId) return;

    try {
      setCapturing(true);
      lastCapturedOrderRef.current = orderId;

      const result = await capturePaypalOrder(orderId);

      if (result?.__conflict409) {
        await loadMinutes();
        window.alert(result?.message || t("buy_minutes_return_hint"));
        return;
      }

      await finalizeAfterCapture(result);
    } catch (err) {
      console.log("[BuyMinutesWeb] capture error:", err);
      window.alert(err?.message || t("err_capture_payment"));
    } finally {
      setCapturing(false);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        await loadMinutes();
      } catch (err) {
        console.log("[BuyMinutesWeb] loadMinutes error:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lp_pending_paypal_order");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed?.orderId) setPendingOrder(parsed);
      }
    } catch {
      // noop
    }
  }, []);

  useEffect(() => {
    const orderIdFromUrl = extractOrderIdFromUrl();

    if (orderIdFromUrl) {
      handleCapture(orderIdFromUrl);

      try {
        const cleanUrl = `${window.location.origin}${window.location.pathname}`;
        window.history.replaceState({}, document.title, cleanUrl);
      } catch {
        // noop
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBuy = async (pkg) => {
    try {
      if (!API_URL) throw new Error(t("err_no_config"));

      setBuyingId(pkg.id);
      lastCapturedOrderRef.current = null;

      const order = await createPaypalOrder(pkg.minutes);

      setPendingOrder(order);
      localStorage.setItem("lp_pending_paypal_order", JSON.stringify(order));

      window.alert(t("paypal_continue_body"));
      window.location.href = order.approveUrl;
    } catch (err) {
      console.log("[BuyMinutesWeb] handleBuy error:", err);
      window.alert(err?.message || "No se pudo iniciar la compra.");
      setPendingOrder(null);
      localStorage.removeItem("lp_pending_paypal_order");
    } finally {
      setBuyingId(null);
    }
  };

  const handleCaptureFallback = async () => {
    const orderId = pendingOrder?.orderId;
    if (!orderId) return;
    await handleCapture(orderId);
  };

  return (
    <AppLayoutWeb
      title={t("buy_minutes_header_title")}
      showBack={true}
      backTo="/dashboard"
      showFooter={false}
      contentStyle={styles.layoutContent}
    >
      <div style={styles.container}>
        <h1 style={styles.title}>{t("buy_minutes_title")}</h1>
        <p style={styles.subtitle}>{t("buy_minutes_subtitle")}</p>

        <div style={styles.balanceCard}>
          <div style={styles.balanceLabel}>{t("buy_minutes_current_balance")}</div>

          {loading ? (
            <div style={styles.loadingText}>...</div>
          ) : (
            <div style={styles.balanceValue}>
              {currentMinutes != null
                ? formatMinutesValue(currentMinutes, lang)
                : t("dash_placeholder2")}{" "}
              {t("minutes_suffix")}
            </div>
          )}
        </div>

        <div style={styles.securePaymentCard}>
          <div style={styles.securePaymentTitle}>
            {t("buy_minutes_secure_payment_title")}
          </div>

          <div style={styles.securePaymentBody}>
            {t("buy_minutes_secure_payment_body")}
          </div>

          <div style={styles.securePaymentFooter}>
            🔒 {t("buy_minutes_secure_payment_footer")}
          </div>
        </div>

        {isPayPalPending && (
          <div style={styles.pendingCard}>
            <div style={styles.pendingTitle}>{t("buy_minutes_pending_title")}</div>

            <div style={styles.pendingText}>
              {t("buy_minutes_order")}: {pendingOrder.orderId}
              <br />
              {t("buy_minutes_total")}: USD $
              {Number(pendingOrder.totalAmountUsd ?? 0).toFixed(2)}
              <br />
              {capturing ? t("buy_minutes_confirming") : t("buy_minutes_return_hint")}
            </div>

            <button
              type="button"
              style={{
                ...styles.captureBtn,
                ...(capturing ? styles.captureBtnDisabled : {}),
              }}
              disabled={capturing}
              onClick={handleCaptureFallback}
            >
              {capturing ? t("buy_minutes_confirming") : t("buy_minutes_paid_fallback")}
            </button>

            <button
              type="button"
              style={styles.cancelBtn}
              disabled={capturing}
              onClick={() => {
                setPendingOrder(null);
                localStorage.removeItem("lp_pending_paypal_order");
              }}
            >
              {t("buy_minutes_cancel")}
            </button>
          </div>
        )}

        <div style={styles.packagesContainer}>
          {PACKAGES.map((pkg) => (
            <button
              key={pkg.id}
              type="button"
              style={{
                ...styles.packageCard,
                ...(buyingId === pkg.id || isPayPalPending
                  ? styles.packageCardDisabled
                  : {}),
              }}
              disabled={buyingId === pkg.id || isPayPalPending}
              onClick={() => handleBuy(pkg)}
            >
              <div style={styles.packageHeaderRow}>
                <div style={styles.packageMinutes}>
                  {pkg.minutes} {t("buy_minutes_pkg_minutes")}
                </div>

                <div style={styles.discountBadge}>
                  {formatDiscountLegend(pkg.minutes)}
                </div>
              </div>

              <div style={styles.packageHint}>{t("buy_minutes_tap_to_pay")}</div>

              {buyingId === pkg.id && (
                <div style={styles.processingText}>
                  {t("common.processing", "Procesando...")}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </AppLayoutWeb>
  );
}

const PRIMARY = "#4B0082";
const LIGHT_PURPLE = "#F5E7FF";

const styles = {
  layoutContent: {
    padding: "76px 20px 20px",
    background: LIGHT_PURPLE,
  },

  container: {
    minHeight: "calc(100vh - 76px)",
    backgroundColor: LIGHT_PURPLE,
  },

  title: {
    fontSize: "22px",
    fontWeight: 700,
    color: PRIMARY,
    margin: "0 0 4px 0",
    lineHeight: 1.15,
  },

  subtitle: {
    fontSize: "14px",
    color: "#555",
    margin: "0 0 16px 0",
    lineHeight: 1.4,
  },

  balanceCard: {
    backgroundColor: "#FFF",
    padding: "16px",
    borderRadius: "16px",
    marginBottom: "14px",
    boxShadow: "0 2px 8px rgba(60, 20, 110, 0.08)",
  },

  balanceLabel: {
    fontSize: "14px",
    color: "#666",
  },

  balanceValue: {
    marginTop: "6px",
    fontSize: "24px",
    fontWeight: 700,
    color: PRIMARY,
    lineHeight: 1.1,
  },

  loadingText: {
    marginTop: "6px",
    fontSize: "18px",
    color: PRIMARY,
    fontWeight: 700,
  },

  securePaymentCard: {
    backgroundColor: "#FFF",
    borderRadius: "16px",
    padding: "14px",
    marginBottom: "14px",
    border: "1px solid #D8C2FF",
    boxShadow: "0 2px 8px rgba(60, 20, 110, 0.08)",
  },

  securePaymentTitle: {
    fontSize: "14px",
    fontWeight: 900,
    color: PRIMARY,
    marginBottom: "6px",
  },

  securePaymentBody: {
    fontSize: "12px",
    color: "#444",
    lineHeight: 1.5,
  },

  securePaymentFooter: {
    marginTop: "8px",
    fontSize: "12px",
    fontWeight: 800,
    color: PRIMARY,
    lineHeight: 1.4,
  },

  pendingCard: {
    backgroundColor: "#FFF",
    borderRadius: "16px",
    padding: "16px",
    marginBottom: "16px",
    border: "1px solid #E7D4FF",
    boxShadow: "0 2px 8px rgba(60, 20, 110, 0.08)",
  },

  pendingTitle: {
    fontSize: "16px",
    fontWeight: 800,
    color: PRIMARY,
    marginBottom: "6px",
  },

  pendingText: {
    fontSize: "13px",
    color: "#333",
    lineHeight: 1.5,
    marginBottom: "12px",
  },

  captureBtn: {
    width: "100%",
    backgroundColor: PRIMARY,
    color: "#FFF",
    border: "none",
    borderRadius: "12px",
    padding: "12px",
    fontWeight: 800,
    cursor: "pointer",
    marginBottom: "10px",
  },

  captureBtnDisabled: {
    opacity: 0.7,
    cursor: "not-allowed",
  },

  cancelBtn: {
    width: "100%",
    backgroundColor: "#F2F2F2",
    color: "#333",
    border: "none",
    borderRadius: "12px",
    padding: "10px",
    fontWeight: 700,
    cursor: "pointer",
  },

  packagesContainer: {
    paddingBottom: "20px",
  },

  packageCard: {
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: "16px",
    padding: "16px",
    marginBottom: "12px",
    border: "none",
    boxShadow: "0 2px 8px rgba(60, 20, 110, 0.08)",
    textAlign: "left",
    cursor: "pointer",
  },

  packageCardDisabled: {
    opacity: 0.7,
    cursor: "not-allowed",
  },

  packageHeaderRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  packageMinutes: {
    fontSize: "18px",
    fontWeight: 700,
    color: PRIMARY,
    flexShrink: 1,
    lineHeight: 1.15,
  },

  discountBadge: {
    fontSize: "11px",
    fontWeight: 800,
    color: PRIMARY,
    backgroundColor: "#F2E6FF",
    padding: "6px 10px",
    borderRadius: "999px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    marginLeft: "10px",
  },

  packageHint: {
    fontSize: "12px",
    color: "#777",
    marginTop: "8px",
    lineHeight: 1.35,
  },

  processingText: {
    marginTop: "8px",
    fontSize: "12px",
    color: PRIMARY,
    fontWeight: 700,
  },
};