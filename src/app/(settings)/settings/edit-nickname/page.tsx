"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { css } from "../../../../../styled-system/css";
import { vstack } from "../../../../../styled-system/patterns";

import AppBar from "@/app/_components/AppBar";
import Button from "@/app/_components/Button";
import LabelInput from "@/app/_components/LabelInput";
import { editNickname } from "@/app/_lib/api-queryFn/user";
import { showToast } from "@/app/_lib/toast";

const settingStyles = css({
  width: "100vw",
});

const settingSectionStyles = css({
  width: "375px",
  px: "20px",
  margin: "0 auto",
});

const nicknameBoxStyles = vstack({
  mt: "26px",
});

const buttonBoxStyles = css({
  position: "absolute",
  bottom: "46px",
});

const EditNickNamePage = () => {
  const router = useRouter();

  const [nickname, setNickname] = useState<string>("");
  const isCorrectLength = nickname.length >= 2 && nickname.length <= 6;
  const handleChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleSubmitNickname = async () => {
    try {
      await editNickname(nickname);
      router.push("/settings");
    } catch (error: any) {
      showToast({ type: "error", message: error.message });
    }
  };

  return (
    <div className={settingStyles}>
      <AppBar stackPop={false}>닉네임 변경</AppBar>
      <section className={settingSectionStyles}>
        <div className={nicknameBoxStyles}>
          <LabelInput
            type="text"
            id="nickname"
            placeholder="아이디를 입력해주세요."
            label="닉네임"
            value={nickname}
            handleChange={handleChangeNickname}
            error={!isCorrectLength}
            errorText="닉네임은 2 ~ 6 글자로 변경 가능합니다."
          />
        </div>
        <div className={buttonBoxStyles}>
          <Button
            color={isCorrectLength ? "oddu_green01" : "oddu_black03"}
            size="large"
            type="submit"
            disabled={!isCorrectLength}
            handleClick={handleSubmitNickname}
          >
            확인
          </Button>
        </div>
      </section>
    </div>
  );
};

export default EditNickNamePage;
