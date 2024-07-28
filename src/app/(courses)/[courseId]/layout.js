import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <main className="h-[100%-295px]">{children}</main>
      <Footer />
    </div>
  );
}
