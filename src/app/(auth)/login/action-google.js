"use server";

import { generateState, generateCodeVerifier } from "arctic";
import { cookies } from "next/headers";
import { google } from "@/utils/arctic";
import { redirect } from "next/navigation";

export default async function continueWithGoogleAction() {
  // * Generate state and code
  const state = generateState();
  const codeVerifier = generateCodeVerifier();

  // * Save code to cookie
  cookies().set("codeVerifier", codeVerifier);

  // * Create Authorizatin URL
  const url = await google.createAuthorizationURL(state, codeVerifier, {
    scopes: ["email", "profile"],
  });

  redirect(url.href);
}
