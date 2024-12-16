import { NextResponse } from "next/server";

import { auth } from "@/auth";
import { prisma } from "@/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { newNickname } = body;

    const session = await auth();

    if (!newNickname) {
      return NextResponse.json(
        { error: "새로운 닉네임 입력이 필요합니다." },
        { status: 400 },
      );
    }

    const user = await prisma.user.update({
      where: { id: session?.user?.id },
      data: { name: newNickname },
    });

    return NextResponse.json({ success: true, user });
  } catch {
    return NextResponse.json(
      { error: "닉네임 변경에 실패했습니다." },
      { status: 500 },
    );
  }
}
