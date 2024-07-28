import { CourseCard } from "@/components/courseCard";
import { prisma } from "@/utils/prisma";
import React from "react";

export const Courses = async ({ query }) => {
  const courses = await prisma.course.findMany({
    where: {
      title: {
        contains: query ?? "",
        mode: "insensitive",
      },
    },
  });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.length === 0 ? <p>No courses</p> : courses.map((course) => <CourseCard course={course} key={course.id} />)}
    </div>
  );
};
