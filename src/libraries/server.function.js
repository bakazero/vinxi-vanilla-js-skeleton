"use server";

import { getCookie, setCookie } from "vinxi/http";

export async function getSetting() {
  return {
    apiUrl: process.env.MBKM_API_URL,
  };
}

export async function getAuth() {
  const token = getCookie("auth");
  return { token };
}

export async function setAuth(token) {
  setCookie("auth", token, { secure: true, maxAge: 60 * 60 * 24 * 30 });
  return {};
}
