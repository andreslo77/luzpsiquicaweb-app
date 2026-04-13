import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { API_BASE_URL } from "../config/env.web.js";
import { useAuthWeb } from "../context/AuthContextWeb.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import AppLayoutWeb from "../components/layout/AppLayoutWeb.jsx";

const RAW_API_URL = API_BASE_URL;
const PSYCHIC_MINUTE_RATE_LABEL = "US$1.25/min";

function normalizeName(str) {
  return String(str || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

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

function safeNum(n, fallback = 0) {
  const x = Number(n);
  return Number.isFinite(x) ? x : fallback;
}

function clampStars(n) {
  const x = Number(n);
  if (!Number.isFinite(x)) return 0;
  return Math.max(0, Math.min(5, x));
}

function parseSearch(search) {
  const params = new URLSearchParams(search || "");
  return {
    psychicId: params.get("psychicId") ? String(params.get("psychicId")) : "",
    psychicName: params.get("psychicName") ? String(params.get("psychicName")) : "",
  };
}

function normalizeLanguageToken(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[.]/g, "")
    .trim();
}

function parsePsychicLanguages(raw) {
  const source = String(raw || "").trim();
  if (!source) return [];

  const tokens = source
    .split(/[,/;|]+|\by\b|\band\b|\be\b/gi)
    .map((s) => s.trim())
    .filter(Boolean);

  const knownMap = [
    { keys: ["espanol", "spanish", "castellano"], flag: "🇪🇸", label: "Español", id: "es" },
    { keys: ["ingles", "english"], flag: "🇺🇸", label: "Inglés", id: "en" },
    { keys: ["frances", "french", "francais"], flag: "🇫🇷", label: "Francés", id: "fr" },
    { keys: ["aleman", "german", "deutsch"], flag: "🇩🇪", label: "Alemán", id: "de" },
    { keys: ["portugues", "portuguese"], flag: "🇵🇹", label: "Portugués", id: "pt" },
    { keys: ["italiano", "italian"], flag: "🇮🇹", label: "Italiano", id: "it" },
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

  const root = buildRootUrl();
  if (!root) return null;

  if (value.startsWith("/")) return `${root}${value}`;
  return `${root}/${value}`;
}

function getPsychicDisplayName(item, fallback = "Psíquico") {
  return (
    item?.psychicName ||
    item?.psychic_name ||
    item?.publicName ||
    item?.displayName ||
    item?.fullName ||
    item?.username ||
    item?.name ||
    fallback
  )
    .toString()
    .trim();
}

function getInitials(name) {
  const s = String(name || "").trim();
  if (!s) return "P";
  return s
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function formatList(list) {
  if (!Array.isArray(list)) return "";
  return list.map((x) => String(x || "").trim()).filter(Boolean).join(" · ");
}

function shortId(id) {
  const s = String(id || "");
  if (!s) return "";
  return s.length > 8 ? `${s.slice(0, 4)}…${s.slice(-4)}` : s;
}

function computeStatus({ isAvailable, isBusy }) {
  if (isBusy === true) return "busy";
  if (isAvailable === true) return "available";
  return "offline";
}

function stripInternalBio(text) {
  const INTERNAL_BIO_LINE =
    "(Solo para información interna) Cuéntanos tu experiencia en privado u otros servicios";

  if (!text) return "";
  return String(text)
    .split(INTERNAL_BIO_LINE)
    .join("")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
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

function StarsRow({ value, align = "right", size = 16 }) {
  const v = clampStars(value);
  const rounded = Math.round(v);

  return (
    <div
      style={{
        ...styles.starsRow,
        justifyContent: align === "left" ? "flex-start" : "flex-end",
      }}
    >
      {[1, 2, 3, 4, 5].map((s) => {
        const active = s <= rounded;
        return (
          <span
            key={s}
            style={{
              ...styles.star,
              fontSize: size,
              ...(active ? styles.starActive : styles.starInactive),
            }}
          >
            {active ? "★" : "☆"}
          </span>
        );
      })}
    </div>
  );
}

export default function PsychicProfileWeb() {
  const navigate = useNavigate();
  const location = useLocation();
  const { slug = "" } = useParams();
  const { token, refreshMe } = useAuthWeb();
  const { t } = useLang();

  const { psychicId: routePsychicId, psychicName: routePsychicName } = useMemo(
    () => parseSearch(location.search),
    [location.search]
  );

  const initialPsychicId = routePsychicId || "";
  const initialPsychicName = routePsychicName || "";

  const [psychicId, setPsychicId] = useState(routePsychicId || "");
  const [psychic, setPsychic] = useState(initialPsychicId ? { _id: initialPsychicId } : null);

  const [loading, setLoading] = useState(true);
  const [reviewsLoading, setReviewsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [startingCall, setStartingCall] = useState(false);

  const displayName =
    getPsychicDisplayName(psychic, t("psych_profile_psychic_fallback")) ||
    initialPsychicName ||
    t("psych_profile_psychic_fallback");

  const photoUrl = useMemo(() => resolvePhotoUrl(psychic?.photo), [psychic?.photo]);
  const initials = useMemo(() => getInitials(displayName), [displayName]);

  const ratingStr = safeNum(psychic?.rating, 0).toFixed(2);
  const ratingsCount = safeNum(psychic?.ratingsCount, 0);
  const callsReceived = safeNum(psychic?.callsReceived, 0);

  const status = computeStatus({
    isAvailable: psychic?.isAvailable,
    isBusy: psychic?.isBusy,
  });

  const available = status === "available";
  const statusLabel =
    status === "available"
      ? t("psych_profile_available")
      : status === "busy"
        ? t("psych_profile_busy")
        : t("psych_profile_not_available");

  const statusUI =
    status === "available"
      ? { background: "#E8F5E9", color: "#2E7D32" }
      : status === "busy"
        ? { background: "#FFEBEE", color: "#C62828" }
        : { background: "#FFF3E0", color: "#EF6C00" };

  const bio = stripInternalBio(psychic?.bio || psychic?.about || "");
  const experience = stripInternalBio(psychic?.experience || "");
  const about = stripInternalBio(psychic?.about || "");
  const tagline = stripInternalBio(psychic?.tagline || "");

  const areas = Array.isArray(psychic?.areas) ? psychic.areas : [];
  const tools = Array.isArray(psychic?.tools) ? psychic.tools : [];
  const areasOtherText = psychic?.areasOtherText || "";
  const toolsOtherText = psychic?.toolsOtherText || "";

  const workedPhoneOrChatBefore =
    typeof psychic?.workedPhoneOrChatBefore === "boolean"
      ? psychic.workedPhoneOrChatBefore
      : null;
  const startYear = psychic?.startYear || null;
  const hoursPerWeek = psychic?.hoursPerWeek || "";
  const canDoPhoneAndChat =
    typeof psychic?.canDoPhoneAndChat === "boolean" ? psychic.canDoPhoneAndChat : null;

  const languageItems = useMemo(
    () => parsePsychicLanguages(psychic?.languages),
    [psychic?.languages]
  );

  const areasText = useMemo(() => {
    const base = formatList(areas);
    const hasOther = areas.includes("Otros") && String(areasOtherText || "").trim();
    return hasOther ? `${base}${base ? " · " : ""}${String(areasOtherText).trim()}` : base;
  }, [areas, areasOtherText]);

  const toolsText = useMemo(() => {
    const base = formatList(tools);
    const hasOther = tools.includes("Otros") && String(toolsOtherText || "").trim();
    return hasOther ? `${base}${base ? " · " : ""}${String(toolsOtherText).trim()}` : base;
  }, [tools, toolsOtherText]);

    useEffect(() => {
    const resolvePsychicBySlug = async () => {
      try {
        if (!slug || routePsychicId) return;

        const res = await fetch(`${API_BASE_URL}/users/psychics`);
        const data = await res.json().catch(() => []);

        if (!Array.isArray(data)) return;

        const found = data.find((p) => {
          const name = p?.psychicName || p?.name || "";
          return slugifyPsychicName(name) === slugifyPsychicName(slug);
        });

        if (found?._id) {
          setPsychicId(String(found._id));
        }
      } catch (err) {
        console.error("[PsychicProfileWeb] resolvePsychicBySlug error:", err);
      }
    };

    resolvePsychicBySlug();
  }, [slug, routePsychicId]);

  useEffect(() => {
    let cancelled = false;

    const loadPsychic = async () => {
      try {
        if (!psychicId || !API_URL) {
          setLoading(false);
          return;
        }

        setLoading(true);

        const res = await fetch(buildApiUrl(`/users/psychics/${psychicId}`), {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        });

        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
          throw new Error(data?.message || t("psych_profile_error_title"));
        }

        const next = data?.psychic || data || null;

        if (!cancelled && next) {
          setPsychic((prev) => ({ ...(prev || {}), ...next }));
        }
      } catch (err) {
        console.error("[PsychicProfileWeb] loadPsychic error:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    loadPsychic();

    return () => {
      cancelled = true;
    };
  }, [psychicId, token, t]);

  useEffect(() => {
    let cancelled = false;

    const loadReviews = async () => {
      try {
        if (!psychicId || !API_URL) return;

        setReviewsLoading(true);

        const res = await fetch(buildApiUrl(`/users/psychics/${psychicId}/reviews`), {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        });

        const data = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(data?.message || t("psych_profile_error_title"));

        const list = Array.isArray(data?.reviews) ? data.reviews : [];

        if (!cancelled) setReviews(list);
      } catch {
        if (!cancelled) setReviews([]);
      } finally {
        if (!cancelled) setReviewsLoading(false);
      }
    };

    loadReviews();

    return () => {
      cancelled = true;
    };
  }, [psychicId, token, t]);

  useEffect(() => {
    if (!psychicId) return;
    if (!psychic?._id && !psychic?.id) return;

    const expectedPath = `/psychic/${slugifyPsychicName(displayName)}`;

    if (!expectedPath) return;
    if (location.pathname === expectedPath && !location.search) return;

    if (location.pathname === "/psychic-profile" || location.search) {
      navigate(expectedPath, { replace: true });
    }
  }, [psychic, psychicId, displayName, location.pathname, location.search, navigate]);

  useEffect(() => {
    const titleName = displayName || "Psíquico";
    document.title = `${titleName} | Luz Psíquica`;

    const rawText = stripInternalBio(
      psychic?.tagline || psychic?.bio || psychic?.about || ""
    );
    const description = rawText
      ? rawText.slice(0, 160)
      : `${titleName} en Luz Psíquica. Perfil público, disponibilidad, experiencia y comentarios.`;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    const canonicalPath = `/psychic/${slugifyPsychicName(displayName)}`;
    const canonicalUrl =
      typeof window !== "undefined"
        ? `${window.location.origin}${canonicalPath}`
        : canonicalPath;

    canonical.setAttribute("href", canonicalUrl);
  }, [psychic, displayName]);

  const featuredReview = useMemo(() => {
    if (!Array.isArray(reviews) || reviews.length === 0) return null;
    const r = reviews[0];
    const txt = String(r?.comment || "").trim();
    const st = clampStars(r?.stars);
    if (!txt) return null;
    return { ...r, comment: txt, stars: st };
  }, [reviews]);

  const statsLine = `${ratingStr} (${ratingsCount}) · ${callsReceived} ${t("psych_profile_stats_calls_word")}`;

  const requireAuthOrRedirect = useCallback(
    async ({ type }) => {
      if (token) return true;

      const params = new URLSearchParams({
        redirect: "psychic-profile",
        psychicId: String(psychicId || ""),
        action: String(type || ""),
      });

      navigate(`/?${params.toString()}`, { replace: true });
      return false;
    },
    [navigate, psychicId, token]
  );

  const handleOpenChat = async () => {
    if (!psychicId) return;

    if (!available) {
      window.alert(t("psych_profile_psychic_unavailable_body"));
      return;
    }

    const ok = await requireAuthOrRedirect({ type: "chat" });
    if (!ok) return;

    const snapshot = {
      psychicId: String(psychicId),
      psychicName: displayName,
      psychicPhoto: psychic?.photo || "",
    };

    try {
      localStorage.setItem("lp_last_chat_psychic", JSON.stringify(snapshot));
      sessionStorage.setItem("lp_last_chat_psychic", JSON.stringify(snapshot));
    } catch {}

    const params = new URLSearchParams({
      otherUserId: String(psychicId),
      otherUserName: displayName,
      otherUserAvailable: String(available),
    });

    navigate(`/chat?${params.toString()}`);
  };

  const handleCall = async () => {
    try {
      if (!psychicId) return;

      const ok = await requireAuthOrRedirect({ type: "call" });
      if (!ok) return;

      if (!available) {
        window.alert(t("psych_profile_psychic_unavailable_body_try_later"));
        return;
      }

      if (!API_URL) {
        window.alert(t("psych_profile_config_error_body_missing_api"));
        return;
      }

      if (!token) {
        window.alert(t("psych_profile_session_expired_body_call"));
        navigate("/", { replace: true });
        return;
      }

      setStartingCall(true);

      const res = await fetch(buildApiUrl("/calls/start"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ psychicId }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.status === 401) {
        window.alert(t("psych_profile_session_expired_body_call"));
        navigate("/", { replace: true });
        return;
      }

      if (res.status === 402) {
        window.alert(data?.message || t("psych_profile_call_cannot_start_body_no_minutes"));
        navigate("/buy-minutes");
        return;
      }

      if (!res.ok) {
        window.alert(data?.message || t("psych_profile_call_error_start_failed"));
        return;
      }

      const { callId, roomId, clientMinutes } = data;

      if (!callId || !roomId) {
        window.alert(t("psych_profile_call_error_invalid_params"));
        return;
      }

      await refreshMe();

      navigate("/call", {
        state: {
          psychic,
          callId,
          roomId,
          initialMinutes: clientMinutes ?? 0,
        },
      });
    } catch (err) {
      window.alert(err?.message || t("psych_profile_error_call_failed"));
    } finally {
      setStartingCall(false);
    }
  };

  if (!initialPsychicId && !psychicId) {
    return (
      <AppLayoutWeb title={t("psych_profile_header_title")} showBack={true} backTo="/home">
        <div style={styles.center}>
          <div style={styles.errorText}>{t("psych_profile_no_info")}</div>
          <button style={styles.backBtn} onClick={() => navigate(-1)}>
            {t("psych_profile_back")}
          </button>
        </div>
      </AppLayoutWeb>
    );
  }

  return (
    <AppLayoutWeb title={t("psych_profile_header_title")} showBack={true} backTo="/home">
      <div style={styles.content}>
        {loading ? (
          <div style={styles.loadingBox}>{t("psych_profile_loading_profile", "Cargando perfil...")}</div>
        ) : (
          <>
            <div style={styles.headerCard}>
              {photoUrl ? (
                <img src={photoUrl} alt={displayName} style={styles.avatar} />
              ) : (
                <div style={styles.avatarFallback}>
                  <span style={styles.avatarInitials}>{initials}</span>
                </div>
              )}

              <div style={styles.headerContent}>
                <div style={styles.name}>{displayName}</div>

                <div
                  style={{
                    ...styles.badge,
                    backgroundColor: statusUI.background,
                  }}
                >
                  <span
                    style={{
                      ...styles.badgeText,
                      color: statusUI.color,
                    }}
                  >
                    {statusLabel}
                  </span>
                </div>

                <div style={styles.stats}>{statsLine}</div>

                <div style={styles.rateRow}>
                  <div style={styles.rateChip}>
                    <span style={styles.rateChipText}>💲 {PSYCHIC_MINUTE_RATE_LABEL}</span>
                  </div>
                </div>

                {languageItems.length > 0 && (
                  <div style={styles.languagesWrap}>
                    {languageItems.map((langItem) => (
                      <div key={langItem.id} style={styles.languageChip}>
                        <span style={styles.languageChipText}>
                          {langItem.flag} {langItem.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {!!tagline && <div style={styles.tagline}>“{tagline}”</div>}
                {!!bio && <div style={styles.bio}>{bio}</div>}

                {!!featuredReview && (
                  <div style={styles.featuredBox}>
                    <div style={styles.featuredTopCol}>
                      <div style={styles.featuredTag}>
                        <span style={styles.featuredTagTxt}>
                          {t("psych_profile_featured_review_tag")}
                        </span>
                      </div>

                      <div style={styles.featuredRatingLabel}>
                        {t("psych_profile_featured_review_rating_label")}
                      </div>

                      <div style={styles.featuredStarsUnder}>
                        <StarsRow value={featuredReview?.stars} align="left" size={18} />
                      </div>
                    </div>

                    <div style={styles.featuredComment}>“{featuredReview?.comment}”</div>

                    <div style={styles.featuredMeta}>
                      {t("psych_profile_featured_review_client_prefix")} {shortId(featuredReview?.user)}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div style={styles.card}>
              <div style={styles.cardTitle}>{t("psych_profile_bio_title")}</div>

              <div style={styles.line}>
                <strong style={styles.bold}>{t("psych_profile_bio_rate_label")}</strong>
              </div>

              {!!tagline && (
                <div style={styles.line}>
                  <strong style={styles.bold}>{t("psych_profile_bio_phrase_label")}</strong> {tagline}
                </div>
              )}

              {languageItems.length > 0 && (
                <div style={styles.infoBlock}>
                  <div style={styles.line}>
                    <strong style={styles.bold}>{t("psych_profile_bio_languages_label")}</strong>
                  </div>

                  <div style={styles.languagesWrapInline}>
                    {languageItems.map((langItem) => (
                      <div key={langItem.id} style={styles.languageChip}>
                        <span style={styles.languageChipText}>
                          {langItem.flag} {langItem.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {!!areasText && (
                <div style={styles.line}>
                  <strong style={styles.bold}>{t("psych_profile_bio_areas_label")}</strong> {areasText}
                </div>
              )}

              {!!toolsText && (
                <div style={styles.line}>
                  <strong style={styles.bold}>{t("psych_profile_bio_tools_label")}</strong> {toolsText}
                </div>
              )}

              {!!experience && (
                <div style={styles.line}>
                  <strong style={styles.bold}>{t("psych_profile_bio_experience_label")}</strong> {experience}
                </div>
              )}

              {!!about && (
                <div style={styles.line}>
                  <strong style={styles.bold}>{t("psych_profile_bio_about_me_label")}</strong>
                  <br />
                  {about}
                </div>
              )}

              {!tagline && !languageItems.length && !areasText && !toolsText && !experience && !!bio && (
                <div style={styles.line}>{bio}</div>
              )}
            </div>

            {(workedPhoneOrChatBefore !== null ||
              startYear ||
              String(hoursPerWeek || "").trim() ||
              canDoPhoneAndChat !== null) && (
              <div style={styles.card}>
                <div style={styles.cardTitle}>{t("psych_profile_work_info_title")}</div>

                {workedPhoneOrChatBefore !== null && (
                  <div style={styles.line}>
                    <strong style={styles.bold}>{t("psych_profile_work_exp_phone_chat_label")}</strong>{" "}
                    {workedPhoneOrChatBefore ? t("psych_profile_yes") : t("psych_profile_no")}
                  </div>
                )}

                {!!startYear && (
                  <div style={styles.line}>
                    <strong style={styles.bold}>{t("psych_profile_work_start_year_label")}</strong> {startYear}
                  </div>
                )}

                {!!String(hoursPerWeek || "").trim() && (
                  <div style={styles.line}>
                    <strong style={styles.bold}>{t("psych_profile_work_hours_per_week_label")}</strong>{" "}
                    {String(hoursPerWeek).trim()}
                  </div>
                )}

                {canDoPhoneAndChat !== null && (
                  <div style={styles.line}>
                    <strong style={styles.bold}>{t("psych_profile_work_channels_label")}</strong>{" "}
                    {canDoPhoneAndChat ? t("psych_profile_yes") : t("psych_profile_no")}
                  </div>
                )}
              </div>
            )}

            <div style={styles.card}>
              <div style={styles.cardTitle}>{t("psych_profile_comments_title")}</div>

              {reviewsLoading ? (
                <div style={styles.muted}>{t("psych_profile_loading_comments")}</div>
              ) : reviews.length === 0 ? (
                <div style={styles.line}>{t("psych_profile_no_comments")}</div>
              ) : (
                <>
                  <div style={{ ...styles.line, marginBottom: 10 }}>
                    {t("psych_profile_showing_comments_prefix")} {reviews.length}{" "}
                    {t("psych_profile_showing_comments_suffix")}
                  </div>

                  {reviews.map((r, idx) => (
                    <div key={`${r?.user || "u"}-${idx}`} style={styles.reviewCard}>
                      <div style={styles.reviewHeader}>
                        <div style={styles.reviewUser}>
                          {t("psych_profile_featured_review_client_prefix")} {shortId(r?.user)}
                        </div>
                        <StarsRow value={r?.stars} />
                      </div>
                      <div style={styles.reviewText}>{r?.comment || "—"}</div>
                    </div>
                  ))}
                </>
              )}
            </div>

            <div style={styles.card}>
              <div style={styles.cardTitle}>{t("psych_profile_history_title")}</div>
              <div style={styles.muted}>{t("psych_profile_history_body")}</div>

              <button
                style={styles.historyBtn}
                onClick={() =>
                  navigate(
                    `/call-history?filterPsychicId=${encodeURIComponent(
                      psychicId
                    )}&psychicName=${encodeURIComponent(displayName)}`
                  )
                }
              >
                {t("psych_profile_view_call_history")}
              </button>
            </div>

            <div style={styles.actionsCard}>
              <button
                style={{
                  ...styles.primaryBtn,
                  ...(!available || startingCall ? styles.disabledBtn : {}),
                }}
                onClick={handleCall}
                disabled={!available || startingCall}
              >
                {startingCall ? t("psych_profile_call_starting", "Iniciando...") : t("psych_profile_call_now")}
              </button>

              <button
                style={{
                  ...styles.outlineBtn,
                  ...(!available ? styles.disabledBtn : {}),
                }}
                onClick={handleOpenChat}
                disabled={!available}
              >
                {available ? t("psych_profile_chat") : t("psych_profile_unavailable_short")}
              </button>

              <button style={styles.backBtn} onClick={() => navigate(-1)}>
                {t("psych_profile_back")}
              </button>
            </div>
          </>
        )}
      </div>
    </AppLayoutWeb>
  );
}

const styles = {
  content: {
    padding: "0",
  },

  center: {
    background: "#FFFFFF",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(60, 20, 110, 0.08)",
    textAlign: "center",
  },

  errorText: {
    color: "#4A148C",
    fontWeight: 800,
    fontSize: "16px",
    textAlign: "center",
    marginBottom: "10px",
  },

  loadingBox: {
    background: "#FFFFFF",
    borderRadius: "16px",
    padding: "20px",
    color: "#4A148C",
    fontWeight: 700,
    fontSize: "14px",
    boxShadow: "0 2px 8px rgba(60, 20, 110, 0.08)",
  },

  headerCard: {
    display: "flex",
    gap: "12px",
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "14px",
    boxShadow: "0 2px 8px rgba(60, 20, 110, 0.08)",
    marginBottom: "14px",
    alignItems: "flex-start",
  },

  headerContent: {
    flex: 1,
    minWidth: 0,
  },

  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
    flexShrink: 0,
  },

  avatarFallback: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: "#7E57C2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  avatarInitials: {
    color: "#fff",
    fontSize: "22px",
    fontWeight: 900,
  },

  name: {
    fontSize: "18px",
    fontWeight: 900,
    color: "#4A148C",
  },

  stats: {
    marginTop: "6px",
    color: "#6A5C99",
    fontWeight: 700,
    fontSize: "14px",
  },

  rateRow: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "8px",
  },

  rateChip: {
    backgroundColor: "#F3E5F5",
    borderRadius: "999px",
    padding: "6px 10px",
    alignSelf: "flex-start",
  },

  rateChipText: {
    color: "#6A1B9A",
    fontWeight: 900,
    fontSize: "12px",
  },

  languagesWrap: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    marginTop: "8px",
  },

  languagesWrapInline: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    marginTop: "4px",
    marginBottom: "8px",
  },

  languageChip: {
    backgroundColor: "#F5F1FF",
    border: "1px solid #D9CCFF",
    borderRadius: "999px",
    padding: "5px 10px",
  },

  languageChipText: {
    color: "#4A148C",
    fontWeight: 700,
    fontSize: "12px",
  },

  tagline: {
    marginTop: "10px",
    color: "#3C2A66",
    fontWeight: 900,
    fontStyle: "italic",
    fontSize: "14px",
  },

  bio: {
    marginTop: "8px",
    color: "#444",
    lineHeight: 1.5,
    fontSize: "14px",
  },

  badge: {
    alignSelf: "flex-start",
    padding: "5px 10px",
    borderRadius: "999px",
    marginTop: "8px",
  },

  badgeText: {
    fontWeight: 900,
    fontSize: "12px",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "14px",
    boxShadow: "0 2px 8px rgba(60, 20, 110, 0.08)",
    marginBottom: "14px",
  },

  cardTitle: {
    fontSize: "16px",
    fontWeight: 900,
    color: "#4A148C",
    marginBottom: "10px",
  },

  infoBlock: {
    marginBottom: "2px",
  },

  line: {
    color: "#444",
    marginBottom: "8px",
    lineHeight: 1.5,
    fontSize: "14px",
  },

  bold: {
    fontWeight: 900,
    color: "#4A148C",
  },

  starsRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "2px",
  },

  star: {
    marginLeft: "2px",
    lineHeight: 1,
  },

  starActive: {
    color: "#7C4DFF",
    fontWeight: 900,
  },

  starInactive: {
    color: "#C9B9FF",
    fontWeight: 900,
  },

  featuredBox: {
    marginTop: "12px",
    backgroundColor: "#F7F2FF",
    borderRadius: "14px",
    padding: "12px",
    border: "1px solid #E6D7FF",
  },

  featuredTopCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  featuredTag: {
    backgroundColor: "#EDE7F6",
    padding: "6px 10px",
    borderRadius: "999px",
  },

  featuredTagTxt: {
    color: "#4A148C",
    fontWeight: 900,
    fontSize: "12px",
  },

  featuredRatingLabel: {
    marginTop: "10px",
    color: "#6A5C99",
    fontWeight: 900,
    fontSize: "12px",
  },

  featuredStarsUnder: {
    marginTop: "4px",
    alignSelf: "stretch",
  },

  featuredComment: {
    marginTop: "10px",
    color: "#3C2A66",
    fontStyle: "italic",
    lineHeight: 1.5,
    fontSize: "14px",
  },

  featuredMeta: {
    marginTop: "8px",
    color: "#6A5C99",
    fontWeight: 800,
    fontSize: "12px",
  },

  muted: {
    marginTop: "8px",
    color: "#555",
    lineHeight: 1.5,
    fontSize: "14px",
  },

  historyBtn: {
    marginTop: "12px",
    width: "100%",
    border: "2px solid #7C4DFF",
    padding: "12px",
    borderRadius: "12px",
    background: "#FFFFFF",
    color: "#7C4DFF",
    fontWeight: 900,
    cursor: "pointer",
  },

  reviewCard: {
    backgroundColor: "#FAF7FF",
    borderRadius: "14px",
    padding: "12px",
    marginBottom: "10px",
    border: "1px solid #EFE6FF",
  },

  reviewHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
  },

  reviewUser: {
    fontWeight: 900,
    color: "#4A148C",
    fontSize: "14px",
  },

  reviewText: {
    marginTop: "6px",
    color: "#444",
    lineHeight: 1.5,
    fontSize: "14px",
  },

  actionsCard: {
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "14px",
    boxShadow: "0 2px 8px rgba(60, 20, 110, 0.08)",
    marginBottom: "28px",
  },

  primaryBtn: {
    width: "100%",
    backgroundColor: "#7C4DFF",
    padding: "12px",
    borderRadius: "12px",
    alignItems: "center",
    marginBottom: "10px",
    color: "#fff",
    fontWeight: 900,
    border: "none",
    cursor: "pointer",
  },

  outlineBtn: {
    width: "100%",
    border: "2px solid #7C4DFF",
    padding: "12px",
    borderRadius: "12px",
    alignItems: "center",
    marginBottom: "10px",
    color: "#7C4DFF",
    fontWeight: 900,
    background: "#fff",
    cursor: "pointer",
  },

  backBtn: {
    width: "100%",
    backgroundColor: "#EDE7F6",
    padding: "12px",
    borderRadius: "12px",
    alignItems: "center",
    color: "#4A148C",
    fontWeight: 900,
    border: "none",
    cursor: "pointer",
  },

  disabledBtn: {
    opacity: 0.6,
    cursor: "not-allowed",
  },
};