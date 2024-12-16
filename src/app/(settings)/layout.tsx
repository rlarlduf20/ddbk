import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";

import "../globals.css";
import "react-toastify/dist/ReactToastify.css";

import { auth } from "@/auth";

export default async function RouteCollectionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="ko">
        <body>
          <main>
            {children}
            <ToastContainer />
          </main>
        </body>
      </html>
    </SessionProvider>
  );
}
