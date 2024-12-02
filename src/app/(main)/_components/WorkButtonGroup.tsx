import { useRouter } from "next/navigation";

import { hstack, vstack } from "../../../../styled-system/patterns";

import CurLocationIcon from "@/assets/icons/CurLocationIcon";
import RefreshIcon from "@/assets/icons/RefreshIcon";

interface Props {
  moveCurLocation: () => void;
}

const workButtonGroupStyles = vstack({
  gap: "12px",
  position: "fixed",
  left: 19,
  bottom: 106,
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

const WorkButtonGroup = ({ moveCurLocation }: Props) => {
  const router = useRouter();

  const handleRefresh = () => {
    router.refresh();
  };

  return (
    <div className={workButtonGroupStyles}>
      <button
        type="button"
        className={workButtonStyles}
        onClick={handleRefresh}
      >
        <RefreshIcon />
      </button>
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

export default WorkButtonGroup;
