"use client";

import { useEffect, useState } from "react";

import { DEFAULT_LATITUDE, DEFAULT_LONGITUDE } from "../_constants";

interface LocationType {
  latitude: number;
  longitude: number;
}

const useGeoLocation = () => {
  const [location, setLocation] = useState<LocationType>({
    latitude: DEFAULT_LATITUDE,
    longitude: DEFAULT_LONGITUDE,
  });

  useEffect(() => {
    const handleMessage = (event: any) => {
      const data = JSON.parse(event.data);
      setLocation({ latitude: data.latitude, longitude: data.longitude });
    };

    if (typeof window !== "undefined" && window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ type: "REQUEST_GPS_PERMISSIONS" }),
      );
      window.addEventListener("message", handleMessage);
      // android 추후에 확인
      // document.addEventListener("message", handleMessage);
    } else {
      const { geolocation } = navigator;
      if (geolocation) {
        geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({
              latitude,
              longitude,
            });
          },
          () => {
            alert("위치 기반 미동의로 현재 위치가 반영되지 않습니다.");
          },
          { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 },
        );
      }
    }

    return () => {
      if (typeof window !== "undefined" && window.ReactNativeWebView) {
        window.removeEventListener("message", handleMessage);
        // android 추후에 확인
        // document.removeEventListener("message", handleMessage);
      }
    };
  }, []);

  return {
    location,
  };
};

export default useGeoLocation;
