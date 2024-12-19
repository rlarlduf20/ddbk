"use client";

import { useState } from "react";

import MapContainer from "../_components/MapContainer";

type TrackingPhaseTypes = "notice" | "timer" | "tracking";

const Tracking = () => {
  const [trackingPhase, setTrackingPhase] =
    useState<TrackingPhaseTypes>("notice");

  const changeTrackingPhase = (step: TrackingStepTypes) => {
    setTrackingPhase(step);
  };
  return <MapContainer />;
};

export default Tracking;
