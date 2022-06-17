/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    modalLogin: false,
  },
  reducers: {
    setModalLogin: (state) => {
      state.modalLogin = true;
    },
    closeModalLogin: (state) => {
      state.modalLogin = false;
    },
  },
});
export const { setModalLogin, closeModalLogin } = uiSlice.actions;
export default uiSlice.reducer;
