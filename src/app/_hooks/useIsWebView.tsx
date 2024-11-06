"use client";

import { useEffect, useState } from "react";

const useIsWebView = () => {
  const [isWebView, setIsWebView] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.ReactNativeWebView) {
      setIsWebView(true);
    }
  }, []);

  return {
    isWebView,
  };
};

export default useIsWebView;
