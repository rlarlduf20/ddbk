"use client";

import { signOut, useSession } from "next-auth/react";

import { logOut } from "@/app/_actions/auth";
import usePermissionState from "@/app/_hooks/usePermissionState";

const GPSGroup = () => {
  const session = useSession();

  const { isPossibleLocationService, isPossiblePermissions } =
    usePermissionState();

  const handlePermission = () => {
    if (typeof window !== "undefined" && window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ type: "REQUEST_GPS_PERMISSIONS" }),
      );
    }
  };

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
      <button
        type="button"
        style={{ border: "1pxSolidBlack", padding: "5px" }}
        onClick={handlePermission}
      >
        {`디바이스 위치서비스 : `}
        {isPossibleLocationService ? "켜짐" : "꺼짐"}
      </button>
      <button
        type="button"
        style={{ borderBottom: "1pxSolidBlack", padding: "5px" }}
        onClick={handlePermission}
      >
        {`앱 위치 권한 허용 : `}
        {isPossiblePermissions ? "켜짐" : "꺼짐"}
      </button>
      <div>
        {session.data?.user?.name}
        <button type="button" onClick={handleLogOut}>
          버튼
        </button>
      </div>
    </div>
  );
};

export default GPSGroup;
