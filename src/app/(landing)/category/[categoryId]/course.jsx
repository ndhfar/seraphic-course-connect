import { CourseCard } from "@/components/courseCard";
import { prisma } from "@/utils/prisma";
import React from "react";

export const Courses = async ({ categoryId }) => {
  const courses = await prisma.course.findMany({
    where: {
      categoryId: categoryId,
    },
  });

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </div>
      {courses.length === 0 && <div className="text-slate-400 w-full bg-slate-100 p-8 rounded-lg text-center font-medium">No courses</div>}
    </>
  );
};
