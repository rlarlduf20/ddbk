import Link from "next/link";

import { css } from "../../../styled-system/css";
import { NAVIGATION_LIST } from "../_constants/navigation";

const navbarStyles = css({
  position: "fixed",
  left: "50%",
  transform: "translate(-50%, 0)",
  bottom: 100,
  zIndex: 1000,
  bgColor: "white",
  height: "60px",
  width: "530px",
  border: "1px solid black",
  borderRadius: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  px: "20px",
});

const NavBar = () => {
  return (
    <nav className={navbarStyles}>
      {NAVIGATION_LIST.map((item) => (
        <Link href={item.href} key={item.id}>
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
