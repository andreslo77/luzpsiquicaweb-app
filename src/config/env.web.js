// src/config/env.web.js

function normalizeApiBase(url) {
  if (!url) return null;

  const base = String(url).trim().replace(/\/+$/, "");
  if (!base) return null;

  if (base.endsWith("/api")) return base;
  return `${base}/api`;
}

// ✅ Para Vite la variable debe empezar por VITE_
const FROM_ENV = import.meta.env.VITE_API_URL || null;

// ✅ Ajusta este fallback a tu backend real si hace falta
const FALLBACK = "https://luz-psiquica-backend.onrender.com/api";

export const API_BASE_URL =
  normalizeApiBase(FROM_ENV) ||
  normalizeApiBase(FALLBACK);