import { prisma } from "@/utils/prisma";

export async function findUserByEmail(email) {
  return await prisma.user.findUnique({
    where: { email: email },
  });
}
