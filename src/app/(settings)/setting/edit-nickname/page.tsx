"use client";

import { useState } from "react";

import { css } from "../../../../../styled-system/css";
import { vstack } from "../../../../../styled-system/patterns";

const settingStyles = css({
  width: "100vw",
  px: "20px",
});

const settingSectionStyles = css({
  width: "375px",
  margin: "62px auto 0",
});

const nicknameBoxStyles = vstack({
  alignItems: "start",
});

const inputStyles = css({
  pl: "10px",
  border: "1px solid gray",
  borderRadius: "6px",
  width: "100%",
  py: "5px",
  mb: "150px",
  outline: "none",
});

const EditNickNamePage = () => {
  const [nickname, setNickname] = useState<string>("");

  const handleChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  const handleSubmitNickname = async () => {
    await fetch("/api/user/edit-nickname", {
      method: "POST",
      body: JSON.stringify({
        newNickname: nickname,
      }),
    });
  };

  return (
    <div className={settingStyles}>
      <section className={settingSectionStyles}>
        <div className={nicknameBoxStyles}>
          <label htmlFor="nickname">
            닉네임
            <input
              id="nickname"
              placeholder="닉네임을 입력해주세요."
              className={inputStyles}
              value={nickname}
              onChange={handleChangeNickname}
            />
          </label>
          <button type="button" onClick={handleSubmitNickname}>
            확인
          </button>
        </div>
      </section>
    </div>
  );
};

export default EditNickNamePage;
