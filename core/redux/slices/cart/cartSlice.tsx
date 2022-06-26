/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

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

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, { payload }) => {
      state.items = addToCart(state.items, payload);
    },
    deleteItem: (state, { payload }) => {
      state.items.filter((item) => item.id !== payload);
    },
  },
});
export const { addItems, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
