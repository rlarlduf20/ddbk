"use client";

import Script from "next/script";

import useGeoLocation from "../_hooks/useGeoLocation";
import useWebView from "../_hooks/useWebview";

const MapContainer = () => {
  const {
    handleScriptLoad,
    startTracking,
    stopTracking,
    isTracking,
    location,
  } = useGeoLocation();

  const { isWebView } = useWebView();

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
            onClick={isTracking ? stopTracking : startTracking}
            style={{ margin: "20px" }}
          >
            {isTracking ? "Stop Tracking" : "Start Tracking"}
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
