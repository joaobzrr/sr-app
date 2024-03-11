/** @type {import('tailwindcss').Config} */
import { join } from "node:path";

const PACKAGE_ROOT = __dirname;

export default {
  content: [
    join(PACKAGE_ROOT, "src/**/*.{js,jsx,ts,tsx}"),
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))"
      }
    },
  },
  plugins: []
}

