"use server";

import { findUserByEmail } from "@/services/user.service";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export default async function LoginAction(_, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  // * Handle empty input
  if (!email || !password) {
    return {
      success: false,
      message: "All fields are required.",
    };
  }

  try {
    // * Find user in database
    const user = await findUserByEmail(email);
    if (!user) {
      return {
        success: false,
        message: "User not found.",
      };
    }

    // Matching password with hashed password
    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      return {
        success: false,
        message: "Invalid credentials.",
      };
    }

    // Giving token for authorization
    const payload = {
      id: user.id,
      name: user.fullName,
      email: user.email,
    };

    const jwtToken = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });

    cookies().set("token", jwtToken, { httpOnly: true });
  } catch (error) {
    console.error(error);
    return {
      succes: false,
      message: "An error occurred during login.",
    };
  }

  redirect("/");
}
