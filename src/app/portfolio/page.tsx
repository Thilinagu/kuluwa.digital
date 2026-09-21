import type { Metadata } from "next";
import { Container, SectionTight } from "@/components/shared/Container";
import { Eyebrow } from "@/components/shared/NodeIcon";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { NoticeBanner } from "@/components/shared/NoticeBanner";
import { CTABand } from "@/components/sections/CTABand";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { PORTFOLIO } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "See the kind of web, mobile, AI and custom software projects Kuluwa.digital's team can deliver for your business.",
};

export default function PortfolioPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Portfolio" }]} />
      <SectionTight>
        <Container>
          <Eyebrow>Portfolio</Eyebrow>
          <h1 className="max-w-[640px] font-heading text-4xl font-bold">What we've built for clients. What we're exploring next.</h1>
          <NoticeBanner>
            A working record of technology solutions we've delivered for real businesses,
            alongside concepts we've built to test ideas, sharpen our craft, and explore where
            things are heading. Every project is labelled clearly, so you always know which is
            which.
          </NoticeBanner>
          <PortfolioGrid projects={PORTFOLIO} />
        </Container>
      </SectionTight>
      <CTABand headline="Have a real project in mind?" sub="This is where your project could appear once delivered." primaryLabel="Start Your Project" primaryHref="/start-project" />
    </>
  );
}
