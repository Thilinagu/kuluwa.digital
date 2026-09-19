import type { Config } from "tailwindcss";

// Kuluwa.digital design tokens — sourced from the supplied brand identity
// document. Do not hardcode these hex values anywhere else in the codebase;
// always reference the Tailwind classes generated from this config
// (e.g. bg-surface, text-ink, border-border) so the palette stays centralized.
const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#140F2B",
        void: "#0F0B1E",
        coral: { DEFAULT: "#FF6B45", deep: "#E1502B" },
        cobalt: "#2E3192",
        gold: "#E8B04B",
        // Dark theme is now the site's permanent, only theme (project decision:
        // always show the Kuluwa Void look regardless of the visitor's system
        // setting). The base surface/text/border tokens below are therefore
        // pointed at the former "dark mode" values. The surface-dark-*,
        // text-dark-*, and border.dark tokens are kept defined (unused by
        // default) only so a future light/dark toggle could be reintroduced
        // without renaming classes throughout the codebase.
        surface: {
          0: "#0F0B1E",
          1: "#1B1630",
          2: "#2A2444",
        },
        "surface-dark": {
          0: "#0F0B1E",
          1: "#1B1630",
          2: "#2A2444",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#9C97B3",
        },
        "text-dark": {
          primary: "#FFFFFF",
          secondary: "#9C97B3",
        },
        success: "#2FAE6B",
        warning: "#E8B04B",
        error: "#E24C4C",
        border: {
          DEFAULT: "#2A2444",
          dark: "#2A2444",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "20px",
      },
      boxShadow: {
        sm: "0 1px 3px rgba(20, 15, 43, 0.08)",
        md: "0 4px 12px rgba(20, 15, 43, 0.12)",
        lg: "0 12px 32px rgba(20, 15, 43, 0.16)",
      },
      maxWidth: {
        wrap: "1180px",
      },
      spacing: {
        // Tailwind's default scale has no key for these two exact values used
        // throughout the original design (it jumps 16→20 and 20→24) —
        // "18" and "22" here follow the same n*0.25rem convention as
        // Tailwind's own defaults, restoring 72px and 88px respectively.
        "18": "4.5rem",
        "22": "5.5rem",
      },
      keyframes: {
        "node-pulse": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.55", transform: "scale(1.3)" },
        },
      },
      animation: {
        "node-pulse": "node-pulse 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
