import { atom } from "jotai";

// 인증 관련-추후 파일 분리
export const loginIdAtom = atom("");
export const passwordAtom = atom("");

export const isLoginFormValidAtom = atom((get) => {
  const loginId = get(loginIdAtom).trim();
  const password = get(passwordAtom).trim();
  return loginId !== "" && password !== "";
});

// 산책 관련-추후 파일 분리
export const isDrawerOpenAtom = atom(false);
