"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { css } from "../../../../styled-system/css";
import { vstack } from "../../../../styled-system/patterns";

import { logIn } from "@/app/_actions/auth";
import Logo from "@/assets/images/logo-1st.png";

const signContainerStyles = vstack({
  width: "100%",
  mt: "256px",
  gap: "157px",
  justifyContent: "center",
});

const signBoxStyles = vstack({
  gap: "17px",
});

const credentialButtonStyles = css({
  width: "335px",
  height: "60px",
  bgColor: "oddu_green01",
  borderRadius: "12px",
  color: "oddu_white01",
  cursor: "pointer",
});

const kakaoButtonStyles = css({
  width: "335px",
  height: "60px",
  bgColor: "#FEE500",
  borderRadius: "12px",
  cursor: "pointer",
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
          카카오로 로그인하기
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
