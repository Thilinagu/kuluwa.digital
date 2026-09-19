import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/shared/Container";
import { Eyebrow } from "@/components/shared/NodeIcon";

export default function NotFound() {
  return (
    <Container className="max-w-[520px] py-24">
      <Eyebrow>404</Eyebrow>
      <h1 className="font-heading text-4xl font-bold">We couldn&apos;t find that page.</h1>
      <p className="mt-3 text-text-secondary dark:text-text-dark-secondary">
        The page you&apos;re looking for may have moved or no longer exists.
      </p>
      <ButtonLink href="/" className="mt-6">
        Back to Home
      </ButtonLink>
    </Container>
  );
}
