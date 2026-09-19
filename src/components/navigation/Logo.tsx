export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="26" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 62,38 L 62,162" />
        <path d="M 62,100 L 148,38" />
        <path d="M 62,100 L 148,158" />
      </g>
      <circle cx="148" cy="158" r="17" fill="#FF6B45" />
    </svg>
  );
}
