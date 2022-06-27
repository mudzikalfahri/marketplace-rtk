import { CartItemType } from "@/core/redux/slices/cart/cartSlices";
import React from "react";

const TotalSummary = ({ cartItems }: { cartItems: CartItemType[] }) => (
  <div className="mt-10 md:mt-0 col-span-2">
    <div className="rounded-md bg-white border border-gray-300 py-6 px-5">
      <h1 className="text-cusblack font-bold text-md">SUMMARY</h1>
      <div className="px-4 py-3 text-xs font-medium flex place-items-center text-gray-400 border border-gray-200 rounded-md my-4">
        <svg
          className="w-5 h-5 mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
          />
        </svg>
        DO YOU HAVE PROMO CODE?
      </div>

      <div className="text-sm pt-1 font-semibold pb-2 border-b border-cusblack flex justify-between place-items-center">
        <p className="">SUBTOTAL</p>
        <p className="font-bold text-gray-700">
          ${" "}
          {cartItems.reduce(
            (sub, cartItem) => sub + cartItem.price * cartItem.quantity,
            0
          )}
        </p>
      </div>

      <div className="my-3 border-b border-cusblack pb-2">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between place-items-center text-sm mb-1"
          >
            <p className="pr-3">
              {item.title} x {item.quantity}
            </p>
            <p className="font-bold text-gray-700">
              ${item.price * item.quantity}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-between place-items-center font-semibold">
        <p>TOTAL</p>
        <p className="font-bold text-gray-700">
          ${" "}
          {cartItems.reduce(
            (sub, cartItem) => sub + cartItem.price * cartItem.quantity,
            0
          )}
        </p>
      </div>

      <button
        type="button"
        disabled={!cartItems.length}
        className="py-2 px-3 disabled:cursor-not-allowed text-white w-full mt-6 rounded-lg bg-gray-900 "
      >
        <span className="flex justify-center place-items-center">
          CHECKOUT
          <svg
            className="ml-2 w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </span>
      </button>
    </div>
  </div>
);

export default TotalSummary;
