export const startTracking = () => {
  if (typeof window !== "undefined" && window.ReactNativeWebView) {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({ type: "START_TRACKING" }),
    );
  }
};

export const stopTracking = () => {
  if (typeof window !== "undefined" && window.ReactNativeWebView) {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({ type: "STOP_TRACKING" }),
    );
  }
};
