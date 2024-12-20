import { useEffect, useState } from "react";

import { css } from "../../../../styled-system/css";
import { hstack } from "../../../../styled-system/patterns";
import { TrackingPhaseTypes } from "../_types/trackingPhase";

interface Props {
  changeTrackingPhase: (phase: TrackingPhaseTypes) => void;
}

const timerContainerStyles = hstack({
  width: "100vw",
  height: "100vh",
  bgColor: "oddu_green01",
  alignItems: "center",
});

const timerSectionStyles = css({
  width: "375px",
  px: "20px",
  margin: "0 auto",
  mt: "20px",
});

const countTextStyles = css({
  fontSize: "150px",
  fontWeight: "700",
  textAlign: "center",
  color: "oddu_white01",
});

const TimerContainer = ({ changeTrackingPhase }: Props) => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    let timer: any;
    if (count > 0) {
      timer = setTimeout(() => setCount(count - 1), 1000);
    } else {
      changeTrackingPhase("tracking");
    }
    return () => clearTimeout(timer);
  }, [count, changeTrackingPhase]);

  return (
    <div className={timerContainerStyles}>
      <div className={timerSectionStyles}>
        <p className={countTextStyles}>{count}</p>
      </div>
    </div>
  );
};

export default TimerContainer;
