import { auth } from "@/libs/auth";
import { prisma } from "@/utils/prisma";

export default async function page() {
  const user = await auth();

  const userData = await prisma.user.findFirst({
    where: {
      id: user.id,
    },
  });

  return (
    <div>
      <h1 className="text-3xl font-bold">Edit Profile</h1>
      <form className="flex flex-col mt-4 space-y-3">
        <InputTemplate
          title="Full Name"
          type="text"
          name="fullName"
          defaultValue={userData?.fullName}
        />
        <InputTemplate
          title="Email"
          type="email"
          name="email"
          defaultValue={userData?.email}
        />

        <InputTemplate
          title="Phone Number"
          type="tel"
          name="contact"
          defaultValue={userData?.contact}
        />
        <div className="flex flex-col">
          <label className="font-medium text-[#858585] text-sm">Role</label>
          <select
            className="w-full select select-sm select-accent select-bordered text-sm"
            name="role"
            defaultValue={userData?.role}
          >
            <option>Author</option>
            <option>Participant</option>
          </select>
        </div>
        <div className="flex">
          <button className="ml-auto btn btn-primary btn-sm">Save</button>
        </div>
      </form>
    </div>
  );
}

const InputTemplate = ({ title, type, name, defaultValue }) => {
  return (
    <div className="flex flex-col">
      <label className="font-medium text-[#858585] text-sm">{title}</label>
      <input
        type={type}
        name={name}
        placeholder={title}
        className="w-full input input-sm input-accent input-bordered"
        defaultValue={defaultValue}
      />
    </div>
  );
};
