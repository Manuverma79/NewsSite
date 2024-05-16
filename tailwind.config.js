/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: "'Inknut Antiqua'",
        description: "Inter",
        "inria-sans": "'Inria Sans'",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e5e7eb",

          secondary: "#374151",

          accent: "#a7f3d0",

          neutral: "#1f2937",

          "base-100": "#111827",

          info: "#0000ff",

          success: "#00ff00",

          warning: "#00ff00",

          error: "#ff0000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
