import { Select } from "@/components/select";

export default function page() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Edit Profile</h1>
      <form className="flex flex-col">
        <div className="flex mt-4 gap-10">
          <div className="space-y-2 flex-1">
            <InputTemplate title="Full Name" type="text" name="fullName" />
            <InputTemplate title="Email" type="email" name="email" />
            <InputTemplate title="Password" type="password" name="password" />
          </div>
          <div className="space-y-2 flex-1">
            <InputTemplate title="Phone Number" type="tel" name="contact" />
            <Select />
          </div>
        </div>
        <div className="flex">
          <button className="ml-auto btn btn-primary btn-sm">Save</button>
        </div>
      </form>
    </div>
  );
}

const InputTemplate = ({ title, type, name }) => {
  return (
    <div className="flex flex-col">
      <label className="font-medium text-[#858585] text-sm">{title}</label>
      <input
        type={type}
        name={name}
        placeholder={title}
        className="w-full input input-sm input-accent input-bordered"
      />
    </div>
  );
};
