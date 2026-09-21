import { cn } from "@/lib/utils";
import type { OpportunityStatus } from "@/types";

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-1.5 mr-1.5 inline-block rounded-full bg-surface-2 px-2.5 py-1 text-[12.5px] font-medium text-text-secondary dark:bg-surface-dark-2 dark:text-text-dark-secondary">
      {children}
    </span>
  );
}

const STATUS_MAP: Record<OpportunityStatus, { label: string; className: string }> = {
  open: { label: "Accepting Applications", className: "bg-success/10 text-success" },
  limited: { label: "Limited Openings", className: "bg-warning/15 text-[#a67418]" },
  closed: { label: "Temporarily Closed", className: "bg-error/10 text-error" },
  soon: { label: "Coming Soon", className: "bg-surface-2 text-text-secondary dark:bg-surface-dark-2" },
};

export function StatusBadge({ status }: { status: OpportunityStatus }) {
  const s = STATUS_MAP[status];
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full px-3 py-[5px] text-[12.5px] font-semibold", s.className)}>
      {s.label}
    </span>
  );
}

export function ConceptBadge() {
  return (
    <span className="inline-block bg-coral/10 font-mono text-[11.5px] tracking-[.02em] text-coral-deep">
      Concept
    </span>
  );
}

export function ProjectBadge() {
  return (
    <span className="inline-block bg-coral/10 font-mono text-[11.5px] tracking-[.02em] text-coral-deep">
      Project
    </span>
  );
}
