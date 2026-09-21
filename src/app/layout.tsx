import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/footer/Footer";
import { SITE } from "@/config/site";
import { GoogleAnalytics } from '@next/third-parties/google';

// Using Sora as the display/heading font. The original brand doc specifies
// "General Sans" — swap this for General Sans (via next/font/local, once
// licensed and self-hosted) before final production launch if you want an
// exact match; Sora is a close geometric-sans placeholder in the meantime.
const sora = Sora({ subsets: ["latin"], variable: "--font-heading", weight: ["400", "500", "600", "700"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.defaultTitle, template: "%s | Kuluwa.digital" },
  description: SITE.defaultDescription,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
    locale: SITE.locale,
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
  },
  robots: { index: true, follow: true },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
};

export const viewport: Viewport = {
  themeColor: "#0F0B1E",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kuluwa.digital",
              legalName: "Kuluwa Pvt Ltd",
              url: SITE.url,
              areaServed: [{ "@type": "Country", name: "Sri Lanka" }, { "@type": "Country", name: "Australia" }],
              contactPoint: { "@type": "ContactPoint", telephone: "+94-72-680-7177", contactType: "customer service" },
            }),
          }}
        />
        {gtmId && (
          <Script
            id="gtm-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`,
            }}
          />
        )}
      </head>
      <body className="font-body">
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        {gaId && <GoogleAnalytics gaId={gaId} />}
        <Footer />
      </body>
    </html>
  );
}
