import { auth } from "@/libs/auth";
import { findUserById } from "@/services/profile.service";
import { FormEditProfile } from "./components/form-edit";

export default async function page() {
  const user = await auth();
  const userData = await findUserById(user);

  return (
    <div>
      <h1 className="text-3xl font-bold">Edit Profile</h1>
      <FormEditProfile userData={userData} />
    </div>
  );
}
