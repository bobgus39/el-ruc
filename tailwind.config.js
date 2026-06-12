import { heroui } from '@heroui/react'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ruc: {
          cream:    '#FAF3E0',
          beige:    '#F0E4C8',
          tan:      '#D4B896',
          brown:    '#6B3F1E',
          chocolate:'#3D1F0D',
          honey:    '#E8922A',
          mustard:  '#C17F24',
          herb:     '#5A7A4A',
          'herb-light': '#7BAD66',
          warm:     '#FDF6EC',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Lora', 'Playfair Display', 'Georgia', 'serif'],
        body:    ['Nunito', 'DM Sans', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'kraft-texture': "url('/textures/kraft.png')",
      },
      animation: {
        'fade-up':   'fadeUp 0.7s ease forwards',
        'fade-in':   'fadeIn 0.6s ease forwards',
        'stagger-1': 'fadeUp 0.7s 0.1s ease forwards',
        'stagger-2': 'fadeUp 0.7s 0.25s ease forwards',
        'stagger-3': 'fadeUp 0.7s 0.4s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          primary:   { DEFAULT: '#E8922A', foreground: '#ffffff' },
          secondary: { DEFAULT: '#6B3F1E', foreground: '#ffffff' },
          success:   { DEFAULT: '#5A7A4A', foreground: '#ffffff' },
          background: '#FAF3E0',
          foreground: '#3D1F0D',
        },
      },
    },
  })],
}
