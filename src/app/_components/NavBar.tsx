"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Typography from "./Typography";
import { css } from "../../../styled-system/css";
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
  position: "relative",
  width: "60.2px",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
});

const activeDotStyles = css({
  position: "absolute",
  top: "-6px",
  left: "50%",
  transform: "translate(-50%, 0)",
  width: "4px",
  height: "4px",
  borderRadius: "50%",
  bgColor: "oddu_white01",
});

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className={navbarStyles}>
      {NAVIGATION_LIST.map((item) => (
        <Link key={item.id} href={item.href} className={navbarItemStyles}>
          {pathname === item.href && <div className={activeDotStyles} />}
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
