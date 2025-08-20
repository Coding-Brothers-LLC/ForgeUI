import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core Theme Colors
        background: "var(--background, #1B1B1D)",
        foreground: "var(--foreground, #E5E5E7)",
        // Core Colors with Branding
        "forge-primary": "var(--forge-primary, #FF4500)",
        "forge-primary-light": "var(--forge-primary-light, #FF6347)",
        "forge-primary-dark": "var(--forge-primary-dark, #D73800)",
        "forge-secondary": "var(--forge-secondary, #FFA500)",
        "forge-secondary-light": "var(--forge-secondary-light, #FFB347)",
        "forge-secondary-dark": "var(--forge-secondary-dark, #CC8400)",

        // Neutral Palette
        "forge-background": "var(--forge-background, #1B1B1D)",
        "forge-foreground": "var(--forge-foreground, #E5E5E7)",
        "forge-border": "var(--forge-border, #5A5A5D)",

        // Additional Colors (For Accents/Highlights)
        "forge-accent-amber": "#FFA500",
        "forge-accent-steel": "#5A5A5D",
        "forge-accent-charcoal": "#2C2C2E",

        // Utility Colors
        "forge-light-gray": "#E5E5E7",
        "forge-dark-gray": "#1B1B1D",
        "forge-off-white": "#F2F2F2",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
export default config;
