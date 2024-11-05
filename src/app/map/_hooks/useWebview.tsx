"use client";

import { useEffect, useRef } from "react";

const useWebView = () => {
  const isWebViewRef = useRef(false);

  useEffect(() => {
    if (isWebViewRef.current) return;

    if (typeof window !== "undefined" && window.ReactNativeWebView) {
      isWebViewRef.current = true;
    }
  }, []);

  return {
    isWebView: isWebViewRef.current,
  };
};

export default useWebView;
