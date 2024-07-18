/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#335c81",
          "primary-content": "#d4dde5",
          secondary: "#274060",
          "secondary-content": "#d0d6de",
          accent: "#65afff",
          "accent-content": "#030b16",
          neutral: "#9bd5fe",
          "neutral-content": "#091016",
          "base-100": "#ffffff",
          "base-200": "#ececec",
          "base-300": "#bebebe",
          "base-content": "#161616",
          info: "#7fa9da",
          "info-content": "#060a11",
          success: "#00ff00",
          "success-content": "#001600",
          warning: "#00ff00",
          "warning-content": "#001600",
          error: "#ff0000",
          "error-content": "#160000",
        },
      },
    ],
  },
};
