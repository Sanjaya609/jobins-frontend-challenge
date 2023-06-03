/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      borderRadius: {
        inherit: "inherit",
      },
      boxShadow: {
        sm: "0px 2px 2px rgba(0, 0, 0, 0.12)",
        md: "0px 4px 8px rgba(0, 0, 0, 0.04), 0px 2px 4px rgba(0, 0, 0, 0.08)",
        lg: "0px 8px 16px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.08)",
        xl: " 0px 32px 48px rgba(0, 0, 0, 0.04), 0px 16px 32px rgba(0, 0, 0, 0.08), 0px 4px 8px rgba(0, 0, 0, 0.08)",
        inset: "inset  0px -1px 0px #CCCCCC",
      },
      colors: {
        green: {
          16: "#28C76F"
        },
        gray: {
          16: "#F5F5F5",
          32: "#F3F4F8",
          48: "#8B909A"
        },
        dark: {
          16: "#23272E"
        },
        blue: {
          16: "#8F85F3"
        }
      },
      height: {
        '18px': '18px',
        '38': '38px',
      },
      width: {
        '18px': '18px',
        '38': '38px',
      },
      lineHeight: {
        '14': '14px',
      },
      fontSize: {
        '11px': '11px',
        '13px': '13px',
        '3xl': '22px',
        '4xl': '24px',
        '5xl': '32px'
      },
      padding: {
        '9px': '9px',
        '15px': '15px',
        '18px': '18px',
        '26px': '26px',
        '30px': '30px',
      },
      screens: {
        xs: "475px",
        xxl: "1536px",
      },

    },
  },
  plugins: [],
}

