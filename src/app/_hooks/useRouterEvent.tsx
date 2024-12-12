import { useRouter } from "next/navigation";

interface Props {
  path: string;
  method: "navigate" | "back" | "reset";
}

const useRouterEvent = ({ path = "/", method = "navigate" }: Props) => {
  const router = useRouter();

  const push = () => {
    if (typeof window !== "undefined" && window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ type: "STACK_NAVIGATION", path, method }),
      );
    } else {
      switch (path) {
        case "back": {
          router.back();
          break;
        }
        case "reset": {
          router.push(path);
          break;
        }
        default: {
          router.push(path);
        }
      }
    }
  };

  return { push };
};

export default useRouterEvent;
