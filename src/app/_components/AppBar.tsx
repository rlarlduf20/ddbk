import Typography from "./Typography";
import { hstack } from "../../../styled-system/patterns";

import LeftArrowIcon from "@/assets/icons/LeftArrowIcon";
import HomeIcon from "@/assets/icons/HomeIcon";
import { css } from "../../../styled-system/css";
import NavBar from "./NavBar";

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
  alignItems: "center",
});

const AppBar = ({ children }: Props) => {
  return (
    <div style={{ width: "100%" }}>
      <div className={statusBlankBarStyles} />
      <div className={appBarStyles}>
        <LeftArrowIcon fill="#333" />
        <Typography.H3>{children}</Typography.H3>
      </div>
    </div>
  );
};

export default AppBar;
