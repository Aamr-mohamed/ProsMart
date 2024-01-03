import { toast, ToastOptions } from "react-toastify";

interface ToastStyles extends ToastOptions {
  theme?: "light" | "dark";
}

const styles: ToastStyles = {
  position: "top-right",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

export const customToast = (
  type: "success" | "error" | "info" | "warning",
  message: string
) => toast[type](message, { ...styles });
