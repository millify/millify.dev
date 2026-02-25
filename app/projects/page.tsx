import { Link } from "next-view-transitions";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="relative mx-auto max-w-2xl px-6 py-16 md:px-8 md:py-24">
        <nav className="mb-12 flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-primary">
            millify.dev
          </Link>
          <span className="text-muted-foreground/60">/</span>
          <span className="text-foreground">projects</span>
        </nav>
        <h1 className="mb-8 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Projects
        </h1>
        <ul className="space-y-4">
          <li>
            <Link
              href="/projects/sessions"
              className="text-primary underline-offset-4 transition-colors hover:underline"
            >
              /projects/sessions
            </Link>
          </li>
          <li>
            <Link
              href="/projects/crosswit"
              className="text-primary underline-offset-4 transition-colors hover:underline"
            >
              /projects/crosswit
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
