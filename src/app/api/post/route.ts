import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  await prisma.post.update({
    where: {
      id: 2,
    },
    data: {
      content: "hello",
    },
  });

  return Response.json("ok!");
}
