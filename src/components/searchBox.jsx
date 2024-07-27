'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export const SearchBox = () => {
  const router = useRouter();
  const [query, setQuery] = useState('');

  function handleSearch(e) {
    const newQuery = e.target.value;
    setQuery(newQuery);
    router.push(`?query=${newQuery}`);
  }

  return (
    <div className="form-control">
      <label className="input flex items-center gap-2 input-sm bg-black bg-opacity-5 border-no focus:outline-none focus:ring-0">
        <input
          type="text"
          className="w-24 md:w-[300px] lg:w-[500px] input-sm"
          placeholder="Search"
          value={query}
          onChange={handleSearch}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </div>
  );
};
