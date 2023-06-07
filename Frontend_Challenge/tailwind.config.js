/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      borderRadius: {
        inherit: "inherit",
      },
      border: {
        '7px': "7px"
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
          16: "#28C76F",
          32: '#1EB564'
        },
        gray: {
          16: "#F5F5F5",
          32: "#F3F4F8",
          48: "#8B909A",
          64: "#DBDADE"
        },
        dark: {
          16: "#23272E",
          32: "i#4B465C"
        },
        blue: {
          16: "#8F85F3",
          32: "#E9E7FD",
          48: "#0F60FF"
        },
        red: {
          16: "#EA5455"
        },
        purple: {
          16: "#B0A9F7",
          32: "#8F85F3"
        }
      },
      height: {
        '18px': '18px',
        '38': '38px',
        '72px': '72px'
      },
      width: {
        '18px': '18px',
        '38': '38px',
        '72px': '72px'

      },
      lineHeight: {
        '14': '14px',
        '18': '18px',
        '22': '22px',
        '26': "26px"
      },
      fontSize: {
        '11px': '11px',
        '13px': '13px',
        '15px': "15px",
        '3xl': '22px',
        '4xl': '24px',
        '5xl': '32px'
      },
      padding: {
        '9px': '9px',
        '11px': "11px",
        '15px': '15px',
        '18px': '18px',
        '22px': '22px',
        '26px': '26px',
        '30px': '30px',
        '33px': '33px',
        '35px': '35px',
        '38px': '38px',
        '39px': '39px',
        '43px': '43px',
        '45px': '45px',
        '52px': '52px',

      },
      margin: {
        '3px': "3px",
        '18px': "18px",
        '26px': "26px",
        '30px': '30px',
        '33px': '33px'
      },
      screens: {
        xs: "475px",
        xxl: "1536px",
      },

    },
  },
  plugins: [],
}

