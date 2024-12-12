"use client";

import Image from "next/image";

import { css } from "../../../../styled-system/css";
import { hstack, vstack } from "../../../../styled-system/patterns";

import { logIn } from "@/app/_actions/auth";
import useRouterEvent from "@/app/_hooks/useRouterEvent";
import KakaoSymbol from "@/assets/images/kakao-symbol.png";

const signBoxStyles = vstack({
  gap: "17px",
});

const credentialButtonStyles = css({
  width: "335px",
  height: "52px",
  bgColor: "oddu_green01",
  borderRadius: "12px",
  color: "oddu_white01",
  cursor: "pointer",
  fontSize: "15px",
  fontWeight: 600,
});

const kakaoButtonStyles = hstack({
  width: "335px",
  height: "52px",
  bgColor: "#FEE500",
  borderRadius: "12px",
  cursor: "pointer",
  color: "rgba(0, 0, 0, 0.85)",
  fontSize: "15px",
  fontWeight: 600,
  gap: "8px",
  justifyContent: "center",
});

const LoginGroup = () => {
  const { push } = useRouterEvent();

  const handleLoginKakao = () => {
    logIn("kakao");
  };
  const handleLoginId = () => {
    push({ path: "/id-login" });
  };

  return (
    <div className={signBoxStyles}>
      <button
        type="button"
        className={credentialButtonStyles}
        onClick={handleLoginId}
      >
        아이디로 로그인하기
      </button>
      <button
        type="button"
        className={kakaoButtonStyles}
        onClick={handleLoginKakao}
      >
        <Image src={KakaoSymbol} alt="kakao_symbol" width={18} height={16.8} />
        <p>카카오로 로그인하기</p>
      </button>
    </div>
  );
};

export default LoginGroup;
