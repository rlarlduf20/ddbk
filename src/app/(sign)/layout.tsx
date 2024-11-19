import { SessionProvider } from "next-auth/react";

import "../globals.css";
import { auth } from "@/auth";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="ko">
        <body>{children}</body>
      </html>
    </SessionProvider>
  );
}