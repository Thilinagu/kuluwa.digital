import type { Metadata } from "next";
import { Container, SectionTight } from "@/components/shared/Container";
import { Eyebrow } from "@/components/shared/NodeIcon";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { ApplicationForm } from "@/components/forms/ApplicationForm";

export const metadata: Metadata = {
  title: "Apply to Join the Kuluwa Network",
  description: "Submit your application to join Kuluwa.digital's technology and business-development network. It's free, and every application is reviewed.",
};

export default function ApplyPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/", label: "Home" }, { href: "/join-network", label: "Join the Network" }, { label: "Application" }]} />
      <SectionTight>
        <Container className="max-w-[820px]">
          <Eyebrow>Team Application</Eyebrow>
          <h1 className="font-heading text-[34px] font-bold">Apply to join the Kuluwa network.</h1>
          <p className="mt-2.5 mb-8 text-text-secondary dark:text-text-dark-secondary">
            This application takes about 5 minutes. There is no fee to apply, and every application is reviewed
            personally.
          </p>
          <ApplicationForm />
        </Container>
      </SectionTight>
    </>
  );
}
