"use client";

import Button from "@/app/_components/Button";
import Typography from "@/app/_components/Typography";
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

      <Typography.H1 color="main_pink">오뚜~~ HI</Typography.H1>
      <Typography.H2 color="main_green">오뚜~~ HI</Typography.H2>
      <Typography.H3>오뚜~~ HI</Typography.H3>
      <Typography.H4>오뚜~~ HI</Typography.H4>
      <Typography.H5>오뚜~~ HI</Typography.H5>
      <Typography.PLarge>오뚜~~ HI</Typography.PLarge>
      <Typography.PMedium>오뚜~~ HI</Typography.PMedium>
      <Typography.PSmall>오뚜~~ HI</Typography.PSmall>
      <Button rounded visual="outline">
        버튼
      </Button>
    </div>
  );
};

export default MyPage;
