/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        coolBlue: "#007BFF",
        vibrantTeal: "#20C997",
        softGray: "#F8F9FA",
        charcoal: "#343A40",
        brightOrange: "#FD7E14",
        lightGreen: "#28A745",
        white: "#FFFFFF",
        subtleBlueGray: "#E9ECEF",
      },
    },
  },
  plugins: [],
};
