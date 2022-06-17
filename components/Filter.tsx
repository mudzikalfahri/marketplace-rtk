/* eslint-disable jsx-a11y/label-has-associated-control */
import { useGetCategoriesQuery } from "@/core/redux/slices/posts/queries";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Filters = () => {
  const { isLoading, data } = useGetCategoriesQuery();
  const router = useRouter();
  const [filter, setFilter] = useState(null);
  useEffect(() => {
    if (router.query.category) {
      setFilter(router.query.category);
      return;
    }
    setFilter(null);
  }, [router.query]);
  const submitFilter = () => {
    router.push(`?category=${filter}`);
  };
  const resetFilter = () => {
    router.push(`/`);
  };
  return (
    <details
      open
      className="overflow-hidden md:sticky md:top-20 md:left-0 col-span-1 border border-gray-200 h-max rounded"
    >
      <summary className="flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden">
        <span className="text-sm font-medium">Toggle Filters</span>

        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </summary>

      <form action="" className="border-t border-gray-200 lg:border-t-0">
        <fieldset>
          <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
            Categories
          </legend>

          <div className="px-5 py-6 space-y-2">
            {isLoading &&
              [...new Array(4)].map((i, idx) => (
                <div
                  // eslint-disable-next-line react/no-array-index-key
                  key={idx}
                  className="w-full h-5 mb-3 bg-gray-200 animate-pulse"
                />
              ))}
            {data &&
              data.map((category) => (
                <div key={category} className="flex items-center">
                  <input
                    onChange={(e) => setFilter(e.target.id)}
                    checked={filter === category}
                    id={category}
                    type="checkbox"
                    name={category}
                    className="w-5 text-black accent-black h-5 border-gray-300 rounded"
                  />

                  <label
                    htmlFor={category}
                    className="ml-3 text-sm font-medium"
                  >
                    {category.slice(0, 1).toUpperCase() + category.slice(1)}
                  </label>
                </div>
              ))}

            <div className="pt-2">
              <button
                onClick={resetFilter}
                type="button"
                className="text-xs text-gray-500 underline"
              >
                Reset Category
              </button>
            </div>
          </div>
        </fieldset>

        <div className="flex justify-between px-5 py-3 border-t border-gray-200">
          <button
            onClick={resetFilter}
            name="reset"
            type="button"
            className="text-xs font-medium text-gray-600 underline rounded"
          >
            Reset All
          </button>

          <button
            onClick={submitFilter}
            name="commit"
            type="button"
            className="px-5 py-3 text-xs font-medium text-white bg-gray-800 rounded"
          >
            Apply Filters
          </button>
        </div>
      </form>
    </details>
  );
};
export default Filters;
