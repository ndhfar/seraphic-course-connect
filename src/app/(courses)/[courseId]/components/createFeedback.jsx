"use client";
import { StarCircle } from "solar-icon-set/astronomy";
import FormFeedback from "./form-feedback";

export default function FeedbackCard() {
  return (
    <div>
      <div className="mt-10 mb-2">
        <div className="flex justify-between mt-2">
          <div className="flex gap-2">
            <StarCircle size={30} />
            <h2 className="font-medium text-xl">Rating (0 Review)</h2>
          </div>

          <div className="">
            <button
              className="btn-sm btn btn-primary object-right"
              onClick={() =>
                document.getElementById("modalFormFeedback").showModal()
              }>
              Add Feedback
            </button>
            <FormFeedback />
          </div>
        </div>
      </div>

      <FeedbackCard />
    </div>
  );
}
