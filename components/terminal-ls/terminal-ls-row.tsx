import { lsEntrySize, lsEntryDate, lsEntryNlink } from "@/lib/terminal-ls-data";
import type { LsEntry } from "@/lib/terminal-ls-data";

const PERMS_DIR = "drwxrwxr-x";
const PERMS_FILE = "-rw-r--r--";
const FAKE_USER = "root";
const FAKE_GROUP = "millify";

export function TerminalLsRow({ entry }: { entry: LsEntry }) {
  const isDirStyle = entry.type === "dir" || (entry.type === "file" && entry.displayAsDir);
  const perms = isDirStyle ? PERMS_DIR : PERMS_FILE;
  const nlink = lsEntryNlink(entry);
  const size = lsEntrySize(entry);
  const date = lsEntryDate();
  const displayName = isDirStyle ? `${entry.name}/` : entry.name;

  const nameClass = isDirStyle ? "text-primary font-medium" : "text-foreground";

  const rowClass = "flex h-8 items-center gap-x-6 font-mono text-sm whitespace-nowrap";

  const contentBase = "shrink-0 text-muted-foreground group-hover:text-neutral-600";
  const contentFile = (
    <>
      <span className={`${contentBase} w-[10ch] tabular-nums`}>{perms}</span>
      <span className={`${contentBase} w-4 tabular-nums`}>{nlink}</span>
      <span className={`${contentBase} w-[7ch]`}>{FAKE_USER}</span>
      <span className={`${contentBase} w-[7ch]`}>{FAKE_GROUP}</span>
      <span className={`${contentBase} w-10 tabular-nums text-right`}>{size}</span>
      <span className={`${contentBase} w-24 tabular-nums`}>{date}</span>
      <span className={`shrink-0 min-w-0 ${nameClass} group-hover:text-neutral-900 group-hover:font-medium`}>
        {displayName}
      </span>
    </>
  );

  const contentStatic = (
    <>
      <span className="text-muted-foreground shrink-0 w-[10ch] tabular-nums">{perms}</span>
      <span className="text-muted-foreground shrink-0 w-4 tabular-nums">{nlink}</span>
      <span className="text-muted-foreground shrink-0 w-[7ch]">{FAKE_USER}</span>
      <span className="text-muted-foreground shrink-0 w-[7ch]">{FAKE_GROUP}</span>
      <span className="text-muted-foreground shrink-0 w-10 tabular-nums text-right">{size}</span>
      <span className="text-muted-foreground shrink-0 w-24 tabular-nums">{date}</span>
      <span className={`shrink-0 min-w-0 ${nameClass}`}>
        {displayName}
      </span>
    </>
  );

  if (entry.type === "file") {
    return (
      <a
        href={entry.href}
        className={`group ${rowClass} cursor-pointer rounded px-2 -mx-2 transition-colors duration-0 hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-muted/40`}
      >
        {contentFile}
      </a>
    );
  }

  return (
    <div className={`${rowClass} px-2`}>
      {contentStatic}
    </div>
  );
}
