import { css } from "../../../../styled-system/css";
import { TrackingPhaseTypes } from "../_types/trackingPhase";

import AppBar from "@/app/_components/AppBar";
import Button from "@/app/_components/Button";
import Typography from "@/app/_components/Typography";
import usePermissionState from "@/app/_hooks/usePermissionState";

interface Props {
  changeTrackingPhase: (phase: TrackingPhaseTypes) => void;
}

const noticeContainerStyles = css({
  width: "100vw",
});

const noticeSectionStyles = css({
  width: "375px",
  px: "20px",
  margin: "0 auto",
  mt: "20px",
});

const buttonStyles = css({
  position: "absolute",
  bottom: "40px",
});

const NoticeContainer = ({ changeTrackingPhase }: Props) => {
  const { isPossibleLocationService, isPossiblePermissions } =
    usePermissionState();

  return (
    <div className={noticeContainerStyles}>
      <AppBar>산책</AppBar>
      <div className={noticeSectionStyles}>
        {(!isPossibleLocationService || !isPossiblePermissions) && (
          <Typography.PMedium>
            위치 권한이 필요합니다.
            <br />
            설정에서 위치권한을 허용한 후 진행해주세요.
          </Typography.PMedium>
        )}
        <div className={buttonStyles}>
          <Button
            color="oddu_green01"
            size="large"
            handleClick={() => changeTrackingPhase("timer")}
          >
            시작하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NoticeContainer;
