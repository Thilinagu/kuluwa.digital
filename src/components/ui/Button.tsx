import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "default" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary: "bg-coral text-ink hover:bg-coral-deep hover:text-white",
  secondary: "bg-transparent border border-border dark:border-border-dark text-text-primary dark:text-text-dark-primary hover:border-coral hover:text-coral",
  ghost: "bg-transparent text-text-primary dark:text-text-dark-primary hover:text-coral px-1.5 py-2.5",
};

const sizes: Record<Size, string> = {
  default: "px-[26px] py-3.5 text-[15px]",
  sm: "px-4 py-[9px] text-sm",
};

type CommonProps = { variant?: Variant; size?: Size; className?: string };

export function Button({
  variant = "primary",
  size = "default",
  className,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}

export function ButtonLink({
  variant = "primary",
  size = "default",
  className,
  href,
  ...props
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}
