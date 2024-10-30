"use client";

import { useEffect, useState, useRef } from "react";

import {
  DEFAULT_LATITUDE,
  DEFAULT_LONGITUDE,
  DEFAULT_ZOOM,
} from "../_constants";

interface LocationType {
  latitude: number;
  longitude: number;
}

const useGeoLocation = () => {
  const [location, setLocation] = useState<LocationType>({
    latitude: DEFAULT_LATITUDE,
    longitude: DEFAULT_LONGITUDE,
  });
  const mapRef = useRef<naver.maps.Map | null>(null);

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
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 },
    );
  }, []);

  const handleScriptLoad = () => {
    const mapOptions = {
      center: new naver.maps.LatLng(location.latitude, location.longitude),
      zoom: DEFAULT_ZOOM,
    };
    mapRef.current = new naver.maps.Map("map", mapOptions);
  };

  useEffect(() => {
    if (!mapRef.current || typeof naver === "undefined") return;

    const newCenter = new naver.maps.LatLng(
      location.latitude,
      location.longitude,
    );
    mapRef.current.setCenter(newCenter);
  }, [location]);

  return {
    handleScriptLoad,
  };
};

export default useGeoLocation;
