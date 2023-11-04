/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#4d5f55",
      secondary: "#3e543f",
      highlightedNav: "#445747",
    }),
  },
  colors: ({ colors }) => ({
    gray: colors.neutral,
    custom: {
      // Replace '500' with your preferred shade or name it accordingly
      500: "#4d5f55",
    },
  }),

  plugins: [],
};
