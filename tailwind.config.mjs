/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/pages/**/*.{html,js}", "./src/components/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      height: {
        screen: "100dvh",
      },
      width: {
        screen: "100dvw",
      },
      colors: {
        mainColor: "hsl(var(--main-color))",
      },
    },
  },
  plugins: [],
};
