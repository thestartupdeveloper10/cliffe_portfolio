/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    fontSize: {
      // h1 - Largest and boldest
      'h1-sm': ['24px', { lineHeight: '32px', fontWeight: '800' }], // extrabold
      'h1-md': ['32px', { lineHeight: '40px', fontWeight: '800' }],
      'h1-lg': ['50px', { lineHeight: '48px', fontWeight: '800' }],
      
      // h2 - Second level
      'h2-sm': ['20px', { lineHeight: '28px', fontWeight: '700' }], // bold
      'h2-md': ['28px', { lineHeight: '36px', fontWeight: '700' }],
      'h2-lg': ['36px', { lineHeight: '44px', fontWeight: '700' }],
      
      // h3 - Third level
      'h3-sm': ['18px', { lineHeight: '26px', fontWeight: '600' }], // semibold
      'h3-md': ['24px', { lineHeight: '32px', fontWeight: '600' }],
      'h3-lg': ['30px', { lineHeight: '38px', fontWeight: '600' }],
      
      // h4 - Fourth level
      'h4-sm': ['16px', { lineHeight: '24px', fontWeight: '500' }], // medium
      'h4-md': ['20px', { lineHeight: '28px', fontWeight: '500' }],
      'h4-lg': ['24px', { lineHeight: '32px', fontWeight: '500' }],
      
      // p - Regular paragraph text
      'p-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }], // regular
      'p-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
      'p-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
    },
  },
  plugins: [require("tailwindcss-animate")],
}