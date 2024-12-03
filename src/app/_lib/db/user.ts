import { prisma } from "@/prisma";

export const getUser = async (userId: string | undefined) => {
  if (!userId) return null;

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { name: true },
  });

  return user;
};
