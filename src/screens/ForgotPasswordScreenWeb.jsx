// screens/ForgotPasswordScreenWeb.jsx
import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLang } from "../context/LanguageContext.jsx";
import { API_BASE_URL } from "../config/env.web.js";
import logoLp from "../assets/icon.png";
import AppLayoutWeb from "../components/layout/AppLayoutWeb.jsx";

export default function ForgotPasswordScreenWeb() {
  const navigate = useNavigate();
  const { t } = useLang();

  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [code, setCode] = useState("");
  const [newPass, setNewPass] = useState("");
  const [newPass2, setNewPass2] = useState("");

  const [showNewPass, setShowNewPass] = useState(false);
  const [showNewPass2, setShowNewPass2] = useState(false);

  const [sending, setSending] = useState(false);
  const [resetting, setResetting] = useState(false);
  const [step, setStep] = useState(1);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const looksLikeEmail = useCallback((value) => {
    return /\S+@\S+\.\S+/.test(String(value || "").trim());
  }, []);

  const normalizeEmail = useCallback((value) => {
    return String(value || "").trim().toLowerCase();
  }, []);

  const normalizePhone = useCallback((value) => {
    let v = String(value || "").trim();
    const hasPlus = v.startsWith("+");

    v = v.replace(/[^\d+]/g, "");
    v = v.replace(/\+/g, "");

    if (hasPlus) v = `+${v}`;
    return v;
  }, []);

  const isValidInternationalPhone = useCallback((value) => {
    return /^\+\d{8,15}$/.test(String(value || "").trim());
  }, []);

  const normalizedIdentifier = useMemo(() => {
    const raw = String(emailOrPhone || "").trim();
    if (!raw) return "";
    return looksLikeEmail(raw) ? normalizeEmail(raw) : normalizePhone(raw);
  }, [emailOrPhone, looksLikeEmail, normalizeEmail, normalizePhone]);

  const isEmail = useMemo(() => looksLikeEmail(emailOrPhone), [emailOrPhone, looksLikeEmail]);

  const resetStepTwoFields = useCallback(() => {
    setCode("");
    setNewPass("");
    setNewPass2("");
    setShowNewPass(false);
    setShowNewPass2(false);
  }, []);

  const requestCode = async () => {
    if (!emailOrPhone.trim()) {
      setError(t("forgot_required_email_or_phone"));
      setMessage("");
      return;
    }

    if (!isEmail && !isValidInternationalPhone(normalizedIdentifier)) {
      setError(t("forgot_invalid_phone_body"));
      setMessage("");
      return;
    }

    try {
      setSending(true);
      setError("");
      setMessage("");

      const payload = isEmail
        ? { email: normalizedIdentifier }
        : { phone: normalizedIdentifier };

      const res = await fetch(`${API_BASE_URL}/users/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.message || t("forgot_error_send_code"));
      }

      resetStepTwoFields();
      setStep(2);

      setMessage(
        isEmail
          ? t("forgot_done_body_email")
          : t("forgot_done_body_sms")
      );
    } catch (e) {
      setError(e?.message || t("forgot_error_send_code"));
      setMessage("");
    } finally {
      setSending(false);
    }
  };

  const doReset = async () => {
    const codeClean = String(code || "").replace(/\D+/g, "").trim();

    if (!codeClean) {
      setError(t("forgot_required_code"));
      setMessage("");
      return;
    }

    if (!newPass || newPass.length < 6) {
      setError(t("forgot_weak_password_body"));
      setMessage("");
      return;
    }

    if (newPass !== newPass2) {
      setError(t("forgot_not_match_body"));
      setMessage("");
      return;
    }

    if (!isEmail && !isValidInternationalPhone(normalizedIdentifier)) {
      setError(t("forgot_invalid_phone_body"));
      setMessage("");
      return;
    }

    try {
      setResetting(true);
      setError("");
      setMessage("");

      const payload = {
        code: codeClean,
        newPassword: newPass,
        ...(isEmail ? { email: normalizedIdentifier } : { phone: normalizedIdentifier }),
      };

      const res = await fetch(`${API_BASE_URL}/users/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.message || t("forgot_error_reset"));
      }

      setMessage(t("forgot_password_updated_body"));
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 1600);
    } catch (e) {
      setError(e?.message || t("forgot_error_reset"));
      setMessage("");
    } finally {
      setResetting(false);
    }
  };

  const handleResendCode = async () => {
    if (sending || resetting) return;
    await requestCode();
  };

  return (
    <AppLayoutWeb
      title={t("forgot_header_title")}
      showBack={true}
      backTo="/"
    >
      <div style={styles.content}>
        <div style={styles.card}>
          <div style={styles.logoWrap}>
            <img src={logoLp} alt={t("forgot_logo_alt")} style={styles.logoImg} />
          </div>

          <h1 style={styles.title}>{t("forgot_title")}</h1>
          <p style={styles.subtitle}>{t("forgot_subtitle")}</p>

          <label style={styles.label}>{t("forgot_field_label_email_or_phone")}</label>
          <input
            type="text"
            placeholder={t("forgot_placeholder_email_or_phone")}
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            style={styles.input}
            disabled={sending || resetting}
          />

          <p style={styles.helperText}>
            {t("login_phone_helper")}
          </p>

          {step === 1 && (
            <button
              type="button"
              style={{
                ...styles.button,
                ...(sending ? styles.buttonDisabled : {}),
              }}
              onClick={requestCode}
              disabled={sending}
            >
              {t("forgot_send_code")}
            </button>
          )}

          {step === 2 && (
            <>
              <p style={styles.help}>
                {isEmail ? t("forgot_step2_help_email") : t("forgot_step2_help_sms")}
              </p>

              <label style={styles.label}>{t("forgot_code_label")}</label>
              <input
                type="text"
                placeholder={t("forgot_code_placeholder")}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                style={styles.input}
                disabled={sending || resetting}
              />

              <label style={styles.label}>{t("forgot_new_password_label")}</label>
              <div style={styles.passwordWrap}>
                <input
                  type={showNewPass ? "text" : "password"}
                  placeholder={t("forgot_new_password_placeholder")}
                  value={newPass}
                  onChange={(e) => setNewPass(e.target.value)}
                  style={styles.passwordInput}
                  disabled={sending || resetting}
                />
                <button
                  type="button"
                  style={styles.eyeBtn}
                  onClick={() => setShowNewPass((v) => !v)}
                  disabled={sending || resetting}
                  aria-label={
                    showNewPass
                      ? t("forgot_hide_password_a11y")
                      : t("forgot_show_password_a11y")
                  }
                  title={
                    showNewPass
                      ? t("forgot_hide_password_a11y")
                      : t("forgot_show_password_a11y")
                  }
                >
                  {showNewPass ? "🙈" : "👁️"}
                </button>
              </div>

              <label style={styles.label}>{t("forgot_confirm_password_label")}</label>
              <div style={styles.passwordWrap}>
                <input
                  type={showNewPass2 ? "text" : "password"}
                  placeholder={t("forgot_confirm_password_placeholder")}
                  value={newPass2}
                  onChange={(e) => setNewPass2(e.target.value)}
                  style={styles.passwordInput}
                  disabled={sending || resetting}
                />
                <button
                  type="button"
                  style={styles.eyeBtn}
                  onClick={() => setShowNewPass2((v) => !v)}
                  disabled={sending || resetting}
                  aria-label={
                    showNewPass2
                      ? t("forgot_hide_password_a11y")
                      : t("forgot_show_password_a11y")
                  }
                  title={
                    showNewPass2
                      ? t("forgot_hide_password_a11y")
                      : t("forgot_show_password_a11y")
                  }
                >
                  {showNewPass2 ? "🙈" : "👁️"}
                </button>
              </div>

              <button
                type="button"
                style={{
                  ...styles.button,
                  ...(resetting ? styles.buttonDisabled : {}),
                }}
                onClick={doReset}
                disabled={resetting || sending}
              >
                {resetting ? t("forgot_resetting_password") : t("forgot_change_password")}
              </button>

              <button
                type="button"
                style={styles.linkBtn}
                onClick={handleResendCode}
                disabled={sending || resetting}
              >
                {t("forgot_resend_code")}
              </button>
            </>
          )}

          {!!message && <div style={styles.successBox}>{message}</div>}
          {!!error && <div style={styles.errorBox}>{error}</div>}

          <button
            type="button"
            style={styles.linkBtn}
            onClick={() => navigate("/", { replace: true })}
            disabled={sending || resetting}
          >
            {t("forgot_back_to_login")}
          </button>
        </div>
      </div>
    </AppLayoutWeb>
  );
}

const styles = {
  content: {
    padding: "0",
  },

  card: {
    width: "100%",
    background: "#FFFFFF",
    borderRadius: "16px",
    padding: "24px 20px",
    boxShadow: "0 2px 8px rgba(60, 20, 110, 0.08)",
    boxSizing: "border-box",
  },

  logoWrap: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "12px",
  },

  logoImg: {
    width: "52px",
    height: "52px",
    objectFit: "contain",
    display: "block",
  },

  title: {
    fontSize: "24px",
    margin: "0 0 6px 0",
    color: "#311B92",
    textAlign: "center",
    fontWeight: 700,
    lineHeight: 1.15,
  },

  subtitle: {
    margin: "0 0 18px 0",
    textAlign: "center",
    color: "#5F5B73",
    fontSize: "14px",
    lineHeight: 1.4,
  },

  label: {
    fontSize: "13px",
    fontWeight: 700,
    color: "#4A148C",
    marginTop: "8px",
    marginBottom: "6px",
    display: "block",
  },

  input: {
    padding: "12px 14px",
    width: "100%",
    borderRadius: "12px",
    border: "1px solid #D9CCFF",
    fontSize: "14px",
    background: "#FFFFFF",
    color: "#222",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
  },

  helperText: {
    marginTop: "6px",
    marginBottom: "4px",
    color: "#666",
    fontSize: "12px",
    lineHeight: 1.45,
  },

  help: {
    marginTop: "14px",
    marginBottom: "6px",
    color: "#555",
    lineHeight: 1.45,
    fontSize: "13px",
  },

  passwordWrap: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    border: "1px solid #D9CCFF",
    borderRadius: "12px",
    overflow: "hidden",
  },

  passwordInput: {
    flex: 1,
    padding: "12px 14px",
    border: "none",
    outline: "none",
    fontSize: "14px",
    fontFamily: "inherit",
    background: "transparent",
  },

  eyeBtn: {
    border: "none",
    background: "transparent",
    padding: "0 12px",
    cursor: "pointer",
    fontSize: "18px",
    height: "100%",
  },

  button: {
    padding: "13px 16px",
    width: "100%",
    background: "#4B6BFB",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: 700,
    fontSize: "14px",
    marginTop: "16px",
  },

  buttonDisabled: {
    opacity: 0.7,
    cursor: "not-allowed",
  },

  successBox: {
    background: "#E8F5E9",
    border: "1px solid #C8E6C9",
    color: "#2E7D32",
    borderRadius: "12px",
    padding: "12px 14px",
    marginTop: "14px",
    fontWeight: 700,
    lineHeight: 1.45,
    fontSize: "13px",
  },

  errorBox: {
    background: "#FFEBEE",
    border: "1px solid #FFCDD2",
    color: "#C62828",
    borderRadius: "12px",
    padding: "12px 14px",
    marginTop: "14px",
    fontWeight: 700,
    lineHeight: 1.45,
    fontSize: "13px",
  },

  linkBtn: {
    marginTop: "14px",
    width: "100%",
    border: "none",
    background: "transparent",
    color: "#6A1B9A",
    fontWeight: 700,
    fontSize: "14px",
    textDecoration: "underline",
    cursor: "pointer",
  },
};