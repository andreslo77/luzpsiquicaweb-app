// frontend/src/screens/LegalOperationalWeb.jsx

import React from "react";
import AppLayoutWeb from "../components/layout/AppLayoutWeb.jsx";
import { useLang } from "../context/LanguageContext.jsx";

const DOC_VERSION = "1.1";
const DOC_DATE = "2026-01-07";
const DOC_PLATFORM = "Aplicación web Luz Psíquica";

export default function LegalOperationalWeb() {
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

  const operativeSections = [
    {
      heading: tx("operational.s1Heading", "1. Alcance del documento"),
      body: tx(
        "operational.s1Body",
        "Este documento describe las reglas operativas generales de la plataforma Luz Psíquica, incluyendo condiciones de uso funcional, compra y consumo de minutos, disponibilidad del servicio y lineamientos de interacción entre usuarios y psíquicos."
      ),
    },
    {
      heading: tx("operational.s2Heading", "2. Funcionamiento general"),
      body: tx(
        "operational.s2Body",
        "Luz Psíquica opera como una plataforma tecnológica que conecta usuarios con psíquicos disponibles. La plataforma puede ofrecer funciones como registro, inicio de sesión, compra de minutos, chat, llamadas, historial y soporte relacionado con la operación."
      ),
    },

    {
      heading: tx("operational.s3Heading", "3. Registro y acceso"),
      body: "",
    },
    {
      heading: tx("operational.s31Heading", "3.1 Registro de usuarios"),
      body: tx(
        "operational.s31Body",
        "Para acceder a determinadas funciones, el usuario deberá registrarse con información válida, actual y verificable. El usuario es responsable de custodiar sus credenciales y del uso que se haga desde su cuenta."
      ),
    },
    {
      heading: tx("operational.s32Heading", "3.2 Exactitud de la información"),
      body: tx(
        "operational.s32Body",
        "La información suministrada por cada usuario o psíquico debe ser auténtica y mantenerse actualizada. La plataforma podrá limitar accesos o tomar medidas cuando detecte inconsistencias relevantes o posibles usos indebidos."
      ),
    },
    {
      heading: tx("operational.s33Heading", "3.3 Seguridad de la cuenta"),
      body: tx(
        "operational.s33Body",
        "Cada usuario debe mantener la confidencialidad de sus datos de acceso. Luz Psíquica podrá implementar mecanismos de autenticación, validación y protección para reforzar la seguridad operativa."
      ),
    },

    {
      heading: tx("operational.s4Heading", "4. Psíquicos y disponibilidad"),
      body: "",
    },
    {
      heading: tx("operational.s41Heading", "4.1 Estado de disponibilidad"),
      body: tx(
        "operational.s41Body",
        "Los psíquicos podrán aparecer como disponibles, ocupados o no disponibles según su estado dentro de la plataforma. Esta información es funcional y puede variar en tiempo real."
      ),
    },
    {
      heading: tx("operational.s42Heading", "4.2 Perfil y presentación"),
      body: tx(
        "operational.s42Body",
        "Cada psíquico podrá contar con perfil, fotografía, descripción, idiomas, calificaciones u otra información relevante para orientar al usuario. La plataforma podrá moderar o ajustar elementos del perfil por razones operativas o de cumplimiento."
      ),
    },
    {
      heading: tx("operational.s43Heading", "4.3 Interacción con usuarios"),
      body: tx(
        "operational.s43Body",
        "La interacción entre usuarios y psíquicos debe mantenerse dentro del entorno previsto por la plataforma. No está permitido utilizar los canales del servicio para vulnerar normas, compartir información prohibida o evadir controles operativos."
      ),
    },

    {
      heading: tx("operational.s5Heading", "5. Compra y uso de minutos"),
      body: "",
    },
    {
      heading: tx("operational.s51Heading", "5.1 Compra de minutos"),
      body: tx(
        "operational.s51Body",
        "Los usuarios podrán adquirir minutos o paquetes equivalentes conforme a las opciones visibles en la plataforma. Dichos minutos constituyen créditos digitales de uso exclusivo dentro de Luz Psíquica y no representan dinero en efectivo, depósitos, saldos retirables ni valores transferibles. Los valores, promociones, descuentos o condiciones comerciales podrán cambiar sin previo aviso cuando la operación lo requiera."
      ),
    },
    {
      heading: tx("operational.s52Heading", "5.2 Consumo de minutos"),
      body: tx(
        "operational.s52Body",
        "Los minutos se descontarán de acuerdo con el uso real de funcionalidades como llamadas o chat, según las reglas técnicas y comerciales vigentes. La duración efectiva de las sesiones podrá depender de conexión, disponibilidad y lógica operativa del sistema. El usuario acepta que el consumo del servicio digital inicia o queda habilitado una vez confirmada la compra dentro de la plataforma."
      ),
    },
    {
      heading: tx("operational.s53Heading", "5.3 No reembolso, no retiro y no transferencia"),
      body: tx(
        "operational.s53Body",
        "Todas las compras de minutos son finales y no reembolsables, salvo supuestos excepcionales de falla técnica comprobable atribuible directamente a la plataforma. Los minutos adquiridos no pueden ser retirados, convertidos en dinero, transferidos a terceros ni reclamados como devolución por falta de uso voluntario del servicio. El no uso total o parcial de los minutos no genera derecho a reembolso, compensación, indemnización ni reconocimiento económico de ninguna naturaleza. En caso de incidente técnico validado por Luz Psíquica, cualquier medida correctiva se limitará estrictamente a un ajuste técnico interno o a la reposición proporcional del servicio, sin obligación de devolución monetaria."
      ),
    },

    {
      heading: tx("operational.s6Heading", "6. Llamadas y chat"),
      body: "",
    },
    {
      heading: tx("operational.s61Heading", "6.1 Reglas de comunicación"),
      body: tx(
        "operational.s61Body",
        "Las comunicaciones dentro de la plataforma deben respetar normas de convivencia, seguridad y legalidad. Luz Psíquica podrá limitar, interrumpir o registrar eventos técnicos relacionados con una sesión cuando sea necesario para soporte, auditoría o cumplimiento."
      ),
    },

    {
      heading: tx("operational.s7Heading", "7. Fallas técnicas y disponibilidad"),
      body: "",
    },
    {
      heading: tx("operational.s71Heading", "7.1 Continuidad del servicio"),
      body: tx(
        "operational.s71Body",
        "La plataforma podrá experimentar interrupciones por mantenimiento, actualizaciones, errores de terceros, conectividad o eventos no controlados. Luz Psíquica realizará esfuerzos razonables para restablecer el servicio, sin garantizar continuidad absoluta."
      ),
    },

    {
      heading: tx("operational.s8Heading", "8. Restricciones y medidas operativas"),
      body: "",
    },
    {
      heading: tx("operational.s81Heading", "8.1 Uso indebido"),
      body: tx(
        "operational.s81Body",
        "No se permite utilizar la plataforma para fraude, abuso, acoso, extracción indebida de información, suplantación, manipulación técnica ni cualquier actividad contraria a la ley o a las reglas internas del servicio."
      ),
    },
    {
      heading: tx("operational.s82Heading", "8.2 Suspensión o limitación"),
      body: tx(
        "operational.s82Body",
        "La plataforma podrá suspender temporal o definitivamente funciones, accesos o cuentas cuando existan indicios razonables de incumplimiento, riesgo operativo, afectación a terceros o necesidad de protección del ecosistema."
      ),
    },
    {
      heading: tx("operational.s83Heading", "8.3 Moderación"),
      body: tx(
        "operational.s83Body",
        "Luz Psíquica podrá revisar reportes, interacciones, eventos técnicos y otra información necesaria para investigar incidentes, resolver conflictos o aplicar medidas internas de operación."
      ),
    },
    {
      heading: tx("operational.s84Heading", "8.4 Cambios funcionales"),
      body: tx(
        "operational.s84Body",
        "La plataforma podrá agregar, modificar, retirar o reorganizar funciones, pantallas, precios, integraciones, mecanismos de acceso o flujos operativos cuando ello contribuya a la mejora del servicio o a su sostenibilidad."
      ),
    },
    {
      heading: tx("operational.s85Heading", "8.5 Soporte y revisión"),
      body: tx(
        "operational.s85Body",
        "Las solicitudes de soporte serán atendidas conforme a la capacidad operativa de la plataforma. Los casos relacionados con pagos, sesiones, comportamiento indebido o fallas técnicas podrán requerir revisión manual. Luz Psíquica podrá rechazar reclamaciones cuando detecte indicios de fraude, abuso, intento de elusión de controles o uso contrario a las reglas del servicio."
      ),
    },

    {
      heading: tx("operational.s9Heading", "9. Pagos y proveedores externos"),
      body: tx(
        "operational.s9Body",
        "Determinadas funciones pueden depender de proveedores externos de pago, comunicaciones, hosting o autenticación. La experiencia final puede verse afectada por políticas, validaciones o disponibilidad de dichos terceros."
      ),
    },
    {
      heading: tx("operational.s10Heading", "10. Actualizaciones"),
      body: tx(
        "operational.s10Body",
        "Este documento operativo podrá actualizarse para reflejar cambios técnicos, comerciales, funcionales o regulatorios. La versión publicada en la plataforma será la referencia vigente."
      ),
    },
    {
      heading: tx("operational.s11Heading", "11. Interpretación"),
      body: tx(
        "operational.s11Body",
        "En caso de duda sobre el alcance operativo de una funcionalidad, prevalecerá la interpretación razonable adoptada por la administración de la plataforma dentro del marco legal aplicable y del interés de estabilidad del servicio."
      ),
    },
    {
      heading: tx("operational.s12Heading", "12. Vigencia"),
      body: tx(
        "operational.s12Body",
        "Este documento entra en vigor desde su publicación y permanecerá aplicable mientras la funcionalidad o el servicio correspondiente se encuentre disponible dentro de Luz Psíquica."
      ),
    },
  ];

  return (
    <AppLayoutWeb
      title={tx("operational_header_title", "Documento Operativo")}
      showBack={true}
      backTo="/legal"
      showFooter={true}
    >
      <div style={styles.container}>
        <h1 style={styles.h1}>
          {tx("operational.title", "Documento Operativo")}
        </h1>

        <p style={styles.meta}>
          {tx(
            "operational.meta",
            "Versión {{version}} · Fecha {{date}} · Plataforma: {{platform}}",
            {
              version: DOC_VERSION,
              date: DOC_DATE,
              platform: DOC_PLATFORM,
            }
          )}
        </p>

        {operativeSections.map((section, idx) => (
          <div key={`${idx}-${section.heading}`} style={styles.section}>
            <h2 style={styles.h2}>{section.heading}</h2>
            {section.body ? <p style={styles.p}>{section.body}</p> : null}
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
};