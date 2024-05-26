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
        'popidle-banner-text': gameConfig.colourBannerForeground,
        'popidle-info-bg': '#1DD6FA',
        'popidle-info-fg': '#000',
        'popidle-success-bg': '#48c78e',
        'popidle-success-fg': '#fff',
        'popidle-warning-bg': '#EEF510',
        'popidle-warning-fg': '#000',
        'popidle-danger-bg': '#ff4fa7',
        'popidle-danger-fg': '#fff',
      }
    }
  },
  plugins: [],
};
export default config;
