// screens/AgoraCallScreenWeb.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
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

function buildRootUrl() {
  if (!API_URL) return "";
  return API_URL.replace(/\/api$/, "");
}

export default function AgoraCallScreenWeb() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, token } = useAuthWeb();
  const { t } = useLang();

  const state = location.state || {};
  const psychic = state?.psychic || null;
  const roomId = state?.roomId || null;
  const callId = state?.callId || null;
  const initialMinutes = Number(state?.initialMinutes || 0);

  const socketRef = useRef(null);
  const pollRef = useRef(null);
  const closingRef = useRef(false);

  const [socketStatus, setSocketStatus] = useState(t("agora_socket_connecting") || "Conectando…");
  const [lastStatus, setLastStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const name = useMemo(() => {
    return (
      psychic?.psychicName ||
      psychic?.name ||
      psychic?.publicName ||
      t("psychic_fallback_name") ||
      "Psíquico"
    );
  }, [psychic, t]);

  const closeCallUI = (payload = {}) => {
    if (closingRef.current) return;
    closingRef.current = true;

    const status = payload?.status || "finished";

    let msg = t("call_end_default") || "La llamada finalizó.";
    if (status === "missed") msg = t("call_end_missed") || "La llamada fue rechazada/perdida.";
    if (status === "cancelled") {
      msg = t("call_end_cancelled") || "La llamada fue cancelada (sin cobro).";
    }
    if (status === "caller_hungup") {
      msg = t("call_end_caller_hungup") || "El cliente colgó la llamada.";
    }

    window.alert(msg);
    navigate(-1);
  };

  useEffect(() => {
    if (!API_URL) {
      window.alert(t("cfg_error_body") || "No se ha configurado EXPO_PUBLIC_API_URL.");
      navigate(-1);
      return;
    }

    if (!callId) {
      window.alert(t("error_no_callid") || "No se recibió callId.");
      navigate(-1);
      return;
    }

    if (!user?._id && !user?.id) {
      window.alert(
        t("session_expired_body") || "No se encontró el usuario autenticado."
      );
      navigate(-1);
      return;
    }

    const uid = String(user?._id || user?.id);
    const rootUrl = buildRootUrl();

    const socket = io(rootUrl, {
      transports: ["websocket"],
      reconnection: true,
      reconnectionAttempts: 8,
      reconnectionDelay: 800,
    });

    socketRef.current = socket;

    socket.on("connect", () => {
      setSocketStatus(t("agora_socket_connected") || "Conectado");
      try {
        socket.emit("register", uid);
      } catch {
        // noop
      }
    });

    socket.on("connect_error", () => {
      setSocketStatus(t("agora_socket_error") || "Error de conexión (socket)");
    });

    socket.on("disconnect", () => {
      setSocketStatus(t("agora_socket_disconnected") || "Desconectado");
    });

    socket.on("call_ended", (payload) => {
      if (!payload || String(payload.callId) !== String(callId)) return;
      setLastStatus(payload.status || "finished");
      closeCallUI(payload);
    });

    socket.on("caller_hungup", (payload) => {
      if (!payload || String(payload.callId) !== String(callId)) return;
      setLastStatus("caller_hungup");
      closeCallUI({ callId, status: "caller_hungup" });
    });

    socket.on("call_rejected", (payload) => {
      if (!payload || String(payload.callId) !== String(callId)) return;
      setLastStatus("missed");
      closeCallUI({ callId, status: "missed" });
    });

    return () => {
      try {
        socket.removeAllListeners();
        socket.disconnect();
      } catch {
        // noop
      }
    };
  }, [callId, navigate, t, user]);

  useEffect(() => {
    if (!API_URL || !callId) return;

    const runPoll = async () => {
      try {
        if (closingRef.current) return;
        if (!token) return;

        const res = await fetch(buildApiUrl(`/calls/status/${callId}`), {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json().catch(() => ({}));
        if (!res.ok) return;

        if (data?.callEnded === true) {
          setLastStatus(data?.status || "finished");
          closeCallUI({ callId, status: data?.status || "finished" });
        }
      } catch {
        // silencioso
      }
    };

    pollRef.current = setInterval(runPoll, 2500);
    runPoll();

    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
      pollRef.current = null;
    };
  }, [callId, token]);

  const onBackPress = () => {
    navigate(-1);
  };

  return (
    <AppLayoutWeb
      title={t("agora_title") || "Llamada (placeholder)"}
      showBack={true}
      backTo="/home"
      onBack={onBackPress}
      showFooter={false}
      contentStyle={styles.layoutContent}
    >
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>{t("agora_title") || "Llamada (placeholder)"}</h1>

          <div style={styles.infoBlock}>
            <div style={styles.textRow}>
              <span style={styles.label}>{t("agora_psychic") || "Psíquico"}:</span>{" "}
              <span style={styles.value}>{name}</span>
            </div>

            <div style={styles.textRow}>
              <span style={styles.label}>{t("agora_room") || "Sala"}:</span>{" "}
              <span style={styles.value}>{roomId || t("dash_placeholder") || "—"}</span>
            </div>

            <div style={styles.textRow}>
              <span style={styles.label}>{t("agora_call_id") || "CallId"}:</span>{" "}
              <span style={styles.value}>{callId || t("dash_placeholder") || "—"}</span>
            </div>

            <div style={styles.textRow}>
              <span style={styles.label}>
                {t("agora_initial_minutes") || "Minutos iniciales"}:
              </span>{" "}
              <span style={styles.value}>{initialMinutes}</span>
            </div>
          </div>

          <div style={styles.badgeRow}>
            <div style={styles.badge}>
              {t("agora_socket") || "Socket"}: {socketStatus}
            </div>

            {lastStatus ? (
              <div style={styles.badge}>
                {t("agora_status") || "Estado"}: {String(lastStatus)}
              </div>
            ) : null}
          </div>

          {loading ? <div style={styles.loading}>...</div> : null}

          <button type="button" onClick={onBackPress} style={styles.btn}>
            {t("agora_back") || "Volver"}
          </button>

          <p style={styles.note}>
            {t("agora_note") ||
              "* Si el cliente cuelga o el psíquico rechaza, esta pantalla debe cerrarse automáticamente (socket + polling)."}
          </p>
        </div>
      </div>
    </AppLayoutWeb>
  );
}

const PRIMARY = "#4A148C";
const LIGHT_BG = "#F3E5F5";

const styles = {
  layoutContent: {
    padding: "76px 20px 20px",
    background: LIGHT_BG,
    minHeight: "100vh",
  },

  container: {
    minHeight: "calc(100vh - 76px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: LIGHT_BG,
  },

  card: {
    width: "100%",
    maxWidth: "560px",
    backgroundColor: "#FFFFFF",
    borderRadius: "20px",
    padding: "24px",
    boxShadow: "0 4px 18px rgba(74, 20, 140, 0.10)",
  },

  title: {
    fontSize: "22px",
    fontWeight: 800,
    color: PRIMARY,
    margin: "0 0 18px 0",
    textAlign: "center",
    lineHeight: 1.2,
  },

  infoBlock: {
    marginBottom: "18px",
  },

  textRow: {
    marginBottom: "10px",
    fontSize: "15px",
    color: "#333",
    lineHeight: 1.45,
    wordBreak: "break-word",
  },

  label: {
    fontWeight: 700,
    color: PRIMARY,
  },

  value: {
    color: "#333",
  },

  badgeRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "center",
    marginTop: "8px",
    marginBottom: "18px",
  },

  badge: {
    backgroundColor: "#fff",
    borderRadius: "999px",
    padding: "8px 14px",
    border: "1px solid #E1BEE7",
    color: PRIMARY,
    fontWeight: 700,
    fontSize: "13px",
  },

  loading: {
    marginTop: "10px",
    marginBottom: "6px",
    textAlign: "center",
    color: PRIMARY,
    fontWeight: 700,
  },

  btn: {
    display: "block",
    margin: "0 auto",
    marginTop: "10px",
    padding: "12px 24px",
    backgroundColor: "#4B6BFB",
    borderRadius: "12px",
    border: "none",
    color: "#fff",
    fontWeight: 700,
    cursor: "pointer",
    fontSize: "14px",
  },

  note: {
    marginTop: "16px",
    textAlign: "center",
    color: "#666",
    fontSize: "12px",
    lineHeight: 1.5,
    maxWidth: "420px",
    marginInline: "auto",
  },
};