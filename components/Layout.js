export default function Layout({ children, className }) {
  return (
    <>
      <div
        className={`${className} bg-slate-100 h-screen flex items-center justify-center select-none`}
      >
        <main className="bg-white w-full h-full lg:h-5/6 lg:w-4/5 shadow-2xl overflow-auto rounded-2xl">
          {children}
        </main>
      </div>
    </>
  );
}
