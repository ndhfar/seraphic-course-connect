"use client";

import { useActionState, useState } from "react";
import { AddFeedbackAction } from "../action";

export const FormFeedback = ({ params }) => {
  const [rating, setRating] = useState("");
  const [state, formAddFeedback, pending] = useActionState(
    AddFeedbackAction,
    null
  );

  return (
    <form action={formAddFeedback} className="space-y-2">
      {/* rating input */}
      <input name="courseId" value={params.courseId} type="hidden" />
      <div>
        <label className="label-text">Rating</label>
        <input
          name="rating"
          type="range"
          min={1}
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="range range-primary"
          step="1"
        />
        <div className="flex w-full justify-between px-2 text-xs">
          <span>1⭐</span>
          <span>2⭐</span>
          <span>3⭐</span>
          <span>4⭐</span>
          <span>5⭐</span>
        </div>
      </div>

      {/* image input */}
      <div>
        <label className="label-text">Image</label>
        <input
          name="image"
          type="file"
          accept="image/png"
          placeholder="Image"
          className="file-input file-input-sm file-input-primary w-full"
        />
      </div>

      {/* comment input */}
      <div>
        <label className="label-text">Comment</label>
        <textarea
          name="comment"
          placeholder="comment"
          rows={5}
          className="w-full textarea textarea-primary"></textarea>
      </div>

      <button
        className="btn btn-sm btn-primary items-center"
        disabled={pending}>
        Add your feedback
      </button>
      {state?.success === false ? (
        <div className="bg-red-50 text-error text-center text-sm">
          {state?.message}
        </div>
      ) : null}
    </form>
  );
};
