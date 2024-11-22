import { css } from "../../../../styled-system/css";

import Typography from "@/app/_components/Typography";

const friendsContainerStyles = css({
  width: "100%",
  display: "flex",
  mt: "100px",
  justifyContent: "center",
});

const FriendsPage = () => {
  return (
    <section className={friendsContainerStyles}>
      <Typography.H1 color="main_pink">친구탭은 준비중입니다!</Typography.H1>
    </section>
  );
};

export default FriendsPage;
