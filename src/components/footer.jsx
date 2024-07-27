import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-blue-600 text-neutral-content pt-10 px-10 pb-5">
      {/* Details */}
      <footer className="footer">
        <aside>
          <h6 className="text-xl font-bold text-white">CourseConnect</h6>
          <p className="text-white">
            CourseConnect What is CourseConnect? It’s a platform that user can see information about course.
            <br />
            You can add your course and you can give a feedback about the course
          </p>
        </aside>

        {/* Questions */}
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <div className="flex items-center gap-8 bg-black px-6 py-3 rounded-md bg-opacity-15 h-16">
            <p className="text-white font-semibold">more questions?</p>

            <Link href="mailto:cs@connect.com" className="btn bg-black text-white bg-opacity-25 border-none h-10">
              cs@connect.com
            </Link>
          </div>
        </nav>
      </footer>

      {/* Copyright */}
      <footer className="footer footer-center text-base-content pt-14">
        <aside>
          <p className="text-white">Copyright © {new Date().getFullYear()} - Course Connect. All Rights Reserved</p>
        </aside>
      </footer>
    </div>
  );
};
