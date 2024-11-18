"use client";

import { css } from "../../../../styled-system/css";

import { logIn } from "@/app/_actions/auth";

const signContainerStyles = css({
  width: "100%",
  display: "flex",
  mt: "100px",
  justifyContent: "center",
});

const SignIn = () => {
  return (
    <button type="button" onClick={() => logIn("kakao")}>
      <div className={signContainerStyles}>
        <button type="button">카카오 로그인</button>
      </div>
    </button>
  );
};

export default SignIn;
