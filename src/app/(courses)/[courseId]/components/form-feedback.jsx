"use client";

import { useActionState, useState } from "react";
import { AddFeedbackAction } from "../action";
export default function FormFeedback() {
  const [rating, setRating] = useState("");
  const [message, formAddFeedback, pending] = useActionState(
    AddFeedbackAction,
    null
  );

  return (
    <div>
      <dialog id="modalFormFeedback" className="modal">
        <div className="modal-box p-10 space-y-5">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          {/* input feedback */}
          <form action={formAddFeedback} className="space-y-2">
            {/* rating input */}
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

            <button className="btn btn-sm btn-primary items-center">
              Add your feedback
            </button>
            <div>{message}</div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
