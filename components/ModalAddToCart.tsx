import React, { useEffect } from "react";
import Link from "next/link";

const ModalAddToCart = ({ data, close }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/30 z-50 flex items-center justify-center">
      <div className="max-w-xl animate-modal w-full p-10 relative rounded-md bg-white shadow-2xl">
        <button
          type="button"
          onClick={close}
          className="absolute top-0 right-0 m-2 cursor-pointer hover:bg-gray-200 active:bg-gray-50 duration-150 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100"
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
        <div className="flex flex-col space-y-4 mt-4">
          <div className="p-2 flex justify-between rounded-md items-center border border-gray-300">
            <img
              src={data.image}
              alt="productimg"
              className="object-square w-10 object-contain"
            />
            <p className="flex-1 px-4">{data.title}</p>
            <Link href="/cart">
              <a className="block px-5 py-3 ml-3 text-xs font-medium text-white bg-gray-800 rounded hover:bg-gray-900">
                Go to Cart
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddToCart;
