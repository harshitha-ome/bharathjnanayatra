/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        indigo: {
          deep: 'var(--indigo)',
          foreground: 'var(--indigo-foreground)',
        },
        lotus: 'var(--lotus)',
        gold: 'var(--gold)',
        forest: 'var(--forest)',
        cream: 'var(--cream)',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        sm: 'calc(var(--radius) * 0.5)',
        md: 'calc(var(--radius) * 0.75)',
        lg: 'var(--radius)',
        xl: 'calc(var(--radius) * 1.5)',
        '2xl': 'calc(var(--radius) * 2)',
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta-sans)', 'sans-serif'],
      },
      animation: {
        'fade-in-scale': 'fadeInScale 0.4s ease-out forwards',
        'slide-in-right': 'slideInRight 0.35s ease-out forwards',
        'float': 'floatUp 3s ease-in-out infinite',
        'quest-pulse': 'questPulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 1.5s infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};