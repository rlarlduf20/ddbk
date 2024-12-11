"use client";

import { useState } from "react";

import { css } from "../../../../styled-system/css";
import { hstack, vstack } from "../../../../styled-system/patterns";

import Button from "@/app/_components/Button";
import LabelInput from "@/app/_components/LabelInput";
import Typography from "@/app/_components/Typography";
import { handleClickDuplicateBtn } from "@/app/_lib/api-queryFn/auth";

const formStyles = vstack({
  gap: "30px",
  mt: "31px",
});

const idBoxStyles = hstack({
  position: "relative",
  gap: "10px",
  alignItems: "flex-end",
});

const registerButtonBoxStyles = css({
  position: "absolute",
  bottom: "46px",
});

const availableTextStyles = css({
  position: "absolute",
  left: "21px",
  bottom: "-20px",
});

const RegisterForm = () => {
  const [isDuplicated, setIsDuplicated] = useState<boolean | null>(null);

  const [loginId, setLoginId] = useState<string>("");

  const isCheckDuplicatedBtnDisabled = !loginId || isDuplicated === false;

  const handleClickDuplicate = async () => {
    const isDuplicate = await handleClickDuplicateBtn(loginId);

    setIsDuplicated(isDuplicate);
  };

  const handleChangeLoginId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDuplicated(null);
    setLoginId(e.target.value);
  };

  return (
    <form className={formStyles}>
      <div className={idBoxStyles}>
        <LabelInput
          type="text"
          id="loginId"
          name="loginId"
          placeholder="아이디를 입력해주세요."
          label="아이디"
          value={loginId}
          size="medium"
          handleChange={handleChangeLoginId}
          error={isDuplicated}
          errorText="이미 사용중인 아이디입니다."
        />
        {isDuplicated === false && (
          <div className={availableTextStyles}>
            <Typography.SpanCaption color="oddu_green01">
              사용 가능한 아이디입니다.
            </Typography.SpanCaption>
          </div>
        )}
        <Button
          color={isCheckDuplicatedBtnDisabled ? "oddu_black03" : "oddu_green01"}
          size="small"
          handleClick={handleClickDuplicate}
          disabled={isCheckDuplicatedBtnDisabled}
        >
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
