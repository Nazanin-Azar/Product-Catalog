export default {
  theme: {
    extend: {
      colors: {
        primary: '#8F5D45',
        secondary: '#1C1917',
        background: '#fffff0',
        yellowlight: '#FFE68B',
        muted: '#F3F4F6', //100
        graylight: '#6B7280', //300-400-500
        graydark: '#374151',  //700
        graydarker: '#1F2937', //800
        white: '#ffffff',
        input: 'rgba(145,145,145,0.12)',
        error: '#DC2626'
      },
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
