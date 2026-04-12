import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config/env.web.js";
import AppLayoutWeb from "../components/layout/AppLayoutWeb.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import logoLp from "../assets/icon.png";

export default function RegisterScreenWeb() {
  const navigate = useNavigate();
  const { t } = useLang();

  const [name, setName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const looksLikeEmail = (value) => /\S+@\S+\.\S+/.test(String(value || "").trim());

  const normalizeEmail = (value) => String(value || "").trim().toLowerCase();

  const normalizePhoneInput = (value) => {
    let v = String(value || "").trim();
    const hasPlus = v.startsWith("+");
    v = v.replace(/[^\d+]/g, "");
    v = v.replace(/\+/g, "");
    if (hasPlus) v = `+${v}`;
    return v;
  };

  const isReasonableInternationalPhone = (value) =>
    /^\+\d{8,15}$/.test(String(value || "").trim());

  const isLikelyEmail = useMemo(() => looksLikeEmail(emailOrPhone), [emailOrPhone]);

  useEffect(() => {
    setError("");
  }, [name, emailOrPhone, password, termsAccepted]);

  const onRegisterClient = async () => {
    const cleanName = String(name || "").trim();
    const rawId = String(emailOrPhone || "").trim();
    const cleanPassword = String(password || "");

    if (!cleanName || !rawId || !cleanPassword) {
      setError(t("register_required_fields_body") || "Completa todos los campos.");
      setMessage("");
      return;
    }

    if (!termsAccepted) {
      setError(
        t("register_legal_body_client") ||
          "Debes aceptar Normas y Privacidad para registrarte."
      );
      setMessage("");
      return;
    }

    try {
      setBusy(true);
      setError("");
      setMessage("");

      const isEmail = looksLikeEmail(rawId);
      const normalizedEmail = isEmail ? normalizeEmail(rawId) : "";
      const normalizedPhone = !isEmail ? normalizePhoneInput(rawId) : "";

      if (!isEmail && !isReasonableInternationalPhone(normalizedPhone)) {
        setError(
          t("register_invalid_phone") ||
            "Ingresa el teléfono en formato internacional. Ejemplo: +573001234567"
        );
        return;
      }

      const payload = {
        name: cleanName,
        password: cleanPassword,
        role: "cliente",
        termsAccepted,
        ...(isEmail ? { email: normalizedEmail } : { phone: normalizedPhone }),
      };

      const url = `${API_BASE_URL}/users/register`;

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      let data;

      try {
        data = JSON.parse(text);
      } catch {
        throw new Error(text.slice(0, 150) || "Error inesperado del servidor.");
      }

      if (!res.ok) {
        throw new Error(data?.message || "Error al registrar cuenta.");
      }

      setMessage(
        t("register_success_body") ||
          "Tu cuenta fue registrada correctamente. Ahora puedes iniciar sesión."
      );
      setError("");

      setTimeout(() => {
        navigate("/", { replace: true });
      }, 1400);
    } catch (err) {
      console.log("[RegisterScreenWeb] Register error:", err);
      setError(
        err?.message ||
          t("register_login_error_fallback") ||
          "No se pudo registrar la cuenta."
      );
      setMessage("");
    } finally {
      setBusy(false);
    }
  };

  return (
    <AppLayoutWeb
      title={t("register_header_title") || "Registro"}
      showBack={true}
      backTo="/"
    >
      <div style={styles.content}>
        <div style={styles.card}>
          <div style={styles.logoWrap}>
            <img src={logoLp} alt="Luz Psíquica" style={styles.logoImg} />
          </div>

          <h1 style={styles.title}>
            {t("register_title_create_account") || "Crear Cuenta"}
          </h1>

          <p style={styles.subtitle}>
            {t("register_subtitle_client") ||
              "Regístrate como cliente para continuar"}
          </p>

          <input
            type="text"
            placeholder={t("register_placeholder_full_name") || "Nombre completo"}
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            disabled={busy}
          />

          <input
            type="text"
            placeholder={
              t("register_placeholder_email_or_phone") || "Correo o teléfono"
            }
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            style={styles.input}
            disabled={busy}
          />

          <p style={styles.helperText}>
            {t("register_phone_helper") ||
              "Si usas teléfono, ingrésalo en formato internacional (ej. +573002568974)."}
          </p>

          <div style={styles.passwordWrap}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder={t("register_placeholder_password") || "Contraseña"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.passwordInput}
              disabled={busy}
            />
            <button
              type="button"
              style={styles.eyeBtn}
              onClick={() => setShowPassword((v) => !v)}
              disabled={busy}
              aria-label={
                showPassword
                  ? t("register_accessibility_hide_password") ||
                    "Ocultar contraseña"
                  : t("register_accessibility_show_password") ||
                    "Mostrar contraseña"
              }
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          <div
            style={styles.termsRow}
            onClick={() => !busy && setTermsAccepted((v) => !v)}
          >
            <div
              style={{
                ...styles.checkbox,
                ...(termsAccepted ? styles.checkboxChecked : {}),
              }}
            >
              {termsAccepted ? <span style={styles.checkboxTick}>✓</span> : null}
            </div>

            <span style={styles.termsText}>
              {t("register_terms_prefix") || "He leído y acepto"}{" "}
              <button
                type="button"
                style={styles.inlineLinkBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/legal");
                }}
              >
                {t("register_terms_link") || "Normas y Privacidad"}
              </button>
              .
            </span>
          </div>

          {!!message && <div style={styles.successBox}>{message}</div>}
          {!!error && <div style={styles.errorBox}>{error}</div>}

          <button
            style={{
              ...styles.button,
              ...(!termsAccepted || busy ? styles.buttonDisabled : {}),
            }}
            onClick={onRegisterClient}
            disabled={busy || !termsAccepted}
          >
            {busy
              ? t("register_creating_account") || "Creando cuenta..."
              : t("register_btn_create_account") || "Crear cuenta"}
          </button>

          <button
            onClick={() => navigate("/", { replace: true })}
            style={styles.linkBtn}
            disabled={busy}
          >
            {t("register_link_have_account_login") ||
              "¿Ya tienes cuenta? Inicia sesión"}
          </button>
        </div>
      </div>
    </AppLayoutWeb>
  );
}

const styles = {
  content: {
    minHeight: "calc(100vh - 110px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    marginBottom: "10px",
  },

  helperText: {
    margin: "0 0 12px 0",
    color: "#666",
    fontSize: "12px",
    lineHeight: 1.45,
  },

  passwordWrap: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    border: "1px solid #D9CCFF",
    borderRadius: "12px",
    overflow: "hidden",
    marginBottom: "14px",
  },

  passwordInput: {
    flex: 1,
    padding: "12px 14px",
    border: "none",
    outline: "none",
    fontSize: "14px",
    fontFamily: "inherit",
    background: "transparent",
    color: "#222",
  },

  eyeBtn: {
    border: "none",
    background: "transparent",
    padding: "0 12px",
    cursor: "pointer",
    fontSize: "18px",
    height: "100%",
    color: "#4A148C",
  },

  termsRow: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "14px",
    cursor: "pointer",
  },

  checkbox: {
    width: "22px",
    height: "22px",
    minWidth: "22px",
    border: "2px solid #6b3dbf",
    borderRadius: "6px",
    marginRight: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    boxSizing: "border-box",
    marginTop: "1px",
  },

  checkboxChecked: {
    backgroundColor: "#6b3dbf",
  },

  checkboxTick: {
    color: "#fff",
    fontWeight: 800,
    fontSize: "13px",
    lineHeight: 1,
  },

  termsText: {
    flex: 1,
    color: "#333",
    lineHeight: 1.45,
    fontSize: "14px",
  },

  inlineLinkBtn: {
    border: "none",
    background: "transparent",
    color: "#6b3dbf",
    fontWeight: 700,
    textDecoration: "underline",
    cursor: "pointer",
    padding: 0,
    fontSize: "14px",
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
    marginTop: "4px",
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
    marginBottom: "12px",
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
    marginBottom: "12px",
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

  disabled: {
    opacity: 0.6,
  },
};