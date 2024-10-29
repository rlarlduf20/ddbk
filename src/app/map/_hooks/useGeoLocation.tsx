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
    const { geolocation } = navigator;

    if (!geolocation) return;

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
      { enableHighAccuracy: true, timeout: 0, maximumAge: 0 },
    );
  }, []);

  return {
    curLocation: location,
  };
};

export default useGeoLocation;
