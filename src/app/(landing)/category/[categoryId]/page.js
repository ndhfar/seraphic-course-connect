import { prisma } from "@/utils/prisma";
import React from "react";
import { Courses } from "./course";

export const revalidate = 60;

export async function generateStaticParams() {
  const categories = await prisma.category.findMany();
  return categories.map((category) => ({
    categoryId: category.id,
  }));
}

export default async function Page({ params }) {
  return (
    <React.Suspense fallback={<CardSkeleton />}>
      <Courses categoryId={params.categoryId} />
    </React.Suspense>
  );
}

export const CardSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="card card-compact bg-slate-100 border border-slate-200 w-full h-[332px] animate-pulse"></div>
      <div className="card card-compact bg-slate-100 border border-slate-200 w-full h-[332px] animate-pulse"></div>
      <div className="card card-compact bg-slate-100 border border-slate-200 w-full h-[332px] animate-pulse"></div>
    </div>
  );
};
