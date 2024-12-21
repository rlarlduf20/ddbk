import Image from "next/image";

import { css } from "../../../../styled-system/css";
import { hstack, vstack } from "../../../../styled-system/patterns";
import LoginForm from "../_components/LoginForm";
import NavRegisterButton from "../_components/NavRegisterButton";

import Typography from "@/app/_components/Typography";
import Logo from "@/assets/images/logo-1st.png";

const idLoginContainerStyles = vstack({
  mt: "64px",
  gap: 0,
});

const findBoxStyles = hstack({
  gap: "20px",
  height: "16px",
  alignItems: "center",
});

const idFindBoxStyles = css({
  cursor: "pointer",
});

const dividerStyles = css({
  width: "1px",
  height: "16px",
  bgColor: "oddu_black02",
});

const pwFindBoxStyles = css({
  cursor: "pointer",
});

const IDLoginPage = () => {
  return (
    <div className={idLoginContainerStyles}>
      <Image src={Logo} alt="logo" width={200} height={100} />
      <LoginForm />
      <div className={findBoxStyles}>
        <button type="button" className={idFindBoxStyles}>
          <Typography.SpanButton>아이디 찾기</Typography.SpanButton>
        </button>
        <div className={dividerStyles} />
        <button type="button" className={pwFindBoxStyles}>
          <Typography.SpanButton>비밀번호 찾기</Typography.SpanButton>
        </button>
      </div>
      <NavRegisterButton />
    </div>
  );
};

export default IDLoginPage;
