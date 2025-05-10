import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  // baseURL: "https://staging-adboss-360-8z72.encr.app",
  baseURL: "http://127.0.0.1:4000",
  basePath: "auth",
});

export const { signIn, signOut, signUp, useSession } = authClient;
