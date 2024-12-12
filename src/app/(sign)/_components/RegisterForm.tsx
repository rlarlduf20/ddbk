"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";

import { css } from "../../../../styled-system/css";
import { hstack, vstack } from "../../../../styled-system/patterns";

import { registerWithCreds } from "@/app/_actions/auth";
import Button from "@/app/_components/Button";
import LabelInput from "@/app/_components/LabelInput";
import Typography from "@/app/_components/Typography";
import useRouterEvent from "@/app/_hooks/useRouterEvent";
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
  mt: "100px",
});

const availableTextStyles = css({
  position: "absolute",
  left: "21px",
  bottom: "-20px",
});

const RegisterForm = () => {
  const { pending } = useFormStatus();
  const { push } = useRouterEvent();

  const [isDuplicated, setIsDuplicated] = useState<boolean | null>(null);
  const [checkDuplicateLoading, setCheckDuplicateLoading] =
    useState<boolean>(false);

  const [loginId, setLoginId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [name, setName] = useState<string>("");

  const isCheckDuplicatedBtnDisabled =
    !loginId || isDuplicated === false || checkDuplicateLoading;
  const isMatchedPassword = password === passwordConfirm;
  const isActiveRegisterBtn =
    isDuplicated === false &&
    !!loginId &&
    !!password &&
    !!name &&
    isMatchedPassword;

  const handleClickDuplicate = async () => {
    setCheckDuplicateLoading(true);
    const isDuplicate = await handleClickDuplicateBtn(loginId);

    setIsDuplicated(isDuplicate);
    setCheckDuplicateLoading(false);
  };

  const handleChangeLoginId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDuplicated(null);
    setLoginId(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleChangePasswordConfirm = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPasswordConfirm(e.target.value);
  };
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e?.currentTarget);
      await registerWithCreds(formData);

      alert("회원가입에 성공했습니다.");

      push({ method: "back" });
    } catch {
      alert("회원가입에 실패했습니다.");
    }
  };

  return (
    <form className={formStyles} onSubmit={handleSubmit}>
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
          {checkDuplicateLoading ? "Loading..." : "중복 확인"}
        </Button>
      </div>
      <LabelInput
        type="password"
        id="password"
        name="password"
        placeholder="비밀번호를 입력해주세요."
        label="비밀번호"
        value={password}
        handleChange={handleChangePassword}
      />
      <LabelInput
        type="password"
        id="passwordConfirm"
        placeholder="비밀번호를 한번 더 입력해주세요."
        label="비밀번호 확인"
        value={passwordConfirm}
        handleChange={handleChangePasswordConfirm}
        error={isMatchedPassword === false}
        errorText="비밀번호가 틀립니다."
      />
      <LabelInput
        type="text"
        id="name"
        name="name"
        placeholder="닉네임을 입력해주세요."
        label="닉네임"
        value={name}
        handleChange={handleChangeName}
      />
      <div className={registerButtonBoxStyles}>
        <Button
          color={isActiveRegisterBtn ? "oddu_green01" : "oddu_black03"}
          size="large"
          type="submit"
          disabled={!isActiveRegisterBtn}
        >
          {pending ? "Loading..." : "회원가입"}
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
