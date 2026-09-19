import { ServiceIcon } from "@/components/shared/ServiceIcons";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, SectionTight } from "@/components/shared/Container";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { ProcessList } from "@/components/sections/ProcessList";
import { CTABand } from "@/components/sections/CTABand";
import { ButtonLink } from "@/components/ui/Button";
import { NoticeBanner } from "@/components/shared/NoticeBanner";
import { SERVICES, getServiceBySlug } from "@/content/services";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return { title: service.name, description: service.tagline };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.tagline,
    areaServed: ["Sri Lanka", "Australia"],
    provider: { "@type": "Organization", name: "Kuluwa.digital" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <Breadcrumb items={[{ href: "/", label: "Home" }, { href: "/services", label: "Services" }, { label: service.name }]} />

      <SectionTight>
        <Container className="grid items-start gap-8 lg:gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-[18px] flex h-11 w-11 items-center justify-center rounded-sm bg-surface-2 dark:bg-surface-dark-2">
            <ServiceIcon name={service.icon} className="h-[22px] w-[22px] stroke-coral" />
          </div>
          <h1 className="font-heading text-4xl font-bold">{service.name}</h1>
            <p className="mt-3.5 text-lg text-text-secondary dark:text-text-dark-secondary">{service.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/start-project">Start Your Project</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Discuss Your Idea
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-lg border border-border p-7 dark:border-border-dark">
            <h3 className="mb-3.5 text-base font-semibold">What&apos;s delivered</h3>
            <ul className="space-y-2.5">
              {service.deliverables.map((d) => (
                <li key={d} className="text-[14.5px] text-text-secondary dark:text-text-dark-secondary">
                  ✓ {d}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </SectionTight>

      <SectionTight className="border-y border-border bg-surface-1 dark:border-border-dark dark:bg-surface-dark-1">
        <Container className="grid gap-8 lg:gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-2.5 text-xl font-semibold">The problem</h2>
            <p className="text-text-secondary dark:text-text-dark-secondary">{service.problem}</p>
          </div>
          <div>
            <h2 className="mb-2.5 text-xl font-semibold">Our approach</h2>
            <p className="text-text-secondary dark:text-text-dark-secondary">{service.solution}</p>
          </div>
        </Container>
      </SectionTight>

      <SectionTight>
        <Container className="grid gap-8 lg:gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-xl font-semibold">Typical process</h2>
            <ProcessList steps={service.process} />
          </div>
          <div>
            <h2 className="mb-4 text-xl font-semibold">Well suited for</h2>
            <ul className="mb-6 space-y-2.5">
              {service.suitableFor.map((t) => (
                <li key={t} className="text-text-secondary dark:text-text-dark-secondary">
                  • {t}
                </li>
              ))}
            </ul>
            <NoticeBanner>{service.techNote}</NoticeBanner>
          </div>
        </Container>
      </SectionTight>

      <CTABand
        headline={`Ready to discuss a ${service.name.toLowerCase()} project?`}
        sub="We'll review your requirements and get back to you with next steps."
        primaryLabel="Start Your Project"
        primaryHref="/start-project"
        secondaryLabel="Explore Other Services"
        secondaryHref="/services"
      />
    </>
  );
}
