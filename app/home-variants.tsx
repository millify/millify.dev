"use client";

import Link from "next/link";
import { MillifyLogo } from "@/components/millify-logo";
import { DirectoryTree } from "@/components/directory-tree";
import { Terminal } from "@/components/terminal-ls";
import { treeNodesToLsSections } from "@/lib/terminal-ls-data";
import type { TreeNode } from "@/components/directory-tree";

const DESIGN_OPTIONS = [
  { value: "default", label: "Default" },
  { value: "terminal", label: "Terminal" },
  { value: "terminal-op", label: "Terminal ls" },
  { value: "cards", label: "Cards" },
  { value: "compact", label: "Compact" },
] as const;

export type DesignVariant = (typeof DESIGN_OPTIONS)[number]["value"];

export function DesignSwitcher({ current }: { current: DesignVariant }) {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-2 text-sm">
      {DESIGN_OPTIONS.map(({ value, label }) => (
        <Link
          key={value}
          href={value === "default" ? "/" : `/?design=${value}`}
          className={
            current === value
              ? "rounded-md bg-primary/15 px-3 py-1.5 font-medium text-primary"
              : "rounded-md px-3 py-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
          }
        >
          {label}
        </Link>
      ))}
    </div>
  );
}

/** Current layout: logo centered, two trees side by side. */
export function HomeDefault({
  pagesNodes,
  projectsNodes,
  defaultExpandedPagesIds,
  defaultExpandedProjectsIds,
}: HomeVariantsProps) {
  return (
    <div className="relative flex flex-col items-center gap-y-6">
      <MillifyLogo />
      <div className="flex min-h-48 justify-center gap-8 text-left">
        <div className="min-w-32">
          <DirectoryTree
            nodes={pagesNodes}
            defaultExpandedIds={defaultExpandedPagesIds}
          />
        </div>
        <div className="min-w-48">
          <DirectoryTree
            nodes={projectsNodes}
            defaultExpandedIds={defaultExpandedProjectsIds}
          />
        </div>
      </div>
    </div>
  );
}

/** Terminal-style: single panel, muted background, tighter typography. */
export function HomeTerminal({
  pagesNodes,
  projectsNodes,
  defaultExpandedPagesIds,
  defaultExpandedProjectsIds,
}: HomeVariantsProps) {
  return (
    <div className="relative flex flex-col items-center gap-y-4">
      <MillifyLogo />
      <div className="w-full max-w-md rounded-lg border border-border bg-muted/30 px-4 py-4 font-mono text-sm shadow-sm">
        <div className="mb-2 flex items-center gap-2 border-b border-border/60 pb-2 text-muted-foreground">
          <span className="size-2 rounded-full bg-muted-foreground/50" />
          <span className="size-2 rounded-full bg-muted-foreground/30" />
          <span className="size-2 rounded-full bg-muted-foreground/30" />
          <span className="ml-2 text-xs">millify.dev</span>
        </div>
        <div className="flex gap-6">
          <div className="min-w-0 flex-1">
            <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              pages
            </div>
            <DirectoryTree
              nodes={pagesNodes}
              defaultExpandedIds={defaultExpandedPagesIds}
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              projects
            </div>
            <DirectoryTree
              nodes={projectsNodes}
              defaultExpandedIds={defaultExpandedProjectsIds}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Two cards with titles; clear visual separation. */
export function HomeCards({
  pagesNodes,
  projectsNodes,
  defaultExpandedPagesIds,
  defaultExpandedProjectsIds,
}: HomeVariantsProps) {
  return (
    <div className="relative flex flex-col items-center gap-y-8">
      <MillifyLogo />
      <div className="flex flex-wrap justify-center gap-6">
        <div className="min-w-40 rounded-xl border border-border bg-card px-5 py-4 shadow-sm">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Pages
          </h2>
          <DirectoryTree
            nodes={pagesNodes}
            defaultExpandedIds={defaultExpandedPagesIds}
          />
        </div>
        <div className="min-w-40 rounded-xl border border-border bg-card px-5 py-4 shadow-sm">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Projects
          </h2>
          <DirectoryTree
            nodes={projectsNodes}
            defaultExpandedIds={defaultExpandedProjectsIds}
          />
        </div>
      </div>
    </div>
  );
}

/** Compact: logo and trees in one horizontal block, minimal spacing. */
export function HomeCompact({
  pagesNodes,
  projectsNodes,
  defaultExpandedPagesIds,
  defaultExpandedProjectsIds,
}: HomeVariantsProps) {
  return (
    <div className="relative flex flex-col items-center gap-y-4 sm:flex-row sm:items-start sm:gap-10">
      <div className="shrink-0">
        <MillifyLogo />
      </div>
      <div className="h-px w-12 shrink-0 bg-border sm:h-8 sm:w-px" aria-hidden />
      <div className="flex gap-8 text-left">
        <div className="min-w-28">
          <DirectoryTree
            nodes={pagesNodes}
            defaultExpandedIds={defaultExpandedPagesIds}
          />
        </div>
        <div className="min-w-28">
          <DirectoryTree
            nodes={projectsNodes}
            defaultExpandedIds={defaultExpandedProjectsIds}
          />
        </div>
      </div>
    </div>
  );
}

/** Terminal ls: simulate cd pages → ls, then cd ../projects → ls. */
export function HomeTerminalOp({
  pagesNodes,
  projectsNodes,
}: HomeVariantsProps) {
  const sections = treeNodesToLsSections(pagesNodes, projectsNodes);

  return (
    <div className="relative flex flex-col items-center gap-y-6">
      <MillifyLogo />
      <Terminal sections={sections} />
    </div>
  );
}

export interface HomeVariantsProps {
  pagesNodes: TreeNode[];
  projectsNodes: TreeNode[];
  defaultExpandedPagesIds: string[];
  defaultExpandedProjectsIds: string[];
}
