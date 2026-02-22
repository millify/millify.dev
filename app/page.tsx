import { Link } from "next-view-transitions";
import { SpinningWindmill } from "@/components/windmill";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <div
        className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_bottom,rgba(184,168,138,0.06)_0%,transparent_40%,transparent_60%,rgba(184,168,138,0.04)_100%)]"
        aria-hidden
      />
      <div className="relative flex w-full flex-col items-center text-center">
        <div className="mb-4 flex items-baseline justify-center gap-0.5 md:mb-5">
          <SpinningWindmill size={1.5} />
          <span
            style={{
              fontFamily: 'var(--font-plus-jakarta), "Plus Jakarta Sans", sans-serif',
              fontWeight: 700,
              fontSize: "2rem",
              letterSpacing: "-0.02em",
              color: "var(--accent-champagne)",
            }}
          >
            millify
          </span>
        </div>
        <div className="mt-6 flex flex-col items-start gap-2 text-lg text-muted-foreground">
          <Link
            href="/me"
            className="underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            /me
          </Link>
          <Link
            href="/projects/sessions"
            className="underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            /sessions
          </Link>
        </div>
      </div>
    </div>
  );
}
