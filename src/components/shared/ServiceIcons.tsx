/**
 * Exact icon set from the original design — one distinct monoline icon per
 * service, matching the source artifact's ICONS object precisely (same
 * paths, same 1.6 stroke-width, same viewBox). Do not swap these for a
 * generic icon library; the brand doc specifies custom-drawn icons matching
 * the logo's stroke weight.
 */
import type { SVGProps } from "react";

export type ServiceIconKey =
  | "web"
  | "mobile"
  | "ai"
  | "iot"
  | "software"
  | "design"
  | "seo"
  | "cloud";

const PATHS: Record<ServiceIconKey, React.ReactNode> = {
  web: (
    <path
      d="M3 12h18M3 12a9 9 0 0118 0M3 12a9 9 0 0018 0M12 3v18"
      strokeWidth="1.6"
      strokeLinecap="round"
      fill="none"
    />
  ),
  mobile: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2" strokeWidth="1.6" fill="none" />
      <path d="M11 18h2" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  ai: (
    <>
      <circle cx="12" cy="12" r="3" strokeWidth="1.6" fill="none" />
      <path
        d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M6 18l2-2M16 8l2-2"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </>
  ),
  iot: (
    <>
      <circle cx="12" cy="12" r="2.2" strokeWidth="1.6" fill="none" />
      <circle cx="4" cy="6" r="1.6" strokeWidth="1.6" fill="none" />
      <circle cx="20" cy="6" r="1.6" strokeWidth="1.6" fill="none" />
      <circle cx="4" cy="18" r="1.6" strokeWidth="1.6" fill="none" />
      <path d="M9.6 10.4L5.2 7M14.4 10.4L18.8 7M9.6 13.6L5.2 17" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  software: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" strokeWidth="1.6" fill="none" />
      <path
        d="M8 9l-2 3 2 3M16 9l2 3-2 3M13 8l-2 8"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  ),
  design: <path d="M4 20l1-4 11-11 3 3-11 11-4 1z" strokeWidth="1.6" strokeLinejoin="round" fill="none" />,
  seo: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" strokeWidth="1.6" fill="none" />
      <path d="M20 20l-5-5" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  cloud: (
    <path
      d="M7 18a4 4 0 01-.5-7.97A5 5 0 0116.9 8.05 4 4 0 0117 18H7z"
      strokeWidth="1.6"
      strokeLinejoin="round"
      fill="none"
    />
  ),
};

export function ServiceIcon({ name, ...props }: { name: ServiceIconKey } & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {PATHS[name]}
    </svg>
  );
}
