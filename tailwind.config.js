/** @type {import('tailwindcss').Config} */
export default {
  content: ['./**/*.html', './src/**/*.{js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Archivo', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Deep marine navy — the product is technical, maritime
        ink: {
          DEFAULT: '#0B2138',
          soft: '#14324F',
          mute: '#4A6583',
        },
        // Off-white base with very subtle warmth
        paper: {
          DEFAULT: '#FAFAF6',
          warm: '#F1F1EC',
          deep: '#E5E5DE',
        },
        // Electric maritime blue — accent (class name `sun` retained for backward compat)
        sun: {
          DEFAULT: '#1D6FE8',
          bright: '#3B87F2',
          pale: '#D5E6FB',
        },
        sea: {
          DEFAULT: '#1D6FE8',
          deep: '#0A3F8C',
          mist: '#D5E6FB',
        },
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      fontSize: {
        'mega': ['clamp(3rem, 9vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.035em' }],
        'huge': ['clamp(2.25rem, 5.5vw, 4.5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'big': ['clamp(1.75rem, 3.8vw, 3rem)', { lineHeight: '1.06', letterSpacing: '-0.025em' }],
      },
    },
  },
  plugins: [],
};
