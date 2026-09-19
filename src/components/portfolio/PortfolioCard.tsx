import Link from "next/link";
import type { PortfolioProject } from "@/types";
import { Tag, ConceptBadge } from "@/components/ui/Badge";

export function PortfolioCard({ project }: { project: PortfolioProject }) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="block rounded-lg border border-border bg-surface-1 p-7 transition-colors hover:border-coral dark:border-border-dark dark:bg-surface-dark-1"
    >
      <div className="mb-[18px] flex aspect-[16/10] items-center justify-center overflow-hidden rounded-md bg-surface-2 dark:bg-surface-dark-2">
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" className="text-text-secondary opacity-50 dark:text-text-dark-secondary">
          <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
          <path d="M3 15l5-4 4 3 4-5 5 6" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </div>
      {project.isConcept && <ConceptBadge />}
      <h3 className="mb-2 mt-3 font-heading text-lg font-semibold">{project.title}</h3>
      <p className="text-sm text-text-secondary dark:text-text-dark-secondary">{project.summary}</p>
      <div className="mt-3">
        {project.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      <span className="mt-3.5 inline-block text-[14.5px] font-semibold text-text-primary hover:text-coral dark:text-text-dark-primary">
        View case study →
      </span>
    </Link>
  );
}
