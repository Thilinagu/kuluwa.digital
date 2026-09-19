import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/shared/Container";

export function CTABand({
  headline,
  sub,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: {
  headline: string;
  sub?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="border-y border-border bg-surface-1 py-10 sm:py-14 dark:border-border-dark dark:bg-surface-dark-1">
      <Container className="flex flex-wrap items-center justify-between gap-8">
        <div className="max-w-[520px]">
          <h2 className="font-heading text-[28px] font-semibold">{headline}</h2>
          {sub && <p className="mt-2.5 text-text-secondary dark:text-text-dark-secondary">{sub}</p>}
        </div>
        <div className="flex flex-wrap gap-3.5">
          <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
          {secondaryLabel && secondaryHref && (
            <ButtonLink href={secondaryHref} variant="secondary">
              {secondaryLabel}
            </ButtonLink>
          )}
        </div>
      </Container>
    </section>
  );
}
