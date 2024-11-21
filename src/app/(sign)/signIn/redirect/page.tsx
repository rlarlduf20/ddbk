"use client";

import { useEffect } from "react";

import { auth } from "@/auth";

const SignInRedirectPage = () => {
  useEffect(() => {
    const checkLogin = async () => {
      const session = await auth();
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          type: "CHECK_SESSION",
          user_id: session?.user && session?.user.id,
        }),
      );
      if (session) {
        window.ReactNativeWebView.postMessage(
          JSON.stringify({ type: "LOGIN_SUCCESS" }),
        );
      }
    };
    checkLogin();
  }, []);

  return <p style={{ padding: "100px" }}>로그인중입니다.....</p>;
};

export default SignInRedirectPage;
