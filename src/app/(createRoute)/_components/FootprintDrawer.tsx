import { useAtom } from "jotai";
import { useState } from "react";

import { css, cx } from "../../../../styled-system/css";
import { hstack, vstack } from "../../../../styled-system/patterns";

import { isDrawerOpenAtom } from "@/app/_atoms";
import Button from "@/app/_components/Button";
import Typography from "@/app/_components/Typography";
import CameraIcon from "@/assets/icons/CameraIcon";
import CloseIcon from "@/assets/icons/CloseIcon";
import PenIcon from "@/assets/icons/PenIcon";
import { showToast } from "@/app/_lib/toast";

interface Props {
  handleSave: (title: string, content: string) => void;
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
  transform: "translateY(0)",
});

const drawerStyles = vstack({
  height: "100%",
  padding: "20px",
  alignItems: "center",
  gap: 0,
});

const closeButtonStyles = css({
  position: "absolute",
  right: "28px",
  top: "18px",
  cursor: "pointer",
});

const subTextStyles = css({
  textAlign: "center",
  margin: "18px 0 31px 0",
  lineHeight: "10px",
});

const contentBoxStyles = hstack({
  width: "335px",
  gap: "10px",
});

const pictureBoxStyles = hstack({
  width: "100px",
  height: "100px",
  bgColor: "#d3d3d3",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "5px",
  cursor: "pointer",
});

const infoBoxStyles = vstack({
  gap: "16px",
});

const titleStyles = css({
  width: "196px",
  outline: "none",
  pl: "21px",
  fontSize: "14px",
  fontWeight: 600,
});

const labelStyles = hstack({
  gap: "5px",
});

const contentStyles = css({
  width: "225px",
  height: "62px",
  bgColor: "#e8e8e1",
  padding: "12px 25px",
  outline: "none",
  fontSize: "14px",
  fontWeight: 500,
});

const buttonBoxStyles = css({
  position: "absolute",
  bottom: "30px",
});

const FootprintDrawer = ({ handleSave }: Props) => {
  const [drawerState, setDrawerState] = useAtom(isDrawerOpenAtom);

  const [title, setTitle] = useState("00-00의 발도장");
  const [content, setContent] = useState("");

  const handleClickSaveButton = () => {
    if (title) {
      handleSave(title, content);
    } else {
      showToast({ message: "제목을 입력해주세요.", type: "error" });
    }
  };
  return (
    <>
      {drawerState && (
        <div
          role="presentation"
          onClick={() => setDrawerState(false)}
          className={overlayStyles}
        />
      )}
      <div
        className={cx(
          drawerSectionBaseStyles,
          drawerState && drawerSectionOpenStyles,
        )}
      >
        <div className={drawerStyles}>
          <Typography.H3>발도장을 찍을까요?</Typography.H3>
          <div className={subTextStyles}>
            <Typography.SpanCaption>
              발도장 사진은 지금만 찍을 수 있고
              <br />
              내용은 산책 종료 후에도 수정할 수 있어요.
            </Typography.SpanCaption>
          </div>
          <div className={contentBoxStyles}>
            <button
              type="button"
              className={pictureBoxStyles}
              onClick={() => alert("사진 추가 기능은 준비중입니다.")}
            >
              <CameraIcon fill="#999" />
            </button>
            <div className={infoBoxStyles}>
              <label htmlFor="title" className={labelStyles}>
                <input
                  className={titleStyles}
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <PenIcon fill="#999" />
              </label>
              <textarea
                className={contentStyles}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
          </div>
          <button
            type="button"
            className={closeButtonStyles}
            onClick={() => setDrawerState(false)}
          >
            <CloseIcon fill="#333" />
          </button>
          <div className={buttonBoxStyles}>
            <Button
              size="large"
              color="oddu_green01"
              handleClick={handleClickSaveButton}
            >
              발도장 찍기
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FootprintDrawer;
