import Link from "next/link";

import { css } from "../../../../styled-system/css";
import { hstack } from "../../../../styled-system/patterns";

import LinkButton from "@/app/_components/LinkButton";
import Typography from "@/app/_components/Typography";
import SettingIcon from "@/assets/icons/SettingIcon";
import { auth } from "@/auth";

const profileCardStyles = hstack({
  width: { base: "100vw", sm: "562.5px" },
  height: "200px",
  position: "fixed",
  zIndex: 1000,
  top: 0,
  left: { base: 0, sm: "30px" },
  bgColor: "oddu_white01",
  boxShadow: "0px 6px 6px 0px rgba(0, 0, 0, 0.1)",
  borderRadius: "0px 0px 15px 15px",
  px: "20px",
  gap: "20px",
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

const profileStatStyles = hstack({
  mb: "5px",
});

const profileProgressBarStyles = css({
  mt: "7px",
  bgColor: "oddu_green02",
  borderRadius: "10px",
  width: "221px",
  height: "9px",
});

const profileProgressInnerBarStyles = css({
  bgColor: "oddu_green01",
  borderRadius: "10px",
  width: "70%",
  height: "100%",
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
        <div>
          <div className={profileStatStyles}>
            <Typography.H4>{session.user?.name}</Typography.H4>
            <Typography.SpanCaption color="oddu_black02">
              Today
            </Typography.SpanCaption>
            <Typography.PMedium>{8000}보</Typography.PMedium>
            <LinkButton path="/setting">
              <SettingIcon />
            </LinkButton>
          </div>
          <Typography.PMedium>이번주 발도장</Typography.PMedium>
          <div className={profileProgressBarStyles}>
            <div className={profileProgressInnerBarStyles} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
