import { toast, ToastOptions } from "react-toastify";

import { css } from "../../../styled-system/css";

interface ToastStatType {
  message: string;
  type: "success" | "error";
}

const defaultOption: ToastOptions = {
  position: "top-center",
  autoClose: 2000,
};

const toastDefaultStyles = css({
  top: "50px",
  width: "300px",
  margin: "0 auto",
});

export const showToast = ({ message, type }: ToastStatType) => {
  switch (type) {
    case "success": {
      return toast.success(message, {
        ...defaultOption,
        className: toastDefaultStyles,
        progressStyle: {
          backgroundColor: "#536D64",
        },
      });
    }
    case "error": {
      return toast.error(message, {
        ...defaultOption,
        className: toastDefaultStyles,
        progressStyle: {
          backgroundColor: "#F38074",
        },
      });
    }
    default:
  }
  return null;
};
