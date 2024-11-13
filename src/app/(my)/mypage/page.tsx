"use client";

import usePermissionState from "@/app/_hooks/usePermissionState";

const MyPage = () => {
  const { isPossibleLocationService, isPossiblePermissions } =
    usePermissionState();

  const handlePermission = () => {
    if (typeof window !== "undefined" && window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ type: "REQUEST_GPS_PERMISSIONS" }),
      );
    }
  };
  return (
    <div style={{ paddingTop: "100px" }}>
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
    </div>
  );
};

export default MyPage;
