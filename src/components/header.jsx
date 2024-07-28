import { auth } from "@/libs/auth";
import Link from "next/link";
import { Avatar } from "./avatar";
import { SearchBox } from "./searchBox";
import { LogoutAction } from "@/app/(landing)/action";

export const Header = async () => {
  const user = await auth();

  return (
    <div className="navbar bg-base-100 border-b border-gray-300 py-3 px-4 md:px-10">
      {/* Logo */}
      <div className="flex-1">
        <Link href="/" className="text-base font-bold md:text-xl">
          CourseConnect
        </Link>
      </div>

      <div className="flex-none gap-4 pl-4">
        {/* Search */}
        <SearchBox />

        {/* Conditionally Rendered Buttons or Avatar */}
        {user ? (
          <div className="dropdown dropdown-end relative z-50">
            {/* Avatar */}
            <Avatar user={user} />

            {/* Dropdown Menu */}
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box w-52 shadow"
            >
              <li>
                <Link href="/profile">Edit Profile</Link>
              </li>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <form action={LogoutAction}>
                  <button>Log Out</button>
                </form>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <div className="hidden sm:flex gap-2 xl:pl-40 lg:pl-28 md:pl-20 sm:pl-10">
              <Link href="/login">
                <button className="btn btn-outline btn-primary btn-sm">
                  Log In
                </button>
              </Link>
              <Link href="register">
                <button className="btn btn-primary btn-sm">Sign Up</button>
              </Link>
            </div>

            {/* Menu for Small Screen */}
            <div className="sm:hidden dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-sm m-1 bg-transparent shadow-none border-none"
              >
                {/* icon small screen */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M18 18v2H6v-2zm3-7v2H3v-2zm-3-7v2H6V4z"
                  />
                </svg>
              </div>

              {/* dropdown menu login/sign up */}
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box w-52 shadow gap-2"
              >
                <li>
                  <Link href="/login">
                    <button className="btn btn-outline btn-primary w-48 btn-sm">
                      Login
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href="/register">
                    <button className="btn btn-primary w-48 btn-sm">
                      Sign Up
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
