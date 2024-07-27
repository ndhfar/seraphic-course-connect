import { prisma } from '@/utils/prisma';

export const Avatar = async ({ user }) => {
  const userData = await prisma.user.findFirst({
    where: {
      id: user.id,
    },
  });

  console.log(userData.id);

  return (
    <div
      tabIndex={0}
      role="button"
      className="btn btn-sm btn-circle avatar btn-primary"
    >
      {userData.fullName.charAt(0)}
    </div>
  );
};
