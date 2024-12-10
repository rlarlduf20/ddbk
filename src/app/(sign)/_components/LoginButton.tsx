"use client";

import { useFormStatus } from "react-dom";

import { css } from "../../../../styled-system/css";

import Button from "@/app/_components/Button";

const loginButtonBoxStyles = css({
  mt: "18px",
});

const LoginButton = () => {
  const { pending } = useFormStatus();

  return (
    <div className={loginButtonBoxStyles}>
      <Button size="large" type="submit">
        {pending ? "Loading..." : "로그인"}
      </Button>
    </div>
  );
};

export default LoginButton;
