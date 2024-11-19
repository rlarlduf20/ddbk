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
    <div className={signContainerStyles}>
      <button type="button" onClick={() => logIn("kakao")}>
        카카오 로그인
      </button>
    </div>
  );
};

export default SignIn;
