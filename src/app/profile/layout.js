export default function layout({ children }) {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="w-[384px] p-8 sm:p-0">{children}</div>
    </main>
  );
}
