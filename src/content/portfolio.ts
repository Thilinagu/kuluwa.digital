import type { PortfolioProject } from "@/types";

// All entries below are illustrative concept projects, not completed client
// work — each is flagged isConcept: true and must be labelled as such in the
// UI. Replace with real, approved case studies as they become available;
// never mark a fabricated project isConcept: false.
export const PORTFOLIO: PortfolioProject[] = [
  {
    slug: "concept-hospitality-booking",
    title: "Boutique Hotel Booking Platform",
    category: "Web Development",
    tags: ["Web App", "Hospitality", "Bookings"],
    summary:
      "A concept illustrating the kind of direct-booking website and availability system Kuluwa.digital can deliver for a small hotel group.",
    challenge:
      "Independent hotels often rely entirely on third-party booking platforms and lose margin on every reservation.",
    solution:
      "A concept direct-booking website with real-time availability, room management and a simple guest experience, reducing dependency on commission-based platforms.",
    features: [
      "Room availability and booking engine",
      "Guest-facing responsive design",
      "Admin dashboard for reservations",
      "Payment gateway integration point",
    ],
    tech: ["Web application", "Booking logic", "Responsive design"],
    isConcept: true,
    relatedServiceSlug: "web-development",
  },
  {
    slug: "concept-retail-inventory",
    title: "Retail Inventory & POS System",
    category: "Business Software",
    tags: ["Custom Software", "Retail", "POS"],
    summary:
      "A concept illustrating a point-of-sale and inventory system for a multi-branch retail business.",
    challenge:
      "Retailers with more than one location often struggle to see stock levels across branches in real time.",
    solution:
      "A concept centralised POS and inventory system giving branch-level and head-office visibility into stock, sales and reordering.",
    features: [
      "Point-of-sale interface",
      "Centralised inventory tracking",
      "Sales reporting dashboard",
      "Multi-branch user roles",
    ],
    tech: ["Custom software", "Database-driven system", "Role-based access"],
    isConcept: true,
    relatedServiceSlug: "custom-software",
  },
  {
    slug: "concept-field-service-app",
    title: "Field Service Mobile App",
    category: "Mobile Applications",
    tags: ["Mobile", "Field Service", "Workforce"],
    summary:
      "A concept mobile app supporting field technicians managing service visits and reports.",
    challenge: "Field service teams frequently rely on paper job sheets, causing delays and lost information.",
    solution:
      "A concept mobile app allowing technicians to receive jobs, log visit details, and submit reports directly from the field, syncing to a central system.",
    features: [
      "Job assignment and scheduling",
      "Offline-capable data entry",
      "Photo and signature capture",
      "Sync to central dashboard",
    ],
    tech: ["Cross-platform mobile app", "Offline sync", "Dashboard integration"],
    isConcept: true,
    relatedServiceSlug: "mobile-app-development",
  },
  {
    slug: "concept-ai-support-assistant",
    title: "AI Support Assistant Concept",
    category: "AI",
    tags: ["AI", "Chat Interface", "Automation"],
    summary:
      "A concept AI-assisted support interface that handles common customer questions and routes complex ones to a human team.",
    challenge: "Support teams spend significant time answering the same repetitive questions.",
    solution:
      "A concept AI assistant trained on a business's own documentation to answer routine questions instantly, with clear handoff to a human agent for anything it can't confidently resolve.",
    features: [
      "AI chat interface",
      "Knowledge-base grounded answers",
      "Human handoff logic",
      "Usage and accuracy monitoring",
    ],
    tech: ["AI integration", "Chat interface", "Monitoring dashboard"],
    isConcept: true,
    relatedServiceSlug: "ai-development",
  },
];

export function getPortfolioBySlug(slug: string): PortfolioProject | undefined {
  return PORTFOLIO.find((p) => p.slug === slug);
}
