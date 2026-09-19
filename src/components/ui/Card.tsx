import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rounded-lg border border-border bg-surface-1 p-7 dark:border-border-dark dark:bg-surface-dark-1", className)}
      {...props}
    />
  );
}

export function CardFlat({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-lg border border-border p-7 dark:border-border-dark", className)} {...props} />;
}
