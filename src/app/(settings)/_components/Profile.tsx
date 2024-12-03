import Link from "next/link";

import { css } from "../../../../styled-system/css";
import { hstack } from "../../../../styled-system/patterns";

import Typography from "@/app/_components/Typography";
import { getUser } from "@/app/_lib/db/user";
import { auth } from "@/auth";

const profileCardStyles = hstack({
  mb: "42px",
  justify: "space-between",
});

const profileInfoStyles = hstack({
  gap: "25.5px",
});

const profileImgStyles = css({
  width: "64px",
  height: "64px",
  borderRadius: "50%",
  bgColor: "#D9D9D9",
});

const ProfileCard = async () => {
  const session = await auth();

  const user = await getUser(session?.user?.id);

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
        <Typography.PMedium>{user?.name}</Typography.PMedium>
      </div>
      <Link href="/setting/edit-nickname">닉네임 변경</Link>
    </div>
  );
};

export default ProfileCard;
