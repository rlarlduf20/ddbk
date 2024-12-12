import { css } from "../../../../../styled-system/css";
import RegisterForm from "../../_components/RegisterForm";

import AppBar from "@/app/_components/AppBar";

const registerContainerStyles = css({
  minH: "812px",
});

const IDRegisterPage = () => {
  return (
    <div className={registerContainerStyles}>
      <AppBar>회원가입</AppBar>
      <RegisterForm />
    </div>
  );
};

export default IDRegisterPage;
