import { cookies as getCookies } from "next/headers";
import { createClient } from "@openauthjs/openauth/client";
import { Resource } from "sst/resource";

export { auth, login, logout } from "./actions";
export { subjects } from "@sessions/auth/subjects";

export const client = createClient({
  clientID: "nextjs",
  issuer: Resource.Auth.url.slice(0, -1),
});

export function setTokens(access: string, refresh: string) {
  const cookies = getCookies();

  cookies.set({
    name: "access_token",
    value: access,
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 34560000,
  });
  cookies.set({
    name: "refresh_token",
    value: refresh,
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 34560000,
  });
}
