/** @type {import('tailwindcss').Config} */
export default {
  content: ['./**/*.html', './src/**/*.{js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: '#0A1F2B',
          soft: '#1A3340',
          mute: '#4C6471',
        },
        paper: {
          DEFAULT: '#F6F1E8',
          warm: '#EFE7D6',
          deep: '#E5DAC4',
        },
        sun: {
          DEFAULT: '#E8892E',
          bright: '#F4A024',
          pale: '#F9D59A',
        },
        sea: {
          DEFAULT: '#2A6B8F',
          deep: '#0E4565',
          mist: '#CBD9DF',
        },
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      fontSize: {
        'mega': ['clamp(3.5rem, 10vw, 9rem)', { lineHeight: '0.92', letterSpacing: '-0.04em' }],
        'huge': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.035em' }],
        'big': ['clamp(2rem, 4vw, 3.25rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
      },
    },
  },
  plugins: [],
};
