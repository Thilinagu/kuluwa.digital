import type { Metadata } from "next";
import { Container, SectionTight } from "@/components/shared/Container";
import { Eyebrow } from "@/components/shared/NodeIcon";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { ProjectEnquiryForm } from "@/components/forms/ProjectEnquiryForm";

export const metadata: Metadata = {
  title: "Start Your Project",
  description: "Tell Kuluwa.digital about your project. Our team will review your requirements and get back to you to discuss next steps.",
};

export default function StartProjectPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Start Your Project" }]} />
      <SectionTight>
        <Container className="max-w-[820px]">
          <Eyebrow>Project Enquiry</Eyebrow>
          <h1 className="font-heading text-[34px] font-bold">Let&apos;s discuss your project.</h1>
          <p className="mt-3 mb-8 text-text-secondary dark:text-text-dark-secondary">
            Tell us about your business problem. Our team reviews every enquiry and gets back to you to discuss
            requirements and next steps.
          </p>
          <ProjectEnquiryForm />
        </Container>
      </SectionTight>
    </>
  );
}
