import AppBar from "@/app/_components/AppBar";
import LabelInput from "@/app/_components/LabelInput";
import { vstack } from "../../../../../styled-system/patterns";
import Button from "@/app/_components/Button";
import { css } from "../../../../../styled-system/css";

const formStyles = vstack({
  gap: "30px",
  mt: "31px",
});

const registerButtonBoxStyles = css({
  position: "absolute",
  bottom: "46px",
});

const IDRegisterPage = () => {
  return (
    <div>
      <AppBar>회원가입</AppBar>
      <form className={formStyles}>
        <LabelInput
          type="text"
          id="id"
          placeholder="아이디를 입력해주세요."
          label="아이디"
        />
        <LabelInput
          type="password"
          id="password"
          placeholder="비밀번호를 8자리 이상 입력해주세요."
          label="비밀번호"
        />
        <LabelInput
          type="password"
          id="passwordConfirm"
          placeholder="비밀번호를 한번 더 입력해주세요."
          label="비밀번호 확인"
        />
        <LabelInput
          type="text"
          id="nickname"
          placeholder="닉네임을 입력해주세요."
          label="닉네임"
        />
        <div className={registerButtonBoxStyles}>
          <Button size="large">회원가입</Button>
        </div>
      </form>
    </div>
  );
};

export default IDRegisterPage;
