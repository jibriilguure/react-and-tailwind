/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        p: "#00df9a",
      },
      button: {
        roundbtn: "mx-auto bg-p rounded-md  w-[200px] py-2",
      },
    },
  },
  plugins: [],
};
