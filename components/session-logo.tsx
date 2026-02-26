import { cn } from "@/lib/utils";

/**
 * Logo component for Sessions — Square logo + "Sessions" text.
 */
export function SessionLogo({
  className = "",
  style = {},
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={cn("flex items-center gap-2 text-foreground", className)}
      style={style}
      aria-hidden
    >
      <div
        className="size-5 shrink-0 flex flex-col justify-center gap-[6%] items-start text-current"
        aria-hidden
      >
        <div className="w-[75%] flex-1 min-h-1 bg-current rounded-none" />
        <div className="w-[90%] flex-1 min-h-1 self-end bg-current rounded-none" />
        <div className="w-[75%] flex-1 min-h-1 bg-current rounded-none" />
      </div>
      <span className="text-xl font-medium">Sessions</span>
    </div>
  );
}
