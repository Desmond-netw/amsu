import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui_components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand_1: {
          50: "#e6f6eb",
          100: "#c0e8cd",
          200: "#99d9ae",
          300: "#73cb90",
          400: "#4cbd71",
          500: "#0e8d3c", // MAIN BRAND COLOR
          600: "#0c7c35",
          700: "#0a6a2d",
          800: "#085926",
          900: "#06471e",
        },
      },
    },
  },
  plugins: [],
};
export default config;
