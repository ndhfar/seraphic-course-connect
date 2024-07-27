import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { prisma } from "@/utils/prisma";
import React from "react";

export default async function Layout({ children }) {
  const categories = await prisma.category.findMany();

  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="h-[100vh-212px]">
        <Header />
        <main className="flex flex-col w-full lg:flex-row h-[100%-64px]">
          <Sidebar categories={categories} />
          <section className="lg:w-4/5 p-4 lg:p-8">{children}</section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
