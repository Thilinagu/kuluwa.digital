import Link from "next/link";
import type { Opportunity } from "@/types";
import { StatusBadge, Tag } from "@/components/ui/Badge";

export function OpportunityCard({ opportunity }: { opportunity: Opportunity }) {
  return (
    <Link
      href={`/opportunities/${opportunity.slug}`}
      className="block rounded-lg border border-border bg-surface-1 p-7 transition-colors hover:border-coral dark:border-border-dark dark:bg-surface-dark-1"
    >
      <div className="flex items-start justify-between gap-2.5">
        <h3 className="font-heading text-lg font-semibold">{opportunity.title}</h3>
        <StatusBadge status={opportunity.status} />
      </div>
      <p className="mt-2.5 text-sm text-text-secondary dark:text-text-dark-secondary">{opportunity.overview}</p>
      <div className="mt-3">
        <Tag>{opportunity.category}</Tag>
        <Tag>{opportunity.engagementType}</Tag>
      </div>
      <span className="mt-3.5 inline-block text-[14.5px] font-semibold text-text-primary hover:text-coral dark:text-text-dark-primary">
        View opportunity →
      </span>
    </Link>
  );
}
