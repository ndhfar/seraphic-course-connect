"use client";

import Link from "next/link";
import { useActionState } from "react";
import LoginAction from "./action";
import continueWithGoogleAction from "./action-google";

export default function Home() {
  const [state, formAction, pending] = useActionState(LoginAction, null);

  return (
    <main>
      <div className="text-center mb-3">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-sm">Welcome back! Please sign in</p>
      </div>
      <form className="space-y-2 mb-2" action={formAction}>
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
        <button className="w-full btn btn-primary btn-sm" disabled={pending}>
          Login
        </button>
      </form>
      <form className="mb-2" action={continueWithGoogleAction}>
        <button className="w-full btn btn-outline btn-primary btn-sm">
          Continue with Google
        </button>
      </form>
      <section>
        <p className="text-sm text-center">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-primary font-semibold">
            Sign Up
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
