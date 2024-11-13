import { useEffect, useState } from "react";

const usePermissionState = () => {
  const [isPossibleLocationService, setIsPossibleLocationService] =
    useState<boolean>(false);
  const [isPossiblePermissions, setIsPossiblePermissions] =
    useState<boolean>(false);

  useEffect(() => {
    const handleMessage = (event: any) => {
      const data = JSON.parse(event.data);
      if (data.isLocationService) {
        setIsPossibleLocationService(true);
      }
      if (data.isPermissions) {
        setIsPossiblePermissions(true);
      }
    };

    if (typeof window !== "undefined" && window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ type: "GPS_PERMISSION_STATE" }),
      );
      window.addEventListener("message", handleMessage);
    }
  }, []);

  return {
    isPossibleLocationService,
    isPossiblePermissions,
  };
};

export default usePermissionState;
