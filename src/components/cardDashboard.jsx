"use client";

import { useActionState } from "react";
import { DeleteCourseAction } from "@/app/dashboard/action";
import Link from "next/link";

export const CardDashboard = ({ course }) => {
  const [formAction, pending] = useActionState(DeleteCourseAction, null);

  return (
    <div className="card card-compact bg-base-100 shadow-xl w-full h-auto">
      {/* image */}
      <figure>
        {course.image === "undefined" ? (
          <div className="w-full h-40 bg-neutral flex justify-center items-center">
            No Image
          </div>
        ) : (
          <img
            src={`${process.env.NEXT_PUBLIC_R2_PUBLIC_URL}/courseconnect/${course.id}/${course.image}`}
            className="object-cover w-full h-40"
          />
        )}
      </figure>

      {/* desc */}
      <div className="card-body">
        <h2 className="card-title">{course.title}</h2>

        {/* button */}
        <div className="card-actions justify-end">
          <Link href={`/dashboard/${course.id}/editCourse`}>
            <button className="btn btn-outline btn-primary btn-sm">Edit</button>
          </Link>
          <form action={formAction}>
            <input name="courseId" value={course.id} type="hidden" />
            <button
              className="btn btn-outline btn-error btn-sm"
              disabled={pending}
            >
              Delete
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
