"use client";

import { signIn } from "next-auth/react";

import { css } from "../../../../styled-system/css";

import { logIn } from "@/app/_actions/auth";
import { auth } from "@/auth";

const signContainerStyles = css({
  width: "100%",
  display: "flex",
  mt: "100px",
  justifyContent: "center",
});

const SignIn = () => {
  const handleLogin = async () => {
    let timer: any;
    if (window !== undefined && window.ReactNativeWebView) {
      await signIn("kakao");
      const checkLogin = async () => {
        const session = await auth();
        window.ReactNativeWebView.postMessage(
          JSON.stringify({
            type: "CHECK_SESSION",
            user_id: session?.user && session?.user.id,
          }),
        );
        if (session) {
          clearInterval(timer);
          window.ReactNativeWebView.postMessage(
            JSON.stringify({ type: "LOGIN_SUCCESS" }),
          );
        }
      };
      timer = setInterval(() => {
        checkLogin();
      }, 3000);

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
