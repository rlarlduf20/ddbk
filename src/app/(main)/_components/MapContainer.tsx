"use client";

import Script from "next/script";

import Loading from "@/app/_components/Loading";
import useGeoLocation from "@/app/_hooks/useGeolocation";
import useMap from "@/app/_hooks/useMap";

const MapContainer = () => {
  const { location, isLoading } = useGeoLocation();
  const { handleScriptLoad } = useMap({ location });

  const handleClickStartBtn = () => {
    if (typeof window !== "undefined" && window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ type: "STACK_TRACKING" }),
      );
      return;
    }
    alert("산책 시작은 앱에서 사용할 수 있습니다.");
  };
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
        onLoad={handleScriptLoad}
      />
      {isLoading && <Loading />}
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
