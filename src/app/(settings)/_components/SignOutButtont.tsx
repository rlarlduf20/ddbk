"use client";

import { signOut } from "next-auth/react";

import { logOut } from "@/app/_actions/auth";

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
      <button type="button" onClick={handleLogOut}>
        로그아웃
      </button>
    </div>
  );
};

export default SignOutButton;
