"use client";
import Image from "next/image";

export const PageCourse = ({ singleCourse }) => {
  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so add 1
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const startDate = formatDate(singleCourse.startDate);
  const endDate = formatDate(singleCourse.endDate);
  return (
    //header
    <main>
      {/* image, category, title, nama user */}
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <Image alt="course image" src={`${process.env.R2_PUBLIC_URL}`} />
        </div>
        <div className="col-span-1">
          <h4>{singleCourse.category.name}</h4>
          <h1>{singleCourse.title}</h1>
          <h3>{singleCourse.user.fullName}</h3>
        </div>
      </div>
      {/* description */}
      <div>
        <h3>{singleCourse.description}</h3>
      </div>

      {/* detail info */}
      <div>
        <h3>Detail Information</h3>
        <h3>
          {startDate} until {endDate}
        </h3>
        <h3>{singleCourse.location}</h3>
        <h3>{singleCourse.price}</h3>
        <h3>{singleCourse.linkPlatform}</h3>
      </div>

      {/* container feedback */}
      <div>
        <div>
          <h2>rating</h2>
          <button>add feedback</button>
        </div>

        <div>
          <div>
            <img src="" alt="" />
            image user
            <h3>nama user</h3>
            <h3>rating</h3>
          </div>
          <div>
            <h4>komentar feedback</h4>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </main>
    //footer
  );
};
