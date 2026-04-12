// screens/ClientDashboardWeb.jsx
import React, { useEffect, useMemo, useState, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuthWeb } from '../context/AuthContextWeb';
import { useLang } from '../context/LanguageContext';
import AppLayoutWeb from '../components/layout/AppLayoutWeb.jsx';

// ✅ ÚNICA fuente de verdad para backend (incluye /api y normaliza slashes)
import { API_BASE_URL } from '../config/env.web.js';

function prettyStatus(status, t) {
  const s = String(status || '').toLowerCase().trim();

  if (s === 'finished') return t('clientdash_status_finished');
  if (s === 'missed') return t('clientdash_status_missed');
  if (s === 'ongoing') return t('clientdash_status_ongoing');
  if (s === 'cancelled' || s === 'canceled') return t('clientdash_status_cancelled');

  return status ? String(status) : t('clientdash_status_unknown');
}

function getPsychicDisplayName(p, t) {
  const candidates = [
    p?.psychicName,
    p?.nombrePsiquico,
    p?.stageName,
    p?.displayName,
    p?.nickname,
    p?.name,
  ];
  const found = candidates.map((x) => (x ? String(x).trim() : '')).find(Boolean);
  return found || t('common.psychic');
}

export default function ClientDashboardWeb() {
  const navigate = useNavigate();
  const { user, token, logout } = useAuthWeb();
  const { t } = useLang();

  const tr = (key, vars = {}) => {
    let base = '';
    try {
      base = String(t(key, vars));
    } catch (e) {
      base = String(t(key));
    }

    Object.keys(vars).forEach((k) => {
      base = base.split(`{{${k}}}`).join(String(vars[k]));
    });

    return base;
  };

  const nameRaw = user?.name || t('clientdash_default_name');
  const name = String(nameRaw || '').trim() || t('clientdash_default_name');

  const [minutes, setMinutes] = useState(null);
  const [callsCount, setCallsCount] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      if (!API_BASE_URL) {
        window.alert(t('clientdash_error_config_body'));
        return;
      }

      setLoading(true);

      const authToken =
        token ||
        localStorage.getItem('auth_token') ||
        localStorage.getItem('token') ||
        sessionStorage.getItem('auth_token') ||
        sessionStorage.getItem('token');

      if (!authToken) {
        window.alert(t('clientdash_session_expired_body'));
        navigate('/');
        return;
      }

      const headers = { Authorization: `Bearer ${authToken}` };

      const balancePromise = axios.get(`${API_BASE_URL}/minutes/balance`, { headers });
      const historyPromise = axios.get(`${API_BASE_URL}/history/calls?limit=100`, { headers });

      const [balanceRes, historyRes] = await Promise.all([balancePromise, historyPromise]);

      const unified = Array.isArray(historyRes.data?.items) ? historyRes.data.items : [];
      const summary = historyRes.data?.summary || null;

      setMinutes(balanceRes.data?.minutes ?? summary?.minutesAvailable ?? 0);
      setCallsCount(unified.length);

      const normalized = unified.map((item) => ({
        _id: item.id || item._id,
        status: item.status,
        clientRating: item.clientRating ?? null,
        psychic: item.otherUser
          ? {
              _id: item.otherUser.id || item.otherUser._id,
              name: item.otherUser.name || '',
              psychicName: item.otherUser.psychicName || '',
              photo: item.otherUser.photo || '',
            }
          : null,
      }));

      setHistory(normalized);
    } catch (err) {
      const status = err?.response?.status;
      const msg = err?.response?.data?.message || err?.message;
      console.log('[ClientDashboardWeb] fetchData error:', status, msg);

      if (status === 401) {
        await logout();
        window.alert(t('clientdash_session_expired_body'));
        navigate('/');
        return;
      }

      window.alert(t('clientdash_error_body'));
    } finally {
      setLoading(false);
    }
  }, [navigate, t, token, logout]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    const handleFocus = () => {
      fetchData();
    };

    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        fetchData();
      }
    };

    window.addEventListener('focus', handleFocus);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      window.removeEventListener('focus', handleFocus);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [fetchData]);

  const handleGoToDirectCall = () => {
    navigate('/home');
  };

  const handleGoToChat = async () => {
    try {
      const raw =
        localStorage.getItem('lp_last_chat_psychic') ||
        sessionStorage.getItem('lp_last_chat_psychic');

      if (!raw) {
        window.alert(t('clientdash_select_psychic_body'));
        navigate('/home');
        return;
      }

      let snap = null;
      try {
        snap = JSON.parse(raw);
      } catch (e) {
        localStorage.removeItem('lp_last_chat_psychic');
        sessionStorage.removeItem('lp_last_chat_psychic');
      }

      const psychicId = snap?.psychicId ? String(snap.psychicId) : null;
      if (!psychicId) {
        window.alert(t('clientdash_select_psychic_body'));
        navigate('/home');
        return;
      }

      const params = new URLSearchParams({
        otherUserId: psychicId,
        otherUserName: snap?.psychicName || t('common.psychic'),
        otherUserAvailable: 'true',
      });

      navigate(`/chat?${params.toString()}`);
    } catch (e) {
      window.alert(t('clientdash_chat_error_body'));
    }
  };

  const handleBuyMinutes = () => {
    navigate('/buy-minutes');
  };

  const handleGoToHistory = () => {
    navigate('/call-history');
  };

  const handleDeleteAccount = () => {
    navigate('/delete-account');
  };

  const lastCalls = useMemo(() => {
    const arr = Array.isArray(history) ? history : [];
    return arr.slice(0, 5);
  }, [history]);

  const minutesNum = Number(minutes);
  const hasMinutesValue = minutes !== null && Number.isFinite(minutesNum);
  const lowMinutesThreshold = 2;
  const showNoMinutesBanner = !loading && hasMinutesValue && minutesNum <= 0;
  const showLowMinutesBanner =
    !loading && hasMinutesValue && minutesNum > 0 && minutesNum <= lowMinutesThreshold;

  return (
    <AppLayoutWeb
      title={t('clientdash_header_title')}
      showBack={true}
      backTo="/home"
    >
      <div style={styles.content}>
        <div style={styles.heroCard}>
          <div style={styles.kicker}>{t('clientdash_brand_kicker')}</div>
          <h1 style={styles.title}>{t('clientdash_title')}</h1>
          <p style={styles.subtitle}>{tr('clientdash_subtitle', { name })}</p>

          <div style={styles.heroMinutesBox}>
            <div style={styles.heroMinutesLabel}>{t('clientdash_minutes_available')}</div>
            <div style={styles.heroMinutesValue}>{minutes !== null ? minutes : '—'}</div>
          </div>
        </div>

        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statTopRow}>
              <span style={styles.statEmoji}>⏳</span>
              <span style={styles.statLabel}>{t('clientdash_minutes_available')}</span>
            </div>
            <div style={styles.statValue}>{minutes !== null ? minutes : '—'}</div>
          </div>

          <div style={styles.statCard}>
            <div style={styles.statTopRow}>
              <span style={styles.statEmoji}>📞</span>
              <span style={styles.statLabel}>{t('clientdash_calls_made')}</span>
            </div>
            <div style={styles.statValue}>{callsCount !== null ? callsCount : '—'}</div>
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.cardTitle}>{t('clientdash_quick_summary')}</h2>
            <div style={styles.sectionPill}>{t('clientdash_summary_badge')}</div>
          </div>

          {loading ? (
            <div style={styles.loadingWrap}>
              <div style={styles.loader} />
              <p style={styles.loadingText}>{t('clientdash_loading_info')}</p>
            </div>
          ) : (
            <>
              <p style={styles.item}>
                {t('clientdash_minutes_available')}{' '}
                <span style={styles.itemHighlight}>{minutes !== null ? minutes : '—'}</span>
              </p>

              <p style={styles.item}>
                {t('clientdash_calls_made')}{' '}
                <span style={styles.itemHighlight}>{callsCount !== null ? callsCount : '—'}</span>
              </p>

              {showNoMinutesBanner && (
                <div style={styles.warnBox}>
                  <div style={styles.warnTitle}>{t('clientdash_no_minutes_title')}</div>
                  <div style={styles.warnBody}>{t('clientdash_no_minutes_body')}</div>

                  <button type="button" style={styles.warnBtn} onClick={handleBuyMinutes}>
                    {t('clientdash_buy_minutes')}
                  </button>
                </div>
              )}

              {showLowMinutesBanner && (
                <div style={styles.warnBoxSoft}>
                  <div style={styles.warnTitleSoft}>{t('clientdash_low_minutes_title')}</div>
                  <div style={styles.warnBodySoft}>
                    {tr('clientdash_low_minutes_body', { n: minutesNum })}
                  </div>

                  <button type="button" style={styles.warnBtnSoft} onClick={handleBuyMinutes}>
                    {t('clientdash_buy_minutes')}
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        <div style={styles.card}>
          <div style={styles.sectionHeader}>
            <div>
              <h2 style={styles.cardTitle}>{t('clientdash_last_calls')}</h2>
              <div style={styles.sectionMiniText}>{t('clientdash_recent_activity')}</div>
            </div>

            <button
              type="button"
              onClick={handleGoToHistory}
              disabled={loading}
              style={{
                ...styles.linkBtn,
                ...(loading ? styles.disabledBtn : {}),
              }}
            >
              {t('clientdash_view_history')}
            </button>
          </div>

          {loading ? (
            <p style={styles.mutedText}>{t('clientdash_loading_history')}</p>
          ) : lastCalls.length ? (
            <div style={styles.listWrap}>
              {lastCalls.map((c) => {
                const display = getPsychicDisplayName(c?.psychic, t);
                return (
                  <div key={c._id} style={styles.callRow}>
                    <div style={styles.callDot} />
                    <div style={styles.callContent}>
                      <div style={styles.callPrimary}>{display}</div>
                      <div style={styles.callSecondary}>
                        {prettyStatus(c.status, t)} · ⭐ {c?.clientRating ?? '—'}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p style={styles.mutedText}>{t('clientdash_no_calls')}</p>
          )}

          <button
            type="button"
            style={{
              ...styles.btnSecondary,
              ...(loading ? styles.disabledBtn : {}),
            }}
            onClick={handleGoToHistory}
            disabled={loading}
          >
            {t('clientdash_view_full_history')}
          </button>
        </div>

        <div style={styles.card}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.cardTitle}>{t('clientdash_actions')}</h2>
            <div style={styles.sectionPill}>{t('clientdash_actions_badge')}</div>
          </div>

          <div style={styles.actionsGrid}>
            <button type="button" style={styles.btnPrimary} onClick={handleGoToDirectCall}>
              {t('clientdash_go_psychics')}
            </button>

            <button type="button" style={styles.btnOutline} onClick={handleGoToChat}>
              {t('clientdash_go_chat')}
            </button>

            <button type="button" style={styles.btnSoftPurple} onClick={handleBuyMinutes}>
              {t('clientdash_buy_minutes')}
            </button>
          </div>

          <div style={styles.deleteBox}>
            <div style={styles.deleteTitle}>{t('clientdash_delete_account_title')}</div>
            <div style={styles.deleteBody}>{t('clientdash_delete_account_body')}</div>

            <button
              type="button"
              style={styles.deleteBtn}
              onClick={handleDeleteAccount}
            >
              {t('clientdash_delete_account_cta')}
            </button>
          </div>
        </div>
      </div>
    </AppLayoutWeb>
  );
}

const styles = {
  content: {
    padding: '0',
  },

  heroCard: {
    background: '#FFFFFF',
    borderRadius: '16px',
    padding: '16px',
    marginBottom: '12px',
    boxShadow: '0 2px 8px rgba(60, 20, 110, 0.08)',
  },

  kicker: {
    display: 'inline-block',
    fontSize: '12px',
    fontWeight: 700,
    color: '#7E57C2',
    marginBottom: '8px',
  },

  title: {
    fontSize: '24px',
    lineHeight: 1.15,
    fontWeight: 700,
    color: '#311B92',
    margin: '0 0 6px 0',
  },

  subtitle: {
    color: '#555',
    fontSize: '14px',
    lineHeight: 1.45,
    margin: '0 0 14px 0',
  },

  heroMinutesBox: {
    background: '#F3E5F5',
    borderRadius: '12px',
    padding: '12px 14px',
  },

  heroMinutesLabel: {
    color: '#6A1B9A',
    fontSize: '12px',
    fontWeight: 700,
    marginBottom: '4px',
  },

  heroMinutesValue: {
    color: '#4A148C',
    fontSize: '22px',
    fontWeight: 800,
    lineHeight: 1,
  },

  statsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
    marginBottom: '12px',
  },

  statCard: {
    background: '#FFFFFF',
    borderRadius: '16px',
    padding: '14px',
    boxShadow: '0 2px 8px rgba(60, 20, 110, 0.08)',
  },

  statTopRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '8px',
  },

  statEmoji: {
    fontSize: '16px',
    lineHeight: 1,
  },

  statLabel: {
    color: '#666',
    fontSize: '12px',
    fontWeight: 600,
  },

  statValue: {
    color: '#311B92',
    fontSize: '24px',
    fontWeight: 800,
    lineHeight: 1,
  },

  card: {
    background: '#FFFFFF',
    borderRadius: '16px',
    padding: '16px',
    marginBottom: '12px',
    boxShadow: '0 2px 8px rgba(60, 20, 110, 0.08)',
  },

  sectionHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '10px',
    flexWrap: 'wrap',
    marginBottom: '10px',
  },

  sectionPill: {
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: '999px',
    background: '#F5F1FF',
    color: '#4A148C',
    padding: '5px 10px',
    fontSize: '12px',
    fontWeight: 700,
  },

  sectionMiniText: {
    color: '#777',
    fontSize: '12px',
    marginTop: '3px',
  },

  cardTitle: {
    fontSize: '16px',
    fontWeight: 700,
    margin: 0,
    color: '#4527A0',
  },

  item: {
    color: '#555',
    margin: '0 0 8px 0',
    lineHeight: 1.5,
    fontSize: '14px',
  },

  itemHighlight: {
    fontWeight: 800,
    color: '#311B92',
  },

  listWrap: {
    marginTop: '8px',
  },

  callRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    padding: '10px 0',
    borderBottom: '1px solid #EEE7F7',
  },

  callDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#7C4DFF',
    marginTop: '7px',
    flexShrink: 0,
  },

  callContent: {
    minWidth: 0,
  },

  callPrimary: {
    color: '#311B92',
    fontWeight: 700,
    fontSize: '14px',
    marginBottom: '2px',
  },

  callSecondary: {
    color: '#777',
    fontSize: '13px',
    lineHeight: 1.45,
  },

  mutedText: {
    color: '#777',
    margin: '8px 0 0 0',
    lineHeight: 1.5,
    fontSize: '14px',
  },

  loadingWrap: {
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '6px 0',
  },

  loadingText: {
    margin: 0,
    color: '#666',
    fontSize: '14px',
  },

  loader: {
    width: '18px',
    height: '18px',
    border: '3px solid #E3D8FF',
    borderTop: '3px solid #6D44E0',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    flexShrink: 0,
  },

  linkBtn: {
    background: '#F5F1FF',
    border: '1px solid #DDD1FF',
    padding: '8px 12px',
    color: '#4A148C',
    fontWeight: 700,
    cursor: 'pointer',
    fontSize: '13px',
    borderRadius: '10px',
  },

  btnSecondary: {
    width: '100%',
    borderRadius: '12px',
    padding: '12px 14px',
    textAlign: 'center',
    marginTop: '12px',
    background: '#EDE7F6',
    color: '#4A148C',
    fontWeight: 700,
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
  },

  actionsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '10px',
    marginTop: '6px',
  },

  btnPrimary: {
    width: '100%',
    background: '#4B6BFB',
    color: '#fff',
    border: 'none',
    borderRadius: '12px',
    padding: '12px 14px',
    textAlign: 'center',
    fontWeight: 700,
    fontSize: '14px',
    cursor: 'pointer',
  },

  btnOutline: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    color: '#4B6BFB',
    border: '1px solid #4B6BFB',
    borderRadius: '12px',
    padding: '12px 14px',
    textAlign: 'center',
    fontWeight: 700,
    fontSize: '14px',
    cursor: 'pointer',
  },

  btnSoftPurple: {
    width: '100%',
    background: '#EDE7F6',
    color: '#4A148C',
    border: 'none',
    borderRadius: '12px',
    padding: '12px 14px',
    textAlign: 'center',
    fontWeight: 700,
    fontSize: '14px',
    cursor: 'pointer',
  },

  deleteBox: {
    marginTop: '16px',
    background: '#FFF1F3',
    border: '1px solid #FCCFD4',
    borderRadius: '14px',
    padding: '14px',
  },

  deleteTitle: {
    color: '#B42318',
    fontWeight: 800,
    fontSize: '15px',
    marginBottom: '8px',
  },

  deleteBody: {
    color: '#7A271A',
    fontSize: '14px',
    lineHeight: 1.6,
    fontWeight: 600,
    marginBottom: '14px',
  },

  deleteBtn: {
    width: '100%',
    background: '#E52D1F',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '12px',
    padding: '13px 14px',
    textAlign: 'center',
    fontWeight: 800,
    fontSize: '14px',
    cursor: 'pointer',
  },

  disabledBtn: {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  warnBox: {
    marginTop: '12px',
    padding: '14px',
    borderRadius: '12px',
    background: '#FFF3E0',
    border: '1px solid #FFE0B2',
  },

  warnTitle: {
    color: '#D45A00',
    fontWeight: 800,
    marginBottom: '6px',
    fontSize: '14px',
  },

  warnBody: {
    color: '#6D4C41',
    fontWeight: 500,
    lineHeight: 1.5,
    fontSize: '14px',
  },

  warnBtn: {
    marginTop: '10px',
    background: '#7C4DFF',
    color: '#fff',
    border: 'none',
    padding: '10px 14px',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: 700,
    fontSize: '14px',
  },

  warnBoxSoft: {
    marginTop: '12px',
    padding: '14px',
    borderRadius: '12px',
    background: '#E3F2FD',
    border: '1px solid #BBDEFB',
  },

  warnTitleSoft: {
    color: '#0D47A1',
    fontWeight: 800,
    marginBottom: '6px',
    fontSize: '14px',
  },

  warnBodySoft: {
    color: '#1A237E',
    fontWeight: 500,
    lineHeight: 1.5,
    fontSize: '14px',
  },

  warnBtnSoft: {
    marginTop: '10px',
    background: '#4B6BFB',
    color: '#fff',
    border: 'none',
    padding: '10px 14px',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: 700,
    fontSize: '14px',
  },
};