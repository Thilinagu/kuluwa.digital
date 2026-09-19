import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, SectionTight } from "@/components/shared/Container";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { ConceptBadge, Tag } from "@/components/ui/Badge";
import { CTABand } from "@/components/sections/CTABand";
import { PORTFOLIO, getPortfolioBySlug } from "@/content/portfolio";

export function generateStaticParams() {
  return PORTFOLIO.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getPortfolioBySlug(params.slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default function PortfolioDetailPage({ params }: { params: { slug: string } }) {
  const project = getPortfolioBySlug(params.slug);
  if (!project) notFound();

  return (
    <>
      <Breadcrumb items={[{ href: "/", label: "Home" }, { href: "/portfolio", label: "Portfolio" }, { label: project.title }]} />
      <SectionTight>
        <Container>
          {project.isConcept && <ConceptBadge />}
          <h1 className="mt-3.5 font-heading text-[34px] font-bold">{project.title}</h1>
          <div className="mt-3">
            {project.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </Container>
      </SectionTight>
      <SectionTight className="border-y border-border bg-surface-1 dark:border-border-dark dark:bg-surface-dark-1">
        <Container className="grid gap-8 lg:gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-2.5 text-xl font-semibold">Business challenge</h2>
            <p className="text-text-secondary dark:text-text-dark-secondary">{project.challenge}</p>
          </div>
          <div>
            <h2 className="mb-2.5 text-xl font-semibold">Solution concept</h2>
            <p className="text-text-secondary dark:text-text-dark-secondary">{project.solution}</p>
          </div>
        </Container>
      </SectionTight>
      <SectionTight>
        <Container className="grid gap-8 lg:gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-3.5 text-xl font-semibold">Key features</h2>
            <ul className="space-y-2.5">
              {project.features.map((f) => (
                <li key={f} className="text-text-secondary dark:text-text-dark-secondary">
                  • {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-3.5 text-xl font-semibold">Technology areas</h2>
            <div>
              {project.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
            <h2 className="mb-2.5 mt-6 text-xl font-semibold">Related service</h2>
            <a href={`/services/${project.relatedServiceSlug}`} className="font-semibold hover:text-coral">
              View related service →
            </a>
          </div>
        </Container>
      </SectionTight>
      <CTABand headline="Want something like this for your business?" sub="Every project starts with a conversation about your specific problem." primaryLabel="Start Your Project" primaryHref="/start-project" />
    </>
  );
}
