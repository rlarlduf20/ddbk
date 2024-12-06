import Image from "next/image";

import { css } from "../../../../styled-system/css";
import { vstack } from "../../../../styled-system/patterns";

import Logo from "@/assets/images/logo-1st.png";

const idLoginContainerStyles = vstack({
  mt: "131px",
  gap: "93px",
});

const formStyles = vstack({
  gap: "20px",
});

const inputStyles = css({
  outline: "none",
  border: "1px solid",
  borderColor: "oddu_black03",
  borderRadius: "30px",
  p: "16px 0 16px 20px",
  width: "335px",
});

const IDLoginPage = () => {
  return (
    <div className={idLoginContainerStyles}>
      <Image src={Logo} alt="logo" width={200} height={100} />
      <form className={formStyles}>
        <input placeholder="아이디를 입력해주세요." className={inputStyles} />
        <input placeholder="비밀번호를 입력해주세요." className={inputStyles} />
      </form>
    </div>
  );
};

export default IDLoginPage;
