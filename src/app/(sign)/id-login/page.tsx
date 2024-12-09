"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { css } from "../../../../styled-system/css";
import { hstack, vstack } from "../../../../styled-system/patterns";

import Button from "@/app/_components/Button";
import Typography from "@/app/_components/Typography";
import Logo from "@/assets/images/logo-1st.png";
import Link from "next/link";
import LabelInput from "@/app/_components/LabelInput";

const idLoginContainerStyles = vstack({
  mt: "118px",
  gap: 0,
});

const formStyles = vstack({
  gap: "12px",
  m: "36px 0 10px",
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
      <Link href="/">
        <Image src={Logo} alt="logo" width={200} height={100} />
      </Link>
      <form className={formStyles}>
        <LabelInput
          type="text"
          id="id"
          placeholder="아이디를 입력해주세요."
          label="아이디"
        />
        <LabelInput
          type="password"
          id="password"
          placeholder="비밀번호를 입력해주세요."
          label="비밀번호"
        />
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
