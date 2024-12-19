"use client";

import { useState } from "react";

import MapContainer from "../_components/MapContainer";
import NoticeContainer from "../_components/NoticeContainer";
import TimerContainer from "../_components/TimerContainer";

type TrackingPhaseTypes = "notice" | "timer" | "tracking";

const Tracking = () => {
  const [trackingPhase, setTrackingPhase] =
    useState<TrackingPhaseTypes>("notice");

  const changeTrackingPhase = (step: TrackingPhaseTypes) => {
    setTrackingPhase(step);
  };

  if (trackingPhase === "notice") return <NoticeContainer />;
  if (trackingPhase === "timer") return <TimerContainer />;

  return <MapContainer />;
};

export default Tracking;
