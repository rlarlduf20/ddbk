import { useEffect, useRef, useState } from "react";

import { DEFAULT_ZOOM } from "../_constants/map";

interface FootPrintsType {
  title: string;
  latitude: number;
  longitude: number;
  content?: string;
}
interface Props {
  location: { latitude: number; longitude: number };
  footprints: FootPrintsType[];
}

const useMap = ({ location, footprints }: Props) => {
  const mapRef = useRef<naver.maps.Map | null>(null);
  const polylineRef = useRef<naver.maps.Polyline | null>(null);
  const curPosMarkerRef = useRef<naver.maps.Marker | null>(null);
  const footprintMarkerRef = useRef<naver.maps.Marker | null>(null);

  const [isAutoMoveRef, setIsAutoMoveRef] = useState<boolean>(true);

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

    footprints.forEach((footprint: any) => {
      if (!mapRef.current) return;

      footprintMarkerRef.current = new naver.maps.Marker({
        position: new naver.maps.LatLng(
          footprint.latitude,
          footprint.longitude,
        ),
        map: mapRef.current,
        title: footprint.name,
        icon: {
          url: "/marker-footprint.svg",
          size: new naver.maps.Size(50, 63),
          scaledSize: new naver.maps.Size(50, 63),
          origin: new naver.maps.Point(0, 0),
          anchor: new naver.maps.Point(12, 37),
        },
      });
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

    curPosMarkerRef.current?.setPosition(
      new naver.maps.LatLng(location.latitude, location.longitude),
    );
    if (isAutoMoveRef) {
      const newCenter = new naver.maps.LatLng(
        location.latitude,
        location.longitude,
      );
      mapRef.current.setCenter(newCenter);
    }
  }, [location, isAutoMoveRef]);

  const moveToCurLocation = () => {
    if (mapRef.current) {
      mapRef.current.setCenter(
        new naver.maps.LatLng(location.latitude, location.longitude),
      );
    }
  };

  const disableAutoMove = () => {
    setIsAutoMoveRef(false); // 자동 이동 비활성화
  };

  return { handleScriptLoad, moveToCurLocation, disableAutoMove };
};

export default useMap;
