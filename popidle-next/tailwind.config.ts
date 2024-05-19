import type { Config } from "tailwindcss";
import gameConfig from "./data/config/game-config";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'popidle-banner-bg': gameConfig.colourBannerBackground,
        'popidle-banner-text': gameConfig.colourBannerForeground
      }
    }
  },
  plugins: [],
};
export default config;
