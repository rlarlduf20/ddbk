"use server";

import { revalidatePath } from "next/cache";

import { signIn, signOut } from "@/auth";

export const logIn = async (provider: string) => {
  await signIn(provider, { redirectTo: "/" });
  revalidatePath("/");
};

export const logOut = async () => {
  await signOut({ redirectTo: "/" });
  revalidatePath("/");
};
