"use client";

import { useRouter } from "next/navigation";

interface Props {
  children: React.ReactNode;
  path: string;
}

const LinkButton = ({ children, path }: Props) => {
  const router = useRouter();

  const sendRouterEvent = () => {
    if (window !== undefined && window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ type: "STACK_NAVIGATION", path }),
      );
      return;
    }
    if (path === "back") router.back();
    else router.push(path);
  };

  return (
    <button type="button" onClick={sendRouterEvent}>
      {children}
    </button>
  );
};

export default LinkButton;
