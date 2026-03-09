import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A1F44",
        cobalt: "#2563EB",
        cyan: "#3B82F6",
        highlight: "#60A5FA",
        glow: "#60A5FA",
        slate: "#BFDBFE",
        frost: "#FFFFFF"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(59,130,246,0.35), 0 0 34px rgba(96,165,250,0.3)"
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Manrope", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
