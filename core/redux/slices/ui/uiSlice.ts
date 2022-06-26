/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

type UIType = {
  modalLogin: boolean;
  toast: {
    show: boolean;
    text: string;
  };
};
const initialState: UIType = {
  modalLogin: false,
  toast: {
    show: false,
    text: "",
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setModalLogin: (state) => {
      state.modalLogin = true;
    },
    closeModalLogin: (state) => {
      state.modalLogin = false;
    },
    setToast: (state, action) => {
      state.toast.show = true;
      state.toast.text = action.payload;
    },
    removeToast: (state) => {
      state.toast.show = false;
      state.toast.text = "";
    },
  },
});
export const { setModalLogin, removeToast, setToast, closeModalLogin } =
  uiSlice.actions;
export default uiSlice.reducer;
