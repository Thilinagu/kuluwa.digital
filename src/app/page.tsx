import { ButtonLink } from "@/components/ui/Button";
import { Container, Section, SectionTight } from "@/components/shared/Container";
import { Eyebrow, Node } from "@/components/shared/NodeIcon";
import { ServiceCard } from "@/components/services/ServiceCard";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { SERVICES } from "@/content/services";
import { PORTFOLIO } from "@/content/portfolio";

const PROBLEMS = [
  "Outdated websites that no longer represent the business",
  "Manual processes that eat up staff time",
  "Disconnected systems that don't talk to each other",
  "Poor visibility in search results",
  "Ideas that have never been turned into working software",
];

const WORK_STEPS = ["Discover", "Plan & Design", "Develop & Test", "Launch & Improve"];

export default function HomePage() {
  return (
    <>
      <section className="pb-24 pt-18">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <Eyebrow>Technology &amp; Digital Solutions · Sri Lanka &amp; Australia</Eyebrow>
            <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-[-0.02em] md:text-[56px]">
              Turning business challenges into digital solutions.
            </h1>
            <p className="mt-5 max-w-[560px] text-lg text-text-secondary dark:text-text-dark-secondary">
              Kuluwa.digital helps businesses design, build and improve websites, apps, AI features and custom
              software — through an experienced development team that has worked together for over a decade.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <ButtonLink href="/start-project">Start Your Project</ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                Explore Our Services
              </ButtonLink>
            </div>
          </div>
          <HeroArt />
        </Container>
      </section>

      <SectionTight>
        <Container>
          <div className="flex flex-wrap overflow-hidden rounded-lg border border-border dark:border-border-dark">
            {[
              ["10+ yrs", "Combined experience of the Kuluwa development team"],
              ["8", "Core technology disciplines under one team"],
              ["24/7", "Continuity across time zones for our clients"],
              ["🇱🇰🇦🇺", "Working-day overlap with Australian business hours"],
            ].map(([num, label]) => (
              <div key={label} className="min-w-[200px] flex-1 border-r border-border p-[26px_24px] last:border-r-0 dark:border-border-dark">
                <span className="mb-1 block font-heading text-2xl font-bold">{num}</span>
                <span className="text-sm text-text-secondary dark:text-text-dark-secondary">{label}</span>
              </div>
            ))}
          </div>
        </Container>
      </SectionTight>

      <Section>
        <Container>
          <Eyebrow>What we do</Eyebrow>
          <h2 className="max-w-[560px] font-heading text-[34px] font-semibold">
            Technology capability across the areas your business actually needs.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.slice(0, 8).map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-border bg-surface-1 dark:border-border-dark dark:bg-surface-dark-1">
        <Container className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <Eyebrow>The problem we solve</Eyebrow>
            <h2 className="font-heading text-[30px] font-semibold">
              Most digital problems come down to the same handful of causes.
            </h2>
          </div>
          <div>
            <ul className="grid gap-3.5">
              {PROBLEMS.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Node className="mt-2" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-text-secondary dark:text-text-dark-secondary">
              Our team works through discovery and analysis first, so the solution we build actually matches
              the problem — not a generic template.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Portfolio</Eyebrow>
              <h2 className="font-heading text-[30px] font-semibold">Recent Projects.</h2>
            </div>
            <a href="/portfolio" className="font-semibold text-text-primary hover:text-coral dark:text-text-dark-primary">
              View all projects →
            </a>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PORTFOLIO.slice(0, 3).map((p) => (
              <PortfolioCard key={p.slug} project={p} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-border bg-surface-1 dark:border-border-dark dark:bg-surface-dark-1">
        <Container>
          <Eyebrow>How we work</Eyebrow>
          <h2 className="max-w-[560px] font-heading text-[30px] font-semibold">
            A structured process, from first conversation to launch.
          </h2>
          <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WORK_STEPS.map((t, i) => (
              <div key={t} className="rounded-lg border border-border p-7 dark:border-border-dark">
                <span className="font-mono text-[13px] text-coral">0{i + 1}</span>
                <h3 className="mt-2.5 text-[17px] font-semibold">{t}</h3>
              </div>
            ))}
          </div>
          <a href="/how-we-work" className="mt-6 inline-block font-semibold text-text-primary hover:text-coral dark:text-text-dark-primary">
            See the full process →
          </a>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="rounded-lg border border-border bg-surface-1 p-7 dark:border-border-dark dark:bg-surface-dark-1">
            <h2 className="font-heading text-[26px] font-semibold">
              Have a digital idea? Let&apos;s turn it into something real.
            </h2>
            <p className="mt-3 text-text-secondary dark:text-text-dark-secondary">
              Tell us about your business problem and our team will get back to you to discuss requirements.
            </p>
            <div className="mt-[22px] flex flex-wrap gap-3">
              <ButtonLink href="/start-project">Start Your Project</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact Our Team
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-lg bg-ink p-7 text-white">
            <h2 className="font-heading text-[26px] font-semibold text-white">
              Your skills could help build what comes next.
            </h2>
            <p className="mt-3 text-[#C8C4DA]">
              Kuluwa.digital is expanding its professional network across Sri Lanka — for developers, designers,
              analysts and business-development contributors alike.
            </p>
            <div className="mt-[22px]">
              <ButtonLink href="/opportunities">Explore Opportunities</ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function HeroArt() {
  return (
    <svg viewBox="0 0 480 420" className="w-full" role="img" aria-label="Abstract network diagram">
      <g fill="none" stroke="currentColor" strokeWidth="1.4" className="text-border dark:text-border-dark">
        <path d="M40 340 L180 220 L320 260 L440 130" />
        <path d="M180 220 L200 90" />
        <path d="M320 260 L370 380" />
        <path d="M60 90 L200 90 L320 260" />
      </g>
      <circle cx="200" cy="90" r="7" fill="#2E3192" />
      <circle cx="440" cy="130" r="7" fill="#2E3192" />
      <circle cx="320" cy="260" r="11" fill="#FF6B45" className="animate-node-pulse" />
      <g stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="translate(150,20) scale(0.6)">
        <path d="M 62,38 L 62,162" />
        <path d="M 62,100 L 148,38" />
        <path d="M 62,100 L 148,158" />
      </g>
    </svg>
  );
}
