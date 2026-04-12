import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AgoraRTC from "agora-rtc-sdk-ng";
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

function buildAgoraUrl(path) {
  const root = buildRootUrl().replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${root}${p}`;
}

function getPsychicPublicName(psychic) {
  const pub = typeof psychic?.publicName === "string" ? psychic.publicName.trim() : "";
  if (pub) return pub;

  const alias = typeof psychic?.psychicName === "string" ? psychic.psychicName.trim() : "";
  if (alias) return alias;

  const nm = typeof psychic?.name === "string" ? psychic.name.trim() : "";
  if (nm) return nm;

  return "Psíquico";
}

function formatTime(total) {
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function safePhotoUrl(photo) {
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

export default function WebCallScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  const { token, user, refreshMe } = useAuthWeb();
  const { t } = useLang();

  const state = location.state || {};

  const psychic = state?.psychic || null;
  const callId = state?.callId || null;
  const roomId = state?.roomId || null;
  const initialMinutes = Number(state?.initialMinutes || 0);

  const name = useMemo(() => getPsychicPublicName(psychic), [psychic]);
  const avatarUrl = useMemo(() => safePhotoUrl(psychic?.photo), [psychic?.photo]);

  const [seconds, setSeconds] = useState(0);
  const [secondsBilled, setSecondsBilled] = useState(0);
  const [remainingMinutes, setRemainingMinutes] = useState(initialMinutes);
  const [running, setRunning] = useState(true);

  const [joined, setJoined] = useState(false);
  const [remoteJoined, setRemoteJoined] = useState(false);
  const [agoraError, setAgoraError] = useState("");
  const [connecting, setConnecting] = useState(true);
  const [endingCall, setEndingCall] = useState(false);

  const [showRate, setShowRate] = useState(false);
  const [stars, setStars] = useState(0);
  const [review, setReview] = useState("");
  const [sendingRate, setSendingRate] = useState(false);

  const clientRef = useRef(null);
  const localTrackRef = useRef(null);
  const heartbeatIntervalRef = useRef(null);
  const statusIntervalRef = useRef(null);
  const timerIntervalRef = useRef(null);
  const socketRef = useRef(null);

  const closingRef = useRef(false);
  const everRemoteJoinedRef = useRef(false);

  const startUiMsRef = useRef(Date.now());
  const startBilledMsRef = useRef(null);
  const billedAccumulatedMsRef = useRef(0);

  const callReady = !!token && !!callId && !!roomId;

  const cleanupAgora = useCallback(async () => {
    try {
      if (heartbeatIntervalRef.current) {
        clearInterval(heartbeatIntervalRef.current);
        heartbeatIntervalRef.current = null;
      }

      if (statusIntervalRef.current) {
        clearInterval(statusIntervalRef.current);
        statusIntervalRef.current = null;
      }

      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
        timerIntervalRef.current = null;
      }

      if (localTrackRef.current) {
        try {
          localTrackRef.current.stop();
          localTrackRef.current.close();
        } catch {
          // noop
        }
        localTrackRef.current = null;
      }

      if (clientRef.current) {
        try {
          await clientRef.current.leave();
        } catch {
          // noop
        }
        clientRef.current.removeAllListeners();
        clientRef.current = null;
      }
    } catch {
      // noop
    }
  }, []);

  const cleanupSocket = useCallback(() => {
    try {
      if (socketRef.current) {
        socketRef.current.off("call_ended");
        socketRef.current.off("call_rejected");
        socketRef.current.off("caller_hungup");
        socketRef.current.off("call_accepted");
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    } catch {
      // noop
    }
  }, []);

  const fullCleanup = useCallback(async () => {
    await cleanupAgora();
    cleanupSocket();
  }, [cleanupAgora, cleanupSocket]);

  const finalizeCallOnServer = useCallback(
    async ({ answered, endedReason, durationSeconds }) => {
      const res = await fetch(buildApiUrl("/calls/end"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          callId,
          durationSeconds,
          answered,
          endedReason,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.message || t("realcall_error_title") || "No se pudo cerrar la llamada.");
      }
      return data;
    },
    [callId, token, t]
  );

  const closeFromRemoteEvent = useCallback(
    async ({ status = "finished", message = "" } = {}) => {
      if (closingRef.current) return;

      try {
        closingRef.current = true;
        setEndingCall(true);
        setRunning(false);

        await fullCleanup();
        await refreshMe();

        const st = String(status || "").toLowerCase();

        if (st === "missed") {
          alert(
            message ||
              t("realcall_call_ended_rejected_body") ||
              "El psíquico rechazó la llamada. Intenta con otro psíquico o vuelve a intentar más tarde."
          );
          navigate("/home", { replace: true });
          return;
        }

        if (st === "cancelled") {
          navigate("/home", { replace: true });
          return;
        }

        if (everRemoteJoinedRef.current) {
          setShowRate(true);
        } else {
          navigate("/home", { replace: true });
        }
      } catch (err) {
        console.error("[WebCallScreen] closeFromRemoteEvent error:", err);
        navigate("/home", { replace: true });
      } finally {
        setEndingCall(false);
      }
    },
    [fullCleanup, navigate, refreshMe, t]
  );

  const handleHangup = useCallback(
    async (auto = false) => {
      if (!running || closingRef.current) return;

      try {
        closingRef.current = true;
        setEndingCall(true);
        setRunning(false);

        const answered = everRemoteJoinedRef.current === true;
        const endedReason = auto
          ? "minutes_exhausted"
          : answered
            ? "hangup"
            : "client_cancel_before_connect";

        const result = await finalizeCallOnServer({
          answered,
          endedReason,
          durationSeconds: secondsBilled,
        });

        try {
          if (socketRef.current) {
            socketRef.current.emit("end_call_signal", {
              callId: String(callId),
              status: result?.status || (answered ? "finished" : "cancelled"),
            });
          }
        } catch (e) {
          console.error("[WebCallScreen] end_call_signal error:", e);
        }

        await fullCleanup();
        await refreshMe();

        if (auto) {
          alert(
            t("realcall_call_ended_no_minutes") ||
              "La llamada se ha terminado porque se agotaron tus minutos."
          );
        }

        const canRate = Boolean(result?.canRate) && answered;

        if (canRate) {
          setShowRate(true);
        } else {
          navigate("/home", { replace: true });
        }
      } catch (err) {
        console.error("[WebCallScreen] handleHangup error:", err);
        await fullCleanup();
        navigate("/home", { replace: true });
      } finally {
        setEndingCall(false);
      }
    },
    [callId, finalizeCallOnServer, fullCleanup, navigate, refreshMe, running, secondsBilled, t]
  );

  const sendRating = useCallback(async () => {
    try {
      if (!stars) {
        alert(
          t("realcall_rating_pick_stars") ||
            "Selecciona una calificación (1 a 5)."
        );
        return;
      }

      setSendingRate(true);

      const res = await fetch(buildApiUrl("/calls/rate"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          callId,
          stars,
          review: String(review || "").trim().slice(0, 500),
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(
          data?.message ||
            t("realcall_rating_save_error") ||
            "No se pudo guardar la calificación"
        );
      }

      setShowRate(false);
      navigate("/home", { replace: true });
    } catch (err) {
      console.error("[WebCallScreen] sendRating error:", err);
      alert(
        err?.message ||
          t("realcall_rating_save_error") ||
          "No se pudo guardar la calificación."
      );
    } finally {
      setSendingRate(false);
    }
  }, [callId, navigate, review, stars, token, t]);

  const pollStatus = useCallback(async () => {
    try {
      const res = await fetch(buildApiUrl(`/calls/status/${callId}`), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) return;

      const status = String(data?.status || "").toLowerCase();
      const ended = Boolean(data?.callEnded);

      if (status === "missed") {
        await closeFromRemoteEvent({
          status: "missed",
          message:
            t("realcall_call_ended_rejected_body") ||
            "El psíquico rechazó la llamada o no está disponible en este momento.",
        });
        return;
      }

      if (status === "cancelled") {
        await closeFromRemoteEvent({ status: "cancelled" });
        return;
      }

      if (ended && (status === "finished" || status === "cancelled" || status === "missed")) {
        await closeFromRemoteEvent({ status });
      }
    } catch (err) {
      console.error("[WebCallScreen] pollStatus error:", err);
    }
  }, [callId, closeFromRemoteEvent, token, t]);

  const sendHeartbeat = useCallback(async () => {
    try {
      await fetch(buildApiUrl("/calls/heartbeat"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ callId }),
      });
    } catch (err) {
      console.error("[WebCallScreen] heartbeat error:", err);
    }
  }, [callId, token]);

  useEffect(() => {
    if (!callReady || !user?._id && !user?.id) return;

    const rootUrl = buildRootUrl();
    const uid = String(user?._id || user?.id || "");

    const socket = io(rootUrl, {
      transports: ["websocket", "polling"],
    });

    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("✅ SOCKET CONECTADO:", socket.id);
      socket.emit("register", uid);
    });

    socket.onAny((event, ...args) => {
      console.log("📡 EVENTO RECIBIDO:", event, args);
    });

    socket.on("call_accepted", (payload = {}) => {
      const incomingCallId = String(payload?.callId || "");
      if (incomingCallId === String(callId)) {
        setRemoteJoined(true);
        everRemoteJoinedRef.current = true;
      }
    });

    socket.on("call_ended", async (payload = {}) => {
      const incomingCallId = String(payload?.callId || "");
      if (incomingCallId !== String(callId)) return;

      await closeFromRemoteEvent({ status: payload?.status || "finished" });
    });

    socket.on("call_rejected", async (payload = {}) => {
      const incomingCallId = String(payload?.callId || "");
      if (incomingCallId !== String(callId)) return;

      await closeFromRemoteEvent({
        status: "missed",
        message:
          payload?.reason ||
          t("realcall_call_ended_rejected_body") ||
          "El psíquico rechazó la llamada.",
      });
    });

    socket.on("caller_hungup", async (payload = {}) => {
      const incomingCallId = String(payload?.callId || "");
      if (incomingCallId !== String(callId)) return;

      await closeFromRemoteEvent({ status: "cancelled" });
    });

    return () => {
      cleanupSocket();
    };
  }, [callId, callReady, cleanupSocket, closeFromRemoteEvent, user, t]);

  useEffect(() => {
    if (!callReady) return;

    let cancelled = false;

    const setupAgora = async () => {
      try {
        setConnecting(true);
        setAgoraError("");

        const tokenRes = await fetch(buildApiUrl("/agora/token"), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ callId }),
        });

        const tokenData = await tokenRes.json().catch(() => ({}));
        if (!tokenRes.ok) {
          throw new Error(tokenData?.message || t("realcall_audio_error_prefix") || "No se pudo obtener el token de Agora.");
        }

        const { appId, channelName, uid, token: agoraToken } = tokenData;
        if (!appId || !channelName || !agoraToken) {
          throw new Error(t("realcall_audio_error_prefix") || "Token de Agora incompleto.");
        }

        if (cancelled) return;

        const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
        clientRef.current = client;

        client.on("user-published", async (remoteUser, mediaType) => {
          try {
            await client.subscribe(remoteUser, mediaType);

            if (mediaType === "audio" && remoteUser.audioTrack) {
              remoteUser.audioTrack.play();
              setRemoteJoined(true);
              everRemoteJoinedRef.current = true;
            }
          } catch (err) {
            console.error("[WebCallScreen] user-published error:", err);
          }
        });

        client.on("user-unpublished", () => {
          setRemoteJoined(false);
        });

        client.on("user-left", () => {
          setRemoteJoined(false);
        });

        await client.join(appId, channelName, agoraToken, uid);

        const localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
        localTrackRef.current = localAudioTrack;

        await client.publish([localAudioTrack]);

        if (cancelled) return;

        setJoined(true);
        setConnecting(false);

        heartbeatIntervalRef.current = setInterval(sendHeartbeat, 15000);
        statusIntervalRef.current = setInterval(pollStatus, 3000);
      } catch (err) {
        console.error("[WebCallScreen] setupAgora error:", err);
        setConnecting(false);
        setAgoraError(err?.message || (t("realcall_audio_error_prefix") || "Error conectando audio."));
      }
    };

    setupAgora();

    return () => {
      cancelled = true;
    };
  }, [callId, callReady, pollStatus, sendHeartbeat, token, t]);

  useEffect(() => {
    if (!running) return;

    startUiMsRef.current = Date.now();
    billedAccumulatedMsRef.current = 0;
    startBilledMsRef.current = null;

    setSeconds(0);
    setSecondsBilled(0);
    setRemainingMinutes(initialMinutes);

    timerIntervalRef.current = setInterval(() => {
      const now = Date.now();

      const uiElapsedSec = Math.floor((now - startUiMsRef.current) / 1000);
      setSeconds(uiElapsedSec);

      if (remoteJoined) {
        if (!startBilledMsRef.current) startBilledMsRef.current = now;

        const billedMs = billedAccumulatedMsRef.current + (now - startBilledMsRef.current);
        const billedSec = Math.floor(billedMs / 1000);

        setSecondsBilled(billedSec);

        const minutesUsed = Math.floor(billedSec / 60);
        const remaining = Math.max(0, Number(initialMinutes || 0) - minutesUsed);
        setRemainingMinutes(remaining);

        if (remaining <= 0 && !closingRef.current) {
          handleHangup(true);
        }
      } else {
        setRemainingMinutes(Number(initialMinutes || 0));
      }
    }, 1000);

    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
        timerIntervalRef.current = null;
      }
    };
  }, [handleHangup, initialMinutes, remoteJoined, running]);

  useEffect(() => {
    return () => {
      fullCleanup();
    };
  }, [fullCleanup]);

  const audioStatus = useMemo(() => {
    if (agoraError) {
      return `${t("realcall_audio_error_prefix") || "Error de audio:"} ${agoraError}`;
    }
    if (connecting) return t("realcall_audio_connecting") || "Conectando audio…";
    if (!joined) return t("realcall_audio_connecting") || "Preparando llamada…";
    if (joined && !remoteJoined) {
      return t("realcall_audio_waiting_psychic") || "Audio conectado. Esperando al psíquico…";
    }
    return t("realcall_audio_connected_psychic") || "Audio conectado con el psíquico.";
  }, [agoraError, connecting, joined, remoteJoined, t]);

  const rightSlot = (
    <div style={styles.headerRoomBox}>
      <div style={styles.headerRoomLabel}>
        {t("realcall_room_label") || "Sala:"}
      </div>
      <div style={styles.headerRoomValue}>{roomId || "—"}</div>
    </div>
  );

  if (!callReady) {
    return (
      <AppLayoutWeb
        title={t("realcall_call_title") || "Llamada de audio"}
        showBack={true}
        backTo="/home"
      >
        <div style={styles.content}>
          <div style={styles.centerCard}>
            <h2 style={styles.centerTitle}>{t("realcall_call_title") || "Llamada no disponible"}</h2>
            <p style={styles.centerText}>
              {t("realcall_error_title") || "Faltan datos para abrir la llamada. Regresa al inicio e intenta de nuevo."}
            </p>
            <button style={styles.backBtnSoft} onClick={() => navigate("/home")}>
              {t("realcall_back") || "← Volver"}
            </button>
          </div>
        </div>
      </AppLayoutWeb>
    );
  }

  return (
    <AppLayoutWeb
      title={t("realcall_call_title") || "Llamada de audio"}
      showBack={true}
      backTo="/home"
      onBack={() => handleHangup(false)}
      rightSlot={rightSlot}
    >
      <div style={styles.content}>
        <div style={styles.topInfoCard}>
          <div style={styles.psychicName}>{name}</div>
          <div style={styles.psychicExt}>
            {t("realcall_call_title") || "Consulta de voz en curso"}
          </div>
        </div>

        <div style={styles.infoCard}>
          {avatarUrl ? (
            <img src={avatarUrl} alt={name} style={styles.avatar} />
          ) : (
            <div style={styles.avatarFallback}>
              {name
                .split(" ")
                .map((w) => w[0])
                .join("")
                .toUpperCase()
                .slice(0, 2)}
            </div>
          )}

          <div style={styles.infoTextContainer}>
            <div style={styles.infoName}>{name}</div>
            <div style={styles.infoRole}>
              {t("realcall_psychic_role_brand") || "Psíquico · Luz Psíquica"}
            </div>
            <div style={styles.infoStatus}>{audioStatus}</div>

            <div style={styles.timerBox}>
              <div style={styles.timerLine}>
                {t("realcall_time_label") || "Tiempo:"}{" "}
                <span style={styles.timerStrong}>{formatTime(seconds)}</span>
              </div>

              <div style={styles.timerLine}>
                {t("realcall_remaining_minutes_label") || "Minutos restantes:"}{" "}
                <span style={styles.timerStrong}>{Number(remainingMinutes).toFixed(2)}</span>
              </div>

              {!remoteJoined && (
                <div style={styles.helperText}>
                  {t("realcall_billing_starts_note") || "* El cobro inicia cuando el psíquico contesta."}
                </div>
              )}
            </div>
          </div>
        </div>

        <div style={styles.footer}>
          <button
            style={{ ...styles.hangupButton, ...(endingCall ? styles.disabledBtn : {}) }}
            onClick={() => handleHangup(false)}
            disabled={endingCall}
          >
            {endingCall ? (t("realcall_sending") || "Cerrando…") : (t("realcall_hangup") || "Colgar")}
          </button>
        </div>

        {showRate && (
          <div style={styles.rateOverlay}>
            <div style={styles.rateCard}>
              <div style={styles.rateTitle}>
                {t("realcall_rate_title") || "Califica tu consulta"}
              </div>
              <div style={styles.rateSub}>
                {(t("realcall_rate_subtitle") || "¿Cómo fue tu experiencia con {name}?").replace(
                  "{name}",
                  name
                )}
              </div>

              <div style={styles.starsRow}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    style={{
                      ...styles.starBtn,
                      ...(n <= stars ? styles.starBtnActive : {}),
                    }}
                    onClick={() => setStars(n)}
                    disabled={sendingRate}
                  >
                    ★
                  </button>
                ))}
              </div>

              <div style={styles.reviewLabel}>
                {t("realcall_review_label") || "Comentario (opcional)"}
              </div>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder={t("realcall_review_placeholder") || "Escribe un comentario breve…"}
                style={styles.reviewInput}
                maxLength={500}
                disabled={sendingRate}
              />
              <div style={styles.reviewCounter}>{String(review || "").length}/500</div>

              <div style={styles.rateActions}>
                <button
                  style={styles.rateSkipBtn}
                  onClick={() => {
                    setShowRate(false);
                    navigate("/home", { replace: true });
                  }}
                  disabled={sendingRate}
                >
                  {t("realcall_skip") || "Omitir"}
                </button>

                <button
                  style={styles.rateSendBtn}
                  onClick={sendRating}
                  disabled={sendingRate}
                >
                  {sendingRate
                    ? t("realcall_sending") || "Enviando…"
                    : t("realcall_send") || "Enviar"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppLayoutWeb>
  );
}

const PRIMARY = "#311B92";
const LIGHT_BG = "#EDE7F6";
const SURFACE = "#FFFFFF";
const DANGER = "#E53935";

const styles = {
  content: {
    padding: "0",
  },

  centerCard: {
    background: SURFACE,
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(60, 20, 110, 0.08)",
    textAlign: "center",
    marginTop: "20px",
  },

  centerTitle: {
    margin: "0 0 10px 0",
    color: "#4A148C",
    fontSize: "18px",
    fontWeight: 700,
  },

  centerText: {
    margin: "0 0 16px 0",
    color: "#666",
    fontSize: "14px",
    lineHeight: 1.45,
  },

  topInfoCard: {
    background: SURFACE,
    borderRadius: "16px",
    padding: "16px",
    marginBottom: "12px",
    boxShadow: "0 2px 8px rgba(60, 20, 110, 0.08)",
  },

  headerRoomBox: {
    background: "#F3E5F5",
    borderRadius: "12px",
    padding: "8px 10px",
    minWidth: "70px",
    textAlign: "center",
    flexShrink: 0,
  },

  headerRoomLabel: {
    color: "#6A1B9A",
    fontSize: "11px",
    fontWeight: 700,
    marginBottom: "3px",
  },

  headerRoomValue: {
    color: "#4A148C",
    fontSize: "12px",
    fontWeight: 800,
    lineHeight: 1,
    whiteSpace: "nowrap",
  },

  backBtnSoft: {
    padding: "10px 12px",
    borderRadius: "10px",
    background: "#FFFFFF",
    color: "#4A148C",
    fontWeight: 700,
    border: "1px solid #D9CCFF",
    cursor: "pointer",
    minWidth: "86px",
    fontSize: "13px",
    flexShrink: 0,
  },

  disabledBtn: {
    opacity: 0.6,
    cursor: "not-allowed",
  },

  psychicName: {
    color: PRIMARY,
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: 1.15,
  },

  psychicExt: {
    color: "#777",
    fontSize: "13px",
    marginTop: "4px",
  },

  infoCard: {
    background: SURFACE,
    borderRadius: "16px",
    padding: "16px",
    boxShadow: "0 2px 8px rgba(60, 20, 110, 0.08)",
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
  },

  avatar: {
    width: "72px",
    height: "72px",
    borderRadius: "50%",
    objectFit: "cover",
    flexShrink: 0,
    border: "2px solid #7E57C2",
  },

  avatarFallback: {
    width: "72px",
    height: "72px",
    borderRadius: "50%",
    background: "#F3EEFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: PRIMARY,
    fontWeight: 800,
    fontSize: "18px",
    flexShrink: 0,
    border: "2px solid #7E57C2",
  },

  infoTextContainer: {
    flex: 1,
    minWidth: 0,
  },

  infoName: {
    fontSize: "18px",
    fontWeight: 700,
    color: "#4527A0",
    lineHeight: 1.2,
  },

  infoRole: {
    fontSize: "13px",
    color: "#666",
    marginTop: "3px",
  },

  infoStatus: {
    fontSize: "13px",
    color: PRIMARY,
    marginTop: "8px",
    fontWeight: 700,
    lineHeight: 1.35,
  },

  timerBox: {
    marginTop: "12px",
    background: "#F8F5FF",
    borderRadius: "12px",
    padding: "12px",
    border: "1px solid #E6DAFF",
  },

  timerLine: {
    fontSize: "14px",
    color: "#444",
    marginBottom: "6px",
    lineHeight: 1.4,
  },

  timerStrong: {
    fontWeight: 800,
    color: PRIMARY,
  },

  helperText: {
    marginTop: "6px",
    color: "#777",
    fontSize: "12px",
    lineHeight: 1.35,
  },

  footer: {
    paddingTop: "16px",
    display: "flex",
    justifyContent: "center",
  },

  hangupButton: {
    width: "100%",
    background: DANGER,
    borderRadius: "12px",
    padding: "12px 16px",
    color: "#FFF",
    fontSize: "14px",
    fontWeight: 700,
    border: "none",
    cursor: "pointer",
  },

  rateOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.35)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "18px",
    zIndex: 100,
  },

  rateCard: {
    width: "100%",
    maxWidth: "430px",
    background: "#fff",
    borderRadius: "16px",
    padding: "18px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
  },

  rateTitle: {
    fontSize: "18px",
    fontWeight: 800,
    color: PRIMARY,
    lineHeight: 1.2,
  },

  rateSub: {
    color: "#555",
    marginTop: "6px",
    fontSize: "14px",
    lineHeight: 1.4,
  },

  starsRow: {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    marginTop: "14px",
  },

  starBtn: {
    border: "none",
    background: "transparent",
    fontSize: "34px",
    lineHeight: 1,
    cursor: "pointer",
    opacity: 0.28,
    color: PRIMARY,
  },

  starBtnActive: {
    opacity: 1,
  },

  reviewLabel: {
    marginTop: "14px",
    fontWeight: 700,
    color: "#333",
    fontSize: "14px",
  },

  reviewInput: {
    marginTop: "8px",
    width: "100%",
    boxSizing: "border-box",
    border: "1px solid #DDD5E8",
    borderRadius: "12px",
    padding: "12px",
    minHeight: "100px",
    color: "#111",
    background: "#FAFAFA",
    resize: "vertical",
    fontFamily: "inherit",
    fontSize: "14px",
    lineHeight: 1.4,
  },

  reviewCounter: {
    marginTop: "6px",
    textAlign: "right",
    color: "#666",
    fontSize: "12px",
  },

  rateActions: {
    display: "flex",
    gap: "10px",
    marginTop: "16px",
  },

  rateSkipBtn: {
    flex: 1,
    borderRadius: "12px",
    border: "1px solid #CCC",
    padding: "12px",
    background: "#fff",
    fontWeight: 700,
    color: "#444",
    cursor: "pointer",
    fontSize: "14px",
  },

  rateSendBtn: {
    flex: 1,
    borderRadius: "12px",
    border: "none",
    padding: "12px",
    background: "#4B6BFB",
    fontWeight: 700,
    color: "#fff",
    cursor: "pointer",
    fontSize: "14px",
  },
};