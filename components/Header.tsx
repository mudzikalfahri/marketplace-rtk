import useOnScroll from "@/core/hooks/useOnScroll";
import React from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/core/redux/hooks";
import { setModalLogin } from "@/core/redux/slices/ui/uiSlice";
import { selectCartItems } from "@/core/redux/slices/cart/cartSlices";
import { deleteUser, selectAuth } from "@/core/redux/slices/auth";

const Header = () => {
  const isScrolled = useOnScroll();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const { token, user } = useAppSelector(selectAuth);

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
      <div className="flex overflow-hidden  items-center justify-between h-16 mx-auto max-w-5xl sm:px-6 lg:px-8">
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
          <Link href="/">
            <a className="flex justify-center items-center font-serif text-lg font-semibold">
              store.
            </a>
          </Link>
        </div>

        <div className="flex items-center justify-end flex-1">
          <nav className="hidden lg:uppercase lg:text-gray-500 lg:tracking-wide lg:font-bold lg:text-xs lg:space-x-4 lg:flex">
            <a
              href="/about"
              className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-gray-700 hover:border-current"
            >
              About
            </a>
            <Link href="/">
              <a className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-gray-700 hover:border-current">
                Products
              </a>
            </Link>
            <span>
              {token ? (
                <button
                  onClick={() => {
                    dispatch(deleteUser());
                  }}
                  type="button"
                  className="group overflow-hidden"
                >
                  <div className="p-6 group-hover:hidden flex items-center space-x-2">
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
                    <p>{user.name}</p>
                  </div>
                  <div className="p-6 group-hover:flex hidden bg-gray-900 text-white">
                    Sign out
                  </div>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    if (!token) return dispatch(setModalLogin());
                  }}
                  className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-gray-700 text-xs px-4 hover:border-current font-bold text-gray-500"
                >
                  LOGIN
                </button>
              )}
            </span>
          </nav>

          <div className="flex items-center ml-8">
            <div className="flex items-center border-gray-100 divide-x divide-gray-100 border-x">
              <Link href="/cart">
                <a className="block cursor-pointer relative p-6 border-b-4 border-transparent hover:border-gray-700">
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
                  {cartItems.length > 0 && (
                    <div className="w-4 h-4 pointer-events-none absolute bottom-4 right-4 text-[10px] flex justify-center items-center bg-black text-white rounded-full border border-white">
                      {cartItems.reduce(
                        // eslint-disable-next-line no-param-reassign
                        (sum, current) => (sum += current.quantity),
                        0
                      )}
                    </div>
                  )}

                  <span className="sr-only">Cart</span>
                </a>
              </Link>

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
