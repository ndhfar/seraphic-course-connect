import { FormNewCourse } from "./components/form.new-course";
import { prisma } from "@/utils/prisma";

export default async function Page() {
  const categories = await prisma.category.findMany();

  return (
    //navbar
    <FormNewCourse categories={categories} />
    //footer
  );
}
