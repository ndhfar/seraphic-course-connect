import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <main className="h-[100%-295px] mt-16">{children}</main>
      <Footer />
    </div>
  );
}
