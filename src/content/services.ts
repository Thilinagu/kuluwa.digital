import type { ServiceContent } from "@/types";

export const SERVICES: ServiceContent[] = [
  {
    slug: "web-development",
    icon: "web",
    name: "Web Development",
    tagline:
      "Corporate sites, e-commerce and web applications built to represent your business properly and hold up as it grows.",
    problem:
      "Many businesses are still running on outdated websites, template builders they've outgrown, or no website at all — while customers increasingly research and buy online first.",
    solution:
      "We design and build corporate websites, e-commerce stores, customer portals, booking systems and custom web applications on modern, maintainable foundations, matched to the size of the problem.",
    deliverables: [
      "Responsive, production-ready website or web app",
      "Content structure built for your team to update",
      "Performance and basic technical SEO groundwork",
      "Source code and deployment handover",
    ],
    suitableFor: [
      "Businesses replacing an outdated or template website",
      "Retailers and hospitality businesses needing e-commerce or bookings",
      "Companies needing a customer portal or internal web tool",
    ],
    process: [
      "Understand the business and audience",
      "Map the site structure and content",
      "Design the interface",
      "Build and integrate",
      "Test across devices",
      "Launch and hand over",
    ],
    techNote:
      "Choice of stack depends on scope — from a lean content site to a full application with a database and admin area, agreed with you before development starts.",
  },
  {
    slug: "mobile-app-development",
    icon: "mobile",
    name: "Mobile App Development",
    tagline: "Android, iOS and cross-platform apps for customers or internal teams.",
    problem:
      "A website alone doesn't fit every use case — field teams, loyal customers, or delivery workflows often need a dedicated app experience.",
    solution:
      "We build customer-facing apps, business apps and internal workforce tools using cross-platform frameworks where practical, or native development where the use case needs it.",
    deliverables: [
      "Working Android and/or iOS application",
      "App store submission support",
      "Basic analytics and crash-reporting setup",
      "Documentation for future updates",
    ],
    suitableFor: [
      "Businesses launching a customer loyalty or ordering app",
      "Companies needing an internal tool for field or delivery staff",
      "Startups building a mobile-first product",
    ],
    process: [
      "Define the core user journeys",
      "Wireframe key screens",
      "Design the interface",
      "Develop and integrate backend services",
      "Test on real devices",
      "Submit and launch",
    ],
    techNote:
      "We typically recommend a cross-platform framework for cost efficiency, moving to native development only where performance or platform-specific features require it.",
  },
  {
    slug: "ai-development",
    icon: "ai",
    name: "AI Development & Integration",
    tagline:
      "Practical AI features — assistants, document processing and workflow automation — scoped to what genuinely works today.",
    problem:
      "Businesses are curious about AI but unsure what's realistic, where it actually saves time, and where it introduces risk.",
    solution:
      "We build AI-powered features such as knowledge assistants, document processing, chat interfaces and automated workflows, using established AI providers and being direct about accuracy limitations.",
    deliverables: [
      "Scoped AI feature integrated into your product or workflow",
      "Clear documentation of what the system can and cannot do",
      "Guidance on ongoing usage costs",
      "Testing against real use cases before launch",
    ],
    suitableFor: [
      "Businesses wanting to automate repetitive document or support work",
      "Products that need a conversational or search-style assistant",
      "Teams exploring where AI fits before committing to a larger build",
    ],
    process: [
      "Identify a concrete, bounded use case",
      "Assess feasibility and data availability",
      "Prototype and test with real examples",
      "Refine based on results",
      "Integrate into your product",
      "Monitor after launch",
    ],
    techNote:
      "We do not promise fully autonomous or error-free AI systems — outputs are tested, scoped, and typically paired with human oversight for anything customer-facing or high-stakes.",
  },
  {
    slug: "iot-solutions",
    icon: "iot",
    name: "IoT Solutions",
    tagline: "Connected devices, sensors and monitoring dashboards for physical operations.",
    problem:
      "Manual monitoring — checking equipment, stock, or environmental conditions by hand — is slow and error-prone.",
    solution:
      "We design connected-device systems that collect sensor data and present it through simple dashboards, covering monitoring, automation triggers and device integration.",
    deliverables: [
      "Working sensor-to-dashboard data pipeline",
      "Device integration and configuration",
      "A monitoring dashboard your team can actually use",
      "Guidance on ongoing hardware and connectivity needs",
    ],
    suitableFor: [
      "Manufacturing or agriculture businesses needing remote monitoring",
      "Facilities wanting automated environmental or equipment alerts",
      "Businesses digitising a manual tracking process",
    ],
    process: [
      "Define what needs to be measured",
      "Select suitable sensors and connectivity",
      "Build the data pipeline",
      "Design the dashboard",
      "Test in the real environment",
      "Deploy and support",
    ],
    techNote:
      "Hardware selection depends on your environment and budget; we advise on suitable options rather than locking you into one vendor.",
  },
  {
    slug: "custom-software",
    icon: "software",
    name: "Custom Software",
    tagline:
      "Business management systems, CRM, ERP-style tools, POS and internal platforms built around how you actually work.",
    problem:
      "Off-the-shelf software often forces a business to change its process to fit the tool, or requires paying for features that are never used.",
    solution:
      "We build custom business systems — CRM, inventory, POS, workflow tools and internal platforms — designed around your existing process rather than a generic template.",
    deliverables: [
      "A working system tailored to your process",
      "User roles and access control appropriate to your team",
      "Data migration support where needed",
      "Training material for your team",
    ],
    suitableFor: [
      "Businesses outgrowing spreadsheets or generic software",
      "Companies with a workflow no off-the-shelf tool fits well",
      "Organisations needing several systems connected together",
    ],
    process: [
      "Map your current process",
      "Identify what to keep, automate, or change",
      "Design the system architecture",
      "Build in reviewable stages",
      "Test with real users",
      "Launch and support",
    ],
    techNote:
      "Architecture is chosen based on scale — a small internal tool and a multi-department system are built very differently, and we scope accordingly.",
  },
  {
    slug: "ui-ux-design",
    icon: "design",
    name: "UI/UX & Product Design",
    tagline:
      "Research, wireframes and interface design that make a digital product easier to use and easier to trust.",
    problem:
      "A technically functional product can still lose users if it's confusing, inconsistent, or simply unpleasant to use.",
    solution:
      "We carry out UX research, information architecture, wireframing, prototyping and interface design, and can also review and improve an existing product's usability.",
    deliverables: [
      "Wireframes and/or high-fidelity interface designs",
      "A reusable design system for consistency going forward",
      "Usability findings if a review was requested",
      "Developer-ready design files",
    ],
    suitableFor: [
      "Startups designing a product for the first time",
      "Businesses whose existing app or site is hard to use",
      "Teams needing a consistent design system across products",
    ],
    process: [
      "Research users and goals",
      "Map the information architecture",
      "Wireframe key flows",
      "Design the interface",
      "Prototype and test",
      "Hand off to development",
    ],
    techNote:
      "Design work is typically delivered in a shareable format and can plug directly into our own development process or be handed to another team.",
  },
  {
    slug: "seo-digital-marketing",
    icon: "seo",
    name: "SEO & Digital Marketing",
    tagline:
      "Technical SEO, on-page optimisation and digital campaigns focused on genuine visibility, not vanity metrics.",
    problem:
      "Many businesses have a website that customers simply never find, or run ads without a clear way to measure what's working.",
    solution:
      "We handle technical and on-page SEO, local search visibility, analytics setup and digital marketing campaigns, reporting honestly on what is and isn't moving.",
    deliverables: [
      "Technical SEO audit and fixes",
      "On-page optimisation across key pages",
      "Analytics and tracking setup",
      "Campaign reporting where marketing services are engaged",
    ],
    suitableFor: [
      "Businesses with a website that isn't generating enquiries",
      "Companies wanting clearer visibility into marketing performance",
      "Local businesses wanting to rank for local searches",
    ],
    process: [
      "Audit current performance",
      "Identify technical and content issues",
      "Prioritise fixes and opportunities",
      "Implement changes",
      "Track results",
      "Adjust based on data",
    ],
    techNote:
      "We do not guarantee specific search rankings — no agency honestly can — but we do commit to transparent, measurable work.",
  },
  {
    slug: "cloud-api-integration",
    icon: "cloud",
    name: "Cloud, API & Integration",
    tagline: "Connecting the systems you already use, and moving infrastructure to the cloud where it makes sense.",
    problem:
      "Businesses often run several disconnected systems — accounting, CRM, e-commerce — that require manual data re-entry between them.",
    solution:
      "We build API integrations, connect third-party systems, and handle cloud deployment and technical modernisation for existing applications.",
    deliverables: [
      "Working integration between your chosen systems",
      "Cloud deployment and configuration where applicable",
      "Documentation of the integration for your team",
      "Monitoring recommendations post-launch",
    ],
    suitableFor: [
      "Businesses manually re-entering data between systems",
      "Companies migrating an application to the cloud",
      "Teams needing a legacy system modernised",
    ],
    process: [
      "Map current systems and data flow",
      "Identify integration points",
      "Design the integration approach",
      "Build and test",
      "Deploy",
      "Monitor and support",
    ],
    techNote:
      "Approach depends heavily on the specific systems involved — we assess feasibility with each vendor's API before quoting.",
  },
];

export function getServiceBySlug(slug: string): ServiceContent | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
