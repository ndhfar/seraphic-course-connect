"use client";

import { useState } from "react";

export const Select = () => {
  const [selected, setSelected] = useState("");

  return (
    <div className="flex flex-col">
      <label className="font-medium text-[#858585]">Role</label>
      <select
        className={`w-full select select-sm select-accent select-bordered text-sm ${
          selected == "" ? "text-[#9ca3af]" : "text-black"
        }`}
        name="role"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        <option value="" disabled hidden>
          Role
        </option>
        <option>Author</option>
        <option>Participant</option>
      </select>
    </div>
  );
};
