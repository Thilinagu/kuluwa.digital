export type NavLink = { href: string; label: string; highlight?: boolean };

export const PRIMARY_NAV: NavLink[] = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/why-choose-us", label: "Why Us" },
  { href: "/join-network", label: "Join the Network", highlight: true },
  { href: "/contact", label: "Contact" },
];

export const FOOTER_COMPANY_LINKS: NavLink[] = [
  { href: "/about", label: "About Us" },
  { href: "/why-choose-us", label: "Why Choose Us" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const FOOTER_NETWORK_LINKS: NavLink[] = [
  { href: "/join-network", label: "Join the Kuluwa Network" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/apply", label: "Team Application" },
];

export const FOOTER_LEGAL_LINKS: NavLink[] = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/cookies", label: "Cookie Policy" },
];
