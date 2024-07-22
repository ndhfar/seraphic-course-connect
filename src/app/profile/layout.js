export default function layout({ children }) {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="w-[672px]">{children}</div>
    </main>
  );
}
