import { hstack } from "../../../../styled-system/patterns";

import usePermissionState from "@/app/_hooks/usePermissionState";

const startButtonStyles = hstack({
  position: "fixed",
  left: "50%",
  transform: "translate(-50%, 0)",
  bottom: 106,
  zIndex: 1000,
  borderRadius: "50%",
  bgColor: "oddu_green01",
  color: "oddu_white01",
  width: "80px",
  height: "80px",
  fontSize: "32px",
  fontWeight: 700,
  justifyContent: "center",
  alignItems: "center",
  display: {
    base: "block",
    sm: "none",
  },
});

const StartButton = () => {
  const { isPossibleLocationService, isPossiblePermissions } =
    usePermissionState();

  const handleClickStartBtn = () => {
    if (typeof window !== "undefined" && window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ type: "GPS_PERMISSION_STATE" }),
      );

      if (!isPossibleLocationService || !isPossiblePermissions) {
        window.ReactNativeWebView.postMessage(
          JSON.stringify({ type: "REQUEST_GPS_PERMISSIONS" }),
        );
        return;
      }
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ type: "STACK_TRACKING" }),
      );
      return;
    }
    alert("산책 시작은 앱에서 사용할 수 있습니다.");
  };
  return (
    <button
      type="button"
      className={startButtonStyles}
      onClick={handleClickStartBtn}
    >
      GO
    </button>
  );
};

export default StartButton;
