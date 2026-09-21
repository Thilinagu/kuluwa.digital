import Link from "next/link";
import { COMPANY } from "@/config/company";
import { FOOTER_COMPANY_LINKS, FOOTER_NETWORK_LINKS, FOOTER_LEGAL_LINKS } from "@/config/nav";
import { SERVICES } from "@/content/services";
import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/navigation/Logo";

export function Footer() {
  return (
    <footer className="mt-10 bg-void pb-[28px] pt-16 text-white">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="mb-3.5 flex items-center gap-2.5">
              <Logo className="h-7 w-7 text-white" />
              <span className="font-heading text-lg font-bold">
                kuluwa<span className="text-coral">.digital</span>
              </span>
            </Link>
            <p className="max-w-[280px] text-[14.5px] text-text-dark-secondary">
              A Sri Lankan technology brand delivering web, mobile, AI, IoT and custom software to clients across
              Sri Lanka and Australia — and building a nationwide network of technology professionals.
            </p>
          </div>

          <div>
            <h4 className="mb-3.5 text-[13px] font-semibold text-text-dark-secondary">Services</h4>
            <ul className="space-y-2.5 text-[14.5px]">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-text-dark-secondary hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-text-dark-secondary hover:text-white">
                  View all services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3.5 text-[13px] font-semibold text-text-dark-secondary">Company</h4>
            <ul className="space-y-2.5 text-[14.5px]">
              {FOOTER_COMPANY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-text-dark-secondary hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3.5 text-[13px] font-semibold text-text-dark-secondary">Join the Network</h4>
            <ul className="space-y-2.5 text-[14.5px]">
              {FOOTER_NETWORK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-text-dark-secondary hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="mb-3.5 mt-6 text-[13px] font-semibold text-text-dark-secondary">Contact</h4>
            <a href={COMPANY.phoneHref} className="text-[14.5px] text-text-dark-secondary hover:text-white">
              {COMPANY.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-between gap-3 border-t border-border-dark pt-6 text-[13px] text-text-dark-secondary">
          <span>
            Kuluwa.digital is a technology brand operated by {COMPANY.legalName}.
          </span>
          <span className="flex gap-4">
            {FOOTER_LEGAL_LINKS.map((l) => (
              // <Link key={l.href} href={l.href} className="hover:text-white">
              //   {l.label}
              // </Link>
              <span key={l.href} className="text-gray-400 cursor-not-allowed">
                {l.label}
              </span>
            ))}
          </span>
        </div>
        <div className="mt-12 text-[13px] text-text-dark-secondary">
          © {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
