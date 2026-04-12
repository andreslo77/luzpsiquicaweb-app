// frontend/src/screens/LegalHomeWeb.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { useLang } from "../context/LanguageContext.jsx";
import AppLayoutWeb from "../components/layout/AppLayoutWeb.jsx";

export default function LegalHomeWeb() {
  const navigate = useNavigate();
  const { t } = useLang();

  return (
    <AppLayoutWeb
      title={t("legal_home_header_title")}
      showBack={true}
      backTo="/home"
      showFooter={true}
    >
      <div style={styles.container}>
        <h1 style={styles.title}>{t("legal_home_title")}</h1>

        <p style={styles.subtitle}>
          {t("legal_home_meta")}
        </p>

        <button
          style={styles.card}
          onClick={() => navigate("/legal/normas")}
        >
          <div style={styles.cardTitle}>
            {t("legal_home_card_privacy_title")}
          </div>
          <div style={styles.cardDesc}>
            {t("legal_home_card_privacy_desc")}
          </div>
        </button>

        <button
          style={styles.card}
          onClick={() => navigate("/legal/operativo")}
        >
          <div style={styles.cardTitle}>
            {t("legal_home_card_operational_title")}
          </div>
          <div style={styles.cardDesc}>
            {t("legal_home_card_operational_desc")}
          </div>
        </button>
      </div>
    </AppLayoutWeb>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },

  title: {
    fontSize: "22px",
    fontWeight: "800",
    color: "#311B92",
    marginBottom: "4px",
  },

  subtitle: {
    color: "#555",
    fontSize: "14px",
    lineHeight: "1.5",
    marginBottom: "12px",
  },

  card: {
    width: "100%",
    textAlign: "left",
    background: "#FFFFFF",
    borderRadius: "16px",
    padding: "16px",
    border: "1px solid #DDD5E8",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(60, 20, 110, 0.08)",
  },

  cardTitle: {
    fontSize: "16px",
    fontWeight: "800",
    color: "#4527A0",
    marginBottom: "6px",
  },

  cardDesc: {
    fontSize: "14px",
    color: "#555",
    lineHeight: "1.4",
  },
};