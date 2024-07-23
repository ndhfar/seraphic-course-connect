"use server";

import { createUser } from "@/services/auth.services";
import { redirect } from "next/navigation";
import { findUserByEmail } from "@/services/user.service";

export default async function RegisterAction(_, formData) {
  const fullName = formData.get("fullName");
  const email = formData.get("email");
  const password = formData.get("password");
  const contact = formData.get("contact");
  const role = formData.get("role");

  // * Handle empty input
  if (!fullName || !email || !password || !contact || !role) {
    return {
      success: false,
      message: "All fields are required.",
    };
  }

  // * Handle password pattern
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (!passwordPattern.test(password)) {
    return {
      success: false,
      message:
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.",
    };
  }

  // * Handle phone number pattern
  const contactPattern = /^\d{10,13}$/;
  if (!contactPattern.test(contact)) {
    return {
      success: false,
      message: "Phone number must be between 10 and 13 digits.",
    };
  }

  try {
    // * Check email in database
    if (await findUserByEmail(email)) {
      return {
        success: false,
        message: "Email is already registered.",
      };
    }

    // * Create data user
    await createUser({ fullName, email, password, contact, role });
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Register failed.",
    };
  }

  redirect("/");
}
