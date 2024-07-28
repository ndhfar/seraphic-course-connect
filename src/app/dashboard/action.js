"use server";

import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export default async function DeleteCourseAction(_, formData) {
  const courseId = formData.get("courseId");

  try {
    await prisma.course.delete({
      where: {
        id: courseId,
      },
    });
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Failed to delete the course.",
    };
  }

  revalidatePath("/dashboard");
}
