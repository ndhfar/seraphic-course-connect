import { prisma } from "@/utils/prisma";
// import Image from "next/image";

export const FeedbackCard = async ({ params }) => {
  const feedbacks = await prisma.feedback.findMany({
    where: {
      courseId: params.courseId,
    },
    include: {
      user: true,
    },
  });

  if (feedbacks.length === 0) {
    return <p className="bg-neutral p-5 rounded-lg">No feedback available</p>;
  }

  return (
    <div className="bg-neutral p-5 rounded-lg flex flex-col gap-5 mt-2">
      {feedbacks.map((feedback) => {
        return (
          <div key={feedback.id}>
            <div className="flex items-center gap-2">
              <div className="size-10 flex justify-center items-center bg-primary text-base-100 rounded-full font-medium">
                {feedback.user.fullName.charAt(0)}
              </div>
              <div className="flex flex-col gap-0">
                <h1 className="font-medium text-base">
                  {feedback.user.fullName}
                </h1>
                <p className="text-sm">{feedback.rating}/5</p>
              </div>
            </div>
            <h1 className="ml-12">{feedback.comment}</h1>
            <div className="ml-12">
              <img
                alt="course image"
                src={`${process.env.R2_PUBLIC_URL}/courseconnect/${feedback.id}/${feedback.image}`}
                width={100}
                height={100}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
