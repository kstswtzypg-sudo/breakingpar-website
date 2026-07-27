import type { Config } from 'tailwindcss'

// Palette derived directly from the Breaking Par logo:
// background #17181b, mark #33e28a, headline text #f2f3f5, tagline #83858c
const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#08090a',
          900: '#0b0c0e',
          850: '#111214',
          800: '#17181b',
          700: '#1d1f23',
          600: '#25272c',
          500: '#33353b',
          400: '#4a4c53',
        },
        brand: {
          50: '#eafdf4',
          100: '#c9fadf',
          200: '#98f3c2',
          300: '#65e8a4',
          400: '#33e28a',
          500: '#1ecb75',
          600: '#12a860',
          700: '#0f8650',
          800: '#0f6a43',
          900: '#0e5738',
          950: '#06301f',
        },
        mist: '#83858c',
        paper: '#f2f3f5',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(51, 226, 138, 0.45)',
      },
      backgroundImage: {
        'grid-fade': 'radial-gradient(circle at top, rgba(51,226,138,0.12), transparent 60%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
