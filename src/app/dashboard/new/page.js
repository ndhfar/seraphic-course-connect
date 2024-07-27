import { FormNewCourse } from "./components/form.new-course";
import { prisma } from "@/utils/prisma";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default async function Page() {
  const categories = await prisma.category.findMany();

  return (
    <div>
      <Header />
      <FormNewCourse categories={categories} />
      <Footer />
    </div>
  );
}
