"use client";

import Script from "next/script";

import WorkButtonGroup from "./WorkButtonGroup";

import Loading from "@/app/_components/Loading";
import useGeoLocation from "@/app/_hooks/useGeolocation";
import useMap from "@/app/_hooks/useMap";

const MapContainer = () => {
  const { location, isLoading } = useGeoLocation();
  const { handleScriptLoad, moveToCurLocation } = useMap({ location });

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
        onLoad={handleScriptLoad}
      />
      {isLoading && <Loading />}
      <div id="map" style={{ width: "100vw", height: "100vh" }} />
      <WorkButtonGroup moveCurLocation={moveToCurLocation} />
    </>
  );
};

export default MapContainer;
