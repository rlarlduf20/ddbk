"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { css } from "../../../../styled-system/css";
import { hstack, vstack } from "../../../../styled-system/patterns";

import { logIn } from "@/app/_actions/auth";
import KakaoSymbol from "@/assets/images/kakao-symbol.png";
import Logo from "@/assets/images/logo-1st.png";

const signContainerStyles = vstack({
  width: "100%",
  mt: "256px",
  gap: "147px",
  justifyContent: "center",
});

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

const LoginPage = () => {
  const router = useRouter();

  const handleLoginKakao = () => {
    logIn("kakao");
  };
  const handleLoginId = () => {
    router.push("/id-login");
  };

  return (
    <div className={signContainerStyles}>
      <Link href="/">
        <Image src={Logo} alt="로고" width={200} height={100} />
      </Link>
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
          <Image
            src={KakaoSymbol}
            alt="kakao_symbol"
            width={18}
            height={16.8}
          />
          <p>카카오로 로그인하기</p>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
