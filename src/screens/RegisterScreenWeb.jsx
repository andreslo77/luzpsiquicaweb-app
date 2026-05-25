// screens/RegisterScreenWeb.jsx
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config/env.web.js";
import AppLayoutWeb from "../components/layout/AppLayoutWeb.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import logoLp from "../assets/icon.png";

export default function RegisterScreenWeb() {
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

  const isReasonableInternationalPhone = (value) => {
    return /^\+\d{8,15}$/.test(String(value || "").trim());
  };

  const getDeviceId = () => {
    try {
      const key = "lp_web_device_id";
      const existing = window.localStorage.getItem(key);

      if (existing) return existing;

      const generated =
        typeof crypto !== "undefined" && crypto.randomUUID
          ? `web:${crypto.randomUUID()}`
          : `web:${Date.now()}-${Math.random().toString(16).slice(2)}`;

      window.localStorage.setItem(key, generated);
      return generated;
    } catch {
      return "web:unknown-device";
    }
  };

  const isLikelyEmail = useMemo(() => looksLikeEmail(emailOrPhone), [emailOrPhone]);

  useEffect(() => {
    setError("");
  }, [name, emailOrPhone, password, termsAccepted]);

  const onRegisterClient = async () => {
    const cleanName = String(name || "").trim();
    const rawId = String(emailOrPhone || "").trim();
    const cleanPassword = String(password || "");

    if (!cleanName || !rawId || !cleanPassword) {
      setError(tt("register_required_fields_body", "Completa todos los campos."));
      setMessage("");
      return;
    }

    if (!termsAccepted) {
      setError(
        tt(
          "register_legal_body_client",
          "Debes aceptar los Términos, Privacidad y Reembolsos para registrarte."
        )
      );
      setMessage("");
      return;
    }

    try {
      setBusy(true);
      setError("");
      setMessage("");

      const deviceId = getDeviceId();

      if (!deviceId) {
        setError(
          tt(
            "register_device_error_body",
            "No pudimos validar este dispositivo. Intenta cerrar y abrir la app nuevamente."
          )
        );
        return;
      }

      const isEmail = looksLikeEmail(rawId);
      const normalizedEmail = isEmail ? normalizeEmail(rawId) : "";
      const normalizedPhone = !isEmail ? normalizePhoneInput(rawId) : "";

      if (!isEmail && !isReasonableInternationalPhone(normalizedPhone)) {
        setError(
          tt(
            "register_phone_format_body",
            "Ingresa el teléfono en formato internacional. Ejemplo: +573001234567"
          )
        );
        return;
      }

      const payload = {
        name: cleanName,
        password: cleanPassword,
        role: "cliente",
        termsAccepted,
        deviceId,
        ...(isEmail ? { email: normalizedEmail } : { phone: normalizedPhone }),
      };

      const res = await fetch(`${API_BASE_URL}/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      let data;

      try {
        data = JSON.parse(text);
      } catch {
        throw new Error(
          text.slice(0, 150) ||
            tt("server_unexpected_error", "Error inesperado del servidor.")
        );
      }

      if (!res.ok) {
        throw new Error(
          data?.message || tt("register_account_error", "Error al registrar cuenta.")
        );
      }

      setMessage(
        tt(
          "register_success_body_trial",
          "Tu cuenta fue registrada correctamente. Recibiste 5 minutos de bienvenida. Inicia sesión."
        )
      );

      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 1400);
    } catch (err) {
      console.log("[RegisterScreenWeb] Register error:", err);
      setError(
        err?.message || tt("register_failed_msg", "No se pudo registrar la cuenta.")
      );
      setMessage("");
    } finally {
      setBusy(false);
    }
  };

  return (
    <AppLayoutWeb
      title={tt("register_header_title", "Registro")}
      showBack={true}
      backTo="/login"
    >
      <div style={styles.content}>
        <div style={styles.card}>
          <div style={styles.logoWrap}>
            <img src={logoLp} alt="Luz Psíquica" style={styles.logoImg} />
          </div>

          <h1 style={styles.title}>
            {tt("register_title_create_account", "Crear Cuenta")}
          </h1>

          <p style={styles.subtitle}>
            {tt("register_subtitle_client", "Regístrate como cliente para continuar")}
          </p>

          <input
            type="text"
            placeholder={tt("register_placeholder_full_name", "Nombre completo")}
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            disabled={busy}
          />

          <input
            type="text"
            placeholder={tt("register_placeholder_email_or_phone", "Correo o teléfono")}
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            style={styles.input}
            disabled={busy}
            autoCapitalize="none"
            autoCorrect="off"
            inputMode={isLikelyEmail ? "email" : "text"}
          />

          <p style={styles.helperText}>
            {tt(
              "register_phone_helper",
              "Si usas teléfono, escríbelo en formato internacional. Ejemplo: +573001234567"
            )}
          </p>

          <div style={styles.passwordWrap}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder={tt("register_placeholder_password", "Contraseña")}
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
                  ? tt("register_accessibility_hide_password", "Ocultar contraseña")
                  : tt("register_accessibility_show_password", "Mostrar contraseña")
              }
              title={
                showPassword
                  ? tt("register_accessibility_hide_password", "Ocultar contraseña")
                  : tt("register_accessibility_show_password", "Mostrar contraseña")
              }
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          <button
            type="button"
            style={styles.psychicLinkBtn}
            onClick={() => navigate("/psychic-register")}
            disabled={busy}
          >
            {tt(
              "register_link_psychic_apply",
              "¿Eres psíquico? Postúlate para trabajar con nosotros"
            )}
          </button>

          <div
            style={{
              ...styles.termsRow,
              ...(busy ? styles.disabled : {}),
            }}
            onClick={() => !busy && setTermsAccepted((v) => !v)}
            role="checkbox"
            aria-checked={termsAccepted}
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
              {tt("register_terms_prefix", "He leído y acepto")}{" "}
              <button
                type="button"
                style={styles.inlineLinkBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/legal");
                }}
                disabled={busy}
              >
                {tt("register_terms_link", "Normas y Privacidad")}
              </button>
              .
            </span>
          </div>

          {!!message && <div style={styles.successBox}>{message}</div>}
          {!!error && <div style={styles.errorBox}>{error}</div>}

          <button
            type="button"
            style={{
              ...styles.button,
              ...(!termsAccepted || busy ? styles.buttonDisabled : {}),
            }}
            onClick={onRegisterClient}
            disabled={busy || !termsAccepted}
          >
            {busy
              ? tt("register_creating_account", "Creando cuenta...")
              : tt("register_btn_create_account", "Crear cuenta")}
          </button>

          <button
            type="button"
            onClick={() => navigate("/login", { replace: true })}
            style={styles.linkBtn}
            disabled={busy}
          >
            {tt("register_link_have_account_login", "¿Ya tienes cuenta? Inicia sesión")}
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

  psychicLinkBtn: {
    marginTop: "2px",
    marginBottom: "18px",
    width: "100%",
    border: "none",
    background: "transparent",
    color: "#6b3dbf",
    fontWeight: 700,
    fontSize: "14px",
    textDecoration: "underline",
    cursor: "pointer",
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