import Image from "next/image";

import { css } from "../../../../styled-system/css";
import { vstack } from "../../../../styled-system/patterns";

import Button from "@/app/_components/Button";
import Typography from "@/app/_components/Typography";
import Logo from "@/assets/images/logo-1st.png";

const idLoginContainerStyles = vstack({
  mt: "131px",
  gap: "93px",
});

const formStyles = vstack({
  gap: "20px",
});

const labelStyles = vstack({
  alignItems: "start",
  gap: "12px",
});

const inputStyles = css({
  outline: "none",
  border: "1px solid",
  borderColor: "oddu_black03",
  borderRadius: "30px",
  p: "16px 0 16px 20px",
  width: "335px",
});

const buttonBoxStyles = css({
  position: "absolute",
  bottom: "46px",
});

const IDLoginPage = () => {
  return (
    <div className={idLoginContainerStyles}>
      <Image src={Logo} alt="logo" width={200} height={100} />
      <form className={formStyles}>
        <label htmlFor="id" className={labelStyles}>
          <Typography.H4>아이디</Typography.H4>
          <input
            placeholder="아이디를 입력해주세요."
            id="id"
            className={inputStyles}
          />
        </label>
        <label htmlFor="password" className={labelStyles}>
          <Typography.H4>비밀번호</Typography.H4>
          <input
            placeholder="비밀번호를 입력해주세요."
            type="password"
            id="password"
            className={inputStyles}
          />
        </label>
        <div className={buttonBoxStyles}>
          <Button size="large">로그인</Button>
        </div>
      </form>
    </div>
  );
};

export default IDLoginPage;
