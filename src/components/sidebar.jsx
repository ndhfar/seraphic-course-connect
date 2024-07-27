'use client';

import { useRouter } from 'next/navigation';

// * Component to display a sidebar with a list of categories
export const Sidebar = ({ categories, selectedCategory }) => {
  const router = useRouter();

  // * Function to handle category change
  const handleCategoryChange = (categoryId) => {
    // * Navigate to URL with the selected category filter
    router.replace(`/?category=${categoryId}`);
  };

  return (
    <div className="w-full lg:w-1/5 bg-base-100 relative z-10 p-4 lg:px-4 lg:py-0 border-r border-gray-300 mt-20 mb-6">
      {/* Dropdown for small screens */}
      <div className="dropdown lg:hidden w-40">
        <button
          tabIndex={0}
          className="btn btn-ghost btn-sm btn-outline w-full flex justify-between items-center"
        >
          All Category
          {/* icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="m7 10l5 5l5-5z" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {/* Category List */}
          {categories.map((category) => (
            <li
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={
                selectedCategory === category.id
                  ? 'bg-primary text-white rounded-md'
                  : ''
              }
            >
              <a>{category.name}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Menu for large screens */}
      <ul className="hidden lg:block menu w-full pb-9">
        <li className="menu-title text-xl text-gray-400 font-semibold pb-5">
          All Category
        </li>

        {/* Category List */}
        <div className="menu-list text-slate-700">
          {categories.map((category) => (
            <li
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={
                selectedCategory === category.id
                  ? 'bg-primary text-white rounded-md'
                  : ''
              }
            >
              <a>{category.name}</a>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};
