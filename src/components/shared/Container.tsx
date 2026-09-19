import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mx-auto max-w-wrap px-6", className)} {...props} />;
}

export function Section({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <section className={cn("py-14 sm:py-22", className)} {...props} />;
}

export function SectionTight({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <section className={cn("py-10 sm:py-14", className)} {...props} />;
}
