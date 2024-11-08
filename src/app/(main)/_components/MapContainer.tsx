"use client";

import { useRouter } from "next/navigation";
import Script from "next/script";

import useGeoLocation from "../_hooks/useGeoLocation";

const MapContainer = () => {
  const { handleScriptLoad } = useGeoLocation();
  const router = useRouter();
  const handleClickStartBtn = () => {
    if (typeof window !== "undefined" && window.ReactNativeWebView) {
      router.push("/hu");
      return;
    }
    alert("산책 루트 생성 기능은 모바일에서 이용할 수 있습니다.");
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
        style={{ margin: "20px" }}
      >
        산책 시작
      </button>
    </>
  );
};

export default MapContainer;
