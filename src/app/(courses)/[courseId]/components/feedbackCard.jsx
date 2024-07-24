import { prisma } from "@/utils/prisma";
import Image from "next/image";

export default async function FeedbackCard({ params }) {
  const feedbacks = await prisma.feedback.findMany({
    where: {
      courseId: params.courseId,
    },
    include: {
      user: true,
    },
  });
  console.log(feedbacks);

  return (
    <div className="bg-neutral p-3 grid grid-cols-12 gap-5 rounded-lg">
      {feedbacks.map((feedback) => {
        return (
          <div key={feedback.id}>
            <div className="bg-white grid row-span-2">avatar user</div>

            <div className="gap-4 grid col-span-10">
              <div className="grid grid-rows-2">
                <h4 className="font-medium">user</h4>
                <h3>rating</h3>
              </div>
              <h4>{feedback.comment}</h4>
              <div>
                {/* <Image
                  alt="course image"
                  src={`${process.env.R2_PUBLIC_URL}/courseconnect/${feedback.id}/${feedback.image}`}
                  width={100}
                  height={100}
                /> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
