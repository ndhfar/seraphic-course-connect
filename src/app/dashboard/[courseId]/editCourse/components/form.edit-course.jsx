"use client";

import { EditCourseAction, NewCourseAction } from "../action";
import { useActionState } from "react";

export const FormEditCourse = ({ categories, course }) => {
  const [message, FormEditCourse] = useActionState(EditCourseAction, null);

  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so add 1
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const startDate = formatDate(course.startDate);
  const endDate = formatDate(course.endDate);

  return (
    <main className="">
      <div className="m-2 py-8 px-10">
        <h1 className="font-bold text-3xl mb-2">Add your Course</h1>
        <form
          action={FormEditCourse}
          className="space-y-3 grid grid-cols-2 gap-3">
          <input type="hidden" name="courseId" value={course.id} />

          {/* col kiri */}
          <div className="col-span-1">
            {/* input title */}
            <label className="label-text">Title</label>
            <input
              name="title"
              type="text"
              placeholder="Title"
              defaultValue={course.title}
            />

            {/* input image */}
            {/* <label className="label-text">Image</label>
            <input
              accept="image/png"
              name="image"
              type="file"
              placeholder="image"
              className="file-input file-input-bordered file-input-primary w-full"
            /> */}

            {/* input category */}
            <div>
              <label className="label-text">Select Category</label>
              <select name="category">
                {categories.map((c) => {
                  return (
                    <option
                      key={c.id}
                      value={c.id}
                      selected={c.id === course.categoryId}>
                      {c.name}
                    </option>
                  );
                })}
              </select>
            </div>

            {/* input location */}
            <label className="label-text">Location</label>
            <input
              name="location"
              type="text"
              placeholder="Location"
              defaultValue={course.location}
            />
          </div>

          {/* col 2 */}
          <div>
            <div className="grid grid-cols-4 space-y-1">
              <div className="col-span-4">
                <div className="grid grid-cols-2 space-x-2">
                  <div className="col-span-1">
                    {/* input start date */}
                    <label className="label-text">Start Date</label>
                    <input
                      name="startDate"
                      type="date"
                      placeholder="Date"
                      defaultValue={startDate}
                      // defaultValue={new Date(course.startDate).toDateString()}
                    />
                  </div>
                  <div className="col-span-1">
                    {/* input end date */}
                    <label className="label-text">End Date</label>
                    <input
                      name="endDate"
                      type="date"
                      placeholder="Date"
                      defaultValue={endDate}
                    />
                  </div>
                </div>
              </div>

              <div className="grid col-span-4">
                {/* input price */}
                <label className="label-text">Price</label>
                <input
                  name="price"
                  type="text"
                  placeholder="Price"
                  defaultValue={course.price}
                />

                {/* input url */}
                <div>
                  <label className="label-text">Link Platform</label>
                  <input
                    name="linkPlatform"
                    type="url"
                    placeholder="Link Platform"
                    defaultValue={course.linkPlatform}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            {/* input description */}
            <label className="label-text">Description</label>
            <textarea
              name="description"
              placeholder="Description"
              rows="5"
              className="w-full"
              defaultValue={course.description}></textarea>
          </div>
          <div className="flex justify-end w-full col-span-2">
            <button className="btn btn-primary btn-wide">Edit Course</button>
          </div>

          <div>{message}</div>
        </form>
      </div>
    </main>
  );
};
