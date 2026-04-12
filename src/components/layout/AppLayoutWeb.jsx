import React, { useMemo, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLang } from "../../context/LanguageContext.jsx";
import logoLp from "../../assets/icon.png";

export default function AppLayoutWeb({
  title,
  children,
  showBack = true,
  backTo = "/home",
  onBack,
  rightSlot = null,
  contentStyle = {},
  showFooter = false,
  footerItems = [],
  footerStyle = {},
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const { lang, setLanguage, t } = useLang();

  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const tx = (key, fallback, params = {}) => {
    try {
      const value = typeof t === "function" ? t(key, params) : "";
      let text = String(value || "").trim();

      if (!text || text === key) {
        text = fallback;
      }

      Object.keys(params).forEach((k) => {
        text = text.replaceAll(`{{${k}}}`, String(params[k]));
      });

      return text;
    } catch {
      let text = fallback;
      Object.keys(params).forEach((k) => {
        text = text.replaceAll(`{{${k}}}`, String(params[k]));
      });
      return text;
    }
  };

  const resolvedTitle = title || tx("app_layout_default_title", "Luz Psíquica");

  const languageOptions = useMemo(
    () => [
      {
        code: "es",
        label: tx("app_layout_language_name_es", "Español"),
        short: "ES",
      },
      {
        code: "en",
        label: tx("app_layout_language_name_en", "English"),
        short: "EN",
      },
      {
        code: "fr",
        label: tx("app_layout_language_name_fr", "Français"),
        short: "FR",
      },
      {
        code: "de",
        label: tx("app_layout_language_name_de", "Deutsch"),
        short: "DE",
      },
      {
        code: "pt",
        label: tx("app_layout_language_name_pt", "Português"),
        short: "PT",
      },
      {
        code: "it",
        label: tx("app_layout_language_name_it", "Italiano"),
        short: "IT",
      },
    ],
    [lang, t]
  );

  const currentLanguage =
    languageOptions.find((item) => item.code === lang) || languageOptions[0];

  const handleBack = () => {
    if (typeof onBack === "function") {
      onBack();
      return;
    }

    if (backTo) {
      navigate(backTo);
      return;
    }

    navigate(-1);
  };

  const openLanguageMenu = () => {
    setShowLanguageMenu(true);
  };

  const closeLanguageMenu = () => {
    setShowLanguageMenu(false);
  };

  const handleLanguageChange = async (nextLang) => {
    try {
      await setLanguage(nextLang);
    } finally {
      closeLanguageMenu();
    }
  };

  const resolvedFooterItems = useMemo(() => {
    if (footerItems.length > 0) return footerItems;

    return [
      {
        key: "home",
        label: tx("app_layout_footer_home", "Inicio"),
        icon: "🏠",
        to: "/home",
        matchPaths: ["/", "/home"],
      },
      {
        key: "legal",
        label: tx("app_layout_footer_legal", "Legal"),
        icon: "⚖️",
        to: "/legal",
        matchPaths: ["/legal", "/legal/normas", "/legal/operativo"],
      },
      {
        key: "language",
        label: tx("app_layout_footer_language", "Idioma"),
        icon: "🌐",
        onClick: openLanguageMenu,
        matchPaths: [],
      },
    ];
  }, [footerItems, lang, t]);

  const handleFooterItemClick = (item) => {
    if (typeof item?.onClick === "function") {
      item.onClick();
      return;
    }

    if (item?.to) {
      navigate(item.to);
    }
  };

  const headerRightContent = rightSlot ? rightSlot : <div style={styles.sideSpacer} />;

  return (
    <div style={styles.page}>
      <div style={styles.shell}>
        <div style={styles.topBar}>
          <div style={{ ...styles.side, ...styles.sideLeft }}>
            {showBack ? (
              <button
                type="button"
                style={styles.topBackBtn}
                onClick={handleBack}
                aria-label={tx("common.back", "Volver")}
              >
                ←
              </button>
            ) : (
              <div style={styles.sideSpacer} />
            )}
          </div>

          <div style={styles.topBarCenter}>
            <img
              src={logoLp}
              alt={tx("app_layout_logo_alt", "Luz Psíquica")}
              style={styles.topLogo}
            />
            <div style={styles.topTitle}>{resolvedTitle}</div>
          </div>

          <div style={{ ...styles.side, ...styles.sideRight }}>{headerRightContent}</div>
        </div>

        <div
          style={{
            ...styles.content,
            ...(showFooter ? styles.contentWithFooter : {}),
            ...contentStyle,
          }}
        >
          {children}
        </div>

        {showFooter && (
          <div style={{ ...styles.bottomNavWrap, ...footerStyle }}>
            <div style={styles.bottomNav}>
              {resolvedFooterItems.map((item) => {
                const isActive =
                  item?.matchPaths?.includes(location.pathname) ||
                  location.pathname === item?.to;

                return (
                  <button
                    key={item.key || item.label}
                    type="button"
                    onClick={() => handleFooterItemClick(item)}
                    style={{
                      ...styles.bottomNavItem,
                      ...(isActive ? styles.bottomNavItemActive : {}),
                    }}
                    aria-label={item.label}
                  >
                    <span style={styles.bottomNavIcon}>{item.icon}</span>
                    <span
                      style={{
                        ...styles.bottomNavLabel,
                        ...(isActive ? styles.bottomNavLabelActive : {}),
                      }}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {showLanguageMenu && (
          <div style={styles.overlay} onClick={closeLanguageMenu}>
            <div style={styles.languageModal} onClick={(e) => e.stopPropagation()}>
              <div style={styles.languageTitle}>
                {tx("app_layout_language_modal_title", "Seleccionar idioma")}
              </div>

              <div style={styles.languageList}>
                {languageOptions.map((item) => {
                  const isSelected = item.code === currentLanguage.code;

                  return (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() => handleLanguageChange(item.code)}
                      style={{
                        ...styles.languageOption,
                        ...(isSelected ? styles.languageOptionActive : {}),
                      }}
                    >
                      <span style={styles.languageOptionLabel}>{item.label}</span>
                      {isSelected ? (
                        <span style={styles.languageOptionCheck}>✓</span>
                      ) : null}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={closeLanguageMenu}
                style={styles.closeBtn}
              >
                {tx("common.close", "Cerrar")}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#EDE7F6",
  },

  shell: {
    width: "100%",
    maxWidth: "430px",
    minHeight: "100vh",
    margin: "0 auto",
    background: "#EDE7F6",
    position: "relative",
    boxSizing: "border-box",
  },

  topBar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    maxWidth: "430px",
    margin: "0 auto",
    background: "#FFFFFF",
    borderBottom: "1px solid #DDD5E8",
    padding: "14px 16px 10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
    boxSizing: "border-box",
  },

  side: {
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
    position: "relative",
  },

  sideLeft: {
    width: "40px",
    minWidth: "40px",
    justifyContent: "flex-start",
  },

  sideRight: {
    minWidth: "92px",
    maxWidth: "132px",
    justifyContent: "flex-end",
    overflow: "visible",
  },

  sideSpacer: {
    width: "32px",
    height: "32px",
  },

  topBackBtn: {
    border: "none",
    background: "transparent",
    color: "#111",
    fontSize: "28px",
    lineHeight: 1,
    cursor: "pointer",
    padding: "4px 6px",
    flexShrink: 0,
  },

  topBarCenter: {
    flex: 1,
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  topLogo: {
    width: "20px",
    height: "20px",
    objectFit: "contain",
    display: "block",
    marginBottom: "6px",
  },

  topTitle: {
    color: "#311B92",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: 1.2,
    textAlign: "center",
  },

  content: {
    padding: "80px 20px 20px",
    boxSizing: "border-box",
  },

  contentWithFooter: {
    paddingBottom: "110px",
  },

  bottomNavWrap: {
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    maxWidth: "430px",
    margin: "0 auto",
    padding: "0 10px 8px",
    boxSizing: "border-box",
    background: "transparent",
  },

  bottomNav: {
    background: "#FFFFFF",
    border: "1px solid #DDD5E8",
    borderRadius: "18px",
    boxShadow: "0 8px 24px rgba(49, 27, 146, 0.10)",
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-between",
    padding: "6px 6px",
    gap: "4px",
  },

  bottomNavItem: {
    flex: 1,
    border: "none",
    background: "transparent",
    borderRadius: "14px",
    padding: "6px 4px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
    cursor: "pointer",
    minHeight: "54px",
    transition: "all 0.2s ease",
  },

  bottomNavItemActive: {
    background: "#F3ECFF",
  },

  bottomNavIcon: {
    fontSize: "22px",
    lineHeight: 1,
  },

  bottomNavLabel: {
    fontSize: "12px",
    fontWeight: 700,
    color: "#311B92",
    lineHeight: 1.1,
    textAlign: "center",
  },

  bottomNavLabelActive: {
    color: "#311B92",
  },

  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.28)",
    zIndex: 1200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    boxSizing: "border-box",
  },

  languageModal: {
    width: "100%",
    maxWidth: "360px",
    background: "#FFFFFF",
    borderRadius: "18px",
    padding: "18px",
    boxShadow: "0 18px 50px rgba(0,0,0,0.18)",
    boxSizing: "border-box",
  },

  languageTitle: {
    fontSize: "18px",
    fontWeight: 800,
    color: "#311B92",
    marginBottom: "14px",
    textAlign: "center",
  },

  languageList: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  languageOption: {
    width: "100%",
    border: "1px solid #DDD5E8",
    background: "#FFFFFF",
    borderRadius: "12px",
    padding: "12px 14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    color: "#311B92",
    fontSize: "14px",
    fontWeight: 700,
  },

  languageOptionActive: {
    background: "#F3ECFF",
    border: "1px solid #BBA8F5",
  },

  languageOptionLabel: {
    color: "#311B92",
    fontWeight: 700,
    fontSize: "14px",
  },

  languageOptionCheck: {
    color: "#311B92",
    fontWeight: 900,
    fontSize: "16px",
  },

  closeBtn: {
    width: "100%",
    marginTop: "14px",
    border: "none",
    background: "#6C63FF",
    color: "#FFFFFF",
    borderRadius: "12px",
    padding: "12px",
    fontWeight: 800,
    fontSize: "14px",
    cursor: "pointer",
  },
};