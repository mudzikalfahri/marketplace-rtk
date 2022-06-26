import { useAppSelector } from "@/core/redux/hooks";
import ToastBox from "@/components/ToastBox";

const Toast = () => {
  const { show, text } = useAppSelector((state) => state.ui.toast);
  return (
    <div className="w-full z-50 flex items-center justify-center fixed top-24 left-0">
      {show && <ToastBox text={text} />}
    </div>
  );
};

export default Toast;
