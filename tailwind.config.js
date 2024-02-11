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
