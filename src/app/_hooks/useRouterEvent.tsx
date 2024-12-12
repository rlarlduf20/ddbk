import { useRouter } from "next/navigation";

interface RouterType {
  path?: string;
  method?: "navigate" | "back" | "reset";
}

const useRouterEvent = () => {
  const router = useRouter();

  const push = ({ path = "/", method = "navigate" }: RouterType) => {
    if (typeof window !== "undefined" && window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ type: "STACK_NAVIGATION", path, method }),
      );
    } else {
      switch (method) {
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
