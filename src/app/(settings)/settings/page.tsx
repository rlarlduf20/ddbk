import { css } from "../../../../styled-system/css";
import GPSGroup from "../_components/GPSGroup";
import ProfileCard from "../_components/Profile";
import SignOutButton from "../_components/SignOutButtont";

import AppBar from "@/app/_components/AppBar";
import { auth } from "@/auth";

const settingStyles = css({
  width: "100vw",
});

const settingSectionStyles = css({
  width: "375px",
  px: "20px",
  margin: "0 auto",
  mt: "20px",
});

const SettingPage = async () => {
  const session = await auth();

  return (
    <div className={settingStyles}>
      <AppBar>설정</AppBar>
      <section className={settingSectionStyles}>
        <ProfileCard />
        <GPSGroup />
        {session && <SignOutButton />}
      </section>
    </div>
  );
};

export default SettingPage;
