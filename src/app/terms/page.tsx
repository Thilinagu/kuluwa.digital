import type { Metadata } from "next";
import { Container, SectionTight } from "@/components/shared/Container";
import { Eyebrow } from "@/components/shared/NodeIcon";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { COMPANY } from "@/config/company";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "The terms and conditions governing use of the Kuluwa.digital website and services.",
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Terms and Conditions" }]} />
      <SectionTight>
        <Container className="prose max-w-[760px] dark:prose-invert prose-headings:font-heading prose-p:text-text-secondary dark:prose-p:text-text-dark-secondary">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="!mb-2 font-heading text-3xl font-bold">Terms and Conditions</h1>
          <p className="!mt-0 text-[13.5px]">
            Prepared with reference to standard industry practice in Sri Lanka and Australia. As with any
            company policy, we recommend a final review by qualified legal counsel before formal publication.
          </p>

          <h2>1. Agreement to terms</h2>
          <p>
            These Terms and Conditions govern your use of the Kuluwa.digital website, operated by{" "}
            {COMPANY.legalName} (&quot;Kuluwa.digital&quot;, &quot;we&quot;, &quot;us&quot;). By browsing this
            website or submitting any form, you agree to these Terms. Specific commercial terms for any project
            or engagement are set out separately in a written agreement or proposal, which takes precedence over
            this general website policy.
          </p>

          <h2>2. Website content</h2>
          <p>
            Service descriptions, portfolio material and general information on this website are provided for
            informational purposes and may be updated periodically. Illustrative or concept portfolio material
            is clearly identified as such and does not represent a claim of completed client work.
          </p>

          <h2>3. Enquiries and proposals</h2>
          <p>
            Submitting a project enquiry or contact form does not itself create a contractual relationship. A
            binding engagement begins only once both parties agree to and sign a written proposal, quotation, or
            services agreement.
          </p>

          <h2>4. No guaranteed outcomes</h2>
          <p>
            While we work diligently and transparently on every engagement, we do not guarantee specific
            business results, search-engine rankings, revenue outcomes, or a particular volume of work arising
            from network participation.
          </p>

          <h2>5. Intellectual property</h2>
          <p>
            Unless otherwise agreed in writing, the Kuluwa.digital name, logo and website content are the
            property of {COMPANY.legalName}. Ownership and licensing of deliverables created for a client
            project are set out in that project&apos;s individual agreement.
          </p>

          <h2>6. Acceptable use</h2>
          <p>You agree not to misuse this website, attempt to gain unauthorised access to its systems, or submit false, misleading, or malicious content through any form.</p>

          <h2>7. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by applicable law in Sri Lanka and Australia, {COMPANY.legalName} is
            not liable for indirect, incidental or consequential loss arising from use of this website. This
            section does not limit any liability that cannot lawfully be excluded, including under the
            Australian Consumer Law where it applies.
          </p>

          <h2>8. Governing law</h2>
          <p>These Terms are governed by the laws of Sri Lanka, without prejudice to any statutory consumer protections that may separately apply to clients located in Australia.</p>

          <h2>9. Contact</h2>
          <p>Questions about these Terms can be directed to {COMPANY.legalName} (trading as Kuluwa.digital) at {COMPANY.phoneDisplay}.</p>
        </Container>
      </SectionTight>
    </>
  );
}
