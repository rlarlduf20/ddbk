import { css } from "../../../../styled-system/css";
import GPSGroup from "../_components/GPSGroup";
import ProfileCard from "../_components/Profile";
import SignOutButton from "../_components/SignOutButtont";

import AppBar from "@/app/_components/AppBar";

const settingStyles = css({
  width: "100vw",
  // px: "20px",
});

const settingSectionStyles = css({
  width: "375px",
  px: "20px",
  margin: "0 auto",
  mt: "20px",
});

const SettingPage = async () => {
  return (
    <div className={settingStyles}>
      <AppBar>설정</AppBar>
      <section className={settingSectionStyles}>
        <ProfileCard />
        <GPSGroup />
        <SignOutButton />
      </section>
    </div>
  );
};

export default SettingPage;
