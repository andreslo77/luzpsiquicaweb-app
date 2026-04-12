import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthWeb } from "../context/AuthContextWeb.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import logoLp from "../assets/icon.png";
import AppLayoutWeb from "../components/layout/AppLayoutWeb.jsx";

export default function DeleteAccountScreenWeb() {
  const navigate = useNavigate();
  const { deleteMyAccount, user } = useAuthWeb();
  const { t } = useLang();

  const tr = (key, vars = {}) => {
    let base = "";
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

  const [password, setPassword] = useState("");
  const [confirmChecked, setConfirmChecked] = useState(false);
  const [busy, setBusy] = useState(false);

  const fallbackUserName = t("delete_account_default_name");
  const userName = user?.name || user?.email || fallbackUserName;

  const handleDelete = async () => {
    if (!confirmChecked) {
      alert(t("delete_account_confirm_required_body"));
      return;
    }

    const confirmDelete = window.confirm(
      `${t("delete_account_confirm_body")} ${t("delete_account_confirm_question")}`
    );

    if (!confirmDelete) return;

    try {
      setBusy(true);

      await deleteMyAccount({
        confirm: true,
        password: password?.trim() || "",
      });

      alert(t("delete_account_success_body"));
      navigate("/", { replace: true });
    } catch (e) {
      alert(e?.message || t("delete_account_error_body"));
    } finally {
      setBusy(false);
    }
  };

  return (
    <AppLayoutWeb
      title={t("delete_account_header_title")}
      showBack={true}
      backTo="/profile"
    >
      <div style={styles.content}>
        <div style={styles.card}>
          <div style={styles.logoWrap}>
            <img src={logoLp} alt={t("delete_account_logo_alt")} style={styles.logoImg} />
          </div>

          <h1 style={styles.title}>{t("delete_account_title")}</h1>

          <p style={styles.subtitle}>
            {tr("delete_account_subtitle_with_name", { name: userName })}
          </p>

          <div style={styles.warningCard}>
            <h3 style={styles.warningTitle}>{t("delete_account_warning_title")}</h3>

            <p style={styles.warningText}>{t("delete_account_warning_body")}</p>

            <ul style={styles.ul}>
              <li>{t("delete_account_warning_point_1")}</li>
              <li>{t("delete_account_warning_point_2")}</li>
              <li>{t("delete_account_warning_point_3")}</li>
            </ul>
          </div>

          <div style={styles.section}>
            <label style={styles.label}>{t("delete_account_password_label")}</label>

            <p style={styles.helperText}>{t("delete_account_password_helper")}</p>

            <input
              type="password"
              placeholder={t("delete_account_password_placeholder")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              disabled={busy}
            />
          </div>

          <div style={styles.section}>
            <div style={styles.confirmSectionTitle}>
              {t("delete_account_confirm_section_title")}
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
                {t("delete_account_confirm_check_label")}
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
            {busy ? t("delete_account_processing") : t("delete_account_confirm_cta")}
          </button>

          <button
            style={{
              ...styles.cancelBtn,
              ...(busy ? styles.btnDisabled : {}),
            }}
            onClick={() => navigate(-1)}
            disabled={busy}
          >
            {t("delete_account_cancel_cta")}
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
    background: "#fff",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },

  logoWrap: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
  },

  logoImg: {
    width: "50px",
  },

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

  warningTitle: {
    color: "#B91C1C",
    marginBottom: "6px",
  },

  warningText: {
    color: "#7A271A",
    marginBottom: "10px",
    lineHeight: 1.5,
  },

  ul: {
    paddingLeft: "18px",
    color: "#7A271A",
    fontWeight: "600",
    lineHeight: 1.6,
    margin: 0,
  },

  section: {
    marginBottom: "14px",
  },

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

  btnDisabled: {
    opacity: 0.7,
    cursor: "not-allowed",
  },

  disabled: {
    opacity: 0.6,
  },
};