import { CalendarMark } from "solar-icon-set/time";
import { MapPointWave } from "solar-icon-set/maplocation";
import { MoneyBag } from "solar-icon-set/money";
import { LinkCircle } from "solar-icon-set/textformatting";
import Link from "next/link";

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
    <main className="m-9">
      {/* image, category, title, nama user */}
      <div className="grid grid-cols-2 gap-5">
        <div className="col-span-1 flex justify-center">
          {singleCourse.image === "undefined" ? (
            <div className="bg-neutral w-full h-80 flex justify-center items-center">
              No Image
            </div>
          ) : (
            <div>
              <img
                alt="course image"
                src={`${process.env.R2_PUBLIC_URL}/courseconnect/${singleCourse.id}/${singleCourse.image}`}
                className="w-full"
              />
            </div>
          )}
        </div>
        <div className="col-span-1">
          <h4 className="font-semibold text-primary">
            {singleCourse.category.name}
          </h4>
          <h1 className="font-medium text-5xl">{singleCourse.title}</h1>
          <h3 className="text-course">{singleCourse.user.fullName}</h3>
        </div>
      </div>

      {/* description */}
      <div className="py-6">
        <h3 className="text-course">{singleCourse.description}</h3>
      </div>

      {/* detail info */}
      <div className="space-y-2">
        <h3 className="text-course font-bold">Detail Information</h3>
        <div className="space-y-2">
          <div className="flex gap-4 items-center">
            <CalendarMark size={28} />
            <h3 className="text-course">
              {startDate} until {endDate}
            </h3>
          </div>
          <div className="flex gap-4 items-center">
            <MapPointWave size={28} />
            <h3 className="text-course">{singleCourse.location}</h3>
          </div>
          <div className="flex gap-4 items-center">
            <MoneyBag size={28} />
            <h3 className="text-course">
              Rp {singleCourse.price.toLocaleString()}
            </h3>
          </div>
          <div className="flex gap-4 items-center">
            <LinkCircle size={28} />
            <Link href={`${singleCourse.linkPlatform}`}>
              <h3 className="text-blue-400 text-course">
                {singleCourse.linkPlatform}
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
