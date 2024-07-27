"use client";

import { NewCourseAction } from "../action";
import { useActionState } from "react";

export const FormNewCourse = ({ categories }) => {
  const [state, formAddNewCourse, pending] = useActionState(
    NewCourseAction,
    null
  );

  return (
    <main className="">
      <div className="m-2 py-8 px-10">
        <h1 className="font-bold text-3xl mb-2">Add your Course</h1>
        <form
          action={formAddNewCourse}
          className="space-y-3 grid grid-cols-2 gap-3">
          {/* col kiri */}
          <div className="col-span-1">
            {/* input title */}
            <label className="label-text">Title</label>
            <input
              className="input-add-course"
              name="title"
              type="text"
              placeholder="Title"
            />

            {/* input image */}
            <label className="label-text">Image</label>
            <input
              accept="image/png"
              name="image"
              type="file"
              placeholder="image"
              className="file-input file-input-bordered file-input-primary w-full input-add-course"
            />

            {/* input category */}
            <div>
              <label className="label-text">Select Category</label>
              <select className="select-add-course" name="category">
                {categories.map((c) => {
                  return (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  );
                })}
              </select>
            </div>

            {/* input location */}
            <label className="label-text">Location</label>
            <input
              className="input-add-course"
              name="location"
              type="text"
              placeholder="Location"
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
                      className="input-add-course"
                      name="startDate"
                      type="date"
                      placeholder="Date"
                    />
                  </div>
                  <div className="col-span-1">
                    {/* input end date */}
                    <label className="label-text">End Date</label>
                    <input
                      className="input-add-course"
                      name="endDate"
                      type="date"
                      placeholder="Date"
                    />
                  </div>
                </div>
              </div>

              <div className="grid col-span-4">
                {/* input price */}
                <label className="label-text">Price</label>
                <input
                  className="input-add-course"
                  name="price"
                  type="text"
                  placeholder="Price"
                />

                {/* input url */}
                <div>
                  <label className="label-text">Link Platform</label>
                  <input
                    className="input-add-course"
                    name="linkPlatform"
                    type="url"
                    placeholder="Link Platform"
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
              className="w-full textarea-add-course"></textarea>
          </div>
          <div className="flex justify-end w-full col-span-2">
            <button className="btn btn-primary btn-wide" disabled={pending}>
              Add
            </button>
          </div>

          {state?.success === false ? (
            <div className="bg-red-50 text-error text-center text-sm">
              {state?.message}
            </div>
          ) : null}
        </form>
      </div>
    </main>
  );
};
