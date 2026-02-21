import type { Metadata } from "next";
import Link from "next/link";
import {
  profile,
  experience,
  projects,
  skills,
  education,
  interests,
  languages,
} from "@/lib/portfolio-data";

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
    <section id={id} className="scroll-mt-24">
      <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-amber-500">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Decorative gradient */}
      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(251,191,36,0.15),transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-2xl px-6 py-16 md:px-8 md:py-24">
        {/* Header / Hero */}
        <header className="mb-20">
          <nav className="mb-12 flex items-center gap-6 text-sm text-slate-400">
            <Link
              href="/"
              className="transition-colors hover:text-amber-400"
            >
              millify.dev
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-slate-200">me</span>
          </nav>

          <h1 className="mb-2 text-4xl font-bold tracking-tight text-white md:text-5xl">
            {profile.name}
          </h1>
          <p className="mb-4 text-xl text-amber-400">{profile.title}</p>
          <p className="mb-6 max-w-xl text-slate-400">{profile.tagline}</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-4 py-2 text-slate-300 transition-colors hover:border-amber-500/50 hover:text-amber-400"
            >
              {profile.email}
            </a>
            <span className="flex items-center text-slate-500">
              {profile.location}
            </span>
          </div>
        </header>

        <main className="space-y-16">
          {/* About */}
          <Section id="about" title="About">
            <p className="leading-relaxed text-slate-300">{profile.bio}</p>
          </Section>

          {/* Experience */}
          <Section id="experience" title="Experience">
            <ul className="space-y-10">
              {experience.map((job) => (
                <li key={job.company} className="border-l-2 border-slate-800 pl-6">
                  <div className="mb-1 flex flex-wrap items-baseline gap-2">
                    <h3 className="font-semibold text-white">{job.company}</h3>
                    <span className="text-sm text-slate-500">·</span>
                    <span className="text-sm text-amber-400">{job.role}</span>
                  </div>
                  <p className="mb-2 text-sm text-slate-400">{job.description}</p>
                  <p className="mb-3 text-xs text-slate-500">
                    {job.period} · {job.location}
                  </p>
                  <div className="mb-3 flex flex-wrap gap-2">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-slate-800/80 px-2 py-0.5 font-mono text-xs text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="list-inside list-disc space-y-1 text-sm text-slate-400">
                    {job.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </Section>

          {/* Projects */}
          <Section id="projects" title="Projects">
            <ul className="space-y-4">
              {projects.map((project) => (
                <li
                  key={project.name}
                  className="rounded-lg border border-slate-800 bg-slate-900/30 p-4 transition-colors hover:border-slate-700"
                >
                  <h3 className="font-medium text-white">{project.name}</h3>
                  <p className="text-sm text-slate-400">{project.description}</p>
                </li>
              ))}
            </ul>
          </Section>

          {/* Skills */}
          <Section id="skills" title="Technologies">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Section>

          {/* Education */}
          <Section id="education" title="Education">
            <div className="rounded-lg border border-slate-800 bg-slate-900/30 p-4">
              <h3 className="font-medium text-white">{education.school}</h3>
              <p className="text-slate-400">{education.degree}</p>
              <p className="text-sm text-slate-500">{education.period}</p>
            </div>
          </Section>

          {/* Interests & Languages */}
          <div className="grid gap-12 md:grid-cols-2">
            <Section id="interests" title="Interests">
              <p className="text-slate-400">
                {interests.join(" · ")}
              </p>
            </Section>
            <Section id="languages" title="Languages">
              <ul className="space-y-2">
                {languages.map((lang) => (
                  <li key={lang.name} className="text-slate-400">
                    <span className="text-white">{lang.name}</span>
                    <span className="text-slate-500"> — {lang.level}</span>
                  </li>
                ))}
              </ul>
            </Section>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-24 border-t border-slate-800 pt-12 text-center text-sm text-slate-500">
          <a
            href={`mailto:${profile.email}`}
            className="text-amber-500 transition-colors hover:text-amber-400"
          >
            Get in touch
          </a>
          {" · "}
          <span>Hrvoje Mlinarević © {new Date().getFullYear()}</span>
        </footer>
      </div>
    </div>
  );
}
