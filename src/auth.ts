import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Kakao from "next-auth/providers/kakao";

// import { saltAndHashPassword } from "./app/_lib/hash";
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
    Credentials({
      name: "Credentials",
      credentials: {
        loginId: {},
        password: {},
      },
      authorize: async (credentials: any) => {
        if (!credentials || !credentials.loginId || !credentials.password) {
          return null;
        }

        const { loginId } = credentials;
        // const hash = saltAndHashPassword(credentials.password);

        const user = await prisma.user.findUnique({
          where: { loginId },
        });

        if (!user) {
          // user = await prisma.user.create({
          //   data: {
          //     loginId,
          //     password: hash,
          //   },
          // });
          throw new Error("존재하지 않는 아이디입니다.");
        } else {
          const isMatch = bcrypt.compareSync(
            credentials.password,
            user.password as string,
          );
          if (!isMatch) {
            throw new Error("비밀번호가 틀립니다.");
          }
        }

        return user;
      },
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
