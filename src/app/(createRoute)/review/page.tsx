"use client";

import { css } from "../../../../styled-system/css";

import AppBar from "@/app/_components/AppBar";
import Button from "@/app/_components/Button";

const buttonBoxStyles = css({
  position: "absolute",
  bottom: "30px",
  left: "50%",
  transform: "translate(-50%, 0)",
});

const Review = () => {
  const handleClickReviewBtn = () => {
    if (typeof window !== "undefined" && window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ type: "COMPLETE_REVIEW" }),
      );
    }
  };
  return (
    <>
      <AppBar isBackPossible={false}>산책 종료</AppBar>
      <div className={buttonBoxStyles}>
        <Button
          size="large"
          color="oddu_green01"
          handleClick={handleClickReviewBtn}
        >
          종료
        </Button>
      </div>
    </>
  );
};

export default Review;
