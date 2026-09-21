import type { Metadata } from "next";
import { Container, SectionTight } from "@/components/shared/Container";
import { Eyebrow, Node } from "@/components/shared/NodeIcon";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { ButtonLink } from "@/components/ui/Button";
import { ProcessList } from "@/components/sections/ProcessList";
import { CTABand } from "@/components/sections/CTABand";
import { NoticeBanner } from "@/components/shared/NoticeBanner";

export const metadata: Metadata = {
  title: "Join the Kuluwa Network",
  description: "Join Kuluwa.digital's growing network of technology professionals and business-development contributors across Sri Lanka.",
};

const WHAT_YOU_GET = [
  "A genuinely free application — no fees, ever",
  "A clear, fair review process for every applicant",
  "Real technology and business-development work, not busywork",
  "Written terms for every engagement, agreed before you start",
  "Support and guidance as you get up to speed",
  "A growing network you can build a long-term relationship with",
];

const HOW_IT_WORKS = [
  "A contributor identifies a genuine business opportunity",
  "The opportunity is submitted through the official process",
  "Kuluwa.digital reviews the lead",
  "The lead is registered and evaluated",
  "The company contacts the prospect",
  "Requirements are discussed",
  "A proposal or quotation is prepared",
  "The project is accepted under agreed terms",
  "Kuluwa.digital delivers the project",
  "Commission is handled according to the applicable agreement",
];

const APPLICATION_STEPS: [string, string][] = [
  ["Explore Opportunities", "Read about available roles."],
  ["Submit Application", "Complete the application form."],
  ["Review & Assessment", "We review your application; some roles include a task or interview."],
  ["Agreement & Onboarding", "Selected individuals receive engagement terms in writing."],
];

export default function JoinNetworkPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Join the Kuluwa Network" }]} />
      <SectionTight>
        <Container className="grid gap-8 lg:gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Join the Network</Eyebrow>
            <h1 className="font-heading text-4xl font-bold">Your skills. Your network. New possibilities.</h1>
            <p className="mt-4 text-text-secondary dark:text-text-dark-secondary">
              Kuluwa.digital is expanding its network of technology professionals, business-development
              contributors and project collaborators across Sri Lanka. We welcome applications from suitable
              individuals with relevant skills, communication ability, professional discipline, or business
              connections.
            </p>
            <div className="mt-6 flex flex-wrap gap-3.5">
              <ButtonLink href="/apply">Join the Kuluwa Network</ButtonLink>
              <ButtonLink href="/opportunities" variant="secondary">
                Explore Opportunities
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-lg border border-border bg-surface-1 p-7 dark:border-border-dark dark:bg-surface-dark-1">
            <h3 className="mb-3.5 text-base font-semibold">What you can expect from us</h3>
            <ul className="space-y-2.5">
              {WHAT_YOU_GET.map((t) => (
                <li key={t} className="flex gap-2.5 text-sm text-text-secondary dark:text-text-dark-secondary">
                  <Node className="mt-2" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </SectionTight>

      <SectionTight className="border-y border-border bg-surface-1 dark:border-border-dark dark:bg-surface-dark-1">
        <Container>
          <h2 className="mb-6 text-2xl font-semibold">How our business development opportunities work</h2>
          <ProcessList steps={HOW_IT_WORKS} />
        </Container>
      </SectionTight>

      <SectionTight>
        <Container>
          <h2 className="mb-5 text-2xl font-semibold">The application process</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {APPLICATION_STEPS.map(([t, d]) => (
              <div key={t} className="rounded-lg border border-border p-6 dark:border-border-dark">
                <h3 className="mb-2 text-[15px] font-semibold">{t}</h3>
                <p className="text-sm text-text-secondary dark:text-text-dark-secondary">{d}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionTight>

      <CTABand
        headline="Ready to apply?"
        sub="Review current opportunities, then submit your application."
        primaryLabel="Explore Opportunities"
        primaryHref="/opportunities"
        secondaryLabel="Start Application"
        secondaryHref="/apply"
      />
    </>
  );
}
