/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bg1: "url('/images/first/bg1.png')",
        bg2: "url('/images/second/bg2.png')",
        bg3: "url('/images/third/bg3.png')",
      },
    },
  },
  plugins: [],
};
