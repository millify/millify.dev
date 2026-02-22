/** Spinning windmill icon — tower + blades, theme accent colors */
export function SpinningWindmill({ size = 1 }: { size?: number }) {
  const s = size;

  return (
    <svg
      className="block shrink-0"
      width={20 * s}
      height={34 * s}
      viewBox="14 0 20 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g>
        <polygon
          points="24,18 18,34 30,34"
          fill="var(--accent-champagne-muted)"
          stroke="none"
        />
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 24 18"
          to="360 24 18"
          dur="4s"
          repeatCount="indefinite"
        />
        <line x1="24" y1="18" x2="24" y2="8" stroke="var(--accent-champagne)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="24" y1="18" x2="32.66" y2="23" stroke="var(--accent-champagne)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="24" y1="18" x2="15.34" y2="23" stroke="var(--accent-champagne)" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="18" r="3" fill="var(--accent-champagne)" />
      </g>
      </g>
    </svg>
  );
}
