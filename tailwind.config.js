/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: '2rem',
      center: true,
    },
    extend: {
      colors: {
        primary: '#1E293B',
        secondary: '#F2F6FD',
        'regal-blue': '#E0E6F7',
      },
      keyframes: {
        bouncedelay: {
          '0%, 80%, 100%': {
            transform: 'scale(0)',
          },
          '40%': {
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        bouncy: 'bouncedelay 1.4s infinite ease-in-out both',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.cardHoverEffect': {
          transform: 'translateY(-3px)',
          transition: 'all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1)',
          borderColor: '#B4C0E0',
          backgroundColor: '#ffffff',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
