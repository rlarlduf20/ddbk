import Link from "next/link";

import { css } from "../../../../styled-system/css";
import { hstack } from "../../../../styled-system/patterns";

import Typography from "@/app/_components/Typography";
import { auth } from "@/auth";

const profileCardStyles = hstack({
  width: { base: "100vw", sm: "562.5px" },
  height: "165px",
  position: "fixed",
  zIndex: 2,
  top: 0,
  left: { base: 0, sm: "30px" },
  bgColor: "#FFF",
  boxShadow: "0px 6px 6px 0px rgba(0, 0, 0, 0.1)",
  borderRadius: "0px 0px 15px 15px",
  px: "30px",
  justify: "space-between",
});

const profileInfoStyles = hstack({
  gap: "25.5px",
});

const profileImgStyles = css({
  width: "96px",
  height: "96px",
  borderRadius: "50%",
  bgColor: "#D9D9D9",
});

const ProfileCard = async () => {
  const session = await auth();

  if (!session) {
    return (
      <div className={profileCardStyles}>
        <Link href="/signIn">로그인</Link>
      </div>
    );
  }

  return (
    <div className={profileCardStyles}>
      <div className={profileInfoStyles}>
        <div className={profileImgStyles} />
        <Typography.PMedium>{session.user?.name}</Typography.PMedium>
      </div>
    </div>
  );
};

export default ProfileCard;
