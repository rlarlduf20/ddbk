"use client";

import { useRouter } from "next/navigation";

import Typography from "./Typography";
import { cva } from "../../../styled-system/css";
import useRouterEvent from "../_hooks/useRouterEvent";

import LeftArrowIcon from "@/assets/icons/LeftArrowIcon";

interface Props {
  children: React.ReactNode;
  stackPop?: boolean;
  isBackPossible?: boolean;
}

const appBarStyles = cva({
  base: {
    width: "375px",
    height: "51px",
    display: "flex",
    gap: "8px",
    margin: "0 auto",
    px: "20px",
    alignItems: "center",
  },
  variants: {
    isBackPossible: {
      true: {},
      false: { justifyContent: "center" },
    },
  },
});

const AppBar = ({
  children,
  stackPop = true,
  isBackPossible = true,
}: Props) => {
  const router = useRouter();
  const { push } = useRouterEvent();

  const handleClick = () => {
    if (stackPop) {
      push({ method: "back" });
    } else {
      router.back();
    }
  };
  return (
    <div style={{ width: "100%" }}>
      <div className={appBarStyles({ isBackPossible })}>
        {isBackPossible && (
          <button type="button" onClick={handleClick}>
            <LeftArrowIcon fill="#333" />
          </button>
        )}
        <Typography.H3>{children}</Typography.H3>
      </div>
    </div>
  );
};

export default AppBar;
