"use client";

import { useEffect, useState } from "react";
import { Terminal } from "@/components/terminal-ls";
import { MillifyLogo } from "@/components/millify-logo";
import type { LsSection } from "@/lib/terminal-ls-data";

const WIDE_BREAKPOINT = 640; // Tailwind sm – compact ls view
const LOGO_OUTSIDE_MAX_WIDTH = 480; // Very small: show logo outside terminal, hide in header

export function TerminalView({ sections }: { sections: LsSection[] }) {
  const [compact, setCompact] = useState(true);
  const [showLogoOutside, setShowLogoOutside] = useState(true);

  useEffect(() => {
    const mqlCompact = window.matchMedia(`(min-width: ${WIDE_BREAKPOINT}px)`);
    const mqlLogo = window.matchMedia(`(min-width: ${LOGO_OUTSIDE_MAX_WIDTH}px)`);
    const update = () => {
      setCompact(!mqlCompact.matches);
      setShowLogoOutside(!mqlLogo.matches);
    };
    update();
    mqlCompact.addEventListener("change", update);
    mqlLogo.addEventListener("change", update);
    return () => {
      mqlCompact.removeEventListener("change", update);
      mqlLogo.removeEventListener("change", update);
    };
  }, []);

  if (showLogoOutside) {
    return (
      <div className="flex flex-col gap-y-1 w-full max-w-[900px]">
        <div className="flex justify-center">
          <div className="scale-[0.5] origin-center">
            <MillifyLogo />
          </div>
        </div>
        <Terminal
          sections={sections}
          compact={compact}
          hideHeaderLogo
        />
      </div>
    );
  }

  return (
    <Terminal
      sections={sections}
      compact={compact}
      hideHeaderLogo={false}
    />
  );
}
