"use server";

import { uploadFile } from "@/libs/uploadFile";
import { prisma } from "@/utils/prisma";
import { auth } from "@/libs/auth";
import { redirect } from "next/navigation";

export async function NewCourseAction(_, formData) {
  const user = await auth();

  // ambil data dari form newcourses
  const title = formData.get("title");
  const image = formData.get("image");
  const description = formData.get("description");
  const category = formData.get("category");
  const location = formData.get("location");
  const startDate = formData.get("startDate");
  const endDate = formData.get("endDate");
  const price = formData.get("price");
  const linkPlatform = formData.get("linkPlatform");
  // akhir dari ambil data dari newcourses

  //business logic
  //create data to database
  const newCourse = await prisma.course.create({
    data: {
      title,
      image: image.name,
      description,
      location,
      price: Number(price),
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      linkPlatform,
      category: {
        connect: {
          id: category,
        },
      },
      user: {
        connect: { id: user.id },
      },
    },
  });

  //logic r2
  await uploadFile({ key: image.name, body: image, folder: newCourse.id });
  //end create data

  //! kategori & image ditambahin, atau bisa gak dipilih dulu (kyk ditmbhn null ? diskema prisma)
  //kategori tambahin manual lewat action
  //image tamabhin r2

  if (
    !image ||
    !title ||
    !description ||
    !category ||
    !price ||
    !location ||
    !linkPlatform ||
    !startDate ||
    !endDate
  ) {
    return {
      success: false,
      message: "Please fill al the fields",
    };
  }

  // redirect ke single page
  redirect("/dashboard");
}
