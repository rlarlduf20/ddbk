"use client";

import { useRouter } from "next/navigation";
import Script from "next/script";

import useGeoLocation from "../_hooks/useGeoLocation";

const MapContainer = () => {
  const { handleScriptLoad } = useGeoLocation();
  const router = useRouter();
  const handleClickStartBtn = () => {
    router.push("/");
  };
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
        onLoad={handleScriptLoad}
      />
      <div id="map" style={{ width: "100vw", height: "100vh" }} />
      <button
        type="button"
        onClick={handleClickStartBtn}
        style={{
          margin: "20px",
          position: "fixed",
          left: 50,
          top: 50,
          zIndex: 1000,
          backgroundColor: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        산책 시작
      </button>
    </>
  );
};

export default MapContainer;
