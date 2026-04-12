// frontend/src/screens/LegalNormsWeb.jsx

import React, { useMemo } from "react";
import AppLayoutWeb from "../components/layout/AppLayoutWeb.jsx";
import { useLang } from "../context/LanguageContext.jsx";

const LEGAL_VERSION = "2026-01-04";
const LEGAL_OWNER = "Claudia Loaiza";
const LEGAL_EMAIL = "luzpsiquica1@gmail.com";
const WHATSAPP_NUMBER = "+18136187770";

// ⚠️ Reemplazar por la URL pública real cuando ya esté disponible
const PRIVACY_POLICY_URL = "https://luzpsiquica.com/en/legal/normas-y-privacidad";

export default function LegalNormsWeb() {
  const { t } = useLang();

  const tx = (key, fallback, vars = {}) => {
    try {
      const raw = typeof t === "function" ? t(key, vars) : "";
      let text = String(raw || "").trim();

      if (!text || text === key) {
        text = fallback;
      }

      Object.keys(vars).forEach((k) => {
        text = text.replaceAll(`{{${k}}}`, String(vars[k]));
      });

      return text;
    } catch {
      let text = fallback;
      Object.keys(vars).forEach((k) => {
        text = text.replaceAll(`{{${k}}}`, String(vars[k]));
      });
      return text;
    }
  };

  const whatsappWaMeUrl = useMemo(() => {
    const digits = WHATSAPP_NUMBER.replace(/[^\d]/g, "");
    return `https://wa.me/${digits}`;
  }, []);

  const mailtoUrl = useMemo(() => {
    const subject = encodeURIComponent(
      tx("legal.mailSubject", "Consulta legal - Luz Psíquica")
    );
    return `mailto:${LEGAL_EMAIL}?subject=${subject}`;
  }, [t]);

  const openExternal = (primaryUrl, fallbackUrl = null, failMessage = null) => {
    try {
      const win = window.open(primaryUrl, "_blank", "noopener,noreferrer");
      if (win) return;

      if (fallbackUrl) {
        const fallbackWin = window.open(fallbackUrl, "_blank", "noopener,noreferrer");
        if (fallbackWin) return;
      }

      window.alert(failMessage || tx("legal.openFailGeneric", "No fue posible abrir el enlace."));
    } catch {
      if (fallbackUrl) {
        try {
          const fallbackWin = window.open(fallbackUrl, "_blank", "noopener,noreferrer");
          if (fallbackWin) return;
        } catch {}
      }

      window.alert(failMessage || tx("legal.openFailGeneric", "No fue posible abrir el enlace."));
    }
  };

  const openEmail = () => {
    try {
      window.location.href = mailtoUrl;
    } catch {
      window.alert(
        tx(
          "legal.emailFailMessage",
          "No fue posible abrir el correo. Verifica que tengas una app de Email configurada."
        )
      );
    }
  };

  const openWhatsApp = () => {
    openExternal(
      whatsappWaMeUrl,
      null,
      tx("legal.whatsappFailMessage", "No fue posible abrir WhatsApp en este momento.")
    );
  };

  const openPrivacyPolicy = () => {
    openExternal(
      PRIVACY_POLICY_URL,
      null,
      tx("legal.openFailGeneric", "No fue posible abrir el documento solicitado.")
    );
  };

  const sections = [
    {
      title: tx("legal.s1Title", "1. Objeto de la plataforma"),
      body: tx(
        "legal.s1Body",
        "Luz Psíquica es una plataforma digital que permite a los usuarios conectarse con psíquicos para consultas por chat o llamada. La plataforma facilita la conexión, gestión de minutos y experiencia de uso, pero no garantiza resultados específicos derivados de las consultas."
      ),
    },
    {
      title: tx("legal.s2Title", "2. Naturaleza del servicio"),
      body: tx(
        "legal.s2Body",
        "Los servicios ofrecidos dentro de Luz Psíquica son de carácter espiritual, de orientación y entretenimiento. No sustituyen asesoría médica, psicológica, legal, financiera ni de ningún otro tipo profesional regulado."
      ),
    },
    {
      title: tx("legal.s3Title", "3. Responsabilidad del usuario"),
      body: tx(
        "legal.s3Body",
        "El usuario acepta utilizar la plataforma de manera responsable, respetuosa y conforme a la ley. Cada usuario es responsable de las decisiones personales que tome con base en la información recibida durante una consulta."
      ),
    },
    {
      title: tx("legal.s4Title", "4. Privacidad y tratamiento de datos"),
      body: tx(
        "legal.s4Body",
        "Luz Psíquica podrá recopilar y tratar datos personales necesarios para el funcionamiento de la plataforma, autenticación, soporte, pagos y seguridad. El tratamiento de estos datos se realizará conforme a la política de privacidad aplicable."
      ),
    },
    {
      title: tx("legal.s5Title", "5. Uso aceptable"),
      body: tx(
        "legal.s5Body",
        "No está permitido utilizar la plataforma para acosar, amenazar, discriminar, suplantar identidad, compartir contenido ilegal o intentar obtener datos personales de otros usuarios o psíquicos por medios indebidos."
      ),
    },
    {
      title: tx(
        "legal.s6Title",
        "6. Minutos, naturaleza del servicio y política de no reembolso"
      ),
      body: tx(
        "legal.s6Body",
        "Los minutos adquiridos dentro de la plataforma Luz Psíquica constituyen créditos digitales de uso exclusivo dentro del ecosistema del servicio y no representan dinero en efectivo, depósitos, valores almacenados, instrumentos financieros ni saldos transferibles.\n\nAl realizar una compra, el usuario acepta expresamente que está adquiriendo un servicio digital de consumo inmediato o bajo demanda, y no un bien susceptible de devolución posterior.\n\nEn consecuencia:\n\n• Todas las compras de minutos son finales y no reembolsables.\n• Los minutos adquiridos no pueden ser convertidos en dinero, transferidos a terceros ni retirados de la plataforma.\n• No se realizarán devoluciones totales ni parciales por decisión unilateral del usuario, incluyendo casos en los que los minutos no hayan sido utilizados.\n• El no uso del servicio por parte del usuario no genera derecho a reembolso, compensación o indemnización alguna.\n\nEl usuario reconoce que, al confirmar el pago, renuncia expresamente a cualquier derecho de retracto, desistimiento o devolución aplicable a compras de servicios digitales, en la medida permitida por la legislación aplicable.\n\nExcepcionalmente, Luz Psíquica podrá evaluar casos específicos únicamente cuando existan fallas técnicas comprobables, atribuibles directamente a la plataforma, que hayan impedido de manera efectiva la prestación del servicio. En tales casos, cualquier ajuste se limitará estrictamente a la corrección del error o a la reposición proporcional del servicio, sin que ello implique devolución monetaria.\n\nLuz Psíquica se reserva el derecho de rechazar cualquier solicitud que presente indicios de fraude, abuso, uso indebido del sistema, manipulación de la plataforma o intento de eludir los controles operativos.\n\nLas decisiones adoptadas en estos casos serán definitivas dentro del ámbito operativo de la plataforma y no generarán derecho a compensaciones adicionales, intereses, indemnizaciones ni reclamaciones distintas al eventual ajuste técnico que se determine."
      ),
    },
    {
      title: tx("legal.s7Title", "7. Limitación de responsabilidad"),
      body: tx(
        "legal.s7Body",
        "Luz Psíquica no será responsable por interpretaciones personales, decisiones individuales, expectativas subjetivas ni resultados derivados del uso del servicio. La plataforma actúa como intermediaria tecnológica entre usuarios y psíquicos."
      ),
    },
    {
      title: tx("legal.s8Title", "8. Disponibilidad del servicio"),
      body: tx(
        "legal.s8Body",
        "La plataforma podrá realizar actualizaciones, mantenimientos, pausas técnicas o ajustes de funcionamiento cuando sea necesario. No se garantiza disponibilidad ininterrumpida en todo momento."
      ),
    },
    {
      title: tx("legal.s9Title", "9. Propiedad intelectual"),
      body: tx(
        "legal.s9Body",
        "Los elementos visuales, textos, logotipos, estructura, marca y recursos propios de Luz Psíquica están protegidos y no podrán ser copiados, reproducidos o utilizados sin autorización previa."
      ),
    },
    {
      title: tx("legal.s10Title", "10. Modificaciones"),
      body: tx(
        "legal.s10Body",
        "Luz Psíquica podrá actualizar estas normas, políticas y condiciones cuando resulte necesario para mejorar el servicio, ajustarse a requisitos técnicos, comerciales o legales, o reforzar la seguridad de la plataforma."
      ),
    },
    {
      title: tx("legal.s11Title", "11. Jurisdicción"),
      body: tx(
        "legal.s11Body",
        "Estas condiciones se interpretarán de acuerdo con la legislación aplicable definida por la administración de la plataforma, sin perjuicio de los derechos mínimos que correspondan al usuario según su jurisdicción."
      ),
    },
    {
      title: tx("legal.s12Title", "12. Contacto"),
      body: tx(
        "legal.s12Intro",
        "Si tienes preguntas sobre estas normas, privacidad o el tratamiento de tus datos, puedes comunicarte con el equipo de Luz Psíquica por los siguientes canales:"
      ),
    },
  ];

  return (
    <AppLayoutWeb
      title={tx("legal_header_title", "Normas y Privacidad")}
      showBack={true}
      backTo="/legal"
      showFooter={true}
    >
      <div style={styles.container}>
        <h1 style={styles.h1}>
          {tx("legal.title", "Normas y Privacidad")}
        </h1>

        <p style={styles.meta}>
          {tx(
            "legal.meta",
            "Versión {{version}} · Responsable: {{owner}} · País/Jurisdicción: {{country}}",
            {
              version: LEGAL_VERSION,
              owner: LEGAL_OWNER,
              country: tx("legal.jurisdictionCountry", "Colombia"),
            }
          )}
        </p>

        {sections.map((section) => (
          <div key={section.title} style={styles.section}>
            <h2 style={styles.h2}>{section.title}</h2>
            <p style={styles.p}>{section.body}</p>

            {section.title === tx("legal.s4Title", "4. Privacidad y tratamiento de datos") && (
              <div style={styles.inlineLinkWrap}>
                <button
                  type="button"
                  style={styles.inlineLinkBtn}
                  onClick={openPrivacyPolicy}
                >
                  {tx("legal.cameraLinkText", "Ver política de privacidad")}
                </button>
              </div>
            )}

            {section.title === tx("legal.s12Title", "12. Contacto") && (
              <div style={styles.actions}>
                <button type="button" style={styles.actionBtn} onClick={openEmail}>
                  {tx("legal.emailLabel", `Email: ${LEGAL_EMAIL}`, {
                    email: LEGAL_EMAIL,
                  })}
                </button>

                <button type="button" style={styles.actionBtn} onClick={openWhatsApp}>
                  {tx("legal.whatsappLabel", "WhatsApp: +1 (813) 618-7770")}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </AppLayoutWeb>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  h1: {
    color: "#311B92",
    fontSize: "22px",
    fontWeight: 900,
    margin: 0,
  },

  meta: {
    color: "#5E5A72",
    margin: "0 0 4px 0",
    lineHeight: 1.45,
    fontWeight: 700,
    fontSize: "14px",
  },

  section: {
    background: "#FFFFFF",
    borderRadius: "16px",
    padding: "14px",
    border: "1px solid #DDD5E8",
    boxShadow: "0 2px 8px rgba(60, 20, 110, 0.08)",
  },

  h2: {
    color: "#4527A0",
    fontSize: "16px",
    fontWeight: 900,
    margin: "0 0 8px 0",
  },

  p: {
    color: "#555",
    lineHeight: 1.6,
    fontWeight: 600,
    fontSize: "14px",
    margin: 0,
    whiteSpace: "pre-wrap",
  },

  inlineLinkWrap: {
    marginTop: "10px",
  },

  inlineLinkBtn: {
    border: "none",
    background: "transparent",
    padding: 0,
    color: "#6C63FF",
    fontWeight: 900,
    fontSize: "14px",
    textDecoration: "underline",
    cursor: "pointer",
  },

  actions: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "12px",
  },

  actionBtn: {
    width: "100%",
    textAlign: "left",
    padding: "12px 14px",
    borderRadius: "12px",
    border: "1px solid #DDD5E8",
    background: "#F5F1FF",
    color: "#4A148C",
    fontWeight: 800,
    fontSize: "14px",
    cursor: "pointer",
  },
};