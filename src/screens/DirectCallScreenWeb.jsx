// screens/DirectCallScreenWeb.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config/env.web.js";
import { useAuthWeb } from "../context/AuthContextWeb.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import AppLayoutWeb from "../components/layout/AppLayoutWeb.jsx";

const RAW_API_URL = API_BASE_URL;

function normalizeApiBase(url) {
  if (!url) return null;
  const base = String(url).trim().replace(/\/+$/, "");
  if (!base) return null;
  if (base.endsWith("/api")) return base;
  return `${base}/api`;
}

const API_URL = normalizeApiBase(RAW_API_URL);

function buildApiUrl(path) {
  const p = path.startsWith("/") ? path : `/${path}`;
  if (!API_URL) return p;
  return `${API_URL}${p}`;
}

function safeNum(n, fallback = 0) {
  const x = Number(n);
  return Number.isFinite(x) ? x : fallback;
}

function getPsychicPublicName(psychic, t) {
  const alias = typeof psychic?.psychicName === "string" ? psychic.psychicName.trim() : "";
  if (alias) return alias;

  const publicName =
    typeof psychic?.publicName === "string" ? psychic.publicName.trim() : "";
  if (publicName) return publicName;

  const nm = typeof psychic?.name === "string" ? psychic.name.trim() : "";
  if (nm) return nm;

  return t ? String(t("directcall_psychic_fallback")) : "Psíquico";
}

function buildPsychicForPublicUI(psychic, displayName) {
  const legalName = typeof psychic?.name === "string" ? psychic.name : "";
  return {
    ...psychic,
    legalName,
    publicName: displayName,
    name: displayName,
  };
}

function resolvePhotoUrl(photo) {
  const value = String(photo || "").trim();
  if (!value || value === "undefined" || value === "null") return null;

  if (
    value.startsWith("http://") ||
    value.startsWith("https://") ||
    value.startsWith("data:image/")
  ) {
    return value;
  }

  const root = String(API_BASE_URL || "").replace(/\/api$/, "").replace(/\/$/, "");
  if (!root) return null;

  if (value.startsWith("/")) return `${root}${value}`;
  return `${root}/${value}`;
}

function getInitials(name) {
  const clean = String(name || "").trim();
  if (!clean) return "P";

  return clean
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function DirectCallScreenWeb() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, token, logout } = useAuthWeb();
  const { t } = useLang();

  const tr = (key, vars = {}) => {
    let s = "";
    try {
      s = String(t(key, vars));
    } catch {
      s = String(t(key));
    }

    Object.keys(vars).forEach((k) => {
      s = s.replaceAll(`{{${k}}}`, String(vars[k]));
    });

    return s;
  };

  const state = location.state || {};
  const psychic = state?.psychic || null;

  const [loading, setLoading] = useState(true);
  const [starting, setStarting] = useState(false);

  const startedRef = useRef(false);

  useEffect(() => {
    const init = async () => {
      try {
        if (startedRef.current) return;
        startedRef.current = true;

        if (!API_URL) {
          window.alert(t("directcall_config_error_body"));
          navigate(-1);
          return;
        }

        if (!user) {
          window.alert(t("directcall_session_expired_body_login_again"));
          navigate("/login", { replace: true });
          return;
        }

        if (!psychic?._id && !psychic?.id) {
          window.alert(t("directcall_error_missing_psychic"));
          navigate(-1);
          return;
        }

        setStarting(true);
        setLoading(true);

        const authToken =
          token ||
          localStorage.getItem("auth_token") ||
          localStorage.getItem("token") ||
          sessionStorage.getItem("auth_token") ||
          sessionStorage.getItem("token");

        if (!authToken) {
          window.alert(t("directcall_session_expired_body_token_missing"));
          await logout?.();
          navigate("/login", { replace: true });
          return;
        }

        const psychicId = String(psychic?._id || psychic?.id || "");

        const res = await fetch(buildApiUrl("/calls/start"), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify({ psychicId }),
        });

        const data = await res.json().catch(() => ({}));

        if (res.status === 401) {
          window.alert(t("directcall_session_expired_body_call"));
          await logout?.();
          navigate("/login", { replace: true });
          return;
        }

        if (res.status === 402) {
          const goBuy = window.confirm(
            `${t("directcall_cannot_start_title")}\n\n${
              data?.message || t("directcall_cannot_start_no_minutes_fallback")
            }`
          );

          if (goBuy) {
            navigate("/buy-minutes");
          } else {
            navigate(-1);
          }
          return;
        }

        if (!res.ok) {
          window.alert(data?.message || t("directcall_error_start_call"));
          navigate(-1);
          return;
        }

        const { callId, roomId, clientMinutes } = data;

        if (!callId || !roomId) {
          window.alert(t("directcall_error_invalid_call_params"));
          navigate(-1);
          return;
        }

        const displayName = getPsychicPublicName(psychic, t);
        const psychicForPublicUI = buildPsychicForPublicUI(psychic, displayName);

        navigate("/call", {
          replace: true,
          state: {
            psychic: psychicForPublicUI,
            callId,
            roomId,
            initialMinutes: safeNum(clientMinutes, 0),
          },
        });
      } catch (err) {
        console.error("[DirectCallScreenWeb] init error:", err);
        window.alert(err?.message || t("directcall_error_start_call"));
        navigate(-1);
      } finally {
        setStarting(false);
        setLoading(false);
      }
    };

    init();
  }, [logout, navigate, psychic, t, token, user]);

  const name = useMemo(() => getPsychicPublicName(psychic, t), [psychic, t]);
  const avatarUrl = useMemo(
    () => resolvePhotoUrl(psychic?.photo || psychic?.avatarUrl),
    [psychic]
  );
  const initials = useMemo(() => getInitials(name), [name]);

  return (
    <AppLayoutWeb
      title={t("directcall_header_title", "Llamada")}
      showBack={true}
      backTo="/home"
      showFooter={false}
      contentStyle={styles.layoutContent}
    >
      <div style={styles.container}>
        <div style={styles.top}>
          <div style={styles.label}>{t("directcall_connecting_with")}</div>
          <div style={styles.name}>{name}</div>

          {avatarUrl ? (
            <img src={avatarUrl} alt={name} style={styles.avatar} />
          ) : (
            <div style={styles.avatarFallback}>
              <span style={styles.avatarInitials}>{initials}</span>
            </div>
          )}

          <div style={styles.hint}>
            {starting
              ? t("directcall_hint_starting")
              : loading
                ? t("directcall_hint_loading")
                : t("directcall_hint_ready")}
          </div>

          {(loading || starting) && <div style={styles.loader} />}
        </div>

        <div style={styles.bottom}>
          <button
            type="button"
            style={{
              ...styles.cancelBtn,
              ...((loading || starting) ? styles.cancelBtnSoft : {}),
            }}
            onClick={() => navigate(-1)}
          >
            {t("directcall_cancel")}
          </button>

          <div style={styles.note}>{t("directcall_note_no_answer")}</div>
        </div>
      </div>
    </AppLayoutWeb>
  );
}

const styles = {
  layoutContent: {
    padding: "76px 20px 20px",
    background: "#12021f",
    minHeight: "100vh",
  },

  container: {
    minHeight: "calc(100vh - 76px)",
    backgroundColor: "#12021f",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  top: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "24px 12px 12px",
    textAlign: "center",
  },

  label: {
    color: "#ccc",
    fontSize: "14px",
  },

  name: {
    color: "#fff",
    fontSize: "22px",
    fontWeight: 700,
    marginTop: "6px",
    lineHeight: 1.2,
  },

  hint: {
    color: "#9FA8DA",
    marginTop: "12px",
    fontWeight: 700,
    fontSize: "14px",
  },

  avatar: {
    width: "90px",
    height: "90px",
    borderRadius: "999px",
    marginTop: "16px",
    border: "2px solid #7E57C2",
    objectFit: "cover",
  },

  avatarFallback: {
    width: "90px",
    height: "90px",
    borderRadius: "999px",
    marginTop: "16px",
    backgroundColor: "#4B0082",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarInitials: {
    color: "#fff",
    fontSize: "28px",
    fontWeight: 900,
  },

  loader: {
    marginTop: "14px",
    width: "28px",
    height: "28px",
    borderRadius: "999px",
    border: "3px solid rgba(255,255,255,0.18)",
    borderTopColor: "#ffffff",
    animation: "spin 1s linear infinite",
  },

  bottom: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  cancelBtn: {
    width: "200px",
    padding: "14px 18px",
    backgroundColor: "#E53935",
    borderRadius: "999px",
    border: "none",
    color: "#fff",
    fontWeight: 700,
    fontSize: "16px",
    cursor: "pointer",
  },

  cancelBtnSoft: {
    opacity: 0.85,
  },

  note: {
    color: "#aaa",
    textAlign: "center",
    marginTop: "12px",
    fontSize: "12px",
    maxWidth: "320px",
    lineHeight: 1.45,
  },
};