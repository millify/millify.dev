"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const DIALOG_LINES = [
  '"Data to Counselor Troi."',
  '"Yes, Data?"',
  '"I was wondering if now may be the appropriate time to discuss the long-term effects of space travel on my positronic net."',
  '"Can I give you a rain check?"',
  '"You may... check me for rain if you wish counselor, but I assure you I have no water in my..."',
  '"Data, I\'ll get back to you."',
];

const CHAR_DELAY_MS = 38;
const LINE_PAUSE_MS = 600;

function TypewriterDialog({ onComplete }: { onComplete?: () => void }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedChars, setDisplayedChars] = useState(0);

  const line = DIALOG_LINES[currentLine];
  const isLineComplete = displayedChars >= line.length;
  const isAllComplete = currentLine === DIALOG_LINES.length - 1 && isLineComplete;

  useEffect(() => {
    if (isAllComplete) {
      onComplete?.();
      return;
    }
    if (isLineComplete) {
      const timer = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
        setDisplayedChars(0);
      }, LINE_PAUSE_MS);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(() => {
      setDisplayedChars((prev) => prev + 1);
    }, CHAR_DELAY_MS);
    return () => clearTimeout(timer);
  }, [currentLine, displayedChars, isLineComplete, isAllComplete, onComplete]);

  return (
    <div className="space-y-4">
      {DIALOG_LINES.slice(0, currentLine).map((fullLine, i) => (
        <p
          key={i}
          className={
            i % 2 === 0
              ? "text-cyan-300/60"
              : "ml-4 border-l-2 border-cyan-300/60 pl-3 text-cyan-300/60"
          }
        >
          {fullLine}
        </p>
      ))}
      {line && (
        <p
          className={
            currentLine % 2 === 0
              ? "text-cyan-300/60"
              : "ml-4 border-l-2 border-cyan-300/60 pl-3 text-cyan-300/60"
          }
        >
          {line.slice(0, displayedChars)}
        </p>
      )}
    </div>
  );
}

export function StarTrekPopup() {
  const [open, setOpen] = useState(false);
  const [key, setKey] = useState(0);

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (nextOpen) {
      setKey((k) => k + 1);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="text-sm text-muted-foreground underline decoration-dotted underline-offset-2 transition-colors hover:text-primary"
        >
          intercepted communication
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Intercepted communication</DialogTitle>
        </DialogHeader>
        <div className="min-h-[200px] font-mono text-sm leading-relaxed text-muted-foreground">
          {open && <TypewriterDialog key={key} />}
        </div>
      </DialogContent>
    </Dialog>
  );
}
