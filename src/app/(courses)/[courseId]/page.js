import { prisma } from "@/utils/prisma";
import { PageCourse } from "./components/pageCourse";

export default async function Page({ params }) {
  const singleCourse = await prisma.course.findFirst({
    where: {
      id: params.courseId,
    },

    include: {
      user: true,
      feedbacks: true,
      category: true,
    },
  });

  return (
    //navbar
    <PageCourse singleCourse={singleCourse} />
    //footer
  );
}
