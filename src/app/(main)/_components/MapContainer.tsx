"use client";

import { useQuery } from "@tanstack/react-query";
import Script from "next/script";

import WorkButtonGroup from "./WorkButtonGroup";

import Loading from "@/app/_components/Loading";
import useGeoLocation from "@/app/_hooks/useGeolocation";
import useMap from "@/app/_hooks/useMap";
import { fetchMyFootPrints } from "@/app/_lib/api-queryFn/footprint";

const MapContainer = () => {
  const { location, isLoading } = useGeoLocation();
  const { data: footprints, error } = useQuery({
    queryKey: ["footprints"],
    queryFn: () => fetchMyFootPrints(),
  });

  const { handleScriptLoad, moveToCurLocation } = useMap({
    location,
    footprints,
  });

  if (error) throw new Error(error.message);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
        onLoad={handleScriptLoad}
      />
      {isLoading && <Loading>위치 정보를 불러오는 중입니다.</Loading>}
      <div id="map" style={{ width: "100vw", height: "100vh" }} />
      <WorkButtonGroup moveCurLocation={moveToCurLocation} />
    </>
  );
};

export default MapContainer;
