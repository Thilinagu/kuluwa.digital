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
    subCategory: "Web Development",
    tags: ["Web Platform", "Hospitality", "Sri Lanka"],
    summary: "A discovery-and-booking platform for Sri Lanka's cabanas, villas and eco stays — built to give independent nature-tourism properties a real online presence instead of relying solely on third-party listing sites.",
    isConcept: false,
    imagePath: "cabanahublogo.png",
    industry: "Hospitality & Tourism",
    services: ["Web Development", "UI/UX Design"],
    ongoing: true,
  },
  {
    slug: "project-labnova-scientific",
    link: "https://www.labnovascientific.com.au/",
    title: "LabNova Scientific",
    category: "Projects",
    subCategory: "Web Development",
    tags: ["MVP", "B2B", "Australia"],
    summary: "A Phase 1 MVP website for an Australian laboratory supplies business, built to establish a credible online presence for research, education and healthcare customers from day one.",
    isConcept: false,
    imagePath: "New Logo 4.png",
    industry: "Scientific & Laboratory Supply",
    services: ["Web Development", "UI/UX Design"],
    ongoing: false,
  },
  {
    slug: "project-wisdom-clean",
    link: "https://wisdomclean.com.au/",
    title: "Wisdom Clean",
    category: "Projects",
    subCategory: "Website Care & Support",
    tags: ["Ongoing Support", "Melbourne", "Services Business"],
    summary: "Ongoing operations, maintenance and support for a Melbourne commercial and residential cleaning company's website — keeping a live, lead-generating business site running smoothly day to day.",
    isConcept: false,
    imagePath: "wisdomlogo.png",
    industry: "Facilities & Cleaning Services",
    services: ["Operations", "Maintenance & Supportn"],
    ongoing: false,
  },
  {
    slug: "project-ravan-global",
    link: "https://ravanglobal.com.au/",
    title: "Ravan Global",
    category: "Projects",
    subCategory: "Website Care & Support",
    tags: ["Ongoing Support", "B2B E-Commerce", "Australia"],
    summary: "Ongoing operations, maintenance and support for an Australian industrial, safety and workplace-supplies distributor's e-commerce catalogue and quote request platform.",
    isConcept: false,
    imagePath: "Ravan.png",
    industry: "Industrial Supply & Workplace Safety (B2B)",
    services: ["Operations", "Maintenance & Supportn"],
    ongoing: false,
  },
];

export function getPortfolioBySlug(slug: string): PortfolioProject | undefined {
  return PORTFOLIO.find((p) => p.slug === slug);
}
