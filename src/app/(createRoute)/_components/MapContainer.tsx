"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

import SaveFootPrintButton from "./SaveFootPrintButton";
import TrackingControlButton from "./TrackingControlButton";
import { startTracking, stopTracking } from "../_lib/tracking";

import Loading from "@/app/_components/Loading";
import useGeoLocation from "@/app/_hooks/useGeolocation";
import useMap from "@/app/_hooks/useMap";
import { saveFootPrint } from "@/app/_lib/api-queryFn/footprint";
import { showToast } from "@/app/_lib/toast";
import { FootprintType } from "@/app/_types/footprint";

const MapContainer = () => {
  const { isLoading, location } = useGeoLocation();
  const [footprints, setFootprints] = useState<FootprintType[]>([]);
  const { handleScriptLoad, disableAutoMove } = useMap({
    location,
    footprints,
  });

  useEffect(() => {
    startTracking();
  }, []);

  const handleClickFinishBtn = async () => {
    try {
      await saveFootPrint(footprints);
      stopTracking();
      if (typeof window !== "undefined" && window.ReactNativeWebView) {
        window.ReactNativeWebView.postMessage(
          JSON.stringify({ type: "STACK_REVIEW" }),
        );

        return;
      }
    } catch (error: any) {
      showToast({ type: "error", message: error.message });
    }

    alert("산책 끝은 앱에서 사용할 수 있습니다.");
  };

  const handleSaveFootprints = (newFootprint: FootprintType) => {
    setFootprints((prevFootprints) => [...prevFootprints, newFootprint]);
  };

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
        onLoad={handleScriptLoad}
      />
      {isLoading && <Loading />}
      <div>
        <div
          id="map"
          style={{ width: "100vw", height: "100vh" }}
          onTouchStart={disableAutoMove}
        />
      </div>
      <TrackingControlButton handleClickFinishBtn={handleClickFinishBtn} />
      <SaveFootPrintButton
        handleSave={(title: string) =>
          handleSaveFootprints({
            title,
            latitude: location.latitude,
            longitude: location.longitude,
            content: "테스트",
          })
        }
      />
    </>
  );
};

export default MapContainer;
