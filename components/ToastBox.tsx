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
    <div className="mx-4 md:mx-0 max-w-md animate-modal text-sm md:text-base w-full text-center py-3 rounded-md bg-gray-700/80 text-white shadow-md">
      {text}
    </div>
  );
};

export default ToastBox;
