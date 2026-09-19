/**
 * Canonical company/brand facts. Import from here rather than hardcoding
 * strings — this is the single place to update if contact details, the
 * legal entity name, or service areas change.
 */
export const COMPANY = {
  brandName: "Kuluwa.digital",
  legalName: "Kuluwa Pvt Ltd",
  // Stored for internal/legal use only (contracts, invoices, official
  // filings). Per an explicit content decision for this project, the
  // registration number is intentionally NOT rendered anywhere in the
  // public website UI or copy — do not add it to page content without
  // confirming that decision has changed.
  registrationNumber: "PV 00373042",
  phoneDisplay: "+94 72 680 7177",
  phoneHref: "tel:+94726807177",
  serviceAreas: ["Sri Lanka", "Australia"] as const,
  domain: "kuluwa.digital",
} as const;
