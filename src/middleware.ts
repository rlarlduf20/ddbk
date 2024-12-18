import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { auth } from "./auth";

const withAuthRoutes = [
  "/mypage",
  "/friends",
  "/setting",
  // "/tracking",
  "/review",
];

const withOutAuthRoutes = ["/login", "/id-login"];

export default async function middleware(request: NextRequest) {
  const session = await auth();

  const isWithAuth = withAuthRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route),
  );

  const isWithOutAuth = withOutAuthRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route),
  );

  if (!session && isWithAuth) {
    const absoluteURL = new URL("/login", request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }

  if (session && isWithOutAuth) {
    const absoluteURL = new URL("/", request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }

  return NextResponse.next();
}
