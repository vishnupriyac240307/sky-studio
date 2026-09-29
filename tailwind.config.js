/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1E50FF',
          cyan: '#00C2FF',
          purple: '#8B30FF',
          pink: '#FF2E93',
          orange: '#FF6B00',
          yellow: '#FFC700',
          dark: '#0B0F19',
          navy: '#111827',
          gray: '#6B7280',
          lightBg: '#FAFAFC',
          cardBg: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 10px rgba(0, 0, 0, 0.03)',
        'soft-md': '0 10px 30px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 20px 40px rgba(0, 0, 0, 0.08)',
        'glow-blue': '0 10px 30px rgba(30, 80, 255, 0.2)',
        'glow-pink': '0 10px 30px rgba(255, 46, 147, 0.2)',
        'glow-purple': '0 10px 30px rgba(139, 48, 255, 0.2)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        gradientShift: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        }
      }
    },
  },
  plugins: [],
}
