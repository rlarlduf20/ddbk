"use client";

import { hstack, vstack } from "../../../../styled-system/patterns";

import Typography from "@/app/_components/Typography";
import usePermissionState from "@/app/_hooks/usePermissionState";
import { showToast } from "@/app/_lib/toast";

const GPSGroupStyles = vstack({
  width: "100%",
  gap: "36px",
});

const GPSBoxStyles = hstack({
  width: "100%",
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
      return;
    }
    showToast({ type: "error", message: "어플에서 활용되는 기능입니다." });
  };

  return (
    <div className={GPSGroupStyles}>
      <div className={GPSBoxStyles}>
        <Typography.PMedium>디바이스 위치서비스 :</Typography.PMedium>
        <button type="button" onClick={handlePermission}>
          <Typography.SpanCaption>
            {isPossibleLocationService ? "켜짐" : "꺼짐"}
          </Typography.SpanCaption>
        </button>
      </div>
      <div className={GPSBoxStyles}>
        <Typography.PMedium>앱 위치 권한 허용 :</Typography.PMedium>
        <button type="button" onClick={handlePermission}>
          <Typography.SpanCaption>
            {isPossiblePermissions ? "켜짐" : "꺼짐"}
          </Typography.SpanCaption>
        </button>
      </div>
    </div>
  );
};

export default GPSGroup;
