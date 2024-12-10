"use client";

import { useAtomValue } from "jotai";
import { useFormStatus } from "react-dom";

import { css } from "../../../../styled-system/css";

import { isLoginFormValidAtom } from "@/app/_atoms";
import Button from "@/app/_components/Button";

const loginButtonBoxStyles = css({
  mt: "18px",
});

const LoginButton = () => {
  const { pending } = useFormStatus();
  const isLoginFormValid = useAtomValue(isLoginFormValidAtom);
  const isDisabled = pending || !isLoginFormValid;

  return (
    <div className={loginButtonBoxStyles}>
      <Button
        size="large"
        type="submit"
        disabled={isDisabled}
        color={isDisabled ? "oddu_black03" : "oddu_green01"}
      >
        {pending ? "Loading..." : "로그인"}
      </Button>
    </div>
  );
};

export default LoginButton;
