/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      }, 
      colors: {
        primary: "#f11320",
        primaryLight: "#F55661",
        primaryDark: "#D1333D",
        secondary: "#13F198", 
        secondaryDark: "#27b37b",
        tritory: "#13B6F1",
        tritoryDark: "#3f9cbd",
        lightGray: "#88888811"
      },
      animation: {
          'text-slide': 'text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      },
      keyframes: {
          'text-slide': {
            '0%, 50%': {
                transform: 'translateY(-50%)',
            },
            '100%': {
                transform: 'translateY(-83.33%)',
            },
              // '0%, 16%': {
              //     transform: 'translateY(0%)',
              // },
              // '20%, 36%': {
              //     transform: 'translateY(-16.66%)',
              // },
              // '40%, 56%': {
              //     transform: 'translateY(-33.33%)',
              // },
              // '60%, 76%': {
              //     transform: 'translateY(-50%)',
              // },
              // '80%, 96%': {
              //     transform: 'translateY(-66.66%)',
              // },
              // '100%': {
              //     transform: 'translateY(-83.33%)',
              // },
          },                    
      },
    },
  },
  plugins: [],
};
