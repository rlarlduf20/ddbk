import { css } from "../../../../styled-system/css";

import Button from "@/app/_components/Button";

interface Props {
  handleClickFinishBtn: () => void;
}

const controlButtonBoxStyles = css({
  position: "absolute",
  bottom: "60px",
});

const TrackingControlButton = ({ handleClickFinishBtn }: Props) => {
  return (
    <div className={controlButtonBoxStyles}>
      <Button
        color="oddu_green01"
        size="large"
        handleClick={handleClickFinishBtn}
      >
        산책 종료
      </Button>
    </div>
  );
};

export default TrackingControlButton;
