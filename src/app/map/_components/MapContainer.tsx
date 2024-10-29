"use client";

import Script from "next/script";
import { useEffect } from "react";

import { DEFAULT_ZOOM } from "../_constants";
import useGeoLocation from "../_hooks/useGeoLocation";

const MapContainer = () => {
  const { curLocation } = useGeoLocation();

  useEffect(() => {
    const initMap = () => {
      const mapOptions = {
        center: new naver.maps.LatLng(
          curLocation.latitude,
          curLocation.longitude,
        ),
        zoom: DEFAULT_ZOOM,
      };

      new naver.maps.Map("map", mapOptions);
    };

    initMap();
  }, [curLocation]);

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
