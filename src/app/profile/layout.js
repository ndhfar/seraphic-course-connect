import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function layout({ children }) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <main className="min-h-screen flex justify-center items-center mt-12">
        <div className="w-[384px] p-8 sm:p-0">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
