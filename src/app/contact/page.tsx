import type { Metadata } from "next";
import { Container, SectionTight } from "@/components/shared/Container";
import { Eyebrow } from "@/components/shared/NodeIcon";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { ContactForm } from "@/components/forms/ContactForm";
import { COMPANY } from "@/config/company";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Kuluwa.digital's team in Sri Lanka. Call, or send us a message about your project or opportunity.",
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Contact Us" }]} />
      <SectionTight>
        <Container className="grid items-start gap-8 lg:gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Contact Us</Eyebrow>
            <h1 className="font-heading text-[34px] font-bold">Let&apos;s talk about your project or opportunity.</h1>
            <p className="mt-3.5 text-text-secondary dark:text-text-dark-secondary">
              Use the form, or reach us directly by phone.
            </p>
            <div className="mt-6 rounded-lg border border-border p-6 dark:border-border-dark">
              <h3 className="mb-1.5 text-sm font-semibold">Phone</h3>
              <a href={COMPANY.phoneHref} className="text-xl font-semibold">
                {COMPANY.phoneDisplay}
              </a>
            </div>
            <div className="mt-4 rounded-lg border border-border p-6 dark:border-border-dark">
              <h3 className="mb-1.5 text-sm font-semibold">Legal entity</h3>
              <p className="text-[14.5px] text-text-secondary dark:text-text-dark-secondary">
                Kuluwa.digital is operated by {COMPANY.legalName}.
              </p>
            </div>
            <a href="/start-project" className="mt-5 inline-block font-semibold hover:text-coral">
              Have a project? Use our project form →
            </a>
          </div>
          <div className="rounded-lg border border-border p-7 dark:border-border-dark">
            <ContactForm />
          </div>
        </Container>
      </SectionTight>
    </>
  );
}
