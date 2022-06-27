import { useAppDispatch } from "@/core/redux/hooks";
import { removeToast } from "@/core/redux/slices/ui/uiSlice";
import React, { useEffect } from "react";

const ToastBox = ({ text }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(removeToast());
    }, 5000);
  });
  return (
    <div className="mx-4 md:mx-0 w-max px-6 text-sm md:text-base text-center py-3 rounded-md bg-gray-900 text-white shadow-md flex items-center">
      <span>{text}</span>
      <button
        type="button"
        onClick={() => dispatch(removeToast())}
        className="w-6 cursor-pointer h-6 ml-4 rounded-md flex items-center justify-center bg-gray-800"
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
    </div>
  );
};

export default ToastBox;
