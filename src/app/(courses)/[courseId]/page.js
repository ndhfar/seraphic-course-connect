import { prisma } from "@/utils/prisma";
import { PageCourse } from "./components/pageCourse";
import { StarCircle } from "solar-icon-set/astronomy";
import { ButtonFeedback } from "./components/button-feedback";
import { auth } from "@/libs/auth";
import { FeedbackCard } from "./components/feedbackCard";
import { FormFeedback } from "./components/form-feedback";
import Link from "next/link";

export default async function Page({ params }) {
  const user = await auth();

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

  const feedbacks = await prisma.feedback.findMany({
    where: {
      courseId: params.courseId,
    },
  });

  const averageRating =
    feedbacks.length > 0
      ? (
          feedbacks.reduce((acc, feedback) => acc + feedback.rating, 0) /
          feedbacks.length
        ).toFixed(1)
      : "No ratings yet";

  return (
    <div>
      <main className="mt-20">
        <PageCourse singleCourse={singleCourse} />
        <div className="mt-10 mb-2 mx-9">
          <div className="flex justify-between my-3">
            <div className="flex gap-2">
              <StarCircle size={30} />
              <h2 className="font-medium text-xl">
                {averageRating} ({feedbacks.length} Review
                {feedbacks.length !== 1 && "s"})
              </h2>
            </div>

            <div>
              <ButtonFeedback />
              <dialog id="modalFormFeedback" className="modal">
                <div className="modal-box p-10 space-y-5">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>

                  {/* input feedback */}
                  {user ? (
                    <FormFeedback params={params} />
                  ) : (
                    <div className="text-center flex justify-between">
                      Please log in first.
                      <Link href="/login">
                        <button className="btn btn-primary btn-sm">
                          Log in
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              </dialog>
            </div>
          </div>
          <FeedbackCard params={params} />
        </div>
      </main>
    </div>
  );
}
