"use client";

const BRAIN_IMAGE = "/brain.png";

export function CrosswitLogo({
  rightText = "SSWIT",
  className = "",
}: {
  rightText?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex select-none items-center text-xl font-audiowide text-foam ${className}`}
      data-cursor-element-id="brand-logo"
    >
      <span className="font-audiowide">CR</span>
      <span
        className="ml-px mr-px inline-block h-6 w-6 shrink-0 bg-white [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center]"
        style={{
          maskImage: `url(${BRAIN_IMAGE})`,
          WebkitMaskImage: `url(${BRAIN_IMAGE})`,
        }}
        role="img"
        aria-label="abstract brain symbol"
      />
      <span className="font-audiowide">{rightText}</span>
    </div>
  );
}
