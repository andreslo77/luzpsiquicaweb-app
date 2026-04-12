// src/services/storage.js

export async function storageGet(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

export async function storageSet(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // noop
  }
}

export async function storageRemove(key) {
  try {
    window.localStorage.removeItem(key);
  } catch {
    // noop
  }
}

export async function storageClearAuth() {
  const keys = [
    "auth_token",
    "token",
    "authToken",
    "lp_token",
    "accessToken",
    "me",
    "user_role",
    "lp_cached_client_name",
    "lp_post_auth_intent",
    "lp_last_chat_other",
    "lp_last_chat_psychic",
    "lp_last_chat_client",
  ];

  for (const key of keys) {
    try {
      window.localStorage.removeItem(key);
    } catch {
      // noop
    }
  }
}