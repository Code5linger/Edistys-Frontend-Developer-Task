module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'move-bg': 'moveBg 3s ease-in-out forwards',
      },
      keyframes: {
        moveBg: {
          '0%': {
            backgroundPosition: '100% 0',
          },
          '100%': {
            backgroundPosition: '0% 0',
          },
        },
      },
    },
  },
};
