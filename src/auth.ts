import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Kakao from "next-auth/providers/kakao";

import { prisma } from "./prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 30,
  },
  providers: [
    Kakao({
      clientId: process.env.AUTH_KAKAO_ID,
      clientSecret: process.env.AUTH_KAKAO_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }: any) {
      const tmp = session;
      if (token) {
        tmp.user.id = token.id;
      }
      return tmp;
    },
  },
});
