/** The Kuluwa "node" — the brand's signature reusable accent dot. */
export function Node({ className = "", pulse = false }: { className?: string; pulse?: boolean }) {
  return <span className={`inline-block h-[7px] w-[7px] flex-none rounded-full bg-coral ${pulse ? "animate-node-pulse" : ""} ${className}`} />;
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-2 font-mono text-[13px] text-coral">
      <Node pulse />
      {children}
    </div>
  );
}
