import type { Metadata } from "next";
import { Container, SectionTight } from "@/components/shared/Container";
import { Eyebrow } from "@/components/shared/NodeIcon";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { COMPANY } from "@/config/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Kuluwa.digital collects, uses and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Privacy Policy" }]} />
      <SectionTight>
        <Container className="prose max-w-[760px] dark:prose-invert prose-headings:font-heading prose-p:text-text-secondary prose-li:text-text-secondary dark:prose-p:text-text-dark-secondary dark:prose-li:text-text-dark-secondary">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="!mb-2 font-heading text-3xl font-bold">Privacy Policy</h1>
          <p className="!mt-0 text-[13.5px]">
            Prepared with reference to standard industry practice in Sri Lanka and Australia. As with any
            company policy, we recommend a final review by qualified legal counsel before formal publication.
          </p>

          <h2>1. Introduction</h2>
          <p>
            {COMPANY.legalName}, trading as Kuluwa.digital (&quot;Kuluwa.digital&quot;, &quot;we&quot;,
            &quot;us&quot;, &quot;our&quot;), respects your privacy and is committed to protecting the personal
            information of everyone who visits this website, submits an enquiry, applies to join our network, or
            engages us for services. This Policy is written with reference to the general principles of Sri
            Lanka&apos;s Personal Data Protection Act, No. 9 of 2019, and the Australian Privacy Principles under
            the Privacy Act 1988 (Cth), given that we serve clients and applicants in both jurisdictions.
          </p>

          <h2>2. Information we collect</h2>
          <ul>
            <li><strong>Contact details</strong> — name, email address, phone number, company or organisation, country/location.</li>
            <li><strong>Enquiry and project information</strong> — details you share about a project, business problem, budget range or timeline.</li>
            <li><strong>Application information</strong> — professional background, skills, links to portfolios or professional profiles, and your responses to application questions.</li>
            <li><strong>Technical information</strong> — standard web-log data collected automatically to keep the site secure and functioning correctly.</li>
          </ul>
          <p>We do not knowingly collect financial account details, government identification numbers, or other special categories of sensitive information through this website.</p>

          <h2>3. How we use your information</h2>
          <ul>
            <li>To respond to enquiries, discuss projects, and prepare proposals or quotations.</li>
            <li>To review and process applications to join the Kuluwa.digital network.</li>
            <li>To deliver, manage and support client projects once engaged.</li>
            <li>To maintain the security, performance and improvement of this website.</li>
            <li>To meet applicable legal, accounting or regulatory obligations.</li>
          </ul>

          <h2>4. How we share information</h2>
          <p>
            We do not sell, rent or trade your personal information. Information may be shared with trusted
            service providers strictly to the extent needed to operate this website and deliver our services
            (for example, email delivery infrastructure), each of whom is expected to protect your information
            appropriately.
          </p>

          <h2>5. Data retention</h2>
          <p>
            We retain personal information only for as long as reasonably necessary to fulfil the purpose it was
            collected for, and any additional period required to meet legal, accounting or dispute-resolution
            obligations.
          </p>

          <h2>6. Your rights</h2>
          <p>
            Depending on your location, you may have rights to access, correct, or request deletion of your
            personal information, and to object to or restrict certain processing. Contact us using the details
            below to exercise these rights.
          </p>

          <h2>7. Security</h2>
          <p>
            We take reasonable technical and organisational measures to protect personal information against
            unauthorised access, loss or misuse. We encourage you not to share confidential credentials or
            sensitive information through public web forms.
          </p>

          <h2>8. International transfers</h2>
          <p>
            As we serve clients and applicants in both Sri Lanka and Australia, information may be processed or
            stored in either jurisdiction, or by service providers located elsewhere, with appropriate
            safeguards in place.
          </p>

          <h2>9. Changes to this policy</h2>
          <p>We may update this Policy from time to time to reflect changes in our practices or legal requirements.</p>

          <h2>10. Contact us</h2>
          <p>For any privacy-related question or request, contact {COMPANY.legalName} (trading as Kuluwa.digital) at {COMPANY.phoneDisplay}.</p>
        </Container>
      </SectionTight>
    </>
  );
}
