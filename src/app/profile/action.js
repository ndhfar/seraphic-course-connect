"use server";

import { prisma } from "@/utils/prisma";
import { auth } from "@/libs/auth";
import { findUserByEmail } from "@/services/user.service";

export default async function UpdateUserDataAction(_, formData) {
  const userInfo = await auth();

  const fullName = formData.get("fullName");
  const email = formData.get("email");
  const contact = formData.get("contact");
  const role = formData.get("role");

  // * Handle empty input
  if (!fullName || !email || !contact || !role) {
    return {
      success: false,
      message: "All fields are required.",
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

    // * Update user in database
    await prisma.user.update({
      where: {
        id: userInfo.id,
      },
      data: {
        fullName,
        email,
        contact,
        role,
      },
    });

    return {
      success: true,
      message: "Edit profile successful.",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Edit profile failed.",
    };
  }
}