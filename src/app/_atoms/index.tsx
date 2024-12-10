import { atom } from "jotai";

export const loginIdAtom = atom("");
export const passwordAtom = atom("");

export const isLoginFormValidAtom = atom((get) => {
  const loginId = get(loginIdAtom).trim();
  const password = get(passwordAtom).trim();
  return loginId !== "" && password !== "";
});
