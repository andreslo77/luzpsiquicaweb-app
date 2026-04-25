// screens/ClientHomeWeb.jsx
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config/env.web.js";
import { useAuthWeb } from "../context/AuthContextWeb.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import AppLayoutWeb from "../components/layout/AppLayoutWeb.jsx";

const PSYCHIC_MINUTE_RATE_LABEL = "US$1.25/min";

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

function formatRating(item) {
  const r = safeNum(item?.rating, 0);
  return r.toFixed(2);
}

function normalizeLanguageToken(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[.]/g, "")
    .trim();
}

function parsePsychicLanguages(raw, t) {
  const source = String(raw || "").trim();
  if (!source) return [];

  const tokens = source
    .split(/[,/;|]+|\by\b|\band\b|\be\b/gi)
    .map((s) => s.trim())
    .filter(Boolean);

  const knownMap = [
    { keys: ["espanol", "spanish", "castellano"], flag: "🇪🇸", label: t("languages.es"), id: "es" },
    { keys: ["ingles", "english"], flag: "🇺🇸", label: t("languages.en"), id: "en" },
    { keys: ["frances", "french", "francais"], flag: "🇫🇷", label: t("languages.fr"), id: "fr" },
    { keys: ["aleman", "german", "deutsch"], flag: "🇩🇪", label: t("languages.de"), id: "de" },
    { keys: ["portugues", "portuguese"], flag: "🇵🇹", label: t("languages.pt"), id: "pt" },
    { keys: ["italiano", "italian"], flag: "🇮🇹", label: t("languages.it"), id: "it" },
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
      label: found?.label || token,
    });
  });

  return result;
}

function getInitials(name) {
  const s = String(name || "").trim();
  if (!s) return "P";
  const parts = s.split(" ").filter(Boolean);
  const ini = parts
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
  return ini || "P";
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

function pickSnippet(item, fallback = "Psíquico disponible para atenderte.") {
  const about = typeof item?.about === "string" ? item.about.trim() : "";
  if (about) return about;

  const bio = typeof item?.bio === "string" ? item.bio.trim() : "";
  if (bio) return bio;

  return fallback;
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

export default function ClientHomeWeb() {
  const navigate = useNavigate();
  const { user, token, logout, refreshMe, isAuthenticated } = useAuthWeb();
  const { t } = useLang();

  const [psychics, setPsychics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busyAction, setBusyAction] = useState("");

  const name = String(user?.name || "Cliente").trim() || "Cliente";

  const greetingText = useMemo(() => {
    return isAuthenticated
      ? t("clienthome_welcome_name", { name })
      : t("clienthome_welcome");
  }, [isAuthenticated, name, t]);

  const subtitleText = useMemo(() => {
    return t("clienthome_subtitle");
  }, [t]);

  const loadPsychics = useCallback(async () => {
    try {
      setLoading(true);

      const headers = {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      };

      const res = await fetch(`${API_BASE_URL}/users/psychics`, {
        method: "GET",
        headers,
      });

      const data = await res.json().catch(() => []);
      if (!res.ok) {
        throw new Error(data?.message || t("clienthome_error_load_psychics"));
      }

      if (!Array.isArray(data)) {
        throw new Error(t("clienthome_error_unexpected_format"));
      }

      setPsychics(sortPsychics(data));
    } catch (err) {
      console.error("[ClientHomeWeb] loadPsychics error:", err);
      alert(err?.message || t("clienthome_error_load_psychics"));
    } finally {
      setLoading(false);
    }
  }, [token, t]);

  useEffect(() => {
    loadPsychics();
  }, [loadPsychics]);

  const handleLogout = async () => {
    await logout();
    navigate("/home", { replace: true });
  };

  const handlePanel = async () => {
    try {
      setBusyAction("panel");
      navigate(isAuthenticated ? "/dashboard" : "/login");
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
    navigate(`/psychic/${slug}`);
  };

  const requireLogin = () => {
    navigate("/login");
  };

  const handleChat = async (psychic) => {
    if (!isAuthenticated) {
      requireLogin();
      return;
    }

    const otherUserId = String(psychic?._id || psychic?.id || "");
    const otherUserName = getPsychicDisplayName(psychic);
    const otherUserAvailable = computeChatAvailableCore(psychic);

    if (!otherUserId) {
      alert("No se pudo abrir el chat: falta el ID del psíquico.");
      return;
    }

    setBusyAction(`chat:${otherUserId}`);

    navigate(
      `/chat?otherUserId=${encodeURIComponent(otherUserId)}&otherUserName=${encodeURIComponent(
        otherUserName
      )}&otherUserAvailable=${encodeURIComponent(String(otherUserAvailable))}`
    );
  };

  const handleCall = async (psychic) => {
    if (!isAuthenticated) {
      requireLogin();
      return;
    }

    const psychicId = String(psychic?._id || psychic?.id || "");
    const psychicName = getPsychicDisplayName(psychic);
    const psychicPhoto = psychic?.photo || "";
    const actionKey = `call:${psychicId}`;

    if (!psychicId) {
      alert("No se pudo iniciar la llamada: falta el ID del psíquico.");
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

      if (res.status === 402) {
        await refreshMe();
        alert(data?.message || t("clienthome_no_minutes_body"));
        return;
      }

      if (!res.ok) {
        throw new Error(data?.message || t("clienthome_call_start_error"));
      }

      navigate("/call", {
        state: {
          callId: data?.callId,
          roomId: data?.roomId,
          initialMinutes: data?.clientMinutes ?? 0,
          psychic: {
            _id: psychicId,
            name: psychicName,
            psychicName: psychic?.psychicName || psychicName,
            photo: psychicPhoto,
          },
        },
      });
    } catch (err) {
      console.error("[ClientHomeWeb] handleCall error:", err);
      alert(err?.message || t("clienthome_call_start_error"));
    } finally {
      setBusyAction("");
    }
  };

  return (
    <AppLayoutWeb
      title={t("clienthome_header_title")}
      showBack={false}
      showFooter={true}
      rightSlot={
        isAuthenticated ? (
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

          <p style={styles.subtitle}>{subtitleText}</p>

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
              : isAuthenticated
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
              const photoUri = resolvePhotoUrl(item?.photo);
              const initials = getInitials(getPsychicDisplayName(item));
              const actionKeyBase = String(item?._id || item?.id || getPsychicDisplayName(item));

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

                      {busy ? (
                        <div style={styles.occupiedPill}>
                          {t("clienthome_busy_in_call")}
                        </div>
                      ) : null}

                      <p style={styles.bio}>
                        {pickSnippet(item, t("clienthome_snippet_fallback"))}
                      </p>

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
                          style={styles.commentsBtn}
                          disabled={busyAction === `comments:${actionKeyBase}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleComments(item);
                          }}
                        >
                          {t("clienthome_comments")}
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

  content: {
    padding: "0",
  },

  heroBlock: {
    marginBottom: "18px",
  },

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
};