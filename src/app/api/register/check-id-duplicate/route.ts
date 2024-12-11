import { NextResponse } from "next/server";

import { checkIdDuplicated } from "@/app/_actions/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { loginId } = body;

    if (!loginId) {
      return NextResponse.json(
        { error: "loginId is required." },
        { status: 400 },
      );
    }

    const res = await checkIdDuplicated(loginId);

    return NextResponse.json({ success: true, isDuplicated: res });
  } catch {
    return NextResponse.json(
      { error: "Failed to check loginId" },
      { status: 500 },
    );
  }
}
