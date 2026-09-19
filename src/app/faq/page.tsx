import type { Metadata } from "next";
import { Container, SectionTight } from "@/components/shared/Container";
import { Eyebrow } from "@/components/shared/NodeIcon";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Accordion } from "@/components/shared/Accordion";
import { CTABand } from "@/components/sections/CTABand";
import { FAQS } from "@/content/faqs";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to common questions about Kuluwa.digital's services, project process, and how to join our network.",
};

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "FAQ" }]} />
      <SectionTight>
        <Container>
          <Eyebrow>FAQ</Eyebrow>
          <h1 className="max-w-[600px] font-heading text-4xl font-bold">Frequently asked questions.</h1>
          <div className="mt-6 max-w-[760px]">
            <Accordion items={FAQS} />
          </div>
        </Container>
      </SectionTight>
      <CTABand headline="Still have a question?" sub="Reach out directly and our team will get back to you." primaryLabel="Contact Us" primaryHref="/contact" />
    </>
  );
}
