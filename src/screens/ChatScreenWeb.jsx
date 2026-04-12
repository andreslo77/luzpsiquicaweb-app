import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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

function toIso(v) {
  if (!v) return new Date().toISOString();
  if (v instanceof Date) return v.toISOString();
  const d = new Date(v);
  if (Number.isNaN(d.getTime())) return new Date().toISOString();
  return d.toISOString();
}

function tsToMs(ts) {
  const d = new Date(ts);
  const t = d.getTime();
  return Number.isFinite(t) ? t : 0;
}

function sortByTsAsc(a, b) {
  const at = tsToMs(a?.ts);
  const bt = tsToMs(b?.ts);
  if (at !== bt) return at - bt;
  const aid = String(a?.id || "");
  const bid = String(b?.id || "");
  return aid.localeCompare(bid);
}

function mergeUniqueAndSort(prev, incomingList = []) {
  const map = new Map();
  for (const m of prev || []) map.set(String(m?.id), m);

  for (const m of incomingList || []) {
    const id = String(m?.id);
    if (!id) continue;

    if (!map.has(id)) {
      map.set(id, m);
    } else {
      const old = map.get(id);
      const oldTs = tsToMs(old?.ts);
      const newTs = tsToMs(m?.ts);
      if (newTs >= oldTs) map.set(id, { ...old, ...m });
    }
  }

  const arr = Array.from(map.values());
  arr.sort(sortByTsAsc);
  return arr;
}

function detectPersonalInfoQuick(text) {
  const t = String(text || "").trim();
  if (!t) return { hasAny: false, hasPhone: false, hasEmail: false, hasAddress: false };

  const phoneRegex = /(\+?\d[\d\s\-().]{6,}\d)/g;
  let hasPhone = false;
  let m;
  while ((m = phoneRegex.exec(t)) !== null) {
    const raw = m[0];
    const digits = raw.replace(/\D/g, "");
    if (digits.length >= 7) {
      hasPhone = true;
      break;
    }
  }

  const emailRegex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi;
  const hasEmail = emailRegex.test(t);

  const softKeywordRegex = new RegExp(
    [
      "\\bcalle\\b",
      "\\bcarrera\\b",
      "\\bcra\\.?\\b",
      "\\bavenida\\b",
      "\\bav\\.?\\b",
      "\\btransversal\\b",
      "\\btv\\.?\\b",
      "\\btransv\\.?\\b",
      "\\bbarrio\\b",
      "\\bstreet\\b",
      "\\bst\\.?\\b",
      "\\bavenue\\b",
      "\\bave\\.?\\b",
      "\\broad\\b",
      "\\brd\\.?\\b",
      "\\bboulevard\\b",
      "\\bblvd\\.?\\b",
      "#\\s*\\d+",
    ].join("|"),
    "i"
  );
  const hasAddress = softKeywordRegex.test(t) && /\d/.test(t);

  return { hasAny: hasPhone || hasEmail || hasAddress, hasPhone, hasEmail, hasAddress };
}

function startOfDayMs(ts) {
  const d = new Date(ts);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

function formatDayHeader(ts) {
  try {
    return new Date(ts)
      .toLocaleDateString("es-ES", {
        weekday: "long",
        day: "numeric",
        month: "long",
      })
      .replace(/^./, (c) => c.toUpperCase());
  } catch {
    return "";
  }
}

function formatTimeShort(ts) {
  try {
    return new Date(ts).toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return "";
  }
}

function normalizeMessages(rawList, myId) {
  if (!Array.isArray(rawList)) return [];
  return rawList.map((m) => {
    const sender = String(m.senderId || m.sender || "");
    const receiver = String(m.receiverId || m.receiver || "");
    const ts = toIso(m.createdAt || m.timestamp || Date.now());
    const idd = String(m._id || `${sender}-${ts}`);
    return {
      id: idd,
      text: m.text || "",
      senderId: sender,
      receiverId: receiver,
      ts,
      from: sender === String(myId) ? "me" : "other",
    };
  });
}

export default function ChatScreenWeb() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, token, refreshMe } = useAuthWeb();
  const { t } = useLang();

  const query = useMemo(() => new URLSearchParams(location.search), [location.search]);

  const otherUserId = String(query.get("otherUserId") || "").trim();
  const otherUserName = String(query.get("otherUserName") || t("chat_other_psychic")).trim();
  const otherUserAvailable = String(query.get("otherUserAvailable") || "") === "true";

  const myId = String(user?._id || user?.id || "").trim();
  const myMinutes = Number(user?.minutes || 0);

  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [initialLoading, setInitialLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [sending, setSending] = useState(false);
  const [policyError, setPolicyError] = useState("");
  const [serverBlock, setServerBlock] = useState({ blocked: false, code: "", message: "" });

  const listRef = useRef(null);

  const chatReady = !!token && !!myId && !!otherUserId;

  const isSendBlockedByAvailability = !otherUserAvailable;
  const isSendBlockedByMinutes = myMinutes <= 0;

  const missingBits = useMemo(() => {
    const missing = [];
    if (!API_URL) missing.push("API_BASE_URL");
    if (!token) missing.push("token");
    if (!myId) missing.push("myId");
    if (!otherUserId) missing.push("otherUserId");
    return missing.join(", ");
  }, [myId, otherUserId, token]);

  const loadHistory = useCallback(
    async (mode = "initial") => {
      if (!chatReady) {
        setInitialLoading(false);
        return;
      }

      try {
        if (mode === "initial") setInitialLoading(true);
        else setRefreshing(true);

        const url = buildApiUrl(`/chat/${myId}/${otherUserId}`);
        const res = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json().catch(() => []);
        if (!res.ok) {
          throw new Error(data?.message || "No se pudo cargar el historial.");
        }

        const normalized = normalizeMessages(data, myId);
        setMessages((prev) => mergeUniqueAndSort(prev, normalized));

        setTimeout(() => {
          listRef.current?.scrollTo({
            top: listRef.current.scrollHeight,
            behavior: mode === "initial" ? "auto" : "smooth",
          });
        }, 50);
      } catch (err) {
        console.error("[ChatScreenWeb] loadHistory error:", err);
      } finally {
        if (mode === "initial") setInitialLoading(false);
        setRefreshing(false);
      }
    },
    [chatReady, myId, otherUserId, token]
  );

  useEffect(() => {
    loadHistory("initial");
  }, [loadHistory]);

  useEffect(() => {
    if (!chatReady) return;

    const interval = setInterval(() => {
      loadHistory("refresh");
    }, 4000);

    return () => clearInterval(interval);
  }, [chatReady, loadHistory]);

  const sendMessage = useCallback(async () => {
    if (!chatReady) return;

    if (isSendBlockedByAvailability) {
      setPolicyError(t("chat_block_unavailable_short"));
      return;
    }

    if (isSendBlockedByMinutes) {
      setServerBlock({
        blocked: true,
        code: "NO_MINUTES",
        message: t("chat_block_no_minutes_short"),
      });
      return;
    }

    if (serverBlock?.blocked) return;

    const content = String(text || "").trim();
    if (!content) return;

    const pre = detectPersonalInfoQuick(content);
    if (pre.hasAny) {
      setPolicyError(t("chat_policy_personal_info"));
      return;
    }

    try {
      setSending(true);
      setPolicyError("");

      const url = buildApiUrl("/chat");
      const body = {
        senderId: String(myId),
        receiverId: String(otherUserId),
        text: content,
      };

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (data?.code === "POLICY_PERSONAL_INFO") {
          setPolicyError(data?.message || t("chat_policy_personal_info"));
          return;
        }

        if (data?.code === "NO_MINUTES") {
          setServerBlock({
            blocked: true,
            code: "NO_MINUTES",
            message: data?.message || t("chat_block_no_minutes_short"),
          });
          await refreshMe();
          return;
        }

        if (data?.code === "WAIT_CLIENT_START") {
          setServerBlock({
            blocked: true,
            code: "WAIT_CLIENT_START",
            message: data?.message || t("chat_block_wait_client_start"),
          });
          return;
        }

        if (data?.code === "CLIENT_INACTIVE") {
          setServerBlock({
            blocked: true,
            code: "CLIENT_INACTIVE",
            message: data?.message || t("chat_block_client_inactive"),
          });
          return;
        }

        if (data?.code === "SESSION_CLOSED") {
          setServerBlock({
            blocked: true,
            code: "SESSION_CLOSED",
            message: data?.message || t("chat_block_session_closed"),
          });
          return;
        }

        throw new Error(data?.message || t("chat_network_error_send"));
      }

      const saved = data || {};
      const newMsg = {
        id: String(saved?._id || `${myId}-${Date.now()}`),
        text: saved?.text || content,
        senderId: String(myId),
        receiverId: String(otherUserId),
        ts: toIso(saved?.createdAt || Date.now()),
        from: "me",
      };

      setMessages((prev) => mergeUniqueAndSort(prev, [newMsg]));
      setText("");
      setServerBlock({ blocked: false, code: "", message: "" });

      setTimeout(() => {
        listRef.current?.scrollTo({
          top: listRef.current.scrollHeight,
          behavior: "smooth",
        });
      }, 50);
    } catch (err) {
      console.error("[ChatScreenWeb] sendMessage error:", err);
      setPolicyError(err?.message || t("chat_network_error_send"));
    } finally {
      setSending(false);
    }
  }, [
    chatReady,
    isSendBlockedByAvailability,
    isSendBlockedByMinutes,
    serverBlock,
    text,
    myId,
    otherUserId,
    token,
    refreshMe,
    t,
  ]);

  const dataWithDayHeaders = useMemo(() => {
    const out = [];
    let lastDay = null;

    for (const m of messages) {
      const day = startOfDayMs(m?.ts);
      if (day && day !== lastDay) {
        out.push({
          type: "day",
          id: `day-${day}`,
          label: formatDayHeader(day),
        });
        lastDay = day;
      }

      out.push({
        type: "msg",
        ...m,
      });
    }

    return out;
  }, [messages]);

  const uiBlocked =
    sending ||
    isSendBlockedByAvailability ||
    isSendBlockedByMinutes ||
    (serverBlock?.blocked && !!serverBlock?.code);

  if (!chatReady) {
    return (
      <AppLayoutWeb
        title={t("chat_other_chat")}
        showBack={true}
        backTo="/home"
      >
        <div style={styles.contentArea}>
          <div style={styles.centerCard}>
            <h2 style={styles.centerTitle}>{t("chat_not_available_title")}</h2>
            <p style={styles.centerText}>
              {t("chat_not_available_body", { missing: missingBits || "datos requeridos" })}
            </p>
            <p style={styles.centerHint}>{t("chat_not_available_hint")}</p>
            <button style={styles.backBtnSoft} onClick={() => navigate("/home")}>
              {t("chat_other_chat")}
            </button>
          </div>
        </div>
      </AppLayoutWeb>
    );
  }

  return (
    <AppLayoutWeb
      title={t("chat_header_title", { name: otherUserName || t("chat_other_psychic") })}
      showBack={true}
      backTo="/home"
      rightSlot={
        <div style={styles.headerMinutesBox}>
          <div style={styles.headerMinutesLabel}>Minutos</div>
          <div style={styles.headerMinutesValue}>{Number(myMinutes).toFixed(2)}</div>
        </div>
      }
    >
      <div style={styles.content}>
        <div style={styles.headerCard}>
          <div style={styles.headerCenter}>
            <div style={styles.headerTitle}>{otherUserName}</div>
            <div style={styles.headerSubtitle}>
              {otherUserAvailable
                ? t("chat_other_psychic")
                : t("chat_block_offline_psychic")}
            </div>
          </div>
        </div>

        {isSendBlockedByAvailability && (
          <div style={styles.noticeBarWarning}>
            {t("chat_block_unavailable")}
          </div>
        )}

        {isSendBlockedByMinutes && (
          <div style={styles.noticeBarInfo}>
            {t("chat_block_no_minutes")}
          </div>
        )}

        {serverBlock?.blocked && !!serverBlock?.message && (
          <div style={styles.noticeBarPurple}>{serverBlock.message}</div>
        )}

        <div style={styles.chatWrap}>
          {initialLoading ? (
            <div style={styles.loadingBox}>{t("chat_loading_conversation")}</div>
          ) : (
            <div ref={listRef} style={styles.messagesBox}>
              {dataWithDayHeaders.map((item) => {
                if (item.type === "day") {
                  return (
                    <div key={item.id} style={styles.dayHeaderWrap}>
                      <div style={styles.dayHeaderPill}>{item.label}</div>
                    </div>
                  );
                }

                const isMe = item.from === "me";

                return (
                  <div
                    key={item.id}
                    style={{
                      ...styles.row,
                      justifyContent: isMe ? "flex-end" : "flex-start",
                    }}
                  >
                    <div
                      style={{
                        ...styles.bubble,
                        ...(isMe ? styles.bubbleMe : styles.bubbleOther),
                      }}
                    >
                      <div
                        style={{
                          ...styles.msgText,
                          ...(isMe ? styles.msgTextMe : styles.msgTextOther),
                        }}
                      >
                        {item.text}
                      </div>
                      <div
                        style={{
                          ...styles.meta,
                          ...(isMe ? styles.metaMe : styles.metaOther),
                        }}
                      >
                        {formatTimeShort(item.ts)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {!!policyError && <div style={styles.policyBar}>{policyError}</div>}

          {refreshing && !initialLoading && (
            <div style={styles.refreshPill}>{t("chat_loading_session")}</div>
          )}

          <div style={styles.inputBar}>
            <textarea
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                setPolicyError("");
              }}
              placeholder={
                isSendBlockedByAvailability
                  ? t("chat_placeholder_unavailable")
                  : isSendBlockedByMinutes
                    ? t("chat_placeholder_no_minutes")
                    : serverBlock?.code === "CLIENT_INACTIVE"
                      ? t("chat_placeholder_timeout")
                      : serverBlock?.blocked
                        ? t("chat_placeholder_paused")
                        : t("chat_placeholder_write")
              }
              style={{
                ...styles.input,
                ...(uiBlocked ? styles.inputDisabled : {}),
              }}
              disabled={uiBlocked}
              rows={2}
            />

            <button
              style={{
                ...styles.sendBtn,
                ...(!text.trim() || uiBlocked ? styles.sendBtnDisabled : {}),
              }}
              onClick={sendMessage}
              disabled={!text.trim() || uiBlocked}
            >
              {sending ? t("chat_sending_dots") : t("chat_send")}
            </button>
          </div>
        </div>
      </div>
    </AppLayoutWeb>
  );
}

const styles = {
  content: {
    padding: "0",
  },

  contentArea: {
    padding: "0",
  },

  centerCard: {
    background: "#FFFFFF",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(60, 20, 110, 0.08)",
    textAlign: "center",
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

  headerCard: {
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
    padding: "16px",
    background: "#FFFFFF",
    borderBottom: "1px solid #DDD5E8",
    borderRadius: "16px",
    marginBottom: "10px",
  },

  headerCenter: {
    flex: 1,
    minWidth: 0,
  },

  headerTitle: {
    color: "#311B92",
    fontWeight: 700,
    fontSize: "18px",
    lineHeight: 1.15,
    marginBottom: "3px",
  },

  headerSubtitle: {
    color: "#777",
    fontSize: "12px",
    lineHeight: 1.3,
  },

  headerMinutesBox: {
    background: "#F3E5F5",
    borderRadius: "12px",
    padding: "8px 10px",
    minWidth: "76px",
    textAlign: "center",
    flexShrink: 0,
  },

  headerMinutesLabel: {
    color: "#6A1B9A",
    fontSize: "11px",
    fontWeight: 700,
    marginBottom: "3px",
  },

  headerMinutesValue: {
    color: "#4A148C",
    fontSize: "14px",
    fontWeight: 800,
    lineHeight: 1,
  },

  backBtnSoft: {
    border: "1px solid #D9CCFF",
    background: "#FFFFFF",
    color: "#4A148C",
    borderRadius: "10px",
    padding: "10px 12px",
    fontWeight: 700,
    fontSize: "13px",
    cursor: "pointer",
    flexShrink: 0,
  },

  noticeBarWarning: {
    background: "#FFF3E0",
    color: "#E65100",
    padding: "10px 16px",
    fontWeight: 700,
    fontSize: "13px",
    borderBottom: "1px solid #FFE0B2",
    borderRadius: "12px",
    marginBottom: "10px",
  },

  noticeBarInfo: {
    background: "#E3F2FD",
    color: "#0D47A1",
    padding: "10px 16px",
    fontWeight: 700,
    fontSize: "13px",
    borderBottom: "1px solid #BBDEFB",
    borderRadius: "12px",
    marginBottom: "10px",
  },

  noticeBarPurple: {
    background: "#F3E5F5",
    color: "#4A148C",
    padding: "10px 16px",
    fontWeight: 700,
    fontSize: "13px",
    borderBottom: "1px solid #E1BEE7",
    borderRadius: "12px",
    marginBottom: "10px",
  },

  chatWrap: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  loadingBox: {
    background: "#FFFFFF",
    borderRadius: "16px",
    padding: "20px",
    color: "#4A148C",
    fontWeight: 700,
    fontSize: "14px",
    border: "1px solid #DDD5E8",
  },

  messagesBox: {
    minHeight: "380px",
    maxHeight: "calc(100vh - 290px)",
    overflowY: "auto",
    background: "#FBF9FF",
    borderRadius: "16px",
    border: "1px solid #DDD5E8",
    padding: "14px 12px",
  },

  dayHeaderWrap: {
    display: "flex",
    justifyContent: "center",
    margin: "8px 0 6px",
  },

  dayHeaderPill: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#F5F1FF",
    border: "1px solid #DDD1FF",
    padding: "5px 12px",
    borderRadius: "999px",
    color: "#4A148C",
    fontWeight: 700,
    fontSize: "11px",
  },

  row: {
    display: "flex",
    margin: "8px 0",
  },

  bubble: {
    maxWidth: "80%",
    borderRadius: "16px",
    padding: "10px 12px",
  },

  bubbleOther: {
    background: "#F4F1FF",
    borderTopLeftRadius: "8px",
    border: "1px solid #E6DAFF",
  },

  bubbleMe: {
    background: "#4B6BFB",
    borderTopRightRadius: "8px",
  },

  msgText: {
    fontSize: "14px",
    lineHeight: 1.45,
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
  },

  msgTextOther: {
    color: "#2E2E2E",
    fontWeight: 500,
  },

  msgTextMe: {
    color: "#FFFFFF",
    fontWeight: 600,
  },

  meta: {
    marginTop: "6px",
    fontSize: "11px",
    textAlign: "right",
  },

  metaOther: {
    color: "#777",
    fontWeight: 500,
  },

  metaMe: {
    color: "rgba(255,255,255,0.88)",
    fontWeight: 600,
  },

  policyBar: {
    padding: "10px 12px",
    background: "#FFF3E0",
    border: "1px solid #FFE0B2",
    color: "#E65100",
    fontWeight: 700,
    fontSize: "13px",
    borderRadius: "12px",
  },

  refreshPill: {
    alignSelf: "center",
    padding: "7px 12px",
    borderRadius: "999px",
    background: "#FFFFFF",
    border: "1px solid #DDD5E8",
    color: "#4A148C",
    fontWeight: 700,
    fontSize: "11px",
  },

  inputBar: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    alignItems: "stretch",
  },

  input: {
    flex: 1,
    resize: "none",
    background: "#FFFFFF",
    borderRadius: "14px",
    padding: "12px",
    border: "1px solid #DDD5E8",
    fontSize: "14px",
    color: "#222",
    minHeight: "58px",
    outline: "none",
    fontFamily: "inherit",
    lineHeight: 1.4,
  },

  inputDisabled: {
    opacity: 0.6,
    cursor: "not-allowed",
  },

  sendBtn: {
    border: "none",
    background: "#4B6BFB",
    color: "#fff",
    borderRadius: "14px",
    padding: "0 16px",
    minWidth: "96px",
    fontWeight: 700,
    cursor: "pointer",
    fontSize: "14px",
  },

  sendBtnDisabled: {
    opacity: 0.55,
    cursor: "not-allowed",
  },
};