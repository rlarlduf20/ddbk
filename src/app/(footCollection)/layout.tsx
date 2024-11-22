import { SessionProvider } from "next-auth/react";

import "../globals.css";
import NavBar from "../_components/NavBar";

import { auth } from "@/auth";

export default async function FootPrintCollectionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="ko">
        <body>
          <NavBar />
          <main>{children}</main>
        </body>
      </html>
    </SessionProvider>
  );
}
