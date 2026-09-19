import { Container, Section } from "@/components/shared/Container";
import { ButtonLink } from "@/components/ui/Button";
import { NoticeBanner } from "@/components/shared/NoticeBanner";

const TITLES: Record<string, string> = {
  project: "Thanks — your project enquiry is in.",
  apply: "Thanks — your application is in.",
  contact: "Thanks — your message is in.",
};
const BODIES: Record<string, string> = {
  project: "Our team will review your project details and get back to you at the contact information you provided.",
  apply: "Our team will review your application against current opportunities. If it's a good fit, we'll be in touch about next steps, which may include a short task or interview.",
  contact: "Our team will get back to you as soon as possible.",
};

export default function ThankYouPage({ searchParams }: { searchParams: { type?: string; ref?: string } }) {
  const kind = searchParams.type ?? "contact";
  const ref = searchParams.ref ?? "—";

  return (
    <Section>
      <Container className="max-w-[560px]">
        <h1 className="font-heading text-3xl font-bold">{TITLES[kind] ?? TITLES.contact}</h1>
        <p className="mt-3.5 text-text-secondary dark:text-text-dark-secondary">{BODIES[kind] ?? BODIES.contact}</p>
        <div className="my-5 inline-block rounded-sm border border-dashed border-border bg-surface-1 px-4.5 px-5 py-4 font-mono text-[15px] dark:border-border-dark dark:bg-surface-dark-1">
          Reference: {ref}
        </div>
        <NoticeBanner>
          Your submission has been received and emailed to our team. Please keep your reference number for your
          own records.
        </NoticeBanner>
        <ButtonLink href="/" variant="secondary" className="mt-3">
          Back to Home
        </ButtonLink>
      </Container>
    </Section>
  );
}
