import type { Metadata } from "next";
import { Container, SectionTight } from "@/components/shared/Container";
import { Eyebrow } from "@/components/shared/NodeIcon";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { CTABand } from "@/components/sections/CTABand";
import { COMPANY } from "@/config/company";

export const metadata: Metadata = {
  title: "About Us",
  description: "Kuluwa.digital is a Sri Lankan technology brand with an experienced development team serving clients in Sri Lanka and Australia.",
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "About Us" }]} />
      <SectionTight>
        <Container className="grid gap-8 lg:gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>About Us</Eyebrow>
            <h1 className="font-heading text-4xl font-bold">
              A technology brand built by an experienced team, for practical results.
            </h1>
          </div>
          <p className="text-text-secondary dark:text-text-dark-secondary">
            Kuluwa.digital is a technology brand operated by {COMPANY.legalName}, based in Sri Lanka and serving
            businesses across Sri Lanka and Australia. It exists to connect businesses with practical digital
            solutions, delivered by an in-house development team with more than ten years of combined experience.
          </p>
        </Container>
      </SectionTight>

      <SectionTight className="border-y border-border bg-surface-1 dark:border-border-dark dark:bg-surface-dark-1">
        <Container className="grid gap-8 lg:gap-12 lg:grid-cols-2">
          <div className="rounded-lg border border-border p-7 dark:border-border-dark">
            <h2 className="mb-2.5 text-xl font-semibold">Our mission</h2>
            <p className="text-text-secondary dark:text-text-dark-secondary">
              To help businesses and ambitious individuals turn ideas, challenges and opportunities into
              meaningful digital solutions.
            </p>
          </div>
          <div className="rounded-lg border border-border p-7 dark:border-border-dark">
            <h2 className="mb-2.5 text-xl font-semibold">Our vision</h2>
            <p className="text-text-secondary dark:text-text-dark-secondary">
              To build a connected technology ecosystem where businesses gain access to capable digital
              solutions, and talented people gain genuine opportunities to contribute.
            </p>
          </div>
        </Container>
      </SectionTight>

      <SectionTight>
        <Container className="grid gap-8 lg:gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Who we are</h2>
            <p className="mt-3 text-text-secondary dark:text-text-dark-secondary">
              Kuluwa.digital already has software development capacity and an experienced team working under
              the founder. We take on web, mobile, AI, IoT, custom software, design and marketing projects, and
              we&apos;re expanding a professional network of technology and business-development contributors
              across Sri Lanka.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Our relationship to {COMPANY.legalName}</h2>
            <p className="mt-3 text-text-secondary dark:text-text-dark-secondary">
              Kuluwa.digital is the customer-facing brand under which {COMPANY.legalName} operates. All
              contracts, invoicing and legal responsibilities sit with {COMPANY.legalName}.
            </p>
          </div>
        </Container>
      </SectionTight>

      <CTABand
        headline="Want to know more before reaching out?"
        sub="Read about our process or see why businesses choose to work with us."
        primaryLabel="See How We Work"
        primaryHref="/how-we-work"
        secondaryLabel="Why Choose Us"
        secondaryHref="/why-choose-us"
      />
    </>
  );
}
