import type { TreeNode } from "@/components/directory-tree";

export type LsEntry =
  | { type: "dir"; name: string }
  | { type: "file"; name: string; href: string; /** Style as directory (color + trailing /) */ displayAsDir?: boolean };

/**
 * Flatten directory tree nodes into ls -lah style entries:
 * directory first (with trailing /), then its file/link children.
 */
export function treeNodesToLsEntries(
  pagesNodes: TreeNode[],
  projectsNodes: TreeNode[]
): LsEntry[] {
  const entries: LsEntry[] = [];

  for (const node of pagesNodes) {
    if (node.type === "folder") {
      entries.push({ type: "dir", name: node.name });
      for (const child of node.children) {
        if (child.type === "app" && child.href) {
          entries.push({ type: "file", name: child.name, href: child.href });
        }
      }
    }
  }

  for (const node of projectsNodes) {
    if (node.type === "folder") {
      entries.push({ type: "dir", name: node.name });
      for (const child of node.children) {
        if (child.type === "app" && child.href) {
          entries.push({ type: "file", name: child.name, href: child.href, displayAsDir: true });
        }
      }
    }
  }

  return entries;
}

export type LsSection = {
  cdCommand: string;
  entries: LsEntry[];
};

/**
 * Build two ls "sections" as if user ran: cd ~/pages → ls -l, then cd ~/projects → ls -l.
 * Each section contains only the file/link entries (no . or ..).
 */
export function treeNodesToLsSections(
  pagesNodes: TreeNode[],
  projectsNodes: TreeNode[]
): LsSection[] {
  const sections: LsSection[] = [];

  for (const node of pagesNodes) {
    if (node.type === "folder") {
      const entries: LsEntry[] = [];
      for (const child of node.children) {
        if (child.type === "app" && child.href) {
          entries.push({ type: "file", name: child.name, href: child.href });
        }
      }
      sections.push({ cdCommand: "cd pages", entries });
      break;
    }
  }

  for (const node of projectsNodes) {
    if (node.type === "folder") {
      const entries: LsEntry[] = [];
      for (const child of node.children) {
        if (child.type === "app" && child.href) {
          entries.push({ type: "file", name: child.name, href: child.href, displayAsDir: true });
        }
      }
      sections.push({ cdCommand: "cd ../projects", entries });
      break;
    }
  }

  return sections;
}

/** Fake "size" for ls -lh: human-readable (e.g. 4.0K). */
export function lsEntrySize(entry: LsEntry): string {
  return "4.0K";
}

/** Fake link count for ls -l (1 for files, 5 for dirs). */
export function lsEntryNlink(entry: LsEntry): string {
  if (entry.type === "dir" || (entry.type === "file" && entry.displayAsDir)) return "5";
  return "1";
}

/** Fake date for ls -l (e.g. "Feb 24 18:18"). */
export function lsEntryDate(): string {
  const d = new Date();
  const mon = d.toLocaleString("en", { month: "short" });
  const day = d.getDate();
  const time = d.toLocaleTimeString("en", { hour: "2-digit", minute: "2-digit", hour12: false });
  return `${mon} ${day} ${time}`;
}
