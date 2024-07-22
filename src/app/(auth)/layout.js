export default function Layout({ children }) {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="w-[320px] p-8 rounded-lg">{children}</div>
    </main>
  );
}
