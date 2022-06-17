import useOnScroll from "@/core/hooks/useOnScroll";
import React from "react";

const Header = () => {
  const isScrolled = useOnScroll();
  return (
    <header className="border-b fixed top-0 left-0 w-full bg-white z-30 border-gray-100">
      {!isScrolled && (
        <div className="px-4 py-3 bg-stone-100">
          <div className="flex items-center justify-center max-w-3xl mx-auto">
            <div className="text-sm font-medium text-center">
              Welcome to the store! Check out the newest products
              <a className="underline" href="/alpinejs">
                {" "}
                Learn More &rarr;{" "}
              </a>
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center justify-between h-16 mx-auto max-w-5xl sm:px-6 lg:px-8">
        <div className="flex items-center">
          <button type="button" className="p-2 sm:mr-4 lg:hidden">
            <svg
              className="w-6 h-6"
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
          </button>

          <div className="flex justify-center items-center font-serif text-lg font-semibold">
            store.
          </div>
        </div>

        <div className="flex items-center justify-end flex-1">
          <nav className="hidden lg:uppercase lg:text-gray-500 lg:tracking-wide lg:font-bold lg:text-xs lg:space-x-4 lg:flex">
            <a
              href="/about"
              className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-gray-700 hover:border-current"
            >
              About
            </a>

            <a
              href="/news"
              className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-gray-700 hover:border-current"
            >
              News
            </a>

            <a
              href="/products"
              className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-gray-700 hover:border-current"
            >
              Products
            </a>

            <a
              href="/contact"
              className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-gray-700 hover:border-current"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center ml-8">
            <div className="flex items-center border-gray-100 divide-x divide-gray-100 border-x">
              <span>
                <a
                  href="/cart"
                  className="block p-6 border-b-4 border-transparent hover:border-gray-700"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>

                  <span className="sr-only">Cart</span>
                </a>
              </span>

              <span>
                <a
                  href="/account"
                  className="block p-6 border-b-4 border-transparent hover:border-gray-700"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>

                  <span className="sr-only"> Account </span>
                </a>
              </span>

              <span className="hidden sm:block">
                <a
                  href="/search"
                  className="block p-6 border-b-4 border-transparent hover:border-gray-700"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>

                  <span className="sr-only"> Search </span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
