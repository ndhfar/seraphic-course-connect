"use server";

import { prisma } from "@/utils/prisma";
import { auth } from "@/libs/auth";
import { redirect } from "next/navigation";

export default async function UpdateUserDataAction(_, formData) {
  const userInfo = await auth();

  const fullName = formData.get("fullName");
  const contact = formData.get("contact");
  const role = formData.get("role");

  // * Handle empty input
  if (!fullName || !contact || !role) {
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
    // * Update user in database
    await prisma.user.update({
      where: {
        id: userInfo.id,
      },
      data: {
        fullName,
        contact,
        role,
      },
    });
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Edit profile failed.",
    };
  }
  redirect("/");
}
