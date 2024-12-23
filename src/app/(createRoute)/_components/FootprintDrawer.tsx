import { useAtom } from "jotai";

import { css, cx } from "../../../../styled-system/css";

import { isDrawerOpenAtom } from "@/app/_atoms";
import Button from "@/app/_components/Button";
import Typography from "@/app/_components/Typography";

interface Props {
  handleSave: (title: string) => void;
}

const overlayStyles = css({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  bg: "rgba(0, 0, 0, 0.5)",
  zIndex: 500,
});

const drawerSectionBaseStyles = css({
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "340px",
  bg: "oddu_white01",
  borderRadius: "10px 10px 0 0",
  boxShadow: "0px -5px 10px 0px rgba(0, 0, 0, 0.17)",
  transform: "translateY(100%)",
  transition: "transform 0.3s ease-in-out",
  zIndex: 1000,
});

const drawerSectionOpenStyles = css({
  transform: "translateY(0)", // Drawer가 열릴 때
});
const drawerStyles = css({
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const FootprintDrawer = ({ handleSave }: Props) => {
  const [drawerState, setDrawerState] = useAtom(isDrawerOpenAtom);

  const handleClickSaveButton = () => {
    const title = "";
    if (title) {
      handleSave(title);
    }
  };
  return (
    <>
      <div
        role="presentation"
        onClick={() => setDrawerState(false)}
        className={overlayStyles}
      />
      <div
        className={cx(
          drawerSectionBaseStyles,
          drawerState && drawerSectionOpenStyles,
        )}
      >
        <div className={drawerStyles}>
          <Typography.H3>발도장을 찍을까요?</Typography.H3>
          <Button handleClick={handleClickSaveButton}>발도장 찍기</Button>
        </div>
      </div>
    </>
  );
};

export default FootprintDrawer;
