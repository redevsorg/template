import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#c5eff6",
          secondary: "#f5e4ff",
          accent: "#e0f2fe",
          neutral: "#ffffff",
          "base-100": "#1d7c8d",
          info: "#c5eff6",
          success: "#d1fae5",
          warning: "#fef9c3",
          error: "#ffe4e6",
        },
      },
    ],
  },
};
export default config;
