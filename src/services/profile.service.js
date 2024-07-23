import { prisma } from "@/utils/prisma";

export async function findUserById(user) {
  return await prisma.user.findFirst({
    where: {
      id: user.id,
    },
  });
}
