import { cn } from "@/lib/utils";
import type { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from "react";

const fieldBase =
  "w-full rounded-sm border border-border bg-surface-0 px-3.5 py-3 text-text-primary dark:border-border-dark dark:bg-surface-dark-0 dark:text-text-dark-primary focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/20";

export function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="mb-[7px] block text-sm font-semibold">
      {children}
    </label>
  );
}

export function ErrorMessage({ children }: { children?: string }) {
  if (!children) return null;
  return <p className="mt-1.5 text-[13px] font-medium text-error">{children}</p>;
}

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(fieldBase, className)} {...props} />;
}

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(fieldBase, className)} {...props} />;
}

export function Select({ className, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className={cn(fieldBase, className)} {...props} />;
}
