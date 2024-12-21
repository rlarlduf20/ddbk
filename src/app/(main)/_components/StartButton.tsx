"use client";

import { hstack } from "../../../../styled-system/patterns";

import useRouterEvent from "@/app/_hooks/useRouterEvent";

const startButtonStyles = hstack({
  position: "fixed",
  left: "50%",
  transform: "translate(-50%, 0)",
  bottom: 106,
  zIndex: 1000,
  borderRadius: "50%",
  bgColor: "oddu_green01",
  color: "oddu_white01",
  width: "80px",
  height: "80px",
  fontSize: "32px",
  fontWeight: 700,
  justifyContent: "center",
  alignItems: "center",
  display: {
    base: "block",
    sm: "none",
  },
});

const StartButton = () => {
  const { push } = useRouterEvent();

  const handleClickStartBtn = () => {
    push({ path: "/tracking" });
  };

  return (
    <button
      type="button"
      className={startButtonStyles}
      onClick={handleClickStartBtn}
    >
      GO
    </button>
  );
};

export default StartButton;
