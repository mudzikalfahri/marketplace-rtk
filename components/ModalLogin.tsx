import { useAppDispatch } from "@/core/redux/hooks";
import { closeModalLogin } from "@/core/redux/slices/ui/uiSlice";
import React, { useEffect } from "react";

const ModalLogin = () => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);
  const dispatch = useAppDispatch();
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/30 z-50 flex items-center justify-center">
      <form
        action=""
        className="p-8 animate-modal mt-6 mb-0 bg-white space-y-4 w-full sm:w-3/4 md:w-1/3 rounded-lg shadow-2xl"
      >
        <button
          type="button"
          onClick={() => dispatch(closeModalLogin())}
          className="ml-auto cursor-pointer hover:bg-gray-200 active:bg-gray-50 duration-150 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100"
        >
          <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <p className="text-lg font-medium">Sign in to your account</p>

        <div>
          <p className="text-sm font-medium">Email</p>

          <div className="relative mt-1">
            <input
              type="email"
              id="email"
              className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Enter email"
            />

            <span className="absolute inset-y-0 inline-flex items-center right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium">Password</p>

          <div className="relative mt-1">
            <input
              type="password"
              id="password"
              className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Enter password"
            />

            <span className="absolute inset-y-0 inline-flex items-center right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  stroke-strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="block w-full px-5 py-3 text-sm font-medium text-white bg-gray-800 rounded-lg"
        >
          Sign in
        </button>

        <p className="text-sm text-center text-gray-500">
          No account?
          <a className="underline" href="">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default ModalLogin;
