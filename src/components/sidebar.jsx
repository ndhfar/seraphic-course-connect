import Link from "next/link";

export const Sidebar = ({ categories }) => {
  return (
    <div className="w-full lg:w-1/5 relative z-10 p-8 border-r border-gray-300 ">
      {/* Dropdown for small screens */}
      <div className="dropdown lg:hidden w-40">
        <button tabIndex={0} className="btn btn-ghost btn-sm btn-outline w-full flex justify-between items-center">
          All Category
          {/* icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="m7 10l5 5l5-5z" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          {/* Category List */}
          {categories.map((category) => (
            <Link href={`/category/${category.id}`} key={category.id}>
              {category.name}
            </Link>
          ))}
        </ul>
      </div>
      {/* Menu for large screens */}
      <ul className="hidden lg:block menu w-full pb-9">
        <Link href={`/`} className="link-menu">
          All Categories
        </Link>
        {/* Category List */}
        <div className="menu-list text-slate-700">
          {categories.map((category) => (
            <Link href={`/category/${category.id}`} key={category.id} className="link-menu">
              {category.name}
            </Link>
          ))}
        </div>
      </ul>
    </div>
  );
};
