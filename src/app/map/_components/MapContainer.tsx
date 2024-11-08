"use client";

import Script from "next/script";

import useIsWebView from "../../_hooks/useIsWebView";
import useGeoLocation from "../_hooks/useGeoLocation";

const MapContainer = () => {
  const { handleScriptLoad, startTracking, stopTracking, location } =
    useGeoLocation();

  const { isWebView } = useIsWebView();

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
        onLoad={handleScriptLoad}
      />
      <div id="map" style={{ width: "100vw", height: "50vh" }} />
      {isWebView && (
        <>
          <button
            type="button"
            onClick={startTracking}
            style={{ margin: "20px" }}
          >
            시작
          </button>
          <button
            type="button"
            onClick={stopTracking}
            style={{ margin: "20px" }}
          >
            끝
          </button>
          <p>
            {location.latitude}, {location.longitude}
          </p>
        </>
      )}
    </>
  );
};

export default MapContainer;
