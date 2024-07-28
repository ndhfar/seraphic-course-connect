import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <main className="min-h-screen flex justify-center items-center">
        <div className="w-[256px] rounded-lg">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
