import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { ink: "#090b10", lime: "#c6f36b", muted: "#8d929e" }, fontFamily: { sans: ["Arial", "sans-serif"] } } },
  plugins: []
};
export default config;