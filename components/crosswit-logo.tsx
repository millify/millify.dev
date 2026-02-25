"use client";

const BRAIN_IMAGE = "/brain.png";

export function CrosswitLogo({
  rightText = "SSWIT",
  className = "",
  size = "default",
}: {
  rightText?: string;
  className?: string;
  size?: "default" | "small";
}) {
  const fontClass = "font-audiowide";
  const isSmall = size === "small";
  const textSizeClass = isSmall ? "text-base" : "text-xl sm:text-2xl";
  const iconSizeClass = isSmall ? "h-4 w-4" : "h-6 w-6";

  return (
    <div
      className={`flex select-none items-center text-foam ${textSizeClass} ${fontClass} ${className}`}
      data-cursor-element-id="brand-logo"
    >
      <span className={fontClass}>CR</span>
      <span
        className={`ml-px mr-px inline-block shrink-0 bg-white [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center] ${iconSizeClass}`}
        style={{
          maskImage: `url(${BRAIN_IMAGE})`,
          WebkitMaskImage: `url(${BRAIN_IMAGE})`,
        }}
        role="img"
        aria-label="abstract brain symbol"
      />
      <span className={fontClass}>{rightText}</span>
    </div>
  );
}
