import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          50: '#faf5f5',
          100: '#f5e6e7',
          200: '#eec2c5',
          300: '#e19397',
          400: '#cd5862',
          500: '#a85858',
          600: '#965252',
          700: '#7a4242',
          800: '#6d1f29',
          900: '#5d1e26',
          950: '#330c11',
        },
        cream: '#fcfcf7',
        gold: {
          50: '#fefce8',
          100: '#fff9c4',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-bodoni)', 'Georgia', 'serif'],
        display: ['var(--font-cinzel)', 'Georgia', 'serif'],
        bodoni: ['var(--font-bodoni)', 'serif'],
        dmSerif: ['var(--font-dm-serif)', 'serif'],
        bebas: ['var(--font-bebas)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
        cinzel: ['var(--font-cinzel)', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '120': '30rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'wine-texture': "url('/images/wine-texture.jpg')",
      },
    },
  },
  plugins: [],
}
export default config