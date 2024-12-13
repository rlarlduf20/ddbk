import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";

import "../globals.css";
import { auth } from "@/auth";

import "react-toastify/dist/ReactToastify.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="ko">
        <body>
          {children}
          <ToastContainer />
        </body>
      </html>
    </SessionProvider>
  );
}
