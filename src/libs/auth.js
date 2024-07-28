import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function auth() {
  const token = cookies().get("token")?.value;

  if (!token) {
    return;
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    return payload;
  } catch (_) {
    return;
  }
}
