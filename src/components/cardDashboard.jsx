"use client";

import { useActionState } from "react";
import { DeleteCourseAction } from "@/app/dashboard/action";

export const CardDashboard = ({ course }) => {
  const [state, formAction, pending] = useActionState(DeleteCourseAction, null);

  // const [message, setMessage] = useState('');
  // // const [isConfirming, setIsConfirming] = useState(false);

  // const handleDelete = async () => {
  //   const response = await DeleteCourseAction(courseId);

  //   if (response.success) {
  //     setMessage(response.message);
  //     // Lakukan tindakan tambahan seperti memperbarui tampilan
  //   } else {
  //     setMessage(response.message);
  //   }
  // };

  // const confirmDelete = () => {
  //   if (window.confirm('Apakah Anda yakin ingin menghapus kursus ini?')) {
  //     handleDelete();
  //   }
  // };

  return (
    <div className="card card-compact bg-base-100 shadow-xl w-full h-auto">
      {/* image */}
      <figure>
        {course.image === "undefined" ? (
          <div className="w-full h-40 bg-neutral flex justify-center items-center">No Image</div>
        ) : (
          <img src={`${process.env.NEXT_PUBLIC_R2_PUBLIC_URL}/courseconnect/${course.id}/${course.image}`} className="object-cover w-full h-40" />
        )}
      </figure>

      {/* desc */}
      <div className="card-body">
        <h2 className="card-title">{course.title}</h2>

        {/* button */}
        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-primary btn-sm">Edit</button>
          <form action={formAction}>
            <input name="courseId" value={course.id} type="hidden" />
            <button className="btn btn-outline btn-error btn-sm" disabled={pending}>
              Delete
            </button>
          </form>
        </div>
      </div>
      {/* {!state?.success ? alert(state?.message) : null}
      {state?.success ? alert(state?.message) : null} */}
    </div>
  );
};
