// screens/LoginScreenWeb.jsx
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthWeb } from "../context/AuthContextWeb.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import logoLp from "../assets/icon.png";
import AppLayoutWeb from "../components/layout/AppLayoutWeb.jsx";

export default function LoginScreenWeb() {
  const navigate = useNavigate();
  const { login, loading, isAuthenticated } = useAuthWeb();
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
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const looksLikeEmail = (value) => {
    return /\S+@\S+\.\S+/.test(String(value || "").trim());
  };

  const normalizePhoneInput = (value) => {
    let v = String(value || "").trim();
    const hasPlus = v.startsWith("+");

    v = v.replace(/[^\d+]/g, "");
    v = v.replace(/\+/g, "");

    if (hasPlus) v = `+${v}`;

    return v;
  };

  const normalizeLoginIdentifier = (value) => {
    const raw = String(value || "").trim();
    if (!raw) return "";

    if (looksLikeEmail(raw)) {
      return raw.toLowerCase();
    }

    return normalizePhoneInput(raw);
  };

  const handleLogin = async () => {
    const id = normalizeLoginIdentifier(emailOrPhone);

    if (!id || !password) {
      setError(tt("login_missing_credentials", "Faltan credenciales"));
      return;
    }

    try {
      setBusy(true);
      setError("");

      await login(id, password);

      navigate("/dashboard", { replace: true });
    } catch (e) {
      setError(e?.message || tt("login_error_body", "No se pudo iniciar sesión"));
    } finally {
      setBusy(false);
    }
  };

  return (
    <AppLayoutWeb title={tt("login_header_title", "Iniciar sesión")} showBack={false}>
      <div style={styles.content}>
        <div style={styles.card}>
          <div style={styles.logoWrap}>
            <img src={logoLp} alt="Luz Psíquica" style={styles.logoImg} />
          </div>

          <h1 style={styles.title}>Luz Psíquica</h1>

          <p style={styles.subtitle}>
            {tt("login_subtitle", "Accede a tu cuenta para continuar")}
          </p>

          <input
            type="text"
            placeholder={tt("login_email_or_phone", "Email or phone")}
            value={emailOrPhone}
            onChange={(e) => {
              setEmailOrPhone(e.target.value);
              setError("");
            }}
            style={styles.input}
            disabled={busy || loading}
            autoCapitalize="none"
            autoCorrect="off"
          />

          <p style={styles.helperText}>
            {tt(
              "login_phone_helper",
              "If you use phone, enter it in international format. Example: +573001234567"
            )}
          </p>

          <div style={styles.passwordWrap}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder={tt("login_password", "Password")}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              style={styles.passwordInput}
              disabled={busy || loading}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleLogin();
                }
              }}
            />

            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              style={styles.eyeBtn}
              disabled={busy || loading}
              aria-label={
                showPassword
                  ? tt("login_accessibility_hide_password", "Ocultar contraseña")
                  : tt("login_accessibility_show_password", "Mostrar contraseña")
              }
              title={
                showPassword
                  ? tt("login_accessibility_hide_password", "Ocultar contraseña")
                  : tt("login_accessibility_show_password", "Mostrar contraseña")
              }
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {!!error && <p style={styles.error}>{error}</p>}

          <button
            type="button"
            onClick={handleLogin}
            style={{
              ...styles.button,
              ...(busy || loading ? styles.buttonDisabled : {}),
            }}
            disabled={busy || loading}
          >
            {busy ? tt("login_entering", "Ingresando...") : tt("login_enter", "Sign in")}
          </button>

          <button
            type="button"
            onClick={() => navigate("/forgot-password")}
            style={styles.linkBtn}
            disabled={busy || loading}
          >
            {tt("login_forgot", "Forgot your password?")}
          </button>

          <button
            type="button"
            onClick={() => navigate("/register")}
            style={styles.linkBtn}
            disabled={busy || loading}
          >
            {tt("login_client_register", "Client? Create account")}
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
    fontSize: "30px",
    margin: "0 0 18px 0",
    color: "#311B92",
    textAlign: "center",
    fontWeight: 900,
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
    marginBottom: "6px",
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
    marginBottom: "12px",
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

  button: {
    padding: "13px 16px",
    width: "100%",
    background: "#4B6BFB",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: 900,
    fontSize: "14px",
    marginTop: "4px",
  },

  buttonDisabled: {
    opacity: 0.7,
    cursor: "not-allowed",
  },

  linkBtn: {
    marginTop: "14px",
    width: "100%",
    border: "none",
    background: "transparent",
    color: "#6A1B9A",
    fontWeight: 800,
    fontSize: "14px",
    textDecoration: "underline",
    cursor: "pointer",
  },

  psychicLinkBtn: {
    marginTop: "14px",
    width: "100%",
    border: "none",
    background: "transparent",
    color: "#5A1B7A",
    fontWeight: 900,
    fontSize: "14px",
    textDecoration: "underline",
    cursor: "pointer",
  },

  error: {
    color: "#B00020",
    marginTop: "0",
    marginBottom: "10px",
    fontWeight: 600,
    fontSize: "13px",
    lineHeight: 1.4,
  },
};