/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        baapPurple: "#5f259f",
        baapPink: "#f25c8d",
        baapGold: "#f6b400",
      },
      boxShadow: {
        glow: "0 15px 50px rgba(95, 37, 159, 0.2)",
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at 10% 20%, rgba(242,92,141,0.18) 0, transparent 20%), radial-gradient(circle at 90% 20%, rgba(95,37,159,0.15) 0, transparent 22%), linear-gradient(135deg, #0b1021 0%, #10152b 35%, #0b1021 70%)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
