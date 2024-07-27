import { prisma } from '@/utils/prisma';

export async function DeleteCourseAction(courseId) {
  try {
    // await prisma.feedback.deleteMany({
    //   where: { courseId: courseId },
    // });

    await prisma.course.delete({
      where: {
        id: courseId,
      },
    });

    return {
      success: true,
      message: 'Course deleted successfully.',
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: 'Failed to delete the course.',
    };
  }
}
