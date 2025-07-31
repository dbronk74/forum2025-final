/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'text-white', 'text-blue-300', 'text-purple-200', 'text-gray-600',
    'bg-zinc-900', 'bg-gradient-to-br', 'from-black', 'via-zinc-900', 'to-gray-900',
    'rounded-2xl', 'shadow-lg', 'border', 'border-white/10',
    'hover:scale-105', 'transition-transform', 'duration-300',
    'grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-3'
  ],
  theme: {
    extend: {
      animation: {
        spinSlow: 'spinSlow 40s linear infinite',
        pulseSlow: 'pulseSlow 8s ease-in-out infinite',
        fogDrift: 'fogDrift 120s linear infinite',
      },
      keyframes: {
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        },
        fogDrift: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
