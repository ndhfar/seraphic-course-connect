"use client";

export const ButtonFeedback = () => {
  return (
    <button
      className="btn-sm btn btn-primary object-right"
      onClick={() => document.getElementById("modalFormFeedback").showModal()}>
      Add Feedback
    </button>
  );
};
