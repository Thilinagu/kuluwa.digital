import Link from "next/link";

export type Crumb = { href?: string; label: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mx-auto max-w-wrap px-6 pt-6 mb-5 text-[13.5px] text-text-secondary dark:text-text-dark-secondary"
    >
      {items.map((item, i) => (
        <span key={item.label}>
          {item.href ? (
            <Link href={item.href} className="hover:text-coral">
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
          {i < items.length - 1 && " / "}
        </span>
      ))}
    </nav>
  );
}
