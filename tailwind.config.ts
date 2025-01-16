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
        background: "var(--background, #1B1B1D)",
        foreground: "var(--foreground, #E5E5E7)", 
        primary: "var(--primary-accent, #FF4500)", 
        secondary: "var(--secondary-accent, #FFA500)",
        neutralBorder: "var(--neutral-border, #5A5A5D)",
        crimsonOrange: "#FF4500",
        darkBackground: "#1B1B1D",
        charcoalGray: "#2C2C2E",
        amberHighlight: "#FFA500",
        steelGray: "#5A5A5D",
        lightGray: "#E5E5E7",
        offWhite: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
export default config;
