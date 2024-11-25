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
        { error: "newNickname are required." },
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
      { error: "Failed to update nickname." },
      { status: 500 },
    );
  }
}
