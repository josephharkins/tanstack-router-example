/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  darkMode: "selector",
}
