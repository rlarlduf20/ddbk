"use client";

import Typography from "./Typography";
import { css } from "../../../styled-system/css";
import useRouterEvent from "../_hooks/useRouterEvent";

import LeftArrowIcon from "@/assets/icons/LeftArrowIcon";

interface Props {
  children: React.ReactNode;
}

const statusBlankBarStyles = css({
  width: "100%",
  height: "54px",
});

const appBarStyles = css({
  width: "375px",
  height: "51px",
  display: "flex",
  gap: "8px",
  margin: "0 auto",
  px: "20px",
  alignItems: "center",
});

const AppBar = ({ children }: Props) => {
  const { push } = useRouterEvent();
  const handleClick = () => {
    push({ method: "back" });
  };
  return (
    <div style={{ width: "100%" }}>
      <div className={statusBlankBarStyles} />
      <div className={appBarStyles}>
        <button type="button" onClick={handleClick}>
          <LeftArrowIcon fill="#333" />
        </button>
        <Typography.H3>{children}</Typography.H3>
      </div>
    </div>
  );
};

export default AppBar;
