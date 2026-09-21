import type { PortfolioProject } from "@/types";

// All entries below are illustrative concept projects, not completed client
// work — each is flagged isConcept: true and must be labelled as such in the
// UI. Replace with real, approved case studies as they become available;
// never mark a fabricated project isConcept: false.
export const PORTFOLIO: PortfolioProject[] = [
  {
    slug: "project-cabana-hub",
    link: "https://cabana-hut-demo.vercel.app/#homepage",
    title: "Cabana Hub",
    category: "Projects",
    tags: ["Web Booking Platform", "Hospitality", "Sri Lanka", "Web Development", "Hospitality & Tourism"],
    summary: "A discovery-and-booking platform for Sri Lanka's cabanas, villas and eco stays — built to give independent nature-tourism properties a real online presence instead of relying solely on third-party listing sites.",
    isConcept: false,
    imagePath: "cabanahublogo.png",
    services: ["Web Development", "UI/UX Design"],
    ongoing: true,
  },
  {
    slug: "project-labnova-scientific",
    link: "https://www.labnovascientific.com.au/",
    title: "LabNova Scientific",
    category: "Projects",
    tags: ["MVP", "B2B", "Australia", "Web Development", "Scientific & Laboratory Supply"],
    summary: "A Phase 1 MVP website for an Australian laboratory supplies business, built to establish a credible online presence for research, education and healthcare customers from day one.",
    isConcept: false,
    imagePath: "New Logo 4.png",
    services: ["Web Development", "UI/UX Design"],
    ongoing: false,
  },
  {
    slug: "project-wisdom-clean",
    link: "https://wisdomclean.com.au/",
    title: "Wisdom Clean",
    category: "Projects",
    tags: ["Ongoing Support", "Melbourne", "Services Business", "Website Care & Support", "Facilities & Cleaning Services"],
    summary: "Ongoing operations, maintenance and support for a Melbourne commercial and residential cleaning company's website — keeping a live, lead-generating business site running smoothly day to day.",
    isConcept: false,
    imagePath: "wisdomlogo.png",
    services: ["Operations", "Maintenance & Supportn"],
    ongoing: false,
  },
  {
    slug: "project-ravan-global",
    link: "https://ravanglobal.com.au/",
    title: "Ravan Global",
    category: "Projects",
    tags: ["Ongoing Support", "B2B E-Commerce", "Australia", "Website Care & Support", "Industrial Supply & Workplace Safety (B2B)"],
    summary: "Ongoing operations, maintenance and support for an Australian industrial, safety and workplace-supplies distributor's e-commerce catalogue and quote request platform.",
    isConcept: false,
    imagePath: "Ravan.png",
    services: ["Operations", "Maintenance & Supportn"],
    ongoing: false,
  },
];

export function getPortfolioBySlug(slug: string): PortfolioProject | undefined {
  return PORTFOLIO.find((p) => p.slug === slug);
}
