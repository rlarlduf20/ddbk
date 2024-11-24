"use client";

import { signOut, useSession } from "next-auth/react";

import { logOut } from "@/app/_actions/auth";

const SignOutButton = () => {
  const session = useSession();

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
      {session.data?.user?.name}
      <button type="button" onClick={handleLogOut}>
        버튼
      </button>
    </div>
  );
};

export default SignOutButton;
