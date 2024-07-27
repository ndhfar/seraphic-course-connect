'use server';

import { CourseCard } from '@/components/courseCard';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';
import { prisma } from '@/utils/prisma';

export default async function Page({ searchParams }) {
  // * Retrieve search query from URL
  const query = searchParams.query || '';

  // * Retrieve category filter from URL
  const categoryFilter = searchParams.category || null;

  // * Retrieve list of categories from the database
  const categories = await prisma.category.findMany();

  // * Get Courses with search filter and optional category filter
  const courses = await prisma.course.findMany({
    where: {
      title: {
        contains: query,
        mode: 'insensitive',
      },
      ...(categoryFilter ? { categoryId: categoryFilter } : {}),
    },
  });

  return (
    <div>
      <Header />

      <main className="flex flex-col lg:flex-row">
        <Sidebar
          categories={categories}
          selectedCategory={categoryFilter || ''}
        />

        <section className="lg:w-4/5 p-4 lg:p-8 mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.length === 0 ? (
              <p>No courses</p>
            ) : (
              courses.map((course) => (
                <CourseCard course={course} key={course.id} />
              ))
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
