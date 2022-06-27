import CartItem from "@/components/CartItem";
import MainLayout from "@/components/layouts/MainLayout";
import TotalSummary from "@/components/TotalSummary";
import { useAppSelector } from "@/core/redux/hooks";
import { NextPage } from "next";
import React from "react";

const Cart: NextPage = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  return (
    <MainLayout>
      {cartItems.length ? (
        <section className="max-w-5xl mx-auto mt-28 px-4 sm:px-6 lg:px-8 py-8 w-full grid grid-cols-5 gap-x-4">
          <div className="col-span-3">
            <h1 className="text-lg font-bold">My Cart</h1>
            <div className="w-full">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>
          <TotalSummary cartItems={cartItems} />
        </section>
      ) : (
        <div className="mx-auto font-semibold">
          You have no items in the cart
        </div>
      )}
    </MainLayout>
  );
};

export default Cart;
