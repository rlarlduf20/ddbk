import Link from "next/link";

import { css } from "../../../../styled-system/css";
import { hstack } from "../../../../styled-system/patterns";

import { getUser } from "@/app/_actions/user";
import Typography from "@/app/_components/Typography";
import { auth } from "@/auth";

const profileCardStyles = hstack({
  mb: "42px",
  justify: "space-between",
});

const profileInfoStyles = hstack({
  gap: "23px",
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
        <Link href="/login">로그인</Link>
      </div>
    );
  }

  return (
    <div className={profileCardStyles}>
      <div className={profileInfoStyles}>
        <div className={profileImgStyles} />
        <Typography.H3>{user?.name}</Typography.H3>
      </div>
      <Link href="/setting/edit-nickname">
        <Typography.PMedium>닉네임 변경</Typography.PMedium>
      </Link>
    </div>
  );
};

export default ProfileCard;
