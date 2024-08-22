/** @type {import('tailwindcss').Config} */
import {nextui} from '@nextui-org/react'

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-helv)']
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      }, 
      colors: {
        black: "#161616",
        primary: "#f11320",
        primaryLight: "#F55661",
        primaryLighter: "#F5566188",
        primaryDark: "#D1333D",
        secondary: "#13F198", 
        secondaryDark: "#27b37b",
        tritory: "#13B6F1",
        tritoryDark: "#3f9cbd",
        lightGray: "#dddddd55",
        darkGray: "#031D26"
      },
      maxWidth: {
        'grid': 'calc(1600px + 10%)'
      },
      padding: {
        'grid': '0 5%'
      },
      animation: {
          'text-slide': 'text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
          'bounce-little': 'bounce-little 1s infinite;',
          'morning-slide': 'morning-slide 12.5s linear infinite',
          'fade': 'fade 900ms ease-in-out',
          'scale-up': 'scale-up 300ms ease-in-out',
          'slide-up': 'slide-up 12s linear infinite',
          'wiggle': 'wiggle 1s ease-in-out infinite',
          'background-transition': 'background-transition 40s ease-in-out infinite',
          'hue-change': 'hue-change 20s ease-in-out infinite',
      },
      keyframes: {
        'background-transition': {
          '0%, 100%': { transform: 'rotate(-360deg) scale(2.5, 3.5)' },
          '50%': { transform: 'rotate(360deg) scale(2.5, 3.5)' },
        },
        'hue-change': {
          '0%, 100%': { filter: 'hue-rotate(0deg)' },
          '25%, 75%': { filter: 'hue-rotate(30deg)' },
          '50%': { filter: 'hue-rotate(60deg)' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-12deg)' },
          '50%': { transform: 'rotate(12deg)' },
        },
        'bounce-little': {
          '0%, 100%': {
            'transform': 'translateY(-15%)',
            'animation-timing-function': 'cubic-bezier(0.8,0,1,1)'
          },
          '50%': {
              'transform': 'none',
              'animation-timing-function': 'cubic-bezier(0,0,0.2,1)'
          }
        },
        'fade': {
          '0%': {  opacity: 0 },
          '100%': {  opacity: 1 },
        },
        'slide-up': {
          '0%, 26%': {  transform: 'translateY(0%)' },
          '29%, 56%': {  transform: 'translateY(-200%)' },
          '59%, 86%': {  transform: 'translateY(-400%)' },
          '97%': {  transform: 'translateY(-400%)' },
          '100%': {  transform: 'translateY(0%)' },
        },
        'scale-up': {
          '0%': {  opacity: 0, transform: 'translateX(-50%) scale(1,0)' },
          '100%': {  opacity: 1, transform: 'translateX(-50%) scale(1,1)' },
        },
        'text-slide': {
            '0%, 16%': {
                transform: 'translateY(0%)',
            },
            '20%, 36%': {
                transform: 'translateY(-19.5%)',
            },
            '40%, 56%': {
                transform: 'translateY(-34.5%)',
            },
            '60%, 76%': {
                transform: 'translateY(-53%)',
            },
            '80%, 96%': {
                transform: 'translateY(-69%)',
            },
            '96.1%': {
                transform: 'translateY(-83.33%)',
            },
        },
        'morning-slide': {
            '0%, 16%': {
                transform: 'translateY(0%)',
            },
            '20%, 36%': {
                transform: 'translateY(-19%)',
            },
            '40%, 56%': {
                transform: 'translateY(-34.5%)',
            },
            '60%, 76%': {
                transform: 'translateY(-52%)',
            },
            '80%, 96%': {
                transform: 'translateY(-69%)',
            },
            '96.1%': {
                transform: 'translateY(-83.33%)',
            },
        },                    
      },
      fontSize: {
        xxs: ['0.625rem', { lineHeight: '0.75rem' }],
      },
    },
  },
  variants: {
    extends: {
      transform: ["responsive", "hover", "focus", "active"],
    }
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            prime: "#f11320",
            secondary: "#27b37b", 
            tritory: "#3f9cbd",
          },
        },
        dark: {
          colors: {
            prime: "#F55661",
            secondary: "#13F198", 
            tritory: "#13B6F1",
          },
        },
        // ... custom themes
      },
    }),
  ],
};
