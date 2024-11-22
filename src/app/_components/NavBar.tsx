import Link from "next/link";

import { hstack } from "../../../styled-system/patterns";
import { NAVIGATION_LIST } from "../_constants/navigation";

const navbarStyles = hstack({
  position: "fixed",
  left: "50%",
  transform: "translate(-50%, 0)",
  bottom: { base: 0, md: 100 },
  zIndex: 1000,
  bgColor: "white",
  height: "60px",
  width: { base: "100vw", md: "70vw", lg: "768px" },
  border: { base: "none", md: "1px solid black" },
  borderRadius: { base: 0, md: "20px" },
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
