import {
  lsEntrySize,
  lsEntryDate,
  lsEntryNlink,
  lsEntryDisplayName,
  lsEntryIsDirStyle,
} from "@/lib/terminal-ls-data";
import type { LsEntry } from "@/lib/terminal-ls-data";

const PERMS_DIR = "drwxrwxr-x";
const PERMS_FILE = "-rw-r--r--";
const FAKE_USER = "root";
const FAKE_GROUP = "millify";

const ROW_CLASS = "flex h-8 items-center gap-x-6 font-mono text-sm whitespace-nowrap";
const META_BASE = "shrink-0 text-muted-foreground";

function LsRowMetaCells({ entry, baseClass }: { entry: LsEntry; baseClass: string }) {
  const isDirStyle = lsEntryIsDirStyle(entry);
  const perms = isDirStyle ? PERMS_DIR : PERMS_FILE;
  const nlink = lsEntryNlink(entry);
  const size = lsEntrySize(entry);
  const date = lsEntryDate();
  return (
    <>
      <span className={`${baseClass} w-[10ch] tabular-nums`}>{perms}</span>
      <span className={`${baseClass} w-4 tabular-nums`}>{nlink}</span>
      <span className={`${baseClass} w-[7ch]`}>{FAKE_USER}</span>
      <span className={`${baseClass} w-[7ch]`}>{FAKE_GROUP}</span>
      <span className={`${baseClass} w-10 tabular-nums text-right`}>{size}</span>
      <span className={`${baseClass} w-24 tabular-nums`}>{date}</span>
    </>
  );
}

export function TerminalLsRow({ entry }: { entry: LsEntry }) {
  const nameClass = lsEntryIsDirStyle(entry) ? "text-primary font-medium" : "text-foreground";
  const displayName = lsEntryDisplayName(entry);
  const metaClass = `${META_BASE} group-hover:text-neutral-600`;

  if (entry.type === "file") {
    return (
      <a
        href={entry.href}
        className={`group ${ROW_CLASS} cursor-pointer rounded px-2 -mx-2 transition-colors duration-0 hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-muted/40`}
      >
        <LsRowMetaCells entry={entry} baseClass={metaClass} />
        <span className={`shrink-0 min-w-0 ${nameClass} group-hover:text-neutral-900 group-hover:font-medium`}>
          {displayName}
        </span>
      </a>
    );
  }

  return (
    <div className={`${ROW_CLASS} px-2`}>
      <LsRowMetaCells entry={entry} baseClass={META_BASE} />
      <span className={`shrink-0 min-w-0 ${nameClass}`}>{displayName}</span>
    </div>
  );
}
