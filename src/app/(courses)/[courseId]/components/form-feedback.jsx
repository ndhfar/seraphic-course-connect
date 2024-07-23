import React from "react";

export default function FormFeedback() {
  return (
    <form action="">
      <input type="text" placeholder="Rating" />
      <input type="file" accept="image/png" placeholder="Image" />
      <textarea name="comment" placeholder="comment"></textarea>
      <button>Add your feedback</button>
    </form>
  );
}
