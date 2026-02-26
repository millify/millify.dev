"use client";

import { useEffect, useState } from "react";
import { Terminal } from "@/components/terminal-ls";
import type { LsSection } from "@/lib/terminal-ls-data";

const WIDE_BREAKPOINT = 640; // Tailwind sm

export function TerminalView({ sections }: { sections: LsSection[] }) {
  const [compact, setCompact] = useState(true);

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${WIDE_BREAKPOINT}px)`);
    const update = () => setCompact(!mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return <Terminal sections={sections} compact={compact} />;
}
