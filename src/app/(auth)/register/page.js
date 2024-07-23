"use client";

import Link from "next/link";
import { useState } from "react";
import { useActionState } from "react";
import RegisterAction from "./action";
import continueWithGoogleAction from "../login/action-google";

export default function Home() {
  const [selected, setSelected] = useState("");
  const [state, formAction, pending] = useActionState(RegisterAction, null);

  return (
    <main>
      <section className="text-center mb-3">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="text-sm">Create an account to continue</p>
      </section>
      <form className="space-y-2 mb-2" action={formAction}>
        <input
          type="text"
          placeholder="Full Name"
          name="fullName"
          className="input-auth"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="input-auth"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="input-auth"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          name="contact"
          className="input-auth"
        />
        <select
          name="role"
          className={`select-auth ${
            selected === "" ? "text-[#9ca3af]" : "text-black"
          }`}
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="" disabled hidden>
            Role
          </option>
          <option value="author">Author</option>
          <option value="participant">Participant</option>
        </select>
        <button className="w-full btn btn-primary btn-sm" disabled={pending}>
          Register
        </button>
      </form>
      <form className="mb-2" action={continueWithGoogleAction}>
        <button className="w-full btn btn-outline btn-primary btn-sm">
          Continue with Google
        </button>
      </form>
      <section>
        <p className="text-sm text-center">
          Have an account?{" "}
          <Link href="/login" className="text-primary font-semibold">
            Login
          </Link>
        </p>
      </section>
      <section className="mt-2">
        {state?.success === false ? (
          <div className="bg-red-50 text-error text-center text-sm">
            {state.message}
          </div>
        ) : null}
      </section>
    </main>
  );
}
