/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        // Act I — deep ink
        ink: {
          DEFAULT: '#0A0C10',
          raised: '#12151B',
          card: '#171B22',
        },
        // Act II — warm paper
        paper: {
          DEFAULT: '#F4F1EA',
          card: '#EAE6DC',
          ink: '#16181C',
          dim: '#5A6068',
        },
        // Payment-state semantics
        settled: {
          DEFAULT: '#34C77B',
          deep: '#0C6B3E',
        },
        pending: '#E8A33D',
        failed: '#E5484D',
        // Type on ink
        cream: '#EDEAE3',
        dim: '#9AA0A6',
      },
      maxWidth: {
        measure: '34rem',   // ~68ch, the reading column
        frame: '78rem',
      },
      letterSpacing: {
        label: '0.16em',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
