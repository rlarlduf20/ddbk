import { css } from "../../../../styled-system/css";
import { hstack } from "../../../../styled-system/patterns";

import CurLocationIcon from "@/assets/icons/CurLocationIcon";

interface Props {
  moveCurLocation: () => void;
}

const workButtonBoxStyles = css({
  position: "fixed",
  left: "20px",
  bottom: "106px",
});

const workButtonStyles = hstack({
  width: "36px",
  height: "36px",
  bgColor: "oddu_green01",
  color: "oddu_white01",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
  borderRadius: "50%",
  cursor: "pointer",
});

const CurLocationButton = ({ moveCurLocation }: Props) => {
  return (
    <div className={workButtonBoxStyles}>
      <button
        type="button"
        className={workButtonStyles}
        onClick={moveCurLocation}
      >
        <CurLocationIcon />
      </button>
    </div>
  );
};

export default CurLocationButton;
