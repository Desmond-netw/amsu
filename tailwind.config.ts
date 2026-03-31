import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand_1: {
          50: "#F7E9E4",
          100: "#F0D3C9",
          200: "#E1A78F",
          300: "#D27B55",
          400: "#C3502B",
          500: "#873318", // base
          600: "#6C2913",
          700: "#521F0E",
          800: "#38150A",
          900: "#1F0C06",
        },
      },
    },
  },
  plugins: [],
};
export default config;
