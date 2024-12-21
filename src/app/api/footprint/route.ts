import { NextResponse } from "next/server";

import { FootprintType } from "@/app/_types/footprint";
import { auth } from "@/auth";
import { prisma } from "@/prisma";

export async function GET() {
  try {
    const session = await auth();

    if (!session) return NextResponse.json([]);
    // Prisma를 사용하여 footprints 조회
    const userWithFootprints = await prisma.user.findUnique({
      where: { id: session?.user?.id },
      include: { footprints: true },
    });

    if (!userWithFootprints) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(userWithFootprints.footprints);
  } catch {
    return NextResponse.json(
      { message: "Failed to fetch footprints" },
      { status: 500 },
    );
  }
}
export async function POST(req: Request) {
  try {
    const session = await auth();
    const { footprints } = await req.json();

    if (!Array.isArray(footprints)) {
      return NextResponse.json(
        { message: "발자국을 저장하는데 필요한 정보가 포함되지 않았습니다." },
        { status: 400 },
      );
    }

    const createdFootprints = await Promise.all(
      footprints.map((footprint: FootprintType) =>
        prisma.footprint.create({
          data: {
            title: footprint.title,
            latitude: footprint.latitude,
            longitude: footprint.longitude,
            content: footprint.content,
            user: {
              connect: { id: session?.user?.id },
            },
          },
        }),
      ),
    );

    return NextResponse.json(createdFootprints, { status: 201 });
  } catch {
    return NextResponse.json(
      { message: "발자국 찍기에 실패했습니다." },
      { status: 500 },
    );
  }
}
