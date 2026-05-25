// screens/ClientHomeWeb.jsx
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config/env.web.js";
import { useAuthWeb } from "../context/AuthContextWeb.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import AppLayoutWeb from "../components/layout/AppLayoutWeb.jsx";

const PSYCHIC_MINUTE_RATE_LABEL = "US$1.25/min";
const POST_AUTH_INTENT_KEY = "lp_post_auth_intent";

function safeNum(n, fallback = 0) {
  const x = Number(n);
  return Number.isFinite(x) ? x : fallback;
}

function computeAvailableCore(item) {
  return item?.isAvailable === true && item?.isBusy === false;
}

function computeChatAvailableCore(item) {
  return item?.isAvailable === true;
}

function getPsychicDisplayName(item) {
  return (item?.psychicName || item?.name || "Psíquico").trim();
}

function buildPsychicForPublicUI(psychic) {
  const displayName = getPsychicDisplayName(psychic);
  const legalName = typeof psychic?.name === "string" ? psychic.name : "";

  return {
    ...psychic,
    legalName,
    publicName: displayName,
    name: displayName,
  };
}

function formatRating(item) {
  return safeNum(item?.rating, 0).toFixed(2);
}

function isValidImageUri(uri) {
  if (!uri) return false;
  const u = String(uri).trim();
  if (!u) return false;
  if (u === "undefined" || u === "null" || u === "NaN") return false;
  if (u.startsWith("data:image/")) return true;
  if (u.startsWith("http://") || u.startsWith("https://")) return true;
  return false;
}

function resolvePhotoUrl(photo) {
  const value = String(photo || "").trim();
  if (!value || value === "undefined" || value === "null" || value === "NaN") return null;

  if (value.startsWith("http://") || value.startsWith("https://") || value.startsWith("data:image/")) {
    return value;
  }

  const root = String(API_BASE_URL || "").replace(/\/api$/, "").replace(/\/$/, "");
  if (!root) return null;

  if (value.startsWith("/")) return `${root}${value}`;
  return `${root}/${value}`;
}

function getInitials(name) {
  const s = String(name || "").trim();
  if (!s) return "P";
  const parts = s.split(" ").filter(Boolean);
  return parts.slice(0, 2).map((p) => p[0]).join("").toUpperCase() || "P";
}

function normalizeLanguageToken(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[.]/g, "")
    .trim();
}

function getTranslatedLanguageLabel(langCode, t, fallbackLabel) {
  try {
    const value = typeof t === "function" ? t(`languages.${langCode}`) : null;
    if (value === undefined || value === null || String(value) === "undefined") {
      return fallbackLabel || langCode;
    }
    return value;
  } catch {
    return fallbackLabel || langCode;
  }
}

function parsePsychicLanguages(raw, t) {
  const source = String(raw || "").trim();
  if (!source) return [];

  const tokens = source
    .split(/[,/;|]+|\by\b|\band\b|\be\b/gi)
    .map((s) => s.trim())
    .filter(Boolean);

  const knownMap = [
    { keys: ["espanol", "spanish", "castellano"], flag: "🇪🇸", id: "es", fallbackLabel: "Español" },
    { keys: ["ingles", "english"], flag: "🇺🇸", id: "en", fallbackLabel: "Inglés" },
    { keys: ["frances", "french", "francais"], flag: "🇫🇷", id: "fr", fallbackLabel: "Francés" },
    { keys: ["aleman", "german", "deutsch"], flag: "🇩🇪", id: "de", fallbackLabel: "Alemán" },
    { keys: ["portugues", "portuguese"], flag: "🇵🇹", id: "pt", fallbackLabel: "Portugués" },
    { keys: ["italiano", "italian"], flag: "🇮🇹", id: "it", fallbackLabel: "Italiano" },
  ];

  const seen = new Set();
  const result = [];

  tokens.forEach((token) => {
    const normalized = normalizeLanguageToken(token);
    if (!normalized) return;

    const found = knownMap.find((item) =>
      item.keys.some((k) => normalized.includes(normalizeLanguageToken(k)))
    );

    const itemId = found?.id || `raw:${normalized}`;
    if (seen.has(itemId)) return;
    seen.add(itemId);

    result.push({
      id: itemId,
      flag: found?.flag || "🌐",
      label: found?.id ? getTranslatedLanguageLabel(found.id, t, found.fallbackLabel) : token,
    });
  });

  return result;
}

function pickSnippet(item, fallback = "Psíquico disponible para atenderte.") {
  const about = typeof item?.about === "string" ? item.about.trim() : "";
  if (about) return about;

  const bio = typeof item?.bio === "string" ? item.bio.trim() : "";
  if (bio) return bio;

  return fallback;
}

function getFriendlyErrorMessage(error, t) {
  const raw = String(error?.message || "").trim().toLowerCase();

  if (raw.includes("network request failed") || raw.includes("failed to fetch") || raw.includes("network error")) {
    return typeof t === "function"
      ? t("network_error_message")
      : "No se pudo conectar con el servidor. Verifica tu conexión e inténtalo de nuevo.";
  }

  return (
    error?.message ||
    (typeof t === "function"
      ? t("generic_error_message")
      : "Ocurrió un error inesperado. Inténtalo de nuevo.")
  );
}

function slugifyPsychicName(name) {
  return String(name || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function sortPsychics(arr) {
  const data = Array.isArray(arr) ? arr : [];

  return [...data].sort((a, b) => {
    const aAvail = computeAvailableCore(a);
    const bAvail = computeAvailableCore(b);
    if (aAvail !== bAvail) return bAvail - aAvail;

    const ar = safeNum(a?.rating, 0);
    const br = safeNum(b?.rating, 0);
    if (ar !== br) return br - ar;

    const ac = safeNum(a?.callsReceived, 0);
    const bc = safeNum(b?.callsReceived, 0);
    return bc - ac;
  });
}

function setPostAuthIntent(payload) {
  try {
    localStorage.setItem(POST_AUTH_INTENT_KEY, JSON.stringify(payload));
  } catch {
    // noop
  }
}

function popPostAuthIntent() {
  try {
    const raw = localStorage.getItem(POST_AUTH_INTENT_KEY);
    if (!raw) return null;
    localStorage.removeItem(POST_AUTH_INTENT_KEY);
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export default function ClientHomeWeb() {
  const navigate = useNavigate();
  const { user, token, logout, refreshMe, isAuthenticated } = useAuthWeb();
  const { t } = useLang();

  const [psychics, setPsychics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busyAction, setBusyAction] = useState("");
  const [reviewedMap, setReviewedMap] = useState({});

  const intentProcessedRef = useRef(false);

  const tr = useCallback(
    (key, vars = {}) => {
      let base = "";
      try {
        base = String(t(key, vars));
      } catch {
        base = String(t(key));
      }

      Object.keys(vars).forEach((k) => {
        base = base.split(`{{${k}}}`).join(String(vars[k]));
      });

      return base;
    },
    [t]
  );

  const name = String(user?.name || "Cliente").trim() || "Cliente";
  const myId = user?._id || user?.id;
  const myIdStr = myId ? String(myId) : null;
  const hasSession = !!isAuthenticated || !!token || !!myIdStr;

  const greetingText = useMemo(() => {
    return hasSession ? tr("clienthome_welcome_name", { name }) : t("clienthome_welcome");
  }, [hasSession, name, t, tr]);

  const loadReviewedFlags = useCallback(
    async (list) => {
      if (!myIdStr) return;

      const ids = (Array.isArray(list) ? list : [])
        .map((p) => p?._id || p?.id)
        .filter(Boolean);

      if (!ids.length) return;

      const map = {};
      ids.forEach((pid) => {
        try {
          const key = `lp_reviewed_${String(myIdStr)}_${String(pid)}`;
          map[pid] = localStorage.getItem(key) === "1" || sessionStorage.getItem(key) === "1";
        } catch {
          map[pid] = false;
        }
      });

      setReviewedMap(map);
    },
    [myIdStr]
  );

  const loadPsychics = useCallback(
    async ({ silent = false } = {}) => {
      try {
        if (!API_BASE_URL) throw new Error(t("clienthome_error_config_body"));

        if (!silent) setLoading(true);

        const headers = {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        };

        const res = await fetch(`${API_BASE_URL}/users/psychics`, {
          method: "GET",
          headers,
        });

        const text = await res.text();
        let data;
        try {
          data = JSON.parse(text);
        } catch {
          throw new Error(t("clienthome_error_invalid_server"));
        }

        if (!res.ok) {
          throw new Error(data?.message || t("clienthome_error_load_psychics"));
        }

        if (!Array.isArray(data)) {
          throw new Error(t("clienthome_error_unexpected_format"));
        }

        const sorted = sortPsychics(data);
        setPsychics(sorted);
        await loadReviewedFlags(sorted);
      } catch (err) {
        console.error("[ClientHomeWeb] loadPsychics error:", err);
        alert(getFriendlyErrorMessage(err, t));
      } finally {
        if (!silent) setLoading(false);
      }
    },
    [token, t, loadReviewedFlags]
  );

  useEffect(() => {
    loadPsychics();
  }, [loadPsychics]);

  useEffect(() => {
    const refresh = async () => {
      try {
        if (typeof refreshMe === "function" && hasSession) {
          await refreshMe();
        }
      } catch {
        // noop
      }

      await loadPsychics({ silent: true });
    };

    const handleFocus = () => refresh();
    const handleVisibility = () => {
      if (document.visibilityState === "visible") refresh();
    };

    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [refreshMe, hasSession, loadPsychics]);

  const requireAuthOrRedirect = useCallback(
    ({ type, psychic }) => {
      if (hasSession) return true;

      const snap = psychic
        ? {
            _id: psychic?._id || psychic?.id,
            name: psychic?.psychicName || psychic?.name,
            photo: psychic?.photo && String(psychic.photo).trim() !== "" ? psychic.photo : null,
            isAvailable: psychic?.isAvailable,
            isBusy: psychic?.isBusy,
            bio: psychic?.bio,
            about: psychic?.about,
            rating: psychic?.rating,
            ratingsCount: psychic?.ratingsCount,
            callsReceived: psychic?.callsReceived,
          }
        : null;

      setPostAuthIntent({
        type,
        psychicId: psychic?._id || psychic?.id ? String(psychic?._id || psychic?.id) : null,
        psychicSnapshot: snap,
        ts: Date.now(),
      });

      navigate("/register");
      return false;
    },
    [hasSession, navigate]
  );

  const handleLogout = async () => {
    await logout();
    navigate("/home", { replace: true });
  };

  const handlePanel = async () => {
    try {
      setBusyAction("panel");
      navigate(hasSession ? "/dashboard" : "/register");
    } finally {
      setBusyAction("");
    }
  };

  const handleComments = async (psychic) => {
    const psychicId = String(psychic?._id || psychic?.id || "");
    const psychicName = getPsychicDisplayName(psychic);

    if (!psychicId) {
      alert("No se pudo abrir comentarios: falta el ID del psíquico.");
      return;
    }

    navigate("/psychic-comments", {
      state: {
        psychicId,
        psychicName,
        callId: null,
        canRate: false,
      },
    });
  };

  const handleOpenProfile = (psychic) => {
    const psychicName = getPsychicDisplayName(psychic);
    const slug = slugifyPsychicName(psychicName);

    if (!slug) return;
    navigate(`/psychic/${slug}`, {
      state: {
        psychic,
        psychicId: psychic?._id || psychic?.id || null,
      },
    });
  };

  const handleChat = useCallback(
    async (psychic) => {
      const ok = requireAuthOrRedirect({ type: "chat", psychic });
      if (!ok) return;

      const otherUserId = String(psychic?._id || psychic?.id || "");
      const otherUserName = getPsychicDisplayName(psychic);
      const otherUserAvailable = computeChatAvailableCore(psychic);

      if (!otherUserAvailable) {
        alert(t("clienthome_psychic_not_available_body"));
        return;
      }

      if (!otherUserId) {
        alert("No se pudo abrir el chat: falta el ID del psíquico.");
        return;
      }

      const psychicPhotoResolvedRaw = resolvePhotoUrl(psychic?.photo);
      const psychicPhotoResolved = isValidImageUri(psychicPhotoResolvedRaw) ? psychicPhotoResolvedRaw : null;

      try {
        localStorage.setItem(
          "lp_last_chat_psychic",
          JSON.stringify({
            psychicId: otherUserId,
            psychicName: otherUserName || "Psíquico",
            psychicPhoto: psychicPhotoResolved,
          })
        );

        if (myIdStr) {
          localStorage.setItem(
            "lp_last_chat_client",
            JSON.stringify({
              clientId: myIdStr,
              clientName: user?.name || "Cliente",
            })
          );
        }
      } catch {
        // noop
      }

      setBusyAction(`chat:${otherUserId}`);

      navigate(
        `/chat?otherUserId=${encodeURIComponent(otherUserId)}&otherUserName=${encodeURIComponent(
          otherUserName
        )}&otherUserAvailable=${encodeURIComponent(String(otherUserAvailable))}`
      );

      setBusyAction("");
    },
    [requireAuthOrRedirect, myIdStr, user?.name, navigate, t]
  );

  const handleCall = useCallback(
    async (psychic) => {
      const ok = requireAuthOrRedirect({ type: "call", psychic });
      if (!ok) return;

      const psychicId = String(psychic?._id || psychic?.id || "");
      const actionKey = `call:${psychicId}`;

      if (!psychicId) {
        alert("No se pudo iniciar la llamada: falta el ID del psíquico.");
        return;
      }

      if (!computeAvailableCore(psychic)) {
        alert(t("clienthome_psychic_not_available_body"));
        return;
      }

      try {
        setBusyAction(actionKey);

        const res = await fetch(`${API_BASE_URL}/calls/start`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify({ psychicId }),
        });

        const data = await res.json().catch(() => ({}));

        if (res.status === 401) {
          alert(t("clienthome_session_expired_body"));
          await logout();
          return;
        }

        if (res.status === 402) {
          await refreshMe?.();
          alert(data?.message || t("clienthome_no_minutes_body"));
          return;
        }

        if (!res.ok) {
          throw new Error(data?.message || t("clienthome_call_start_error"));
        }

        if (!data?.callId || !data?.roomId) {
          alert(t("clienthome_error_invalid_response"));
          return;
        }

        const psychicForPublicUI = buildPsychicForPublicUI(psychic);

        navigate("/call", {
          state: {
            callId: data.callId,
            roomId: data.roomId,
            initialMinutes: data?.clientMinutes ?? 0,
            psychic: psychicForPublicUI,
          },
        });
      } catch (err) {
        console.error("[ClientHomeWeb] handleCall error:", err);
        alert(getFriendlyErrorMessage(err, t));
      } finally {
        setBusyAction("");
      }
    },
    [requireAuthOrRedirect, token, navigate, t, logout, refreshMe]
  );

  useEffect(() => {
    if (!hasSession) return;
    if (intentProcessedRef.current) return;

    const intent = popPostAuthIntent();
    if (!intent) return;

    intentProcessedRef.current = true;

    const { type, psychicId, psychicSnapshot } = intent || {};
    if (!type || !psychicId) return;

    const found = (psychics || []).find((x) => String(x?._id || x?.id) === String(psychicId));
    const p = found || psychicSnapshot || { _id: psychicId, name: "Psíquico" };

    if (type === "chat") handleChat(p);
    if (type === "call") handleCall(p);
  }, [hasSession, psychics, handleChat, handleCall]);

  return (
    <AppLayoutWeb
      title={t("clienthome_header_title")}
      showBack={false}
      showFooter={true}
      rightSlot={
        hasSession ? (
          <button onClick={handleLogout} style={styles.headerBtn}>
            {t("clienthome_logout")}
          </button>
        ) : (
          <button onClick={() => navigate("/register")} style={styles.headerBtn}>
            {t("clienthome_register")}
          </button>
        )
      }
    >
      <div style={styles.content}>
        <div style={styles.heroBlock}>
          <h1 style={styles.greeting}>{greetingText}</h1>
          <p style={styles.subtitle}>{t("clienthome_subtitle")}</p>

          <button
            style={{
              ...styles.panelBtn,
              ...(busyAction === "panel" ? styles.panelBtnDisabled : {}),
            }}
            onClick={handlePanel}
            disabled={busyAction === "panel"}
          >
            {busyAction === "panel"
              ? "Abriendo..."
              : hasSession
                ? t("clienthome_my_panel")
                : t("clienthome_login")}
          </button>
        </div>

        {loading ? (
          <div style={styles.loadingBox}>{t("clienthome_loading_psychics")}</div>
        ) : psychics.length === 0 ? (
          <div style={styles.emptyBox}>{t("clienthome_empty")}</div>
        ) : (
          <div style={styles.listWrap}>
            {psychics.map((item) => {
              const availableCall = computeAvailableCore(item);
              const availableChat = computeChatAvailableCore(item);
              const busy = item?.isAvailable === true && item?.isBusy === true;
              const ratingStr = formatRating(item);
              const ratingsCount = safeNum(item?.ratingsCount, 0);
              const callsReceived = safeNum(item?.callsReceived, 0);
              const languageItems = parsePsychicLanguages(item?.languages, t);

              const rawResolved = resolvePhotoUrl(item?.photo);
              const photoUri = isValidImageUri(rawResolved) ? rawResolved : null;

              const initials = getInitials(getPsychicDisplayName(item));
              const actionKeyBase = String(item?._id || item?.id || getPsychicDisplayName(item));
              const already = myIdStr && reviewedMap?.[item?._id || item?.id];

              return (
                <div
                  key={actionKeyBase}
                  style={styles.card}
                  onClick={() => handleOpenProfile(item)}
                >
                  <div style={styles.cardTop}>
                    {photoUri ? (
                      <img
                        src={photoUri}
                        alt={getPsychicDisplayName(item)}
                        style={styles.photo}
                      />
                    ) : (
                      <div style={styles.photoFallback}>{initials}</div>
                    )}

                    <div style={styles.cardBody}>
                      <div style={styles.name}>{getPsychicDisplayName(item)}</div>

                      <div style={styles.stats}>
                        ⭐ {ratingStr} ({ratingsCount}) · 📞 {callsReceived}
                      </div>

                      <div style={styles.metaRow}>
                        <div style={styles.rateChip}>💲 {PSYCHIC_MINUTE_RATE_LABEL}</div>
                      </div>

                      {languageItems.length > 0 && (
                        <div style={styles.languagesWrap}>
                          {languageItems.map((langItem) => (
                            <div key={langItem.id} style={styles.languageChip}>
                              {langItem.flag} {langItem.label}
                            </div>
                          ))}
                        </div>
                      )}

                      <div
                        style={{
                          ...styles.badge,
                          ...(busy
                            ? styles.badgeOccupied
                            : availableCall
                              ? styles.badgeAvailable
                              : styles.badgeBusy),
                        }}
                      >
                        {busy
                          ? t("clienthome_psychic_busy_label")
                          : availableCall
                            ? t("clienthome_psychic_available")
                            : t("clienthome_psychic_not_available")}
                      </div>

                      {busy ? <div style={styles.occupiedPill}>{t("clienthome_busy_in_call")}</div> : null}

                      <p style={styles.bio}>{pickSnippet(item, t("clienthome_snippet_fallback"))}</p>

                      <div style={styles.actionsWrap}>
                        <button
                          style={{
                            ...styles.callBtn,
                            ...(!availableCall ? styles.callBtnDisabled : {}),
                          }}
                          disabled={!availableCall || busyAction === `call:${actionKeyBase}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCall(item);
                          }}
                        >
                          {busyAction === `call:${actionKeyBase}`
                            ? "Procesando..."
                            : availableCall
                              ? t("clienthome_call_now")
                              : busy
                                ? t("clienthome_psychic_busy_label")
                                : t("clienthome_psychic_not_available")}
                        </button>

                        <button
                          style={{
                            ...styles.chatBtn,
                            ...(!availableChat ? styles.chatBtnDisabled : {}),
                          }}
                          disabled={!availableChat || busyAction === `chat:${actionKeyBase}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleChat(item);
                          }}
                        >
                          {busyAction === `chat:${actionKeyBase}`
                            ? "Procesando..."
                            : availableChat
                              ? t("clienthome_chat")
                              : t("clienthome_psychic_not_available")}
                        </button>

                        <button
                          style={{
                            ...styles.commentsBtn,
                            ...(already ? styles.commentsBtnReviewed : {}),
                          }}
                          disabled={busyAction === `comments:${actionKeyBase}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleComments(item);
                          }}
                        >
                          {already ? t("clienthome_comments_sent") : t("clienthome_comments")}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </AppLayoutWeb>
  );
}

const styles = {
  headerBtn: {
    border: "none",
    background: "transparent",
    color: "#4A148C",
    borderRadius: "10px",
    padding: "8px 10px",
    fontWeight: 700,
    fontSize: "13px",
    cursor: "pointer",
    whiteSpace: "nowrap",
    textAlign: "right",
  },

  content: { padding: "0" },
  heroBlock: { marginBottom: "18px" },

  greeting: {
    fontSize: "24px",
    lineHeight: 1.15,
    fontWeight: 700,
    color: "#311B92",
    margin: "0 0 4px 0",
  },

  subtitle: {
    color: "#555",
    margin: "0 0 16px 0",
    fontSize: "15px",
    lineHeight: 1.45,
  },

  panelBtn: {
    width: "100%",
    background: "#FFFFFF",
    borderRadius: "12px",
    padding: "12px",
    border: "none",
    color: "#4A148C",
    fontWeight: 800,
    fontSize: "16px",
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(60, 20, 110, 0.08)",
    marginBottom: "2px",
  },

  panelBtnDisabled: {
    opacity: 0.7,
    cursor: "not-allowed",
  },

  loadingBox: {
    marginTop: "40px",
    textAlign: "center",
    color: "#555",
    fontWeight: 600,
  },

  emptyBox: {
    marginTop: "40px",
    textAlign: "center",
    color: "#777",
  },

  listWrap: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "12px",
  },

  card: {
    background: "#FFFFFF",
    borderRadius: "16px",
    padding: "12px",
    boxShadow: "0 2px 8px rgba(60, 20, 110, 0.08)",
    cursor: "pointer",
  },

  cardTop: {
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
  },

  photo: {
    width: "72px",
    height: "72px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid #7E57C2",
    flexShrink: 0,
  },

  photoFallback: {
    width: "72px",
    height: "72px",
    borderRadius: "50%",
    background: "#F3EEFF",
    color: "#4A148C",
    border: "2px solid #7E57C2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 900,
    fontSize: "18px",
    flexShrink: 0,
  },

  cardBody: {
    flex: 1,
    minWidth: 0,
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  name: {
    fontSize: "16px",
    fontWeight: 700,
    color: "#4527A0",
    marginBottom: "2px",
  },

  stats: {
    marginTop: "2px",
    color: "#444",
    fontSize: "12px",
  },

  metaRow: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "8px",
    marginBottom: "2px",
  },

  rateChip: {
    background: "#F3E5F5",
    color: "#6A1B9A",
    fontWeight: 800,
    fontSize: "12px",
    borderRadius: "999px",
    padding: "5px 10px",
    display: "inline-flex",
    alignItems: "center",
  },

  languagesWrap: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    marginTop: "8px",
  },

  languageChip: {
    background: "#F5F1FF",
    border: "1px solid #D9CCFF",
    borderRadius: "999px",
    padding: "5px 10px",
    color: "#4A148C",
    fontWeight: 700,
    fontSize: "12px",
    display: "inline-flex",
    alignItems: "center",
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    width: "fit-content",
    maxWidth: "max-content",
    marginTop: "10px",
    borderRadius: "999px",
    padding: "6px 14px",
    fontWeight: 700,
    fontSize: "12px",
    whiteSpace: "nowrap",
  },

  badgeAvailable: {
    background: "#C8E6C9",
    color: "#2E7D32",
  },

  badgeBusy: {
    background: "#FFE0B2",
    color: "#EF6C00",
  },

  badgeOccupied: {
    background: "#FFCDD2",
    color: "#C62828",
  },

  occupiedPill: {
    display: "inline-flex",
    alignSelf: "flex-start",
    marginTop: "8px",
    padding: "6px 12px",
    background: "#D32F2F",
    color: "#FFFFFF",
    borderRadius: "10px",
    fontWeight: 700,
    fontSize: "12px",
  },

  bio: {
    color: "#555",
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: "14px",
    lineHeight: 1.4,
  },

  actionsWrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "6px",
    marginTop: "4px",
  },

  callBtn: {
    alignSelf: "flex-start",
    padding: "8px 14px",
    background: "#4B6BFB",
    color: "#FFFFFF",
    borderRadius: "10px",
    border: "none",
    fontWeight: 600,
    cursor: "pointer",
    fontSize: "14px",
  },

  callBtnDisabled: {
    background: "#B0BEC5",
    cursor: "not-allowed",
  },

  chatBtn: {
    alignSelf: "flex-start",
    padding: "6px 12px",
    background: "#FFFFFF",
    color: "#4B6BFB",
    borderRadius: "10px",
    border: "1px solid #4B6BFB",
    fontWeight: 600,
    cursor: "pointer",
    fontSize: "14px",
  },

  chatBtnDisabled: {
    border: "1px solid #B0BEC5",
    color: "#90A4AE",
    cursor: "not-allowed",
    opacity: 0.55,
  },

  commentsBtn: {
    alignSelf: "flex-start",
    padding: "6px 12px",
    background: "#EDE7F6",
    color: "#4A148C",
    borderRadius: "10px",
    border: "none",
    fontWeight: 700,
    cursor: "pointer",
    fontSize: "14px",
  },

  commentsBtnReviewed: {
    opacity: 0.55,
  },
};