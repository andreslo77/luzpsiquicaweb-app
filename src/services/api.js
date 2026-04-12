// src/services/api.js

import { API_BASE_URL } from "../config/env.web";

export function buildApiUrl(path) {
  const baseRaw = (API_BASE_URL || "").toString().trim();
  if (!baseRaw) return null;

  const base = baseRaw.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;

  if (base.endsWith("/api")) return `${base}${p}`;
  return `${base}/api${p}`;
}

export function isEmailLike(v) {
  const s = String(v || "").trim();
  return s.includes("@");
}

export function normalizePhoneDigits(v) {
  const s = String(v || "").trim();
  return s.replace(/[^\d]/g, "");
}