import Link from "next/link";
import { prisma } from "@/utils/prisma";

export const CourseCard = async ({ course }) => {
  // * Function to format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
    });
  };

  const feedbacks = await prisma.feedback.findMany({
    where: {
      courseId: course.id,
    },
  });

  const averageRating =
    feedbacks.length > 0
      ? (
          feedbacks.reduce((acc, feedback) => acc + feedback.rating, 0) /
          feedbacks.length
        ).toFixed(1)
      : "0";

  return (
    <div className="card card-compact bg-base-100 shadow-xl w-full h-auto">
      {/* Card Image */}
      <figure>
        {course.image === "undefined" ? (
          <div className="w-full h-40 bg-neutral flex justify-center items-center">
            No Image
          </div>
        ) : (
          <img
            src={`${process.env.R2_PUBLIC_URL}/courseconnect/${course.id}/${course.image}`}
            className="object-cover w-full h-40"
          />
        )}
      </figure>

      {/* Card Body */}
      <div className="card-body gap-1">
        <div className="w-full flex justify-between items-start gap-3">
          <h2 className="card-title w-full">{course.title}</h2>
          <p className="font-semibold text-xs">★{averageRating}</p>
        </div>
        <p className="font-extralight text-sm">
          {formatDate(course.startDate)} - {formatDate(course.endDate)}
        </p>
        <p className="font-semibold text-sm">{course.location}</p>
        <p className="text-primary font-semibold">
          Rp {course.price.toLocaleString()}
        </p>

        {/* Card Button */}
        <div className="card-actions justify-end">
          <Link href={`/${course.id}`}>
            <button className="btn btn-primary btn-outline w-full btn-sm">
              View Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
