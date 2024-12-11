"use client";

import { css } from "../../../../styled-system/css";
import { hstack, vstack } from "../../../../styled-system/patterns";

import Button from "@/app/_components/Button";
import LabelInput from "@/app/_components/LabelInput";

const formStyles = vstack({
  gap: "30px",
  mt: "31px",
});

const idBoxStyles = hstack({
  gap: "10px",
  alignItems: "flex-end",
});

const registerButtonBoxStyles = css({
  position: "absolute",
  bottom: "46px",
});

const RegisterForm = () => {
  return (
    <form className={formStyles}>
      <div className={idBoxStyles}>
        <LabelInput
          type="text"
          id="loginId"
          name="loginId"
          placeholder="아이디를 입력해주세요."
          label="아이디"
          size="medium"
        />
        <Button color="oddu_green01" size="small">
          중복 확인
        </Button>
      </div>
      <LabelInput
        type="password"
        id="password"
        name="password"
        placeholder="비밀번호를 8자리 이상 입력해주세요."
        label="비밀번호"
      />
      <LabelInput
        type="password"
        id="passwordConfirm"
        placeholder="비밀번호를 한번 더 입력해주세요."
        label="비밀번호 확인"
      />
      <LabelInput
        type="text"
        id="name"
        name="name"
        placeholder="닉네임을 입력해주세요."
        label="닉네임"
      />
      <div className={registerButtonBoxStyles}>
        <Button size="large" type="submit">
          회원가입
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
