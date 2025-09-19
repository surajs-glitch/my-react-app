/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        jost: ["Jost", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        akatab: ["Akatab", "sans-serif"],
        comic: ["Comic Neue", "sans-serif"]
      },

      fontSize: {
        // Heading sizes (increased)
        "h1-mobile": ["36px", "1.3"],
        "h1-tablet": ["42px", "1.3"],
        "h1-desktop": ["48px", "1.3"],

        "h2-mobile": ["30px", "1.3"],
        "h2-tablet": ["36px", "1.3"],
        "h2-desktop": ["40px", "1.3"],

        // Subheading sizes (increased)
        "h3-mobile": ["24px", "1.4"],
        "h3-tablet": ["28px", "1.4"],
        "h3-desktop": ["32px", "1.4"],

        "h4-mobile": ["20px", "1.4"],
        "h4-tablet": ["24px", "1.4"],
        "h4-desktop": ["28px", "1.4"],

        // Minor heading sizes (increased)
        "h5-mobile": ["18px", "1.4"],
        "h5-tablet": ["20px", "1.4"],
        "h5-desktop": ["24px", "1.4"],

        "h6-mobile": ["16px", "1.4"],
        "h6-tablet": ["18px", "1.4"],
        "h6-desktop": ["20px", "1.4"],

        // Body text sizes (increased)
        "body-mobile": ["16px", "1.6"],
        "body-tablet": ["18px", "1.6"],
        "body-desktop": ["18px", "1.6"],

        // Subtext sizes (increased)
        "subtext-mobile": ["14px", "1.5"],
        "subtext-tablet": ["16px", "1.5"],
        "subtext-desktop": ["16px", "1.5"],
      },
    },
  },
  plugins: [],
};
