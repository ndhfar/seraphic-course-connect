import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { prisma } from "@/utils/prisma";
import { auth } from "@/libs/auth";
import { CardDashboard } from "@/components/cardDashboard";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Page() {
  // const user = await auth();

  // if (!user) {
  //   redirect('/');
  // }

  const courses = await prisma.course.findMany({
    where: {
      userId: "clz3tlrv4000beaxize8wwqx8",
    },
  });

  return (
    <main>
      {/* Header */}
      <Header />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 p-10 pb-32 pt-20 ">
        {courses.map((course) => (
          // card
          <CardDashboard key={course.id} course={course} />
        ))}

        {/* Add Card */}
        <Link href="/dashboard/new">
          <div className="flex justify-center items-center card bg-base-100 w-full shadow-xl">
            <div className="btn btn-primary btn-outline text-primary w-full h-full">Add Your Course +</div>
          </div>
        </Link>
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </main>
  );
}
