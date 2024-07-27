export default function Layout({ children }) {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="w-[256px] rounded-lg">{children}</div>
    </main>
  );
}
