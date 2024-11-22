import { css } from "../../../../styled-system/css";

import Typography from "@/app/_components/Typography";

const routeContainerStyles = css({
  width: "100%",
  display: "flex",
  mt: "100px",
  justifyContent: "center",
});

const RoutePage = () => {
  return (
    <section className={routeContainerStyles}>
      <Typography.H1>경로탭은 준비중입니다!</Typography.H1>
    </section>
  );
};

export default RoutePage;
