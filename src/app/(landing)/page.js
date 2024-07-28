import { Courses } from "./courses";
import React from "react";
import { CardSkeleton } from "./category/[categoryId]/page";

export default async function Page({ searchParams }) {
  return (
    <React.Suspense fallback={<CardSkeleton />}>
      <Courses query={searchParams.query} />
    </React.Suspense>
  );
}
