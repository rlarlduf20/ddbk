import { SessionProvider } from "next-auth/react";

import "../globals.css";
import NavBar from "../_components/NavBar";

import { auth } from "@/auth";
import ReactQueryProvider from "@/ReactQueryProvider";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <ReactQueryProvider>
        <html lang="ko">
          <body>
            <NavBar />
            <main>{children}</main>
          </body>
        </html>
      </ReactQueryProvider>
    </SessionProvider>
  );
}
