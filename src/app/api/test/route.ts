import { NextResponse } from "next/server";

import { auth } from "@/auth";

export async function GET() {
  const session = await auth();
  if (!session) {
    console.log("유효하지 않은 접근");
    return;
  }
  console.log(session);
  return NextResponse.json("hi");
}
