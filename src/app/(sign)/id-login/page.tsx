"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { css } from "../../../../styled-system/css";
import { hstack, vstack } from "../../../../styled-system/patterns";

import Button from "@/app/_components/Button";
import Typography from "@/app/_components/Typography";
import Logo from "@/assets/images/logo-1st.png";

const idLoginContainerStyles = vstack({
  mt: "118px",
  gap: 0,
});

const formStyles = vstack({
  gap: "12px",
  m: "36px 0 10px",
});

const labelStyles = vstack({
  alignItems: "start",
  gap: "8px",
});

const inputStyles = css({
  outline: "none",
  border: "1px solid",
  borderColor: "oddu_black03",
  borderRadius: "30px",
  p: "16px 0 16px 20px",
  width: "335px",
});

const loginButtonBoxStyles = css({
  mt: "18px",
});

const registerButtonBoxStyles = css({
  position: "absolute",
  bottom: "46px",
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
  const router = useRouter();

  const handleClick = () => {
    router.push("/id-login/register");
  };

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
        <div className={loginButtonBoxStyles}>
          <Button size="large">로그인</Button>
        </div>
      </form>
      <div className={findBoxStyles}>
        <button type="button" className={idFindBoxStyles}>
          <Typography.SpanButton>아이디 찾기</Typography.SpanButton>
        </button>
        <div className={dividerStyles} />
        <button type="button" className={pwFindBoxStyles}>
          <Typography.SpanButton>비밀번호 찾기</Typography.SpanButton>
        </button>
      </div>
      <div className={registerButtonBoxStyles}>
        <Button
          size="large"
          color="oddu_green01"
          outline
          handleClick={handleClick}
        >
          계정이 없다면? 회원가입
        </Button>
      </div>
    </div>
  );
};

export default IDLoginPage;
