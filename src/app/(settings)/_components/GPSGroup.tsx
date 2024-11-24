"use client";

import { css } from "../../../../styled-system/css";
import { hstack } from "../../../../styled-system/patterns";

import Typography from "@/app/_components/Typography";
import usePermissionState from "@/app/_hooks/usePermissionState";

const GPSGroupStyles = css({
  mb: "200px",
});

const GPSBoxStyles = hstack({
  justify: "space-between",
});

const GPSGroup = () => {
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
    <div className={GPSGroupStyles}>
      <div className={GPSBoxStyles}>
        <Typography.PMedium>디바이스 위치서비스 :</Typography.PMedium>
        <button type="button" onClick={handlePermission}>
          {isPossibleLocationService ? "켜짐" : "꺼짐"}
        </button>
      </div>
      <div className={GPSBoxStyles}>
        <Typography.PMedium>앱 위치 권한 허용 :</Typography.PMedium>
        <button type="button" onClick={handlePermission}>
          {isPossiblePermissions ? "켜짐" : "꺼짐"}
        </button>
      </div>
    </div>
  );
};

export default GPSGroup;
