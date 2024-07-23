import { Header } from "@/components/header";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-xl ">
      <Header />

      <Link href="/register">
        <p>register</p>
      </Link>
      <Link href="/login">
        <p>login</p>
      </Link>
      <Link href="/profile">
        <p>profile management</p>
      </Link>
    </main>
  );
}
