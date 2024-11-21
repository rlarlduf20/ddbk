"use client";

import { signIn } from "next-auth/react";

import { css } from "../../../../styled-system/css";

import { logIn } from "@/app/_actions/auth";
// import { auth } from "@/auth";

const signContainerStyles = css({
  width: "100%",
  display: "flex",
  mt: "100px",
  justifyContent: "center",
});

const SignIn = () => {
  const handleLogin = async () => {
    if (window !== undefined && window.ReactNativeWebView) {
      await signIn("kakao", { redirectTo: "/signIn/redirect" });
      return;
    }
    logIn("kakao");
  };

  return (
    <div className={signContainerStyles}>
      <button type="button" onClick={handleLogin}>
        카카오 로그인
      </button>
    </div>
  );
};

export default SignIn;
