"use client";

import { useState } from "react";

import FootprintDrawer from "../_components/FootprintDrawer";
import MapContainer from "../_components/MapContainer";
import NoticeContainer from "../_components/NoticeContainer";
import TimerContainer from "../_components/TimerContainer";
import { TrackingPhaseTypes } from "../_types/trackingPhase";

const Tracking = () => {
  const [trackingPhase, setTrackingPhase] =
    useState<TrackingPhaseTypes>("notice");

  const changeTrackingPhase = (phase: TrackingPhaseTypes) => {
    setTrackingPhase(phase);
  };

  if (trackingPhase === "notice")
    return <NoticeContainer changeTrackingPhase={changeTrackingPhase} />;
  if (trackingPhase === "timer")
    return <TimerContainer changeTrackingPhase={changeTrackingPhase} />;

  return (
    <>
      <MapContainer />
      <FootprintDrawer />
    </>
  );
};

export default Tracking;
