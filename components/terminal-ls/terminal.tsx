"use client";

import Link from "next/link";
import { MillifyLogo } from "@/components/millify-logo";
import { TerminalLsRow } from "./terminal-ls-row";
import {
  type LsEntry,
  type LsSection,
  lsEntryDisplayName,
  lsEntryIsDirStyle,
} from "@/lib/terminal-ls-data";

export interface TerminalProps {
  /** Single flat list (one ls output). Used when sections not provided. */
  entries?: LsEntry[];
  /** Multiple cd + ls sections (e.g. cd pages → ls, cd ../projects → ls). */
  sections?: LsSection[];
  /** Optional prompt line above first listing (e.g. "ls -lah") */
  prompt?: string;
  /** Optional title in the terminal header (e.g. "ssh user@host") */
  title?: string;
  /** When true, show plain `ls` output (names only, flex wrap) for small screens. */
  compact?: boolean;
}

const PROMPT = "~ ❯";
const DEFAULT_TITLE = "ssh root@millify.dev";
/** Same height for every terminal body line (commands, total, ls rows). */
const BODY_ROW_CLASS = "flex h-8 items-center";

export function Terminal({
  entries: entriesProp,
  sections: sectionsProp,
  prompt: promptProp,
  title = DEFAULT_TITLE,
  compact = false,
}: TerminalProps) {
  const hasSections = sectionsProp && sectionsProp.length > 0;
  const sections = hasSections
    ? sectionsProp!
    : entriesProp
      ? [{ cdCommand: "", entries: entriesProp }]
      : [];

  return (
    <div className="w-full max-w-[900px] overflow-hidden rounded-lg border border-border bg-muted/40 shadow-md">
      {/* Terminal header */}
      <div className="flex min-h-8 items-center justify-between gap-2 border-b border-border bg-muted/60 px-6 py-0">
        <div className="flex min-w-0 items-center gap-2">
          <span className="size-2.5 rounded-full bg-red-500/80 shrink-0" aria-hidden />
          <span className="size-2.5 rounded-full bg-amber-500/80 shrink-0" aria-hidden />
          <span className="size-2.5 rounded-full bg-emerald-500/80 shrink-0" aria-hidden />
          <span className="ml-2 font-mono text-xs text-muted-foreground truncate">{title}</span>
        </div>
        <div className="shrink-0 scale-[0.58] origin-right relative top-[-2px]">
          <MillifyLogo />
        </div>
      </div>

      {/* Terminal body */}
      <div className="overflow-x-auto py-4 font-mono text-sm">
        <div className={`px-6 ${compact ? "" : "min-w-max"}`}>
        {sections.map((section, sectionIndex) => {
          const showPrompt = section.cdCommand.length > 0;
          return (
            <div key={sectionIndex} className={sectionIndex > 0 ? "mt-0" : ""}>
              {showPrompt && (
                <div className={`${BODY_ROW_CLASS} gap-2 text-muted-foreground`}>
                  <span className="text-primary">{PROMPT}</span>
                  <span>{section.cdCommand}</span>
                </div>
              )}
              {showPrompt && (
                <div className={`${BODY_ROW_CLASS} gap-2 text-muted-foreground`}>
                  <span className="text-primary">{PROMPT}</span>
                  <span>{compact ? "ls" : "ls -lh"}</span>
                </div>
              )}
              {!showPrompt && promptProp != null && (
                <div className={`${BODY_ROW_CLASS} gap-2 text-muted-foreground`}>
                  <span className="text-primary">{PROMPT}</span>
                  <span>{promptProp}</span>
                </div>
              )}
              {compact ? (
                <div className="flex flex-wrap gap-x-2 gap-y-1 items-baseline">
                  {section.entries.map((entry, i) => {
                    const nameClass = lsEntryIsDirStyle(entry) ? "text-primary font-medium" : "text-foreground";
                    const name = lsEntryDisplayName(entry);
                    if (entry.type === "file") {
                      return (
                        <Link
                          key={`${sectionIndex}-${entry.name}-${i}`}
                          href={entry.href}
                          className={`${nameClass} hover:underline focus:outline-none focus:ring-2 focus:ring-primary/50 rounded`}
                        >
                          {name}
                        </Link>
                      );
                    }
                    return (
                      <span key={`${sectionIndex}-${entry.name}-${i}`} className={nameClass}>
                        {name}
                      </span>
                    );
                  })}
                </div>
              ) : (
                <>
                  <div className={`${BODY_ROW_CLASS} gap-3 text-muted-foreground`}>
                    <span className="shrink-0 tabular-nums">total 8.0K</span>
                  </div>
                  {section.entries.map((entry, i) => (
                    <TerminalLsRow
                      key={`${sectionIndex}-${entry.name}-${i}`}
                      entry={entry}
                    />
                  ))}
                </>
              )}
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}
