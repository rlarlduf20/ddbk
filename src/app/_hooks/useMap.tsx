import { useEffect, useRef } from "react";

import { DEFAULT_ZOOM } from "../(main)/_constants";

interface Props {
  location: { latitude: number; longitude: number };
}

const useMap = ({ location }: Props) => {
  const mapRef = useRef<naver.maps.Map | null>(null);
  const polylineRef = useRef<naver.maps.Polyline | null>(null);
  const curPosMarkerRef = useRef<naver.maps.Marker | null>(null);
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

    curPosMarkerRef.current = new naver.maps.Marker({
      position: new naver.maps.LatLng(location.latitude, location.longitude),
      map: mapRef.current,
    });
  };

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

  return { handleScriptLoad };
};

export default useMap;
