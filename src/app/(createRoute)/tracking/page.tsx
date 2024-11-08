"use client";

const Tracking = () => {
  const handleClickFinishBtn = () => {
    if (typeof window !== "undefined" && window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ type: "STACK_REVIEW" }),
      );
      return;
    }
    alert("산책 끝은 앱에서 사용할 수 있습니다.");
  };
  return (
    <>
      <div style={{ padding: "100px" }}>산책중~~!</div>
      <button
        type="button"
        onClick={handleClickFinishBtn}
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

export default Tracking;
