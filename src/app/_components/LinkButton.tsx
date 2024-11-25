"use client";

import { useRouter } from "next/navigation";

interface Props {
  children: React.ReactNode;
  href: string;
}

const LinkButton = ({ children, href }: Props) => {
  const router = useRouter();

  const sendRouterEvent = () => {
    if (window !== undefined && window.ReactNativeWebView) {
      window.ReactNativeWebView(JSON.stringify({ type: "ROUTER_EVENT", href }));
      return;
    }
    router.push(href);
  };

  return (
    <button type="button" onClick={sendRouterEvent}>
      {children}
    </button>
  );
};

export default LinkButton;
