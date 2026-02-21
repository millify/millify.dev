import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-slate-100">
      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(251,191,36,0.12),transparent)]"
        aria-hidden
      />
      <div className="relative text-center">
        <h1 className="mb-4 text-2xl font-semibold text-white md:text-3xl">
          millify.dev
        </h1>
        <p className="mb-8 text-slate-400">
          Full-stack developer portfolio
        </p>
        <Link
          href="/me"
          className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 font-medium text-slate-900 transition-colors hover:bg-amber-400"
        >
          View portfolio
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
