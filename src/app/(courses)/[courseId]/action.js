"use server";
import { uploadFile } from "@/libs/uploadFile";
import { prisma } from "@/utils/prisma";
import { redirect } from "next/navigation";

export async function AddFeedbackAction(_, formData) {
  const rating = formData.get("rating");
  const image = formData.get("image");
  const comment = formData.get("comment");

  const newFeedback = await prisma.feedback.create({
    data: {
      rating: Number(rating),
      image: image.name,
      comment,
      course: {
        connect: { id: "clyyfpffz00006g6zkewzcww8" },
      },
      user: {
        connect: { id: "clyu7j9j30000dttf7674g921" },
      },
    },
  });

  if (!rating || !image || !comment) {
    return "Please fill all the fields";
  }

  // logic r2

  await uploadFile({ key: image.name, body: image, folder: newFeedback.id });

  console.log(newFeedback);
  return "Add feedback successful";
  redirect("/clyyfpffz00006g6zkewzcww8");
}
