"use client";

import { useRouter } from "next/navigation";

import { css } from "../../../../styled-system/css";

import Button from "@/app/_components/Button";

const registerButtonBoxStyles = css({
  mt: "132px",
});

const NavRegisterButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/id-login/register");
  };

  return (
    <div className={registerButtonBoxStyles}>
      <Button
        size="large"
        color="oddu_green01"
        outline
        handleClick={handleClick}
      >
        계정이 없다면? 회원가입
      </Button>
    </div>
  );
};

export default NavRegisterButton;
