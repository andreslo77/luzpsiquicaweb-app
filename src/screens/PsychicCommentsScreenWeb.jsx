import React, { useEffect, useState, useCallback, useMemo } from "react";
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

function buildRootUrl() {
  if (!API_URL) return "";
  return API_URL.replace(/\/api$/, "");
}

function resolvePhotoUrl(value) {
  const v = String(value || "").trim();
  if (!v || v === "undefined" || v === "null") return null;

  if (
    v.startsWith("http://") ||
    v.startsWith("https://") ||
    v.startsWith("data:image/")
  ) {
    return v;
  }

  const root = buildRootUrl();
  if (!root) return null;

  if (v.startsWith("/")) return `${root}${v}`;
  return `${root}/${v}`;
}

// =======================
// localStorage helpers (web)
// =======================
function lsGet(key) {
  try {
    if (typeof window === "undefined") return null;
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function lsSet(key, value) {
  try {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(key, value);
  } catch {
    // noop
  }
}

// =======================
// Utils
// =======================
function shortId(id) {
  if (!id) return "";
  const s = String(id);
  return s.length > 8 ? `${s.slice(0, 4)}…${s.slice(-4)}` : s;
}

function Stars({ value }) {
  const v = Math.max(0, Math.min(5, Number(value || 0)));
  const full = "★".repeat(Math.round(v));
  const empty = "☆".repeat(5 - Math.round(v));
  return <span style={styles.stars}>{`${full}${empty}`}</span>;
}

function StarsPicker({ value, onChange }) {
  const v = Math.max(1, Math.min(5, Number(value || 5)));
  return (
    <div style={styles.starsPickerRow}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          style={styles.starPickBtn}
          onClick={() => onChange(n)}
        >
          <span
            style={{
              ...styles.starPickTxt,
              ...(n <= v ? styles.starPickOn : styles.starPickOff),
            }}
          >
            ★
          </span>
        </button>
      ))}
    </div>
  );
}

export default function PsychicCommentsScreenWeb() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLang();
  const { token: authToken } = useAuthWeb();

  const tr = useCallback(
    (key, vars = {}) => {
      let s = String(t(key));
      Object.keys(vars).forEach((k) => {
        s = s.replaceAll(`{{${k}}}`, String(vars[k]));
      });
      return s;
    },
    [t]
  );

  const query = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const state = location.state || {};

  const psychicId =
    state.psychicId ||
    query.get("psychicId") ||
    "";

  const psychicName =
    state.psychicName ||
    query.get("psychicName") ||
    "";

  const callId =
    state.callId ||
    query.get("callId") ||
    null;

  const canRateRaw =
    state.canRate ??
    query.get("canRate") ??
    false;

  const canRate =
    canRateRaw === true ||
    String(canRateRaw).toLowerCase() === "true" ||
    String(canRateRaw) === "1";

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [me, setMe] = useState(null);
  const [stars, setStars] = useState(5);
  const [comment, setComment] = useState("");
  const [sending, setSending] = useState(false);

  const reviewedKey = useMemo(() => {
    const myId = me?.id || me?._id;
    if (!myId || !psychicId) return null;
    return `lp_reviewed_${String(myId)}_${String(psychicId)}`;
  }, [me, psychicId]);

  // =======================
  // Load "me"
  // =======================
  const loadMe = useCallback(async () => {
    try {
      const meStr = lsGet("me");
      if (!meStr) return;
      const parsed = JSON.parse(meStr);
      setMe(parsed);
    } catch {
      // noop
    }
  }, []);

  // =======================
  // Load comments
  // =======================
  const load = useCallback(async () => {
    try {
      if (!API_URL) throw new Error(t("psych_comments_err_no_api_url"));
      if (!psychicId) throw new Error(t("psych_comments_err_no_psychic_id"));

      setLoading(true);

      const token = authToken || lsGet("auth_token");
      const url = buildApiUrl(`/users/psychics/${psychicId}/reviews`);

      const res = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });

      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(json?.message || t("psych_comments_err_load_comments"));
      }

      setData(json);
    } catch (e) {
      window.alert(e?.message || t("psych_comments_err_load_comments"));
    } finally {
      setLoading(false);
    }
  }, [psychicId, authToken, t]);

  useEffect(() => {
    loadMe();
    load();
  }, [loadMe, load]);

  const reviews = Array.isArray(data?.reviews) ? data.reviews : [];

  const hasTextReviewForPsychic = useMemo(() => {
    const myId = me?.id || me?._id;
    if (!myId) return false;
    return reviews.some(
      (r) => String(r?.user) === String(myId) && String(r?.comment || "").trim().length > 0
    );
  }, [reviews, me]);

  useEffect(() => {
    if (hasTextReviewForPsychic && reviewedKey) {
      lsSet(reviewedKey, "1");
    }
  }, [hasTextReviewForPsychic, reviewedKey]);

  const headerPhotoUrl = useMemo(() => {
    const candidate =
      (data?.photoUrl && String(data.photoUrl).trim() !== "" ? data.photoUrl : null) ||
      (data?.photo && String(data.photo).trim() !== "" ? data.photo : null);

    const fromData = resolvePhotoUrl(candidate);
    if (fromData) return fromData;
    return null;
  }, [data?.photo, data?.photoUrl]);

  const submitReview = useCallback(async () => {
    try {
      if (!API_URL) throw new Error(t("psych_comments_err_no_api_url"));
      if (!psychicId) throw new Error(t("psych_comments_err_no_psychic_id"));

      if (!callId || !canRate) {
        window.alert(
          `${t("psych_comments_not_available_title")}\n\n${t("psych_comments_not_available_body")}`
        );
        return;
      }

      const token = authToken || lsGet("auth_token");
      if (!token) {
        window.alert(
          `${t("psych_comments_session_expired_title")}\n\n${t("psych_comments_session_expired_body")}`
        );
        return;
      }

      const s = Math.max(1, Math.min(5, Number(stars || 5)));
      const text = String(comment || "").trim();
      const reviewToSend = hasTextReviewForPsychic ? "" : text;

      setSending(true);

      const url = buildApiUrl("/calls/rate");

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          callId: String(callId),
          stars: s,
          review: reviewToSend,
        }),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(
          json?.message || `${t("psych_comments_err_save_rating")} (HTTP ${res.status})`
        );
      }

      if (reviewedKey && (json?.reviewAccepted || hasTextReviewForPsychic)) {
        lsSet(reviewedKey, "1");
      }

      setComment("");
      setStars(5);

      const msg = json?.reviewIgnored
        ? t("psych_comments_saved_only_rating")
        : t("psych_comments_saved");

      window.alert(`${t("psych_comments_saved_title")}\n\n${msg}`);

      await load();
    } catch (e) {
      window.alert(e?.message || t("psych_comments_err_save_rating"));
    } finally {
      setSending(false);
    }
  }, [psychicId, callId, canRate, authToken, stars, comment, hasTextReviewForPsychic, reviewedKey, load, t]);

  const canRateThisConsultation = Boolean(callId && canRate);

  const screenTitle = tr("psych_comments_nav_title_with_name", {
    name: psychicName || t("psych_comments_psychic_fallback"),
  });

  return (
    <AppLayoutWeb
      title={screenTitle}
      showBack={true}
      backTo={location.key ? undefined : "/home"}
    >
      <div style={styles.container}>
        {loading ? (
          <div style={styles.center}>
            <div style={styles.spinner} />
            <div style={styles.loadingText}>{t("psych_comments_loading_fallback")}</div>
          </div>
        ) : (
          <>
            <div style={styles.header}>
              {headerPhotoUrl ? (
                <img
                  src={headerPhotoUrl}
                  alt={data?.name || psychicName || t("psych_comments_psychic_fallback")}
                  style={styles.avatar}
                />
              ) : (
                <div style={styles.avatarPh} />
              )}

              <div style={{ flex: 1 }}>
                <div style={styles.title}>
                  {data?.name || psychicName || t("psych_comments_psychic_fallback")}
                </div>
                <div style={styles.sub}>
                  ⭐ {(Number(data?.rating || 0)).toFixed(2)} ({data?.ratingsCount || 0})
                </div>
              </div>
            </div>

            {!canRateThisConsultation ? (
              <div style={styles.infoCard}>
                <div style={styles.infoText}>
                  {t("psych_comments_info_line1_a")}
                  <span style={styles.infoStrong}>{t("psych_comments_info_line1_strong")}</span>
                  {t("psych_comments_info_line1_b")}
                </div>

                <div style={styles.infoText}>
                  {t("psych_comments_info_line2_a")}
                  <span style={styles.infoStrong}>{t("psych_comments_info_line2_strong")}</span>
                  {t("psych_comments_info_line2_b")}
                </div>

                <div style={styles.infoText}>
                  {t("psych_comments_info_line3_a")}
                  <span style={styles.infoStrong}>{t("psych_comments_info_line3_strong1")}</span>
                  {t("psych_comments_info_line3_b")}
                  <span style={styles.infoStrong}>{t("psych_comments_info_line3_strong2")}</span>
                  {t("psych_comments_info_line3_c")}
                </div>
              </div>
            ) : (
              <div style={styles.formCard}>
                <div style={styles.formTitle}>{t("psych_comments_form_title")}</div>

                <div style={styles.formLabel}>{t("psych_comments_form_label_rating")}</div>
                <StarsPicker value={stars} onChange={setStars} />

                <div style={styles.formLabel}>{t("psych_comments_form_label_comment")}</div>

                {hasTextReviewForPsychic ? (
                  <div style={styles.lockedText}>{t("psych_comments_locked_text")}</div>
                ) : (
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder={t("psych_comments_input_placeholder")}
                    maxLength={400}
                    style={styles.input}
                  />
                )}

                <button
                  type="button"
                  style={{ ...styles.submitBtn, ...(sending ? styles.submitBtnDisabled : {}) }}
                  disabled={sending}
                  onClick={submitReview}
                >
                  {sending ? t("psych_comments_saving") : t("psych_comments_save_button")}
                </button>
              </div>
            )}

            {reviews.length === 0 ? (
              <div style={styles.empty}>{t("psych_comments_empty")}</div>
            ) : (
              <div style={styles.list}>
                {reviews.map((item, idx) => (
                  <div key={`${item?.user || "u"}-${idx}`} style={styles.card}>
                    <div style={styles.row}>
                      <div style={styles.user}>
                        {t("psych_comments_client_prefix")}: {shortId(item?.user)}
                      </div>
                      <Stars value={item?.stars} />
                    </div>
                    <div style={styles.comment}>
                      {item?.comment || t("psych_comments_dash")}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </AppLayoutWeb>
  );
}

const styles = {
  container: {
    minHeight: "100%",
    background: "#F4E8FF",
    padding: "0",
  },

  center: {
    minHeight: "50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  spinner: {
    width: "34px",
    height: "34px",
    border: "4px solid #E1D6FF",
    borderTop: "4px solid #7C4DFF",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },

  loadingText: {
    marginTop: "10px",
    color: "#5E5A75",
    fontWeight: 700,
  },

  header: {
    display: "flex",
    flexDirection: "row",
    background: "#FFFFFF",
    borderRadius: "16px",
    padding: "12px",
    marginBottom: "12px",
    boxShadow: "0 2px 8px rgba(60, 20, 110, 0.08)",
    alignItems: "center",
    gap: "10px",
  },

  avatar: {
    width: "52px",
    height: "52px",
    borderRadius: "26px",
    objectFit: "cover",
  },

  avatarPh: {
    width: "52px",
    height: "52px",
    borderRadius: "26px",
    background: "#E1BEE7",
    flexShrink: 0,
  },

  title: {
    fontSize: "16px",
    fontWeight: 800,
    color: "#4A148C",
  },

  sub: {
    marginTop: "2px",
    color: "#6A5C99",
  },

  infoCard: {
    background: "#FFFFFF",
    borderRadius: "16px",
    padding: "12px",
    marginBottom: "12px",
    boxShadow: "0 2px 8px rgba(60, 20, 110, 0.08)",
    border: "1px solid rgba(124,77,255,0.15)",
  },

  infoText: {
    color: "#6A5C99",
    fontWeight: 700,
    marginBottom: "6px",
    lineHeight: 1.5,
  },

  infoStrong: {
    color: "#4A148C",
    fontWeight: 900,
  },

  formCard: {
    background: "#FFFFFF",
    borderRadius: "16px",
    padding: "12px",
    marginBottom: "12px",
    boxShadow: "0 2px 8px rgba(60, 20, 110, 0.08)",
  },

  formTitle: {
    fontSize: "15px",
    fontWeight: 900,
    color: "#4A148C",
    marginBottom: "8px",
  },

  formLabel: {
    color: "#6A5C99",
    fontWeight: 800,
    marginTop: "8px",
    marginBottom: "6px",
  },

  lockedText: {
    color: "#2E7D32",
    fontWeight: 800,
  },

  starsPickerRow: {
    display: "flex",
    flexDirection: "row",
    gap: "6px",
  },

  starPickBtn: {
    border: "none",
    background: "transparent",
    padding: "2px 4px",
    cursor: "pointer",
  },

  starPickTxt: {
    fontSize: "24px",
    lineHeight: 1,
  },

  starPickOn: {
    color: "#4A148C",
  },

  starPickOff: {
    color: "#C9B9EB",
  },

  input: {
    minHeight: "74px",
    width: "100%",
    border: "1px solid #E1BEE7",
    borderRadius: "12px",
    padding: "10px",
    color: "#333",
    background: "#FAF7FF",
    resize: "vertical",
    boxSizing: "border-box",
    fontFamily: "inherit",
    fontSize: "14px",
  },

  submitBtn: {
    marginTop: "10px",
    background: "#7C4DFF",
    borderRadius: "12px",
    padding: "10px 14px",
    border: "none",
    color: "#FFFFFF",
    fontWeight: 900,
    cursor: "pointer",
    width: "100%",
  },

  submitBtnDisabled: {
    opacity: 0.6,
    cursor: "not-allowed",
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    paddingBottom: "20px",
  },

  card: {
    background: "#FFFFFF",
    borderRadius: "14px",
    padding: "12px",
    boxShadow: "0 1px 6px rgba(60, 20, 110, 0.08)",
  },

  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
  },

  user: {
    fontWeight: 800,
    color: "#4A148C",
  },

  stars: {
    color: "#6A5C99",
    fontWeight: 700,
    whiteSpace: "nowrap",
  },

  comment: {
    marginTop: "6px",
    color: "#444",
    lineHeight: 1.45,
  },

  empty: {
    textAlign: "center",
    marginTop: "40px",
    color: "#777",
    fontWeight: 600,
  },
};

// animación spinner
if (typeof document !== "undefined" && !document.getElementById("psychic-comments-spin-style")) {
  const style = document.createElement("style");
  style.id = "psychic-comments-spin-style";
  style.innerHTML = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
}