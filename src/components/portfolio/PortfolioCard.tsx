import Link from "next/link";
import type { PortfolioProject } from "@/types";
import { Tag, ConceptBadge, ProjectBadge } from "@/components/ui/Badge";

export function PortfolioCard({ project }: { project: PortfolioProject }) {
  return (
    <div
      // Uses "has-[a:hover]" so the card border only changes when the link inside is hovered
      className="flex flex-col rounded-lg border border-border bg-surface-1 p-7 transition-colors has-[a:hover]:border-coral dark:border-border-dark dark:bg-surface-dark-1"
    >
      {/* Image Container */}
      <div 
        className={`mb-[18px] flex aspect-[16/10] shrink-0 items-center justify-center overflow-hidden rounded-md ${
          project.imagePath ? "bg-white" : "bg-surface-2 dark:bg-surface-dark-2"
        }`}
      >
        {project.imagePath ? (
          <img
            src={`ProjectLogos/${project.imagePath}`}
            alt={project.title}
            className="h-full w-full object-contain"
          />
        ) : (
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" className="text-text-secondary opacity-50 dark:text-text-dark-secondary">
            <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
            <path d="M3 15l5-4 4 3 4-5 5 6" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        )}
      </div>

      {/* Scrollable Content Area */}
      <div className="relative">
        <div className="max-h-[210px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-border dark:scrollbar-thumb-border-dark">
          <div className="flex flex-wrap items-center gap-2">
            {project.isConcept ? <ConceptBadge /> : <ProjectBadge />}
            {project.ongoing && (
              <span className="inline-flex items-center gap-1.5 rounded-md border border-coral/30 bg-coral/10 px-2 py-0.5 text-xs font-medium text-coral">
                <span className="h-1.5 w-1.5 rounded-full bg-coral animate-pulse" />
                Ongoing
              </span>
            )}
          </div>

          <h3 className="mb-2 mt-3 font-heading text-lg font-semibold">{project.title}</h3>

          <p className="text-sm text-text-secondary dark:text-text-dark-secondary">
            {project.summary}
          </p>

          {project.services && project.services.length > 0 && (
            <div className="mt-3 text-xs text-text-secondary dark:text-text-dark-secondary">
              <span className="font-semibold text-text-primary dark:text-text-dark-primary">Services: </span>
              {project.services.join(", ")}
            </div>
          )}

          <div className="mt-3 flex flex-wrap gap-1.5 pb-3">
            {project.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-surface-1 to-transparent dark:from-surface-dark-1" />
      </div>

      {/* Hover effect triggers only when hovering this link text */}
      <Link
        href={project.link}
        className="mt-3 inline-block shrink-0 text-[14.5px] font-semibold text-text-primary transition-colors hover:text-coral dark:text-text-dark-primary"
      >
        Visit Website →
      </Link>
    </div>
  );
}