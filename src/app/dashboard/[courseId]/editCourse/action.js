"use server";

import { uploadFile } from "@/libs/uploadFile";
import { prisma } from "@/utils/prisma";

export async function EditCourseAction(_, formData) {
  // ambil data dari form newcourses
  const courseId = formData.get("courseId");
  const title = formData.get("title");
  // const image = formData.get("image"); // delete
  const description = formData.get("description");
  const category = formData.get("category");
  const location = formData.get("location");
  const startDate = formData.get("startDate");
  const endDate = formData.get("endDate");
  const price = formData.get("price");
  const linkPlatform = formData.get("linkPlatform");
  // akhir dari ambil data dari newcourses

  //business logic
  //find course yang mau di edit
  const newCourse = await prisma.course.update({
    where: {
      id: courseId,
    },
    data: {
      title,
      // image: image.name,
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
  if (
    !title ||
    !description ||
    !category ||
    !price ||
    !location ||
    !linkPlatform ||
    !startDate ||
    !endDate
  ) {
    return "Please fill al the fields";
  }
  //update data

  //logic r2
  // await uploadFile({ key: image.name, body: image, folder: newCourse.id });
  //end create data

  //console dulu karena blm ada page coursenya
  revalidatePath("/dashboard/[courseId]/editCourse", "page");
  return "Succesfully edited";
}
