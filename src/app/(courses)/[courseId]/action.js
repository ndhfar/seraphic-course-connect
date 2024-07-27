"use server";
import { auth } from "@/libs/auth";
import { uploadFile } from "@/libs/uploadFile";
import { prisma } from "@/utils/prisma";
import { redirect } from "next/navigation";

export async function AddFeedbackAction(_, formData) {
  const courseId = formData.get("courseId");
  const rating = formData.get("rating");
  const image = formData.get("image");
  const comment = formData.get("comment");

  const user = await auth();

  if (!rating || !image || !comment) {
    return {
      success: false,
      message: "Please fill all the fields",
    };
  }

  const newFeedback = await prisma.feedback.create({
    data: {
      rating: Number(rating),
      image: image.name,
      comment,
      course: {
        connect: { id: courseId },
      },
      user: {
        connect: { id: user.id },
      },
    },
  });

  // logic r2
  await uploadFile({ key: image.name, body: image, folder: newFeedback.id });

  // return {
  //   success: true,
  //   message: "Add feedback successful",
  // };
  redirect(`/${courseId}`);
}
