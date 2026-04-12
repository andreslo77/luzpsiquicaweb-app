import React, { useEffect, useState } from "react";
import { useLang } from "../context/LanguageContext.jsx";
import AppLayoutWeb from "../components/layout/AppLayoutWeb.jsx";
import { API_BASE_URL } from "../config/env.web.js";

const RAW_API_URL = API_BASE_URL;

function normalizeApiBase(url) {
  if (!url) return null;
  const base = String(url).trim().replace(/\/+$/, "");
  if (!base) return null;
  if (base.endsWith("/api")) return base;
  return `${base}/api`;
}

const API_URL = normalizeApiBase(RAW_API_URL);

const PACKAGES = [
  { id: "pkg20", minutes: 20 },
  { id: "pkg50", minutes: 50 },
  { id: "pkg100", minutes: 100 },
  { id: "pkg200", minutes: 200 },
];

function getDiscountRateForMinutes(minutes) {
  if (minutes >= 200) return 0.10;
  if (minutes >= 100) return 0.06;
  if (minutes >= 50) return 0.03;
  return 0.0;
}

function formatDiscountLabel(template, pct) {
  const tpl = String(template ?? "").trim();
  const safeTpl = tpl.length ? tpl : "Descuento: {{pct}}%";

  if (safeTpl.includes("{{pct}}")) {
    return safeTpl.replaceAll("{{pct}}", String(pct));
  }

  if (safeTpl.includes("%")) {
    return safeTpl.replace("%", `${pct}%`);
  }

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

export default function BuyMinutesWeb() {
  const { t, lang } = useLang();

  const [currentMinutes, setCurrentMinutes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [buyingId, setBuyingId] = useState(null);
  const [pendingOrder, setPendingOrder] = useState(null);

  const formatDiscountLegend = (minutes) => {
    const pct = Math.round(getDiscountRateForMinutes(minutes) * 100);
    return formatDiscountLabel(t("discount_label"), pct);
  };

  const loadMinutes = async () => {
    try {
      const token =
        localStorage.getItem("token") || localStorage.getItem("auth_token");

      if (!token) throw new Error(t("err_not_auth"));

      const res = await fetch(`${API_URL}/users/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.message || t("err_load_minutes"));

      setCurrentMinutes(Number(data.minutes ?? 0));
    } catch (err) {
      console.log("[BuyMinutesWeb] loadMinutes error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMinutes();
  }, []);

  const createPaypalOrder = async (minutes) => {
    const token =
      localStorage.getItem("token") || localStorage.getItem("auth_token");

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

    if (!res.ok) {
      throw new Error(data?.message || t("err_create_order"));
    }

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
      data?.links?.find?.((l) => l?.rel === "approve")?.href ||
      data?.result?.links?.find?.((l) => l?.rel === "approve")?.href;

    if (!normalizedOrderId || !normalizedApproveUrl) {
      throw new Error(
        "Respuesta inválida creando la orden (no se encontró orderId / approveUrl en la respuesta)."
      );
    }

    return {
      ...data,
      orderId: normalizedOrderId,
      approveUrl: normalizedApproveUrl,
    };
  };

  const handleBuy = async (pkg) => {
    try {
      if (!API_URL) throw new Error(t("err_no_config"));

      setBuyingId(pkg.id);

      const order = await createPaypalOrder(pkg.minutes);
      setPendingOrder(order);

      window.alert(t("paypal_continue_body"));
      window.location.href = order.approveUrl;
    } catch (err) {
      console.log("[BuyMinutesWeb] handleBuy error:", err);
      window.alert(err?.message || "No se pudo iniciar la compra.");
      setPendingOrder(null);
    } finally {
      setBuyingId(null);
    }
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

        {!!pendingOrder?.orderId && (
          <div style={styles.pendingCard}>
            <div style={styles.pendingTitle}>{t("buy_minutes_pending_title")}</div>

            <div style={styles.pendingText}>
              {t("buy_minutes_order")}: {pendingOrder.orderId}
              <br />
              {t("buy_minutes_total")}: USD $
              {Number(pendingOrder.totalAmountUsd ?? 0).toFixed(2)}
              <br />
              {t("buy_minutes_return_hint")}
            </div>
          </div>
        )}

        <div style={styles.packagesContainer}>
          {PACKAGES.map((pkg) => (
            <button
              key={pkg.id}
              type="button"
              style={{
                ...styles.packageCard,
                ...((buyingId === pkg.id || !!pendingOrder?.orderId)
                  ? styles.packageCardDisabled
                  : {}),
              }}
              disabled={buyingId === pkg.id || !!pendingOrder?.orderId}
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

              <div style={styles.packageHint}>
                {t("buy_minutes_tap_to_pay")}
              </div>

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
    gap: "10px",
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