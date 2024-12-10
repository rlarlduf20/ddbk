"use client";

import Image from "next/image";
import Link from "next/link";

import { css } from "../../../../styled-system/css";
import { hstack, vstack } from "../../../../styled-system/patterns";
import LoginButton from "../_components/LoginButton";
import NavRegisterButton from "../_components/NavRegisterButton";

import { loginWithCreds } from "@/app/_actions/auth";
import LabelInput from "@/app/_components/LabelInput";
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
      <Link href="/">
        <Image src={Logo} alt="logo" width={200} height={100} />
      </Link>
      <form action={loginWithCreds} className={formStyles}>
        <LabelInput
          type="text"
          id="loginId"
          name="loginId"
          placeholder="아이디를 입력해주세요."
          label="아이디"
        />
        <LabelInput
          type="password"
          id="password"
          name="password"
          placeholder="비밀번호를 입력해주세요."
          label="비밀번호"
        />
        <LoginButton />
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
      <NavRegisterButton />
    </div>
  );
};

export default IDLoginPage;
