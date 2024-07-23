"use server";
import { prisma } from "@/utils/prisma";

export async function PageCourseAction() {
  const dataCourse = await prisma.course.findMany({
    where: {
      user: userid,
    },
  });
}
