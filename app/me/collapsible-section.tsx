"use client";

import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface CollapsibleSectionProps {
  id: string;
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export function CollapsibleSection({
  id,
  title,
  defaultOpen = true,
  children,
}: CollapsibleSectionProps) {
  return (
    <section id={id} className="scroll-mt-20 sm:scroll-mt-24">
      <Collapsible defaultOpen={defaultOpen} className="group">
        <CollapsibleTrigger className="mb-6 flex min-h-[44px] w-full cursor-pointer items-center justify-start gap-2 rounded p-2 -ml-2 text-left transition-colors hover:bg-muted/50 active:bg-muted">
          <ChevronDown className="size-5 shrink-0 text-primary transition-transform duration-200 group-data-[state=open]:rotate-180" />
          <h2 className="text-sm font-semibold capitalize tracking-wider text-primary">
            {title}
          </h2>
        </CollapsibleTrigger>
        <CollapsibleContent>{children}</CollapsibleContent>
      </Collapsible>
    </section>
  );
}
