/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2E5CFF",
          secondary: "#a6a6a6",
          accent: "#D0D0D0",
          neutral: "#f0f4ff",
          "base-100": "#ffffff",
          info: "#dbdbdb",
          success: "#00ff00",
          warning: "#00ff00",
          error: "#ff0000",
        },
      },
    ],
  },
};
