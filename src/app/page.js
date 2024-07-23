import { Header } from "@/components/header";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-xl font-semibold">
      <Header />
      <Link href="/register">register</Link>
      <Link href="/login">login</Link>
      <Link href="/profile">profile management</Link>
    </main>
  );
}
