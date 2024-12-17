import { useEffect, useRef } from "react";

import { DEFAULT_ZOOM } from "../_constants/map";

interface Props {
  location: { latitude: number; longitude: number };
}

const footprints = [
  {
    title: "웩슨 출몰 지역",
    position: { latitude: 37.5, longitude: 126.97 },
  },
  {
    title: "경복궁 카페",
    position: { latitude: 37.579293849225, longitude: 126.97798076343 },
  },
];

const useMap = ({ location }: Props) => {
  const mapRef = useRef<naver.maps.Map | null>(null);
  const polylineRef = useRef<naver.maps.Polyline | null>(null);
  const curPosMarkerRef = useRef<naver.maps.Marker | null>(null);

  const footprintMarkerRef = useRef<naver.maps.Marker | null>(null);

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
          footprint.position.latitude,
          footprint.position.longitude,
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

    const newCenter = new naver.maps.LatLng(
      location.latitude,
      location.longitude,
    );
    mapRef.current.setCenter(newCenter);
  }, [location]);

  const moveToCurLocation = () => {
    if (mapRef.current) {
      mapRef.current.setCenter(
        new naver.maps.LatLng(location.latitude, location.longitude),
      );
    }
  };

  return { handleScriptLoad, moveToCurLocation };
};

export default useMap;
