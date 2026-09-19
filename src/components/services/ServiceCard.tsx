import Link from "next/link";
import type { ServiceContent } from "@/types";
import { ServiceIcon } from "@/components/shared/ServiceIcons";

export function ServiceCard({ service }: { service: ServiceContent }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="block rounded-lg border border-border bg-surface-1 p-7 transition-colors hover:border-coral dark:border-border-dark dark:bg-surface-dark-1"
    >
      <div className="mb-[18px] flex h-11 w-11 flex-none items-center justify-center rounded-sm bg-surface-2 dark:bg-surface-dark-2">
        <ServiceIcon name={service.icon} className="h-[22px] w-[22px] stroke-coral" />
      </div>
      <h3 className="mb-2 text-[17px] font-heading font-semibold">{service.name}</h3>
      <p className="text-[14px] text-text-secondary dark:text-text-dark-secondary">{service.tagline}</p>
      <span className="mt-3.5 inline-block text-[14.5px] font-semibold text-text-primary hover:text-coral dark:text-text-dark-primary">
        View service →
      </span>
    </Link>
  );
}
