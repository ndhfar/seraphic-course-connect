import bcrypt from "bcrypt";
import { prisma } from "@/utils/prisma";

export async function createUser({ fullName, email, password, contact, role }) {
  // * Create hash password
  const hashPassword = password ? await bcrypt.hash(password, 12) : null;

  // * Create user
  return await prisma.user.create({
    data: {
      fullName: fullName,
      email: email,
      password: hashPassword,
      contact: contact,
      role: role,
    },
  });
}
