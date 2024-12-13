import { toast, ToastOptions } from "react-toastify";

interface ToastStatType {
  message: string;
  type: "success" | "error";
}

const defaultOption: ToastOptions = {
  position: "top-center",
  autoClose: 2000,
};

export const showToast = ({ message, type }: ToastStatType) => {
  switch (type) {
    case "success": {
      return toast.success(message, {
        ...defaultOption,
        style: {
          width: "300px",
          margin: "0 auto",
          top: "50px",
        },
        progressStyle: {
          backgroundColor: "#536D64",
        },
      });
    }
    case "error": {
      return toast.error(message, {
        ...defaultOption,
        style: {
          width: "300px",
          margin: "0 auto",
          top: "50px",
        },
        progressStyle: {
          backgroundColor: "#F38074",
        },
      });
    }
    default:
  }
  return null;
};
