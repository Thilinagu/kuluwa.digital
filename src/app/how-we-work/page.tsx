import type { Metadata } from "next";
import { Container, SectionTight } from "@/components/shared/Container";
import { Eyebrow } from "@/components/shared/NodeIcon";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { ProcessList } from "@/components/sections/ProcessList";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "How We Work",
  description: "From first conversation to launch and support — see Kuluwa.digital's structured project delivery process.",
};

const STAGES = [
  "Initial conversation", "Requirement discovery", "Business analysis", "Technical feasibility",
  "Scope definition", "Proposal and quotation", "UX/UI planning", "Development",
  "Testing and quality assurance", "Client review", "Deployment", "Support and improvements",
];

export default function HowWeWorkPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "How We Work" }]} />
      <SectionTight>
        <Container>
          <Eyebrow>How We Work</Eyebrow>
          <h1 className="max-w-[640px] font-heading text-4xl font-bold">From first conversation to ongoing support.</h1>
          <p className="mt-3.5 max-w-[640px] text-text-secondary dark:text-text-dark-secondary">
            The exact process varies with project size and complexity, but most engagements follow these stages.
          </p>
        </Container>
      </SectionTight>
      <SectionTight>
        <Container>
          <ProcessList steps={STAGES} />
        </Container>
      </SectionTight>
      <CTABand
        headline="Ready to start the first conversation?"
        sub="Tell us about your project and we'll take it from there."
        primaryLabel="Discuss Your Project"
        primaryHref="/start-project"
      />
    </>
  );
}
