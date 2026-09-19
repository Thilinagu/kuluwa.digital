import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";
import { SERVICES } from "@/content/services";
import { PORTFOLIO } from "@/content/portfolio";
import { OPPORTUNITIES } from "@/content/opportunities";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/portfolio",
    "/about",
    "/why-choose-us",
    "/how-we-work",
    "/join-network",
    "/opportunities",
    "/apply",
    "/start-project",
    "/contact",
    "/faq",
    "/privacy",
    "/terms",
    "/cookies",
  ].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = SERVICES.map((s) => ({ url: `${SITE.url}/services/${s.slug}`, lastModified: new Date() }));
  const portfolioRoutes = PORTFOLIO.map((p) => ({ url: `${SITE.url}/portfolio/${p.slug}`, lastModified: new Date() }));
  const opportunityRoutes = OPPORTUNITIES.map((o) => ({
    url: `${SITE.url}/opportunities/${o.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes, ...portfolioRoutes, ...opportunityRoutes];
}
