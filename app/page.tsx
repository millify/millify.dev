import {
  getPagesTreeNodes,
  getProjectsTreeNodes,
} from "@/lib/directory-tree-data";
import { treeNodesToLsSections } from "@/lib/terminal-ls-data";
import { TerminalView } from "./terminal-view";

export default function Home() {
  const pagesNodes = getPagesTreeNodes();
  const projectsNodes = getProjectsTreeNodes();
  const sections = treeNodesToLsSections(pagesNodes, projectsNodes);

  return (
    <div className="flex min-h-screen flex-col items-center justify-start pt-8 min-[481px]:justify-center min-[481px]:pt-0 bg-background text-foreground">
      <div
        className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_bottom,rgba(184,168,138,0.06)_0%,transparent_40%,transparent_60%,rgba(184,168,138,0.04)_100%)]"
        aria-hidden
      />
      <div className="relative flex flex-col items-center gap-y-6 -mt-24 px-3 sm:px-0">
        <TerminalView sections={sections} />
      </div>
    </div>
  );
}
