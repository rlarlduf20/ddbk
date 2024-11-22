import { css } from "../../../../styled-system/css";

import Typography from "@/app/_components/Typography";

const footprintContainerStyles = css({
  width: "100%",
  display: "flex",
  mt: "100px",
  justifyContent: "center",
});

const FootPrintPage = () => {
  return (
    <section className={footprintContainerStyles}>
      <Typography.H1 color="main_green">발자국탭은 준비중입니다!</Typography.H1>
    </section>
  );
};

export default FootPrintPage;
