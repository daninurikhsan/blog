import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,md,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
      },
      typography: {
        blog: {
          css: {
            h1: { fontSize: "1.875rem" },
            h2: { fontSize: "1.5rem" },
            hr: { marginTop: "3rem", marginBottom: "3rem" },
          }
        }
      }
    },
  },
  plugins: [typography],
};
