import Link from 'next/link';

export const CourseCard = ({ course }) => {
  // * Function to format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'short',
    });
  };

  return (
    <div className="card card-compact bg-base-100 shadow-xl w-full h-auto">
      {/* Card Image */}
      <figure>
        {course.image === 'undefined' ? (
          <div className="w-full h-40 bg-neutral flex justify-center items-center">
            No Image
          </div>
        ) : (
          <img
            src={`${process.env.R2_PUBLIC_URL}/courseconnect/${course.id}/${course.image}`}
            className="object-cover w-full h-40"
          />
        )}
      </figure>

      {/* Card Body */}
      <div className="card-body gap-1">
        <h2 className="card-title">{course.title}</h2>
        <p className="font-extralight text-sm">
          {formatDate(course.startDate)} - {formatDate(course.endDate)}
        </p>
        <p className="font-semibold text-sm">{course.location}</p>
        <p className="text-primary font-semibold">
          Rp {course.price.toLocaleString()}
        </p>

        {/* Card Button */}
        <div className="card-actions justify-end">
          <Link href={`/${course.id}`}>
            <button className="btn btn-primary btn-outline w-full btn-sm">
              View Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
