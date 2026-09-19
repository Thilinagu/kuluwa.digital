import type { Metadata } from "next";
import { Container, SectionTight } from "@/components/shared/Container";
import { Eyebrow } from "@/components/shared/NodeIcon";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Why Choose Kuluwa.digital",
  description: "Experienced, multi-disciplinary, business-focused technology delivery — see why businesses choose Kuluwa.digital.",
};

const WHY_ITEMS = [
  { t: "Experienced development capability", d: "More than ten years of combined team experience across the core technology disciplines a modern business needs." },
  { t: "Multi-disciplinary under one roof", d: "Web, mobile, AI, IoT, custom software, design and marketing sit in one team, so multi-part projects stay coordinated." },
  { t: "Business-oriented thinking", d: "We start from your business problem, not a technology we want to sell you." },
  { t: "Custom solutions, not templates", d: "Every engagement starts with discovery, so the solution matches your actual process." },
  { t: "Structured project process", d: "A defined path from first conversation through to launch and support, so you always know what's next." },
  { t: "Clear, direct communication", d: "We explain technology in plain language and are upfront about what is and isn't realistic." },
  { t: "Sri Lankan market understanding", d: "Local business context combined with the capability to serve international clients." },
  { t: "Long-term relationships", d: "We aim to be a technology partner you return to, not a one-off vendor." },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Why Choose Us" }]} />
      <SectionTight>
        <Container>
          <Eyebrow>Why Choose Us</Eyebrow>
          <h1 className="max-w-[640px] font-heading text-4xl font-bold">Reasons businesses choose to work with Kuluwa.digital.</h1>
        </Container>
      </SectionTight>
      <SectionTight>
        <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_ITEMS.map((w) => (
            <div key={w.t} className="rounded-lg border border-border p-7 dark:border-border-dark">
              <h3 className="mb-2 text-[17px] font-semibold">{w.t}</h3>
              <p className="text-[14.5px] text-text-secondary dark:text-text-dark-secondary">{w.d}</p>
            </div>
          ))}
        </Container>
      </SectionTight>
      <CTABand
        headline="Ready to see if we're the right fit?"
        sub="Start with a short conversation about your project."
        primaryLabel="Start Your Project"
        primaryHref="/start-project"
        secondaryLabel="Talk to Our Team"
        secondaryHref="/contact"
      />
    </>
  );
}
