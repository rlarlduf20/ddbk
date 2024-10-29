"use client";

import Script from "next/script";
import { useEffect } from "react";

const MapContainer = () => {
  useEffect(() => {
    const initMap = () => {
      const mapOptions = {
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 10,
      };

      new naver.maps.Map("map", mapOptions);
    };

    initMap();
  }, []);

  return (
    <>
      <Script
        strategy="beforeInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
      />
      <div id="map" style={{ width: "100vw", height: "100vh" }} />
    </>
  );
};

export default MapContainer;
