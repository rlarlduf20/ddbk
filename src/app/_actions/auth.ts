"use server";

import { revalidatePath } from "next/cache";
// import { AuthError } from "next-auth";

import { signIn, signOut } from "@/auth";

export const logIn = async (provider: string) => {
  await signIn(provider, { redirectTo: "/" });
  revalidatePath("/");
};

export const logOut = async () => {
  await signOut({ redirectTo: "/" });
  revalidatePath("/");
};

export const loginWithCreds = async (formData: FormData) => {
  const rawFormData = {
    loginId: formData.get("loginId"),
    password: formData.get("password"),
    redirectTo: "/",
  };

  // try {
  await signIn("credentials", rawFormData);
  // } catch (error: any) {
  //   if (error instanceof AuthError) {
  //     switch (error.type) {
  //       case "CredentialsSignin": {
  //         return { error: "Invalid credentials!" };
  //       }
  //       default: {
  //         return { error: "Internal Server Error!" };
  //       }
  //     }
  //   }
  // }
  // return { error: "Unexpected error occurred!" };
};
