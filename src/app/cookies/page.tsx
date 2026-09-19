import type { Metadata } from "next";
import { Container, SectionTight } from "@/components/shared/Container";
import { Eyebrow } from "@/components/shared/NodeIcon";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { COMPANY } from "@/config/company";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Kuluwa.digital uses cookies and similar technologies.",
};

export default function CookiesPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Cookie Policy" }]} />
      <SectionTight>
        <Container className="prose max-w-[760px] dark:prose-invert prose-headings:font-heading prose-p:text-text-secondary dark:prose-p:text-text-dark-secondary">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="!mb-2 font-heading text-3xl font-bold">Cookie Policy</h1>
          <p className="!mt-0 text-[13.5px]">
            Prepared with reference to standard industry practice in Sri Lanka and Australia. As with any
            company policy, we recommend a final review by qualified legal counsel before formal publication.
          </p>

          <h2>1. What this policy covers</h2>
          <p>This Cookie Policy explains how Kuluwa.digital, operated by {COMPANY.legalName}, uses cookies and similar browser storage technologies on this website.</p>

          <h2>2. Types of storage we use</h2>
          <ul>
            <li><strong>Essential/functional storage</strong> — keeps the website working correctly (e.g. remembering your progress through a multi-step form during your visit).</li>
            <li><strong>Analytics</strong> — once connected, Google Tag Manager and Google Search Console may be used to understand overall site usage and improve performance and content.</li>
            <li><strong>Marketing</strong> — not currently in use on this website. If introduced in future, this policy will be updated in advance and, where legally required, your consent will be requested.</li>
          </ul>

          <h2>3. Managing cookies</h2>
          <p>Most browsers let you control or clear cookies through their settings. Disabling non-essential cookies will not prevent you from browsing this website.</p>

          <h2>4. Third-party services</h2>
          <p>Where third-party services are used, their own privacy and cookie practices also apply, and we select providers that maintain appropriate data-protection standards.</p>

          <h2>5. Updates</h2>
          <p>We will update this policy as our use of cookies and analytics tools evolves.</p>

          <h2>6. Contact</h2>
          <p>Questions about this policy can be directed to {COMPANY.legalName} (trading as Kuluwa.digital) at {COMPANY.phoneDisplay}.</p>
        </Container>
      </SectionTight>
    </>
  );
}
