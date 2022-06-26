/* eslint-disable no-param-reassign */
import { ProductType } from "@/core/types/post";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/core/redux/store";

const addToCart = (state, product) => {
  const isProductInCart = state.find((item) => item.id === product.id);
  if (isProductInCart) {
    return state.map((item) => {
      if (item.id === product.id) {
        item.quantity += product.quantity;
      }
      return item;
    });
  }
  return [...state, { ...product, quantity: 1 }];
};

export interface CartItemType extends ProductType {
  quantity: number;
}

const initialState: { items: CartItemType[] } = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, { payload }) => {
      state.items = addToCart(state.items, payload);
    },
    deleteItem: (state, { payload }) => {
      state.items.filter((item) => item.id !== payload);
    },
  },
});

export const selectCartItems = (state: RootState) => state.cart.items;

export const { addItems, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;