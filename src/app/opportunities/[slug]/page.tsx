import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, SectionTight } from "@/components/shared/Container";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { StatusBadge, Tag } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { NoticeBanner } from "@/components/shared/NoticeBanner";
import { CTABand } from "@/components/sections/CTABand";
import { OPPORTUNITIES, getOpportunityBySlug } from "@/content/opportunities";

export function generateStaticParams() {
  return OPPORTUNITIES.map((o) => ({ slug: o.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const opp = getOpportunityBySlug(params.slug);
  if (!opp) return {};
  return { title: opp.title, description: opp.overview };
}

export default function OpportunityDetailPage({ params }: { params: { slug: string } }) {
  const opp = getOpportunityBySlug(params.slug);
  if (!opp) notFound();

  return (
    <>
      <Breadcrumb items={[{ href: "/", label: "Home" }, { href: "/opportunities", label: "Opportunities" }, { label: opp.title }]} />
      <SectionTight>
        <Container className="grid gap-8 lg:gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-3.5 flex items-center gap-2.5">
              <StatusBadge status={opp.status} />
              <Tag>{opp.category}</Tag>
            </div>
            <h1 className="font-heading text-[32px] font-bold">{opp.title}</h1>
            <p className="mt-3 text-text-secondary dark:text-text-dark-secondary">{opp.overview}</p>
            <div className="mt-2.5">
              <Tag>{opp.engagementType}</Tag>
              <Tag>{opp.location}</Tag>
            </div>
          </div>
          <div className="rounded-lg border border-border p-7 dark:border-border-dark">
            <h3 className="mb-3 text-base font-semibold">Compensation structure</h3>
            <p className="text-[14.5px] text-text-secondary dark:text-text-dark-secondary">{opp.compensation}</p>
            <ButtonLink href="/apply" className="mt-4.5 mt-5 w-full">
              Apply for This Opportunity
            </ButtonLink>
          </div>
        </Container>
      </SectionTight>
      <SectionTight className="border-y border-border bg-surface-1 dark:border-border-dark dark:bg-surface-dark-1">
        <Container className="grid gap-8 lg:gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-3 text-xl font-semibold">Responsibilities</h2>
            <ul className="space-y-2.5">
              {opp.responsibilities.map((r) => (
                <li key={r} className="text-text-secondary dark:text-text-dark-secondary">
                  • {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-semibold">Required skills</h2>
            <ul className="mb-5 space-y-2.5">
              {opp.required.map((r) => (
                <li key={r} className="text-text-secondary dark:text-text-dark-secondary">
                  • {r}
                </li>
              ))}
            </ul>
            <h2 className="mb-3 text-xl font-semibold">Preferred skills</h2>
            <ul className="space-y-2.5">
              {opp.preferred.map((r) => (
                <li key={r} className="text-text-secondary dark:text-text-dark-secondary">
                  • {r}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </SectionTight>
      <SectionTight>
        <Container className="grid gap-8 lg:gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-2.5 text-xl font-semibold">Experience expectations</h2>
            <p className="text-text-secondary dark:text-text-dark-secondary">{opp.experience}</p>
          </div>
          <div>
            <h2 className="mb-2.5 text-xl font-semibold">Communication expectations</h2>
            <p className="text-text-secondary dark:text-text-dark-secondary">{opp.communication}</p>
          </div>
        </Container>
        <Container>
          <NoticeBanner>
            Every engagement starts with a clear, written agreement — so from day one, you know exactly what the
            role involves and how you&apos;re compensated.
          </NoticeBanner>
        </Container>
      </SectionTight>
      <CTABand headline="Ready to apply?" sub="Submit your application and we'll review it against current requirements." primaryLabel="Apply Now" primaryHref="/apply" secondaryLabel="See Other Opportunities" secondaryHref="/opportunities" />
    </>
  );
}
