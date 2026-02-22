import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import {
  profile,
  experience,
  projects,
  skillsByCategory,
  education,
  interests,
  languages,
} from "@/lib/portfolio-data";
import { Card, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { StarTrekPopup } from "./star-trek-popup";
import { CollapsibleSection } from "./collapsible-section";
import { SquareLogo } from "@/components/square-logo";

export const metadata: Metadata = {
  title: "Hrvoje Mlinarević | Full-Stack Developer",
  description: profile.bio,
};

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 sm:scroll-mt-24">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Decorative gradient */}
      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(184,168,138,0.06),transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-2xl px-4 py-10 pt-[max(2.5rem,env(safe-area-inset-top))] pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:px-6 sm:py-12 md:px-8 md:py-16">
        {/* Header / Hero */}
        <header id="top" className="mb-10 sm:mb-12 md:mb-16 scroll-mt-20">
          <nav className="mb-8 flex items-center gap-4 text-base text-muted-foreground sm:mb-10">
            <Link
              href="/"
              className="min-h-[44px] min-w-[44px] -m-2 flex items-center justify-center rounded p-2 transition-colors hover:text-primary"
            >
              millify.dev
            </Link>
            <span className="text-muted-foreground/60">/</span>
            <span className="text-foreground">me</span>
          </nav>

          <h1 className="mb-1.5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {profile.name}
          </h1>
          <p className="mb-3 text-base text-primary sm:text-lg">{profile.title}</p>
          <p className="mb-4 max-w-xl text-base text-muted-foreground">{profile.tagline}</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 self-start rounded-full bg-primary px-5 py-3 font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90 sm:py-2.5 sm:min-h-0"
            >
              <Mail className="size-5" aria-hidden />
              {profile.email}
            </a>
          </div>
        </header>

        <main className="space-y-10 md:space-y-12">
          {/* About */}
          {/* <Section id="about" title="About">
            <p className="leading-relaxed text-muted-foreground">{profile.bio}</p>
          </Section> */}

          {/* Experience */}
          <CollapsibleSection id="experience" title="Experience" defaultOpen={false}>
            <ul className="space-y-6 sm:space-y-8">
              {experience.map((job) => (
                <li key={job.company} className="border-l-2 border-border pl-4">
                  <div className="mb-1 flex flex-wrap items-baseline gap-2">
                    <h3 className="text-base font-semibold text-foreground">{job.company}</h3>
                    <span className="text-sm text-muted-foreground/80">·</span>
                    <span className="text-base text-primary">{job.role}</span>
                  </div>
                  <p className="mb-2 text-base text-muted-foreground">{job.description}</p>
                  <p className="mb-3 text-sm text-muted-foreground/80">
                    {job.period} · {job.location}
                  </p>
                  <div className="mb-3 flex flex-wrap gap-2">
                    {job.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="rounded-md border-0 bg-secondary/80 px-2 py-0.5 font-mono text-sm text-muted-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <ul className="list-inside list-disc space-y-1 text-base text-muted-foreground">
                    {job.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </CollapsibleSection>

          {/* Projects */}
          <Section id="projects" title="Projects">
            <ul className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {projects.map((project) => {
                const url = "url" in project ? project.url : undefined;
                const isInternal = url?.startsWith("/");
                const gridClass =
                  project.name === "Session Timer" ? "sm:col-span-2" : "sm:col-span-1";
                const cardClassName = url
                  ? "border-border bg-card/50 transition-colors hover:border-primary/30 hover:bg-card/80 cursor-pointer"
                  : "border-border bg-card/50 transition-colors hover:border-primary/30";

                const card = (
                  <Card className={cardClassName}>
                    <CardHeader className="flex flex-row items-center justify-center gap-3 px-4 pb-2 sm:px-6">
                      {project.logoSymbol === "square" ? (
                        <div className="size-7 shrink-0 flex items-center justify-center text-foreground">
                          <SquareLogo className="size-5" />
                        </div>
                      ) : project.logo ? (
                        <Image
                          src={project.logo}
                          alt=""
                          width={28}
                          height={28}
                          className="size-7 shrink-0 rounded object-contain"
                        />
                      ) : null}
                      <h3 className="text-base font-medium text-foreground">{project.name}</h3>
                    </CardHeader>
                  </Card>
                );

                if (isInternal && url) {
                  return (
                    <Link
                      key={project.name}
                      href={url}
                      className={gridClass}
                    >
                      {card}
                    </Link>
                  );
                }
                if (url) {
                  return (
                    <a
                      key={project.name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={gridClass}
                    >
                      {card}
                    </a>
                  );
                }
                return (
                  <div key={project.name} className={gridClass}>
                    {card}
                  </div>
                );
              })}
            </ul>
          </Section>

          {/* Education */}
          <Section id="education" title="Education">
            <div className="space-y-4">
                <p className="leading-relaxed text-base text-muted-foreground">
                  {education.selfTaught.intro}
                </p>
            </div>
          </Section>

          {/* Skills */}
          <Section id="skills" title="Technologies">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-muted/20 p-4">
                <span className="mb-3 block text-sm font-semibold uppercase tracking-wider text-primary">
                  Frontend
                </span>
                <div className="flex flex-wrap justify-start gap-2">
                  {skillsByCategory.frontend.map((tech) => (
                    <Tooltip key={tech.name}>
                      <TooltipTrigger asChild>
                        <button
                          type="button"
                          className="flex flex-col items-center transition-transform hover:scale-105 border-0 bg-transparent p-0 cursor-default"
                        >
                          <div className="flex size-11 items-center justify-center rounded-xl border border-border/80 bg-background/80 p-2.5 shadow-sm transition-all hover:border-primary/30">
                            <img
                              src={tech.icon}
                              alt=""
                              className="size-5 object-contain"
                            />
                          </div>
                        </button>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">{tech.name}</TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </div>
              <div className="min-w-0 rounded-xl border border-border bg-muted/20 p-4">
                <span className="mb-3 block text-sm font-semibold uppercase tracking-wider text-primary">
                  Backend
                </span>
                <div className="flex flex-wrap justify-start gap-2">
                  {skillsByCategory.backend.map((tech) => (
                    <Tooltip key={tech.name}>
                      <TooltipTrigger asChild>
                        <button
                          type="button"
                          className="flex shrink-0 flex-col items-center transition-transform hover:scale-105 border-0 bg-transparent p-0 cursor-default"
                        >
                          <div className="flex size-10 items-center justify-center rounded-lg border border-border/80 bg-background/80 p-2 shadow-sm transition-all hover:border-primary/30">
                            <img
                              src={tech.icon}
                              alt=""
                              className="size-5 object-contain"
                            />
                          </div>
                        </button>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">{tech.name}</TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* Interests & Languages */}
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <Section id="interests" title="Interests">
              <p className="text-base text-muted-foreground">
                {interests.join(" · ")}
              </p>
            </Section>
            <Section id="languages" title="Languages">
              <ul className="space-y-1.5">
                {languages.map((lang) => (
                  <li key={lang.name} className="text-base text-muted-foreground">
                    <span className="text-foreground">{lang.name}</span>
                    <span className="text-muted-foreground/80"> — {lang.level}</span>
                  </li>
                ))}
              </ul>
            </Section>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-16 rounded-xl border border-border bg-muted/40 px-4 py-8 md:mt-20 md:px-6 md:py-10">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:flex-wrap sm:justify-between sm:gap-4 sm:text-left">
            <div>
              <Link
                href="/"
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                millify.dev
              </Link>
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
            >
              <Mail className="size-4" aria-hidden />
              Get in touch
            </a>
          </div>
          <div className="mt-4 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-4 text-xs text-muted-foreground sm:flex-row">
            <span>© {new Date().getFullYear()} Hrvoje Mlinarević</span>
            <span>
              <StarTrekPopup />
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
