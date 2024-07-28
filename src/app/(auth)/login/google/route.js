import { cookies } from "next/headers";
import { google } from "@/utils/arctic";
import { findUserByEmail } from "@/services/user.service";
import { createUser } from "@/services/auth.services";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";
import { getUserInfoResource } from "@/services/google.service";

export async function GET(req) {
  // * Get the code
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const codeVerifier = cookies().get("codeVerifier").value;

  // * Code === codeVerifier (Validation)
  const tokens = await google.validateAuthorizationCode(code, codeVerifier);

  // * Use token to get user info resource
  const user = await getUserInfoResource(tokens);
  console.log(user);

  // * Search for user data in database
  const findUser = await findUserByEmail(user.email);

  // * Check if exist
  if (!findUser) {
    const newUser = await createUser({
      fullName: user.name,
      email: user.email,
      password: null,
      contact: null,
      role: null,
    });

    const payload = {
      id: newUser.id,
      fullName: newUser.fullName,
      email: newUser.email,
    };

    const jwtToken = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });
    cookies().set("token", jwtToken, { httpOnly: true });

    redirect("/");
  }

  const payload = {
    id: findUser.id,
    fullName: findUser.fullName,
    email: findUser.email,
  };

  const jwtToken = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });
  cookies().set("token", jwtToken, { httpOnly: true });

  redirect("/");
}