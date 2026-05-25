import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthWeb } from "../context/AuthContextWeb.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import logoLp from "../assets/icon.png";
import AppLayoutWeb from "../components/layout/AppLayoutWeb.jsx";

export default function DeleteAccountScreenWeb() {
  const navigate = useNavigate();
  const { deleteMyAccount, user } = useAuthWeb();
  const { t } = useLang();

  const [password, setPassword] = useState("");
  const [confirmChecked, setConfirmChecked] = useState(false);
  const [busy, setBusy] = useState(false);

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

  const tr = (key, vars = {}) => {
    let base = "";
    try {
      base = String(t(key, vars));
    } catch {
      base = String(t(key));
    }

    Object.keys(vars).forEach((k) => {
      base = base.split(`{{${k}}}`).join(String(vars[k]));
    });

    return base;
  };

  const userName =
    user?.name ||
    user?.email ||
    tt("delete_account_default_name", "usuario");

  const handleDelete = async () => {
    if (!confirmChecked) {
      alert(
        `${tt("delete_account_confirm_required_title", "Confirmación requerida")}\n\n${tt(
          "delete_account_confirm_required_body",
          "Debes confirmar que entiendes que esta acción es permanente."
        )}`
      );
      return;
    }

    const confirmDelete = window.confirm(
      `${tt("delete_account_confirm_title", "Confirmar eliminación")}\n\n${tt(
        "delete_account_confirm_body",
        "Esta acción es permanente y no se puede deshacer."
      )}`
    );

    if (!confirmDelete) return;

    try {
      setBusy(true);

      await deleteMyAccount({
        confirm: true,
        password: password?.trim() || "",
      });

      alert(
        `${tt("delete_account_success_title", "Cuenta eliminada")}\n\n${tt(
          "delete_account_success_body",
          "Tu cuenta fue eliminada correctamente."
        )}`
      );

      navigate("/login", { replace: true });
    } catch (e) {
      alert(
        `${tt("delete_account_error_title", "Error al eliminar cuenta")}\n\n${
          e?.message ||
          tt("delete_account_error_body", "No se pudo eliminar la cuenta. Inténtalo de nuevo.")
        }`
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <AppLayoutWeb
      title={tt("delete_account_header_title", "Eliminar cuenta")}
      showBack={true}
      backTo="/profile"
    >
      <div style={styles.content}>
        <div style={styles.card}>
          <div style={styles.logoWrap}>
            <img src={logoLp} alt={tt("delete_account_logo_alt", "Luz Psíquica")} style={styles.logoImg} />
          </div>

          <h1 style={styles.title}>{tt("delete_account_title", "Eliminar cuenta")}</h1>

          <p style={styles.subtitle}>
            {tr("delete_account_subtitle_with_name", { name: userName || "usuario" })}
          </p>

          <div style={styles.warningCard}>
            <h3 style={styles.warningTitle}>
              {tt("delete_account_warning_title", "Advertencia importante")}
            </h3>

            <p style={styles.warningText}>
              {tt(
                "delete_account_warning_body",
                "Al eliminar tu cuenta perderás el acceso a tu perfil y a la información asociada."
              )}
            </p>

            <ul style={styles.ul}>
              <li>{tt("delete_account_warning_point_1", "No podrás volver a ingresar con esta cuenta después de eliminarla.")}</li>
              <li>{tt("delete_account_warning_point_2", "Esta acción está pensada como una eliminación permanente.")}</li>
              <li>{tt("delete_account_warning_point_3", "Antes de continuar, asegúrate de que realmente deseas cerrar tu cuenta.")}</li>
            </ul>
          </div>

          <div style={styles.section}>
            <label style={styles.label}>
              {tt("delete_account_password_label", "Contraseña actual")}
            </label>

            <p style={styles.helperText}>
              {tt(
                "delete_account_password_helper",
                "Puedes escribir tu contraseña como validación adicional. Este campo es opcional."
              )}
            </p>

            <input
              type="password"
              placeholder={tt("delete_account_password_placeholder", "Escribe tu contraseña (opcional)")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              disabled={busy}
            />
          </div>

          <div style={styles.section}>
            <div style={styles.confirmSectionTitle}>
              {tt("delete_account_confirm_section_title", "Confirmación")}
            </div>

            <div
              style={{
                ...styles.confirmBox,
                ...(confirmChecked ? styles.confirmBoxActive : {}),
                ...(busy ? styles.disabled : {}),
              }}
              onClick={() => !busy && setConfirmChecked((v) => !v)}
            >
              <div
                style={{
                  ...styles.checkbox,
                  ...(confirmChecked ? styles.checkboxActive : {}),
                }}
              >
                {confirmChecked ? "✓" : ""}
              </div>

              <span style={styles.confirmText}>
                {tt(
                  "delete_account_confirm_check_label",
                  "Entiendo que esta acción es permanente y deseo continuar."
                )}
              </span>
            </div>
          </div>

          <button
            style={{
              ...styles.deleteBtn,
              ...(busy ? styles.btnDisabled : {}),
            }}
            onClick={handleDelete}
            disabled={busy}
          >
            {busy
              ? tt("delete_account_processing", "Eliminando cuenta...")
              : tt("delete_account_confirm_cta", "Eliminar mi cuenta")}
          </button>

          <button
            style={{
              ...styles.cancelBtn,
              ...(busy ? styles.btnDisabled : {}),
            }}
            onClick={() => navigate(-1)}
            disabled={busy}
          >
            {tt("delete_account_cancel_cta", "Cancelar")}
          </button>
        </div>
      </div>
    </AppLayoutWeb>
  );
}

const styles = {
  content: { padding: "0" },
  card: {
    background: "#fff",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },
  logoWrap: { display: "flex", justifyContent: "center", marginBottom: "10px" },
  logoImg: { width: "50px" },
  title: {
    textAlign: "center",
    fontSize: "22px",
    color: "#311B92",
    marginBottom: "8px",
    fontWeight: "800",
  },
  subtitle: {
    textAlign: "center",
    color: "#555",
    marginBottom: "18px",
    lineHeight: 1.5,
  },
  warningCard: {
    background: "#FFF1F3",
    border: "1px solid #FECACA",
    borderRadius: "12px",
    padding: "14px",
    marginBottom: "16px",
  },
  warningTitle: { color: "#B91C1C", marginBottom: "6px" },
  warningText: { color: "#7A271A", marginBottom: "10px", lineHeight: 1.5 },
  ul: {
    paddingLeft: "18px",
    color: "#7A271A",
    fontWeight: "600",
    lineHeight: 1.6,
    margin: 0,
  },
  section: { marginBottom: "14px" },
  label: {
    fontSize: "13px",
    fontWeight: "700",
    marginBottom: "6px",
    display: "block",
  },
  helperText: {
    fontSize: "12px",
    color: "#666",
    margin: "0 0 8px 0",
    lineHeight: 1.5,
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    boxSizing: "border-box",
  },
  confirmSectionTitle: {
    fontSize: "13px",
    fontWeight: "700",
    marginBottom: "8px",
    color: "#444",
  },
  confirmBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    background: "#FFF1F3",
    border: "1px solid #FCCFD4",
    borderRadius: "10px",
    padding: "12px",
    cursor: "pointer",
    marginBottom: "16px",
  },
  confirmBoxActive: {
    borderColor: "#D92D20",
    background: "#FEE4E2",
  },
  checkbox: {
    width: "22px",
    height: "22px",
    border: "2px solid #ccc",
    borderRadius: "6px",
    marginRight: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "900",
    flexShrink: 0,
  },
  checkboxActive: {
    background: "#D92D20",
    color: "#fff",
    borderColor: "#D92D20",
  },
  confirmText: {
    fontWeight: "700",
    color: "#7A271A",
    lineHeight: 1.5,
  },
  deleteBtn: {
    width: "100%",
    background: "#D92D20",
    color: "#fff",
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    fontWeight: "800",
    cursor: "pointer",
  },
  cancelBtn: {
    width: "100%",
    marginTop: "10px",
    padding: "14px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    background: "#fff",
    cursor: "pointer",
    fontWeight: "700",
  },
  btnDisabled: { opacity: 0.7, cursor: "not-allowed" },
  disabled: { opacity: 0.6 },
};