"use client";

import { useAtom } from "jotai";
import { useRouter } from "next/navigation";

import LoginButton from "./LoginButton";
import { vstack } from "../../../../styled-system/patterns";

import { loginWithCreds } from "@/app/_actions/auth";
import { loginIdAtom, passwordAtom } from "@/app/_atoms";
import LabelInput from "@/app/_components/LabelInput";

const formStyles = vstack({
  gap: "12px",
  m: "36px 0 10px",
});

const LoginForm = () => {
  const router = useRouter();

  const [loginId, setLoginId] = useAtom(loginIdAtom);
  const [password, setPassword] = useAtom(passwordAtom);

  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e?.currentTarget);
      await loginWithCreds(formData);

      //   TODO: 앱에서의 이동
      router.push("/");
    } catch {
      alert("로그인 정보를 다시 확인해주세요.");
    }
  };
  return (
    <form onSubmit={handleSumbit} className={formStyles}>
      <LabelInput
        type="text"
        id="loginId"
        name="loginId"
        placeholder="아이디를 입력해주세요."
        label="아이디"
        value={loginId}
        handleChange={(e) => setLoginId(e.target.value)}
      />
      <LabelInput
        type="password"
        id="password"
        name="password"
        placeholder="비밀번호를 입력해주세요."
        label="비밀번호"
        value={password}
        handleChange={(e) => setPassword(e.target.value)}
      />
      <LoginButton />
    </form>
  );
};

export default LoginForm;
