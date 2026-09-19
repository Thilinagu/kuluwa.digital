"use client";

import Link from "next/link";
import { useState } from "react";
import { PRIMARY_NAV } from "@/config/nav";
import { COMPANY } from "@/config/company";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface-0/90 backdrop-blur-md dark:border-border-dark dark:bg-surface-dark-0/90">
      <Container className="flex h-[76px] items-center justify-between gap-6">
        <Link href="/" className="flex flex-none items-center gap-2.5" aria-label="Kuluwa.digital home">
          <Logo className="h-[30px] w-[30px]" />
          <span className="font-heading text-[19px] font-bold">
            kuluwa<span className="font-medium text-coral">.digital</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {PRIMARY_NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-sm px-3.5 py-2.5 text-[14.5px] font-medium text-text-secondary hover:text-text-primary dark:text-text-dark-secondary dark:hover:text-text-dark-primary",
                link.highlight &&
                  "rounded-full bg-coral/10 px-4 font-semibold text-coral-deep hover:bg-coral hover:text-ink dark:text-coral",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-none items-center gap-2.5">
          <ButtonLink href="/contact" variant="secondary" size="sm" className="hidden lg:inline-flex">
            Talk to Our Team
          </ButtonLink>
          <ButtonLink href="/start-project" size="sm" className="hidden lg:inline-flex">
            Start Your Project
          </ButtonLink>
          <button
            className="p-2 lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </Container>

      {open && (
        <div className="flex flex-col border-t border-border px-6 pb-6 pt-2 dark:border-border-dark">
          {PRIMARY_NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "border-b border-border py-3 font-medium dark:border-border-dark",
                link.highlight && "font-bold text-coral",
              )}
            >
              {link.label}
            </Link>
          ))}
          <ButtonLink href="/start-project" className="mt-3.5 w-full">
            Start Your Project
          </ButtonLink>
          <a href={COMPANY.phoneHref} className="mt-3 text-center text-sm text-text-secondary">
            {COMPANY.phoneDisplay}
          </a>
        </div>
      )}
    </header>
  );
}
