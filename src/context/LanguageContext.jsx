import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations, DEFAULT_LANG } from "../../src/i18n/translations";

// ✅ Sube versión cuando cambies diccionarios para invalidar caché
const STORAGE_KEY = "lp_lang_v2";

const LanguageContext = createContext(null);

// -----------------------
// Helpers localStorage (web)
// -----------------------
function lsGet(key) {
  try {
    if (typeof window === "undefined") return null;
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function lsSet(key, value) {
  try {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(key, value);
  } catch {
    // noop
  }
}

function normalizeLang(candidate) {
  let lang = String(candidate || "").trim().toLowerCase();
  if (!lang) return DEFAULT_LANG;

  // ✅ soporta variantes: es-CO / en-US / es_CO
  if (lang.includes("-")) lang = lang.split("-")[0];
  if (lang.includes("_")) lang = lang.split("_")[0];

  // ✅ aliases comunes
  if (lang === "spanish" || lang === "español") lang = "es";
  if (lang === "english" || lang === "inglés") lang = "en";
  if (lang === "french" || lang === "français" || lang === "francés") lang = "fr";
  if (lang === "german" || lang === "deutsch" || lang === "alemán") lang = "de";
  if (lang === "portuguese" || lang === "português" || lang === "portugués") lang = "pt";
  if (lang === "italian" || lang === "italiano") lang = "it";

  // ✅ solo permitimos idiomas existentes
  if (translations && Object.prototype.hasOwnProperty.call(translations, lang)) {
    return lang;
  }

  return DEFAULT_LANG;
}

// -----------------------
// Helpers i18n
// -----------------------
function getByPath(obj, path) {
  if (!obj || !path) return undefined;

  // ✅ 1) compatibilidad: intenta key plana exacta
  if (Object.prototype.hasOwnProperty.call(obj, path)) return obj[path];

  // ✅ 2) dot notation: legal.title -> obj.legal.title
  if (!String(path).includes(".")) return undefined;

  return String(path)
    .split(".")
    .reduce((acc, part) => {
      if (acc && Object.prototype.hasOwnProperty.call(acc, part)) return acc[part];
      return undefined;
    }, obj);
}

function interpolate(template, params = {}) {
  if (typeof template !== "string") return template;

  return template.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, k) => {
    const v = params?.[k];
    return v === undefined || v === null ? "" : String(v);
  });
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(DEFAULT_LANG);
  const [ready, setReady] = useState(false);

  // ✅ cargar idioma guardado
  useEffect(() => {
    try {
      const stored = lsGet(STORAGE_KEY);
      const next = normalizeLang(stored);
      setLang(next);
    } finally {
      setReady(true);
    }
  }, []);

  // ✅ detectar cambios de idioma entre pestañas
  useEffect(() => {
    const handleStorage = (event) => {
      if (event.key !== STORAGE_KEY) return;
      const next = normalizeLang(event.newValue);
      setLang(next);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("storage", handleStorage);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("storage", handleStorage);
      }
    };
  }, []);

  const setLanguage = useMemo(() => {
    return async (nextLang) => {
      const next = normalizeLang(nextLang);
      setLang(next);
      lsSet(STORAGE_KEY, next);
    };
  }, []);

  const t = useMemo(() => {
    return (key, params = {}) => {
      const dict = translations?.[lang] || {};
      const fallback = translations?.[DEFAULT_LANG] || {};

      const fromDict = getByPath(dict, key);
      const fromFallback = getByPath(fallback, key);

      const resolved = fromDict ?? fromFallback ?? key;

      // ✅ evita [object Object]
      if (resolved && typeof resolved === "object") return key;

      return interpolate(String(resolved), params);
    };
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLanguage, t, ready }),
    [lang, setLanguage, t, ready]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang debe usarse dentro de <LanguageProvider>");
  return ctx;
}