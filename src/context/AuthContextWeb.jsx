// src/context/AuthContextWeb.jsx
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { jwtDecode } from "jwt-decode";

import { buildApiUrl, isEmailLike, normalizePhoneDigits } from "../services/api";
import { storageClearAuth, storageGet, storageRemove, storageSet } from "../services/storage";

const AuthWebContext = createContext(null);

function looksLikeJwt(str) {
  if (typeof str !== "string") return false;
  if (!str) return false;
  if (str.includes("@")) return false;

  const jwtRegex = /^[A-Za-z0-9\-_]+\.[A-Za-z0-9\-_]+\.[A-Za-z0-9\-_]+$/;
  if (!jwtRegex.test(str)) return false;
  if (str.length < 40) return false;

  return true;
}

function normalizeUser(u) {
  if (!u) return null;

  const uid = u.id || u._id || u.userId || "";

  return {
    ...u,
    id: uid,
    _id: uid,
    role: u.role || u.rol || "",
    name: u.name || u.nombre || "",
    minutes: typeof u.minutes !== "undefined" ? Number(u.minutes) || 0 : 0,
  };
}

function decodeUserFromToken(token) {
  try {
    const p = jwtDecode(token);

    const nowSec = Math.floor(Date.now() / 1000);
    if (p?.exp && nowSec >= p.exp) return null;

    return normalizeUser({
      id: p.id || p._id,
      role: p.role || p.rol,
      name: p.name || p.nombre,
    });
  } catch {
    return null;
  }
}

async function getTokenFromStorage() {
  const keys = ["auth_token", "token", "authToken", "lp_token", "accessToken"];
  for (const k of keys) {
    const v = await storageGet(k);
    if (v) return v;
  }
  return null;
}

async function cacheName(name) {
  const n = (name || "").toString().trim();
  if (n) await storageSet("lp_cached_client_name", n);
}

async function getCachedName() {
  const n = await storageGet("lp_cached_client_name");
  return (n || "").toString().trim() || null;
}

async function cacheUserJson(userObj) {
  if (!userObj) return;
  await storageSet("me", JSON.stringify(userObj));
}

async function getCachedUserJson() {
  try {
    const raw = await storageGet("me");
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function AuthProviderWeb({ children }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const refreshMe = useCallback(
    async (overrideToken) => {
      const t = overrideToken || token || (await getTokenFromStorage());
      if (!t) return null;

      const url = buildApiUrl("/users/me");
      if (!url) return null;

      try {
        const res = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${t}`,
          },
        });

        const data = await res.json().catch(() => ({}));

        if (res.ok) {
          const me = normalizeUser(data?.user || data);
          if (me) {
            setUser(me);
            await cacheName(me?.name);
            await cacheUserJson(me);
          }
          return me || null;
        }

        if (res.status === 401) {
          setUser(null);
          setToken(null);
          await storageClearAuth();
        }

        return null;
      } catch {
        return null;
      }
    },
    [token]
  );

  useEffect(() => {
    (async () => {
      try {
        let savedToken = await getTokenFromStorage();
        if (!savedToken) return;

        let decoded = decodeUserFromToken(savedToken);
        if (!decoded) {
          await storageRemove("auth_token");
          await storageRemove("token");
          await storageRemove("authToken");
          await storageRemove("lp_token");
          await storageRemove("accessToken");
          setToken(null);
          setUser(null);
          return;
        }

        const cachedName = await getCachedName();
        if (cachedName && !decoded?.name) {
          decoded = { ...decoded, name: cachedName };
        }

        const cachedUser = await getCachedUserJson();
        if (cachedUser) {
          decoded = normalizeUser({ ...cachedUser, ...decoded }) || decoded;
        }

        setToken(savedToken);
        setUser(decoded);

        await refreshMe(savedToken);
      } finally {
        setLoading(false);
      }
    })();
  }, [refreshMe]);

  const login = async (a, b) => {
    if (looksLikeJwt(a)) {
      const newToken = a;

      await storageSet("auth_token", newToken);
      setToken(newToken);

      const normalized = normalizeUser(b) || decodeUserFromToken(newToken);
      setUser(normalized);

      await cacheName(normalized?.name);
      await cacheUserJson(normalized);
      await refreshMe(newToken);

      return { ok: true };
    }

    const cleanedIdRaw = (a || "").toString().trim();
    const password = (b || "").toString();

    let payload;
    if (isEmailLike(cleanedIdRaw)) {
      payload = { email: cleanedIdRaw.toLowerCase(), password };
    } else {
      payload = { phone: normalizePhoneDigits(cleanedIdRaw), password };
    }

    const url = buildApiUrl("/users/login");
    if (!url) throw new Error("VITE_API_URL no está configurada");

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data?.message || "Error de autenticación");

    const newToken = data?.token;
    const backendUser = data?.user;

    if (!newToken) throw new Error("No se recibió token del servidor");

    await storageSet("auth_token", newToken);

    const normalizedUser = normalizeUser(backendUser) || decodeUserFromToken(newToken);

    setToken(newToken);
    setUser(normalizedUser);

    await cacheName(normalizedUser?.name);
    await cacheUserJson(normalizedUser);

    await refreshMe(newToken);

    return { ok: true };
  };

  const logout = async () => {
    setUser(null);
    setToken(null);
    await storageClearAuth();
  };

  const value = useMemo(
    () => ({
      token,
      user,
      loading,
      login,
      logout,
      refreshMe,
      isAuthenticated: !!token,
    }),
    [token, user, loading, refreshMe]
  );

  return <AuthWebContext.Provider value={value}>{children}</AuthWebContext.Provider>;
}

export function useAuthWeb() {
  const ctx = useContext(AuthWebContext);
  if (!ctx) {
    throw new Error("useAuthWeb must be used within <AuthProviderWeb>");
  }
  return ctx;
}

// ✅ Alias útil para no romper archivos web que aún importen useAuth
export const useAuth = useAuthWeb;