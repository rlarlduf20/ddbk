import Link from "next/link";

import Typography from "./Typography";
import { hstack } from "../../../styled-system/patterns";
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
  p: "17px 42px 29px",
});

const NavBar = () => {
  return (
    <nav className={navbarStyles}>
      {NAVIGATION_LIST.map((item) => (
        <Link href={item.href} key={item.id}>
          <Typography.SpanCaption color="oddu_white01">
            {item.name}
          </Typography.SpanCaption>
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
