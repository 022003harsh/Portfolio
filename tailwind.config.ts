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
      animation: {
        'text-slide': 'text-slide 7.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      "edu-sa": ["Edu SA Beginner", "cursive"],
      mono: ["Roboto Mono", "monospace"],
    },
    keyframes: {
      'text-slide': {
      '0%, 40%': {
        transform: 'translateY(0%)',
       },
      '50%, 90%': {
        transform: 'translateY(-35.33%)',
       },
      '100%': {
        transform: 'translateY(-66.66%)',
      },
    },
  },
  boxShadow: {
    'bg-box-1' : 'bg-gradient-to-r from-slate-900 to-slate-800'
  }

    },
  },
  plugins: [],
};
export default config;
