export default {
  theme: {
    extend: {
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.03)' },
          '40%': { transform: 'scale(1)' },
          '60%': { transform: 'scale(1.03)' },
          '75%': { transform: 'scale(1)' },
        },
      },
      animation: {
        heartbeat: 'heartbeat 0.7s ease-in',
      },
    },
  },
}
