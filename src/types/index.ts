export type ServiceContent = {
  slug: string;
  name: string;
  icon: "web" | "mobile" | "ai" | "iot" | "software" | "design" | "seo" | "cloud";
  tagline: string;
  problem: string;
  solution: string;
  deliverables: string[];
  suitableFor: string[];
  process: string[];
  techNote: string;
};

export type PortfolioProject = {
  slug: string;
  link: string;
  title: string;
  category: string;
  subCategory: string;
  tags: string[];
  summary: string;
  isConcept: boolean;
  imagePath: string;
  industry: string;
  services: string[];
  ongoing: boolean;
};

export type OpportunityStatus = "open" | "limited" | "closed" | "soon";

export type Opportunity = {
  slug: string;
  title: string;
  category: string;
  status: OpportunityStatus;
  location: string;
  engagementType: string;
  overview: string;
  responsibilities: string[];
  required: string[];
  preferred: string[];
  experience: string;
  communication: string;
  compensation: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};
