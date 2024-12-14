import { NextResponse } from "next/server";

import { getUser } from "@/app/_actions/user";
import { auth } from "@/auth";

export async function GET() {
  try {
    const session = await auth();

    const user = await getUser(session?.user?.id);

    return NextResponse.json({ success: true, user });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
