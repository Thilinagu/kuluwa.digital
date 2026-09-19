import type { Metadata } from "next";
import { Container, SectionTight } from "@/components/shared/Container";
import { Eyebrow } from "@/components/shared/NodeIcon";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { ServiceCard } from "@/components/services/ServiceCard";
import { CTABand } from "@/components/sections/CTABand";
import { SERVICES } from "@/content/services";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore Kuluwa.digital's technology services: web development, mobile apps, AI integration, IoT, custom software, UI/UX design, SEO and cloud integration.",
};

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Services" }]} />
      <SectionTight>
        <Container>
          <Eyebrow>Services</Eyebrow>
          <h1 className="max-w-[640px] font-heading text-4xl font-bold">Technology capability, organised around real business problems.</h1>
          <p className="mt-4 max-w-[640px] text-text-secondary dark:text-text-dark-secondary">
            Every service below is delivered by the same in-house team, so a project spanning several
            disciplines stays coordinated under one roof.
          </p>
        </Container>
      </SectionTight>
      <SectionTight>
        <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </Container>
      </SectionTight>
      <CTABand
        headline="Not sure which service fits your problem?"
        sub="Tell us what you're trying to solve and we'll recommend an approach."
        primaryLabel="Start Your Project"
        primaryHref="/start-project"
        secondaryLabel="Talk to Our Team"
        secondaryHref="/contact"
      />
    </>
  );
}
