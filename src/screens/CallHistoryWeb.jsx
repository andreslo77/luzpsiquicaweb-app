// screens/CallHistoryWeb.jsx
import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { useAuthWeb } from '../context/AuthContextWeb';
import { API_BASE_URL } from '../config/env.web.js';
import AppLayoutWeb from '../components/layout/AppLayoutWeb.jsx';

// fallback fijo si el backend no trae payoutPerMinuteUsd
const DEFAULT_PSYCHIC_PAYOUT_PER_MINUTE_USD = 0.40;

const RAW_API_URL = API_BASE_URL;

function normalizeApiBase(url) {
  if (!url) return null;
  const base = String(url).trim().replace(/\/+$/, '');
  if (!base) return null;
  if (base.endsWith('/api')) return base;
  return `${base}/api`;
}

const API_URL = normalizeApiBase(RAW_API_URL);

function buildApiUrl(path) {
  const p = path.startsWith('/') ? path : `/${path}`;
  if (!API_URL) return p;
  return `${API_URL}${p}`;
}

function safeNum(n, fallback = 0) {
  const x = Number(n);
  return Number.isFinite(x) ? x : fallback;
}

function parseSearch(search) {
  const params = new URLSearchParams(search || '');
  return {
    filterPsychicId: params.get('filterPsychicId') ? String(params.get('filterPsychicId')) : null,
    psychicName: params.get('psychicName') ? String(params.get('psychicName')) : null,
  };
}

function getPsychicDisplayName(p, fallback = 'Psíquico') {
  const candidates = [
    p?.psychicName,
    p?.nombrePsiquico,
    p?.stageName,
    p?.displayName,
    p?.nickname,
    p?.name,
  ];
  const found = candidates.map((x) => (x ? String(x).trim() : '')).find(Boolean);
  return found || fallback;
}

function StarsRow({ value, onSelect, disabled }) {
  const v = safeNum(value, 0);
  const rounded = Math.round(v);

  return (
    <div style={styles.starsRow}>
      {[1, 2, 3, 4, 5].map((s) => {
        const active = s <= rounded;
        return (
          <button
            key={s}
            type="button"
            onClick={() => onSelect?.(s)}
            disabled={disabled}
            style={{
              ...styles.starBtn,
              ...(disabled ? styles.starBtnDisabled : {}),
            }}
          >
            <span
              style={{
                ...styles.star,
                ...(active ? styles.starActive : {}),
                ...(disabled ? styles.starDisabled : {}),
              }}
            >
              {active ? '★' : '☆'}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default function CallHistoryWeb() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLang();
  const { token, logout } = useAuthWeb();

  const tr = (key, vars = {}) => {
    let s = '';
    try {
      s = String(t(key, vars));
    } catch (e) {
      s = String(t(key));
    }

    Object.keys(vars).forEach((k) => {
      s = s.split(`{{${k}}}`).join(String(vars[k]));
    });

    return s;
  };

  const prettyStatusT = (status) => {
    if (status === 'finished') return t('callhist_status_finished');
    if (status === 'missed') return t('callhist_status_missed');
    if (status === 'ongoing') return t('callhist_status_ongoing');
    if (status === 'cancelled') return t('callhist_status_cancelled');
    return status || t('callhist_placeholder');
  };

  const prettyTypeT = (type) => {
    if (type === 'chat') return t('callhist_type_chat');
    if (type === 'voice') return t('callhist_type_voice');
    return t('callhist_placeholder');
  };

  const formatDateT = (iso) => {
    if (!iso) return t('callhist_placeholder');
    try {
      const d = new Date(iso);
      return d.toLocaleString();
    } catch {
      return t('callhist_placeholder');
    }
  };

  const getPsychicDisplayNameT = (p) => {
    return getPsychicDisplayName(p, t('callhist_psychic_fallback'));
  };

  const { filterPsychicId, psychicName: filterPsychicName } = useMemo(
    () => parseSearch(location.search),
    [location.search]
  );

  const [history, setHistory] = useState([]);
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [ratingBusyByCall, setRatingBusyByCall] = useState({});

  function normalizeItem(raw) {
    if (!raw) return null;

    if (raw?.id && (raw?.type === 'chat' || raw?.type === 'voice')) {
      return {
        _id: raw.id,
        type: raw.type,
        sessionType: raw.sessionType || (raw.type === 'chat' ? 'chat' : 'call'),
        status: raw.status,
        startedAt: raw.startedAt,
        endedAt: raw.endedAt,
        createdAt: raw.startedAt || raw.endedAt || null,
        durationSeconds: safeNum(raw.durationSeconds, 0),
        minutesCharged: safeNum(raw.minutesCharged, 0),
        endedReason: raw.endedReason || null,

        ratePerMinuteUsd: raw.ratePerMinuteUsd ?? null,
        payoutPerMinuteUsd: raw.payoutPerMinuteUsd ?? null,
        psychicEarningUsd: raw.psychicEarningUsd,

        otherUser: raw.otherUser || null,
        psychic: raw.otherUser || null,

        clientRating: raw.clientRating ?? null,
      };
    }

    if (raw?._id && raw?.psychic) {
      return {
        ...raw,
        type: 'voice',
        sessionType: 'call',
        otherUser: raw.psychic || null,
        payoutPerMinuteUsd: raw?.payoutPerMinuteUsd ?? null,
        ratePerMinuteUsd: raw?.ratePerMinuteUsd ?? null,
        psychicEarningUsd: raw?.psychicEarningUsd ?? undefined,
      };
    }

    return null;
  }

  const fetchHistory = useCallback(
    async (opts = { silent: false }) => {
      try {
        if (!API_URL) {
          window.alert(t('callhist_err_config_body'));
          return;
        }

        if (!opts.silent) setLoading(true);

        const authToken =
          token ||
          localStorage.getItem('auth_token') ||
          localStorage.getItem('token') ||
          sessionStorage.getItem('auth_token') ||
          sessionStorage.getItem('token');

        if (!authToken) {
          window.alert(t('callhist_err_session_body_token'));
          navigate('/');
          return;
        }

        const res = await fetch(buildApiUrl('/history/calls?limit=200'), {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
          },
        });

        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
          if (res.status === 401) {
            await logout();
            window.alert(t('callhist_err_session_body_login'));
            navigate('/');
            return;
          }
          throw new Error(data?.message || t('callhist_err_load'));
        }

        const items = Array.isArray(data?.items) ? data.items : [];
        const normalized = items.map(normalizeItem).filter(Boolean);

        setSummary(data?.summary || null);
        setHistory(normalized);
      } catch (err) {
        console.log('[CallHistoryWeb] fetchHistory error:', err);
        window.alert(err?.message || t('callhist_err_load'));
      } finally {
        if (!opts.silent) setLoading(false);
      }
    },
    [navigate, logout, t, token]
  );

  useEffect(() => {
    fetchHistory();
  }, [fetchHistory]);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchHistory({ silent: true });
    setRefreshing(false);
  };

  const filteredHistory = useMemo(() => {
    if (!filterPsychicId) return Array.isArray(history) ? history : [];

    return (Array.isArray(history) ? history : []).filter((it) => {
      const other = it?.otherUser || it?.psychic;
      const oid = other?._id || other?.id || null;
      return oid && String(oid) === String(filterPsychicId);
    });
  }, [history, filterPsychicId]);

  const summaryByOther = useMemo(() => {
    const map = new Map();
    const src = filterPsychicId ? filteredHistory : (Array.isArray(history) ? history : []);

    for (const c of src) {
      const other = c?.otherUser || c?.psychic;
      const oid = other?._id || other?.id || null;
      if (!oid) continue;

      const cur =
        map.get(oid) || {
          otherUser: other,
          callsVoice: 0,
          callsChat: 0,
          minutesVoice: 0,
          minutesChat: 0,
          sumStars: 0,
          countStars: 0,
        };

      const mins = safeNum(c?.minutesCharged, 0);

      if (c?.type === 'voice') {
        cur.callsVoice += 1;
        cur.minutesVoice += mins;

        const stars = safeNum(c?.clientRating, 0);
        if (stars > 0) {
          cur.sumStars += stars;
          cur.countStars += 1;
        }
      } else if (c?.type === 'chat') {
        cur.callsChat += 1;
        cur.minutesChat += mins;
      }

      map.set(oid, cur);
    }

    const arr = Array.from(map.values()).map((x) => ({
      ...x,
      callsTotal: x.callsVoice + x.callsChat,
      minutesTotal: x.minutesVoice + x.minutesChat,
      avg: x.countStars > 0 ? x.sumStars / x.countStars : 0,
    }));

    arr.sort((a, b) => {
      if (a.callsTotal !== b.callsTotal) return b.callsTotal - a.callsTotal;
      return b.minutesTotal - a.minutesTotal;
    });

    return arr;
  }, [history, filteredHistory, filterPsychicId]);

  const rateCall = async (callId, stars) => {
    try {
      if (!API_URL) return;

      const authToken =
        token ||
        localStorage.getItem('auth_token') ||
        localStorage.getItem('token') ||
        sessionStorage.getItem('auth_token') ||
        sessionStorage.getItem('token');

      if (!authToken) {
        window.alert(t('callhist_err_session_body_login'));
        navigate('/');
        return;
      }

      setRatingBusyByCall((prev) => ({ ...prev, [callId]: true }));

      const res = await fetch(buildApiUrl('/calls/rate'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({ callId, stars }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (res.status === 401) {
          await logout();
          window.alert(t('callhist_err_session_body_login'));
          navigate('/');
          return;
        }
        throw new Error(data?.message || t('callhist_err_rate_save'));
      }

      setHistory((prev) => prev.map((c) => (c?._id === callId ? { ...c, clientRating: stars } : c)));
      window.alert(t('callhist_rate_saved'));
    } catch (err) {
      console.log('[CallHistoryWeb] rateCall error:', err);
      window.alert(err?.message || t('callhist_err_rate_save'));
    } finally {
      setRatingBusyByCall((prev) => ({ ...prev, [callId]: false }));
    }
  };

  const openOtherProfile = (item) => {
    const other = item?.otherUser || item?.psychic;
    const looksLikePsychic = !!(other?.psychicName || other?.rating != null || other?.ratingsCount != null);
    if (!looksLikePsychic) return;

    const psychic = other;
    const pid = psychic?._id || psychic?.id || null;
    if (!pid) return;

    const params = new URLSearchParams({
      psychicId: String(pid),
    });

    if (psychic?.psychicName) {
      params.set('psychicName', String(psychic.psychicName));
    }

    navigate(`/psychic-profile?${params.toString()}`);
  };

  const renderTopSummary = () => {
    if (!summary) return null;

    const role = summary?.role;

    if (role === 'cliente') {
      const available = safeNum(summary?.minutesAvailable, 0);
      const spentCalls = safeNum(summary?.minutesSpentCalls, 0);
      const spentChats = safeNum(summary?.minutesSpentChats, 0);
      const spentTotal = safeNum(summary?.minutesSpentTotal, spentCalls + spentChats);

      return (
        <div style={styles.card}>
          <div style={styles.cardTitle}>{t('callhist_summary_minutes_title')}</div>
          <div style={styles.summaryItem}>
            {t('callhist_minutes_available')}: <span style={styles.valueStrong}>{available}</span>
          </div>
          <div style={styles.summaryItem}>
            {t('callhist_minutes_spent_calls')}: <span style={styles.valueStrong}>{spentCalls}</span>
          </div>
          <div style={styles.summaryItem}>
            {t('callhist_minutes_spent_chats')}: <span style={styles.valueStrong}>{spentChats}</span>
          </div>
          <div style={styles.summaryItem}>
            {t('callhist_minutes_spent_total')}: <span style={styles.valueStrong}>{spentTotal}</span>
          </div>
        </div>
      );
    }

    if (role === 'psiquico') {
      const earnedCalls = safeNum(summary?.minutesEarnedCalls, 0);
      const earnedChats = safeNum(summary?.minutesEarnedChats, 0);
      const earnedTotal = safeNum(summary?.minutesEarnedTotal, earnedCalls + earnedChats);
      const earningsUsd = safeNum(summary?.earningsTotalUsd, 0);

      return (
        <div style={styles.card}>
          <div style={styles.cardTitle}>{t('callhist_summary_earnings_title')}</div>
          <div style={styles.summaryItem}>
            {t('callhist_minutes_earned_calls')}: <span style={styles.valueStrong}>{earnedCalls}</span>
          </div>
          <div style={styles.summaryItem}>
            {t('callhist_minutes_earned_chats')}: <span style={styles.valueStrong}>{earnedChats}</span>
          </div>
          <div style={styles.summaryItem}>
            {t('callhist_minutes_earned_total')}: <span style={styles.valueStrong}>{earnedTotal}</span>
          </div>
          <div style={styles.summaryItem}>
            {t('callhist_earnings_total')}: <span style={styles.valueStrong}>${earningsUsd.toFixed(2)} USD</span>
          </div>
        </div>
      );
    }

    return null;
  };

  function computePsychicEarningUsd(item) {
    const v = Number(item?.psychicEarningUsd);
    if (Number.isFinite(v)) return v;

    const mins = safeNum(item?.minutesCharged, 0);
    const payout = safeNum(item?.payoutPerMinuteUsd, DEFAULT_PSYCHIC_PAYOUT_PER_MINUTE_USD);
    const calc = mins * payout;

    return Number.isFinite(calc) ? calc : 0;
  }

  const renderCall = (item) => {
    const other = item?.otherUser || item?.psychic;
    const displayName = getPsychicDisplayNameT(other);

    const status = item?.status;
    const startedAt = item?.startedAt || item?.createdAt;
    const endedAt = item?.endedAt;

    const minutesBackend = safeNum(item?.minutesCharged, 0);
    const secs = safeNum(item?.durationSeconds, 0);

    const uiMinutes = secs === 0 ? 0 : minutesBackend;
    const noChargeLabel = secs === 0 ? t('callhist_no_charge') : '';

    const isVoice = item?.type === 'voice';
    const currentRating = item?.clientRating;
    const hasRating = Number.isFinite(Number(currentRating)) && Number(currentRating) >= 1;
    const canRate = isVoice && status === 'finished' && !hasRating;
    const busy = !!ratingBusyByCall[item?._id];

    const canShowEarningUsd =
      summary?.role === 'psiquico' &&
      status === 'finished' &&
      minutesBackend > 0 &&
      secs > 0;

    const earningLine = canShowEarningUsd
      ? tr('callhist_earning_line', { usd: computePsychicEarningUsd(item).toFixed(2) })
      : '';

    const rateRaw = Number(item?.ratePerMinuteUsd);
    const canShowCostUsd =
      summary?.role === 'cliente' &&
      status === 'finished' &&
      minutesBackend > 0 &&
      secs > 0 &&
      Number.isFinite(rateRaw) &&
      rateRaw > 0;

    const costLine = canShowCostUsd
      ? ` · ${tr('callhist_cost_line', { usd: (uiMinutes * rateRaw).toFixed(2) })}`
      : '';

    return (
      <div
        key={item?._id}
        style={styles.callCard}
        onClick={() => openOtherProfile(item)}
      >
        <div style={styles.callTopRow}>
          <div style={styles.callTitle}>{displayName}</div>
          <div style={styles.callStatus}>{prettyStatusT(status)}</div>
        </div>

        <div style={styles.callMeta}>
          {prettyTypeT(item?.type)} · {t('callhist_start')}: {formatDateT(startedAt)}
          {endedAt ? ` · ${t('callhist_end')}: ${formatDateT(endedAt)}` : ''}
        </div>

        <div style={styles.callMeta}>
          {tr('callhist_duration', { secs })} · {tr('callhist_minutes_charged', { mins: uiMinutes })}
          {earningLine}
          {costLine}
          {noChargeLabel}
        </div>

        {isVoice ? (
          <div
            style={styles.rateBox}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div style={styles.rateLabel}>
              {currentRating > 0
                ? tr('callhist_rate_your_rating', { rating: currentRating })
                : t('callhist_rate_prompt')}
            </div>

            <StarsRow
              value={currentRating > 0 ? currentRating : 0}
              disabled={!canRate || busy}
              onSelect={(stars) => {
                if (!canRate) return;
                const ok = window.confirm(tr('callhist_rate_confirm_body', { stars }));
                if (ok) rateCall(item._id, stars);
              }}
            />

            {busy ? <div style={styles.savingTxt}>{t('callhist_rate_saving')}</div> : null}
          </div>
        ) : null}
      </div>
    );
  };

  const titleText = filterPsychicName
    ? `${t('callhist_title_with_name')}: ${filterPsychicName}`
    : t('callhist_title_default');

  const visibleHistory = filterPsychicId ? filteredHistory : (Array.isArray(history) ? history : []);

  return (
    <AppLayoutWeb
      title={t('callhist_header_title')}
      showBack={true}
      backTo="/dashboard"
      rightSlot={
        <button
          type="button"
          style={{
            ...styles.btnPrimary,
            ...(refreshing ? styles.disabledBtn : {}),
          }}
          onClick={onRefresh}
          disabled={refreshing}
        >
          {refreshing ? t('callhist_loading') : t('callhist_refresh')}
        </button>
      }
    >
      <div style={styles.content}>
        <div style={styles.headerBlock}>
          <h1 style={styles.title}>{titleText}</h1>

          <div style={styles.headerActions}>
            <button type="button" style={styles.btnOutline} onClick={() => navigate('/dashboard')}>
              {t('callhist_back_dashboard')}
            </button>
          </div>
        </div>

        {!filterPsychicId ? renderTopSummary() : null}

        <div style={styles.card}>
          <div style={styles.cardTitle}>
            {summary?.role === 'psiquico'
              ? t('callhist_summary_by_client')
              : t('callhist_summary_by_psychic')}
          </div>

          {summaryByOther.length ? (
            summaryByOther.slice(0, 6).map((x) => {
              const key = x?.otherUser?._id || x?.otherUser?.id;
              const name = getPsychicDisplayNameT(x?.otherUser);

              return (
                <div key={key} style={styles.summaryLine}>
                  • {name} — 📞 {x.callsVoice} ({x.minutesVoice}m) · 💬 {x.callsChat} ({x.minutesChat}m)
                  {x.avg > 0 ? ` · ⭐ ${x.avg.toFixed(2)}` : ''}
                </div>
              );
            })
          ) : (
            <div style={styles.mutedText}>{t('callhist_not_enough_data')}</div>
          )}
        </div>

        {loading ? (
          <div style={styles.loadingBox}>
            <div style={styles.loader} />
            <div style={styles.loadingText}>{t('callhist_loading')}</div>
          </div>
        ) : visibleHistory.length ? (
          <div style={styles.listWrap}>{visibleHistory.map(renderCall)}</div>
        ) : (
          <div style={styles.empty}>{t('callhist_empty')}</div>
        )}
      </div>
    </AppLayoutWeb>
  );
}

const styles = {
  content: {
    padding: '0',
  },

  headerBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '12px',
  },

  headerActions: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  },

  title: {
    fontSize: '24px',
    fontWeight: 700,
    color: '#311B92',
    margin: 0,
    lineHeight: 1.15,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    padding: '16px',
    marginBottom: '12px',
    boxShadow: '0 2px 8px rgba(60, 20, 110, 0.08)',
    textAlign: 'left',
  },

  cardTitle: {
    fontSize: '16px',
    fontWeight: 700,
    color: '#4527A0',
    marginBottom: '8px',
  },

  summaryItem: {
    color: '#555',
    marginBottom: '6px',
    lineHeight: 1.5,
    fontSize: '14px',
  },

  valueStrong: {
    color: '#311B92',
    fontWeight: 800,
  },

  summaryLine: {
    color: '#555',
    marginBottom: '6px',
    lineHeight: 1.5,
    fontSize: '14px',
  },

  callCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    padding: '16px',
    marginBottom: '12px',
    boxShadow: '0 2px 8px rgba(60, 20, 110, 0.08)',
    textAlign: 'left',
    cursor: 'pointer',
  },

  callTopRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '10px',
    flexWrap: 'wrap',
  },

  callTitle: {
    fontSize: '16px',
    fontWeight: 700,
    color: '#311B92',
    flex: 1,
    minWidth: '160px',
  },

  callStatus: {
    color: '#4B6BFB',
    fontWeight: 700,
    fontSize: '13px',
  },

  callMeta: {
    color: '#555',
    marginTop: '6px',
    lineHeight: 1.5,
    fontSize: '14px',
  },

  rateBox: {
    marginTop: '10px',
    borderTop: '1px solid #EEE7F7',
    paddingTop: '10px',
  },

  rateLabel: {
    color: '#444',
    marginBottom: '6px',
    fontWeight: 700,
    fontSize: '14px',
  },

  starsRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '2px',
  },

  starBtn: {
    background: 'transparent',
    border: 'none',
    padding: '4px',
    cursor: 'pointer',
  },

  starBtnDisabled: {
    cursor: 'not-allowed',
  },

  star: {
    fontSize: '22px',
    color: '#999',
    lineHeight: 1,
  },

  starActive: {
    color: '#F4B400',
  },

  starDisabled: {
    opacity: 0.6,
  },

  savingTxt: {
    marginTop: '6px',
    color: '#777',
    fontSize: '13px',
  },

  mutedText: {
    color: '#777',
    fontSize: '14px',
  },

  empty: {
    marginTop: '20px',
    textAlign: 'center',
    color: '#777',
    fontSize: '14px',
  },

  loadingBox: {
    marginTop: '20px',
    background: '#FFFFFF',
    borderRadius: '16px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    boxShadow: '0 2px 8px rgba(60, 20, 110, 0.08)',
  },

  loadingText: {
    color: '#777',
    fontSize: '14px',
  },

  loader: {
    width: '18px',
    height: '18px',
    border: '3px solid #ddd',
    borderTop: '3px solid #4B6BFB',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },

  listWrap: {
    paddingBottom: '20px',
  },

  btnPrimary: {
    backgroundColor: '#4B6BFB',
    color: '#fff',
    border: 'none',
    borderRadius: '12px',
    padding: '10px 12px',
    fontWeight: 700,
    fontSize: '12px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },

  btnOutline: {
    backgroundColor: '#FFFFFF',
    color: '#4B6BFB',
    border: '1px solid #4B6BFB',
    borderRadius: '12px',
    padding: '12px 14px',
    fontWeight: 700,
    fontSize: '14px',
    cursor: 'pointer',
  },

  disabledBtn: {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
};