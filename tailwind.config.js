/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cinza-100": "var(--gray-100)",
        "cinza-300": "var(--gray-300)",
        "cinza-400": "var(--gray-400)",
        "cinza-600": "var(--gray-600)",
        "cinza-700": "var(--gray-700)",
        "cinza-800": "var(--gray-800)",
        "cinza-900": "var(--gray-900)",
        "verde-300": "var(--green-300)",
        "verde-500": "var(--green-500)",
      },
      fontFamily: {
        roboto: "Roboto",
      },
    },
  },
  plugins: [],
}