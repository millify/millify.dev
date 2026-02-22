import { Link } from "next-view-transitions";

export default function SessionsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="relative mx-auto max-w-2xl px-6 py-16 md:px-8 md:py-24">
        <nav className="mb-12 flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-primary">
            millify.dev
          </Link>
          <span className="text-muted-foreground/60">/</span>
          <Link href="/projects" className="transition-colors hover:text-primary">
            projects
          </Link>
          <span className="text-muted-foreground/60">/</span>
          <span className="text-foreground">sessions</span>
        </nav>
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Sessions
        </h1>
        <p className="mt-4 text-muted-foreground">
          Coming soon.
        </p>
      </div>
    </div>
  );
}
