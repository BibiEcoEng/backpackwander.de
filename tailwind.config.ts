import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--bg)',
        surface: 'var(--surface)',
        surfaceAlt: 'var(--bg)',
        offwhite: 'var(--text-main)',
        secondaryText: 'rgb(var(--text-main-rgb) / 0.72)',
        line: 'var(--border-dark)',
        brand: {
          dark: 'rgb(var(--logo-silver-rgb) / 0.45)',
          light: 'var(--logo-accent)',
          silver: 'var(--logo-silver)'
        },
        accent: {
          DEFAULT: 'var(--logo-accent)',
          soft: 'rgb(var(--brand-light-rgb) / <alpha-value>)'
        }
      },
      boxShadow: {
        industrial: '0 24px 80px rgba(0,0,0,0.45)'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-montserrat)', 'sans-serif']
      },
      fontSize: {
        body: ['16px', { lineHeight: '1.6' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
        h1: ['42px', { lineHeight: '1.6', fontWeight: '600' }],
        'h1-lg': ['64px', { lineHeight: '1.6', fontWeight: '600' }],
        h2: ['32px', { lineHeight: '1.6', fontWeight: '600' }],
        'h2-lg': ['42px', { lineHeight: '1.6', fontWeight: '600' }],
        h3: ['22px', { lineHeight: '1.6', fontWeight: '600' }],
        'h3-lg': ['28px', { lineHeight: '1.6', fontWeight: '600' }]
      },
      maxWidth: {
        content: '1200px'
      }
    }
  },
  plugins: []
};

export default config;
