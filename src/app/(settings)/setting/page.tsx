import { css } from "../../../../styled-system/css";
import GPSGroup from "../_components/GPSGroup";
import ProfileCard from "../_components/Profile";
import SignOutButton from "../_components/SignOutButtont";

const settingStyles = css({
  width: "100vw",
  px: "20px",
});

const settingSectionStyles = css({
  width: "375px",
  margin: "62px auto 0",
});

const SettingPage = async () => {
  return (
    <div className={settingStyles}>
      <section className={settingSectionStyles}>
        <ProfileCard />
        <GPSGroup />
        <SignOutButton />
      </section>
    </div>
  );
};

export default SettingPage;
