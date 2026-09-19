import type { Metadata } from "next";
import { Container, SectionTight } from "@/components/shared/Container";
import { Eyebrow } from "@/components/shared/NodeIcon";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { OpportunityGrid } from "@/components/opportunities/OpportunityGrid";
import { CTABand } from "@/components/sections/CTABand";
import { OPPORTUNITIES } from "@/content/opportunities";

export const metadata: Metadata = {
  title: "Opportunities",
  description: "Explore current technology, sales and business-development opportunities with Kuluwa.digital.",
};

export default function OpportunitiesPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Opportunities" }]} />
      <SectionTight>
        <Container>
          <Eyebrow>Opportunities</Eyebrow>
          <h1 className="max-w-[640px] font-heading text-4xl font-bold">Current roles and collaboration opportunities.</h1>
          <p className="mt-3 max-w-[640px] text-text-secondary dark:text-text-dark-secondary">
            Status reflects current company requirements and changes over time. Applying to a limited or
            coming-soon role still adds you to our review pool for that category.
          </p>
          <OpportunityGrid opportunities={OPPORTUNITIES} />
        </Container>
      </SectionTight>
      <CTABand headline="Don't see an exact fit?" sub="We still welcome general applications from suitable candidates." primaryLabel="Start Application" primaryHref="/apply" />
    </>
  );
}
