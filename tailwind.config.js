/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "blue-base": "#186EFF",
        "dark-base": "#020617",
        "light-base": "#F1F5F9",
        "rose-base": "#FF3366",
        "green-base": "#22c525",
      },
    },
  },
  plugins: [],
};
