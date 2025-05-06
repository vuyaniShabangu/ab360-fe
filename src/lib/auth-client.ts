import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "https://staging-adboss-360-8z72.encr.app",
  basePath: "auth",
});

export const { signIn, signOut, signUp, useSession } = authClient;
