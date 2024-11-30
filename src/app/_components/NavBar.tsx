import Link from "next/link";

import Typography from "./Typography";
import { hstack, vstack } from "../../../styled-system/patterns";
import { NAVIGATION_LIST } from "../_constants/navigation";

const navbarStyles = hstack({
  position: "fixed",
  left: "50%",
  transform: "translate(-50%, 0)",
  bottom: { base: 0, md: 100 },
  zIndex: 1000,
  bgColor: "oddu_green01",
  color: "oddu_white01",
  height: "90px",
  width: { base: "100vw", md: "70vw", lg: "768px" },
  borderRadius: { base: 0, md: "20px" },
  alignItems: "center",
  justifyContent: "space-between",
  p: "17px 20px 29px",
  gap: "8px",
});

const navbarItemStyles = vstack({
  width: "60.2px",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
});

const NavBar = async () => {
  return (
    <nav className={navbarStyles}>
      {NAVIGATION_LIST.map((item) => (
        <Link key={item.id} href={item.href} className={navbarItemStyles}>
          <item.icon />
          <Typography.SpanCaption color="oddu_white01">
            {item.name}
          </Typography.SpanCaption>
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
