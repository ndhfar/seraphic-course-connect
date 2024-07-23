"use client";

import { useActionState } from "react";
import UpdateUserDataAction from "../action";

export const FormEditProfile = ({ userData }) => {
  const [state, formAction, pending] = useActionState(
    UpdateUserDataAction,
    null
  );

  return (
    <div>
      <form className="flex flex-col mt-4 space-y-3" action={formAction}>
        <InputTemplate
          title="Full Name"
          type="text"
          name="fullName"
          defaultValue={userData?.fullName}
        />
        <InputTemplate
          title="Email"
          type="email"
          name="email"
          defaultValue={userData?.email}
        />
        <InputTemplate
          title="Phone Number"
          type="tel"
          name="contact"
          defaultValue={userData?.contact}
        />
        <div className="flex flex-col">
          <label className="font-medium text-[#858585] text-sm">Role</label>
          <select
            className="w-full select select-sm select-accent select-bordered text-sm"
            name="role"
            defaultValue={userData?.role}
          >
            <option>Author</option>
            <option>Participant</option>
          </select>
        </div>
        <div className="flex">
          <button className="ml-auto btn btn-primary btn-sm" disabled={pending}>
            Save
          </button>
        </div>
      </form>
      <div className="mt-4">
        {state?.success === false ? (
          <div className="bg-red-50 text-error text-center text-sm">
            {state?.message}
          </div>
        ) : (
          <div className="bg-green-50 text-success text-center text-sm">
            {state?.message}
          </div>
        )}
      </div>
    </div>
  );
};

const InputTemplate = ({ title, type, name, defaultValue }) => {
  return (
    <div className="flex flex-col">
      <label className="font-medium text-[#858585] text-sm">{title}</label>
      <input
        type={type}
        name={name}
        placeholder={title}
        className="w-full input input-sm input-accent input-bordered"
        defaultValue={defaultValue}
      />
    </div>
  );
};
