"use client";

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
      <div style={{ padding: "100px" }}>리뷰~!</div>
      <button
        type="button"
        onClick={handleClickReviewBtn}
        style={{
          margin: "20px",
          position: "fixed",
          left: 50,
          top: 50,
          zIndex: 1000,
          backgroundColor: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        산책 끝
      </button>
    </>
  );
};

export default Review;
