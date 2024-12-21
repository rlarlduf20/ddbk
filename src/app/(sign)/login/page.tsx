import Image from "next/image";
import Link from "next/link";

import { vstack } from "../../../../styled-system/patterns";
import LoginGroup from "../_components/LoginGroup";

import Logo from "@/assets/images/logo-1st.png";

const signContainerStyles = vstack({
  width: "100%",
  mt: "202px",
  gap: "147px",
  justifyContent: "center",
});

const LoginPage = () => {
  return (
    <div className={signContainerStyles}>
      <Link href="/">
        <Image src={Logo} alt="로고" width={200} height={100} />
      </Link>
      <LoginGroup />
    </div>
  );
};

export default LoginPage;
