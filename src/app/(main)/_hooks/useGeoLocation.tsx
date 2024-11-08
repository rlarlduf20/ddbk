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
  const polylineRef = useRef<naver.maps.Polyline | null>(null);

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

  useEffect(() => {
    if (!mapRef.current || typeof naver === "undefined") return;
    if (!polylineRef.current) return;

    const currentPath: naver.maps.Point[] = [];
    polylineRef.current.getPath().forEach((point) => {
      currentPath.push(point);
    });

    const newPath = [
      ...currentPath,
      new naver.maps.LatLng(location.latitude, location.longitude), // 새 위치 추가
    ];
    polylineRef.current.setPath(newPath);

    const newCenter = new naver.maps.LatLng(
      location.latitude,
      location.longitude,
    );
    mapRef.current.setCenter(newCenter);
  }, [location]);

  const handleScriptLoad = () => {
    const mapOptions = {
      center: new naver.maps.LatLng(location.latitude, location.longitude),
      zoom: DEFAULT_ZOOM,
    };
    mapRef.current = new naver.maps.Map("map", mapOptions);

    polylineRef.current = new naver.maps.Polyline({
      map: mapRef.current,
      path: [],
      strokeColor: "#5347AA",
      strokeWeight: 5,
    });
  };

  const startTracking = () => {
    if (typeof window !== "undefined" && window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ type: "START_TRACKING" }),
      );
    }
  };

  const stopTracking = () => {
    if (typeof window !== "undefined" && window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ type: "STOP_TRACKING" }),
      );
    }
  };

  return {
    handleScriptLoad,
    startTracking,
    stopTracking,
    location,
  };
};

export default useGeoLocation;
