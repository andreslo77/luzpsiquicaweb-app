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

  const tt = useCallback(
    (key, fallback) => {
      try {
        if (typeof t === "function") return t(key) ?? fallback;
        return fallback;
      } catch {
        return fallback;
      }
    },
    [t]
  );

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
      setError(tt("forgot_required_email_or_phone", "Ingresa tu correo o teléfono."));
      setMessage("");
      return;
    }

    if (!isEmail && !isValidInternationalPhone(normalizedIdentifier)) {
      setError(
        tt(
          "forgot_phone_format_body",
          "Si usas teléfono, escríbelo en formato internacional. Ejemplo: +573001234567"
        )
      );
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
        throw new Error(data?.message || tt("forgot_error_send_code", "No se pudo enviar el código."));
      }

      resetStepTwoFields();
      setStep(2);

      setMessage(
        isEmail
          ? tt("forgot_done_body_email", "Te enviamos un código a tu correo para restablecer tu contraseña.")
          : tt(
              "forgot_done_body_sms",
              "Te enviamos un código por SMS para restablecer tu contraseña. Si no lo ves, revisa también spam o mensajes bloqueados."
            )
      );
    } catch (e) {
      setError(e?.message || tt("forgot_error_send_code", "No se pudo enviar el código."));
      setMessage("");
    } finally {
      setSending(false);
    }
  };

  const doReset = async () => {
    const codeClean = String(code || "").replace(/\D+/g, "").trim();

    if (!codeClean) {
      setError(tt("forgot_required_code", "Ingresa el código recibido."));
      setMessage("");
      return;
    }

    if (!newPass || newPass.length < 6) {
      setError(tt("forgot_weak_password_body", "La nueva contraseña debe tener al menos 6 caracteres."));
      setMessage("");
      return;
    }

    if (newPass !== newPass2) {
      setError(tt("forgot_not_match_body", "Las contraseñas no coinciden."));
      setMessage("");
      return;
    }

    if (!isEmail && !isValidInternationalPhone(normalizedIdentifier)) {
      setError(
        tt(
          "forgot_phone_format_body",
          "Si usas teléfono, escríbelo en formato internacional. Ejemplo: +573001234567"
        )
      );
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
        throw new Error(data?.message || tt("forgot_error_reset", "No se pudo restablecer la contraseña."));
      }

      setMessage(tt("forgot_password_updated_body", "Tu contraseña fue actualizada correctamente."));

      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 1600);
    } catch (e) {
      setError(e?.message || tt("forgot_error_reset", "No se pudo restablecer la contraseña."));
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
      title={tt("forgot_header_title", "Recuperar contraseña")}
      showBack={true}
      backTo="/login"
    >
      <div style={styles.content}>
        <div style={styles.card}>
          <div style={styles.logoWrap}>
            <img src={logoLp} alt={tt("forgot_logo_alt", "Luz Psíquica")} style={styles.logoImg} />
          </div>

          <h1 style={styles.title}>{tt("forgot_title", "Recuperar contraseña")}</h1>
          <p style={styles.subtitle}>{tt("forgot_subtitle", "")}</p>

          <label style={styles.label}>
            {tt("forgot_field_label_email_or_phone", "Email o teléfono")}
          </label>

          <input
            type="text"
            placeholder={tt("forgot_placeholder_email_or_phone", "Email o teléfono")}
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            style={styles.input}
            disabled={sending || resetting}
          />

          <p style={styles.helperText}>
            {tt(
              "login_phone_helper",
              "Si usas teléfono, escríbelo en formato internacional. Ejemplo: +573001234567"
            )}
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
              {sending
                ? tt("forgot_sending_code", "Enviando...")
                : tt("forgot_send_code", "Enviar código")}
            </button>
          )}

          {step === 2 && (
            <>
              <p style={styles.help}>
                {isEmail
                  ? tt("forgot_step2_help_email", "Ingresa el código que recibiste por correo y tu nueva contraseña.")
                  : tt(
                      "forgot_step2_help_sms",
                      "Ingresa el código que recibiste por SMS y tu nueva contraseña. Si no lo ves, revisa spam o mensajes bloqueados."
                    )}
              </p>

              <label style={styles.label}>{tt("forgot_code_label", "Código")}</label>
              <input
                type="text"
                inputMode="numeric"
                placeholder={tt("forgot_code_placeholder", "Ingresa el código")}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                style={styles.input}
                disabled={sending || resetting}
              />

              <label style={styles.label}>{tt("forgot_new_password_label", "Nueva contraseña")}</label>
              <div style={styles.passwordWrap}>
                <input
                  type={showNewPass ? "text" : "password"}
                  placeholder={tt("forgot_new_password_placeholder", "Nueva contraseña")}
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
                      ? tt("forgot_hide_password_a11y", "Ocultar contraseña")
                      : tt("forgot_show_password_a11y", "Mostrar contraseña")
                  }
                >
                  {showNewPass ? "🙈" : "👁️"}
                </button>
              </div>

              <label style={styles.label}>{tt("forgot_confirm_password_label", "Confirmar contraseña")}</label>
              <div style={styles.passwordWrap}>
                <input
                  type={showNewPass2 ? "text" : "password"}
                  placeholder={tt("forgot_confirm_password_placeholder", "Confirma la nueva contraseña")}
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
                      ? tt("forgot_hide_password_a11y", "Ocultar contraseña")
                      : tt("forgot_show_password_a11y", "Mostrar contraseña")
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
                {resetting
                  ? tt("forgot_resetting_password", "Cambiando contraseña...")
                  : tt("forgot_change_password", "Cambiar contraseña")}
              </button>

              <button
                type="button"
                style={styles.linkBtn}
                onClick={handleResendCode}
                disabled={sending || resetting}
              >
                {sending ? tt("forgot_sending_code", "Enviando...") : tt("forgot_resend_code", "Reenviar código")}
              </button>
            </>
          )}

          {!!message && <div style={styles.successBox}>{message}</div>}
          {!!error && <div style={styles.errorBox}>{error}</div>}

          <button
            type="button"
            style={styles.linkBtn}
            onClick={() => navigate("/login", { replace: true })}
            disabled={sending || resetting}
          >
            {tt("forgot_back_to_login", "Volver a iniciar sesión")}
          </button>
        </div>
      </div>
    </AppLayoutWeb>
  );
}

const styles = {
  content: { padding: "0" },
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