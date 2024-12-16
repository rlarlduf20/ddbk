"use client";

import { signOut } from "next-auth/react";

import { css } from "../../../../styled-system/css";

import { logOut } from "@/app/_actions/auth";
import Typography from "@/app/_components/Typography";

const logOutBtnStyles = css({
  position: "absolute",
  bottom: "104px",
  cursor: "pointer",
});

const SignOutButton = () => {
  const handleLogOut = async () => {
    if (typeof window !== "undefined" && window.ReactNativeWebView) {
      await signOut();
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ type: "LOG_OUT" }),
      );
      return;
    }
    logOut();
  };

  return (
    <div>
      <button type="button" onClick={handleLogOut} className={logOutBtnStyles}>
        <Typography.PMedium>로그아웃</Typography.PMedium>
      </button>
    </div>
  );
};

export default SignOutButton;
