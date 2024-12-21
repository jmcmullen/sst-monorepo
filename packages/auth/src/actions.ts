/* eslint-disable @typescript-eslint/require-await */
"use server";

import { cookies as getCookies, headers as getHeaders } from "next/headers";
import { redirect } from "next/navigation";

import { client, setTokens, subjects } from ".";

export async function auth() {
  const cookies = getCookies();
  const headers = getHeaders();
  const refreshToken = cookies.get("refresh_token")?.value;
  const cookieToken = cookies.get("access_token")?.value;
  const bearerToken = headers.get("authorization")?.split(" ")[1];
  const accessToken = cookieToken ?? bearerToken;

  if (!accessToken) {
    return null;
  }

  const verified = await client.verify(subjects, accessToken, {
    refresh: refreshToken,
  });

  if (verified.err) {
    return null;
  }
  if (verified.tokens) {
    setTokens(verified.tokens.access, verified.tokens.refresh);
  }

  return verified.subject.properties;
}

export async function login() {
  const cookies = getCookies();
  const accessToken = cookies.get("access_token");
  const refreshToken = cookies.get("refresh_token");

  if (accessToken) {
    const verified = await client.verify(subjects, accessToken.value, {
      refresh: refreshToken?.value,
    });
    if (!verified.err && verified.tokens) {
      setTokens(verified.tokens.access, verified.tokens.refresh);
      redirect("/");
    }
  }

  const headers = getHeaders();
  const host = headers.get("host");
  const protocol = host?.includes("localhost") ? "http" : "https";
  const { url } = await client.authorize(
    `${protocol}://${host}/api/callback`,
    "code",
  );
  redirect(url);
}

export async function logout() {
  const cookies = getCookies();
  cookies.delete("access_token");
  cookies.delete("refresh_token");

  redirect("/");
}
