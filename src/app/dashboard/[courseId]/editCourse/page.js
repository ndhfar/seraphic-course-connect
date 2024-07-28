import { FormEditCourse } from "./components/form.edit-course";
import { prisma } from "@/utils/prisma";

export default async function Page({ params }) {
  const course = await prisma.course.findFirst({
    where: { id: params.courseId },
  });
  const categories = await prisma.category.findMany();

  return (
    <div>
      <FormEditCourse categories={categories} course={course} />
    </div>
  );
}
