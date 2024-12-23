/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      lato: ['Lato', 'sans-serif'],
    },
    borderColor: {
      sky: '#E6EFF5',
      'sky-darker': '#DFEAF2',
    },
    backgroundColor: {
      base: '#FFFFFF',
      gray: '#F5F7FA',
      dark: '#232323',
      backdrop: '#00000036',
      payment: {
        card: '#FFF5D9',
        paypal: '#E7EDFF',
        cash: '#DCFAF8',
      },
      sky: '#EDF1F7',
    },
    textColor: {
      base: '#232323',
      subdued: '#B1B1B1',
      primary: '#343C6A',
      secondary: '#718EBF',
      light: '#FFFFFF',
      success: '#41D4A8',
      danger: '#FF4B4A',
    },
    fill: {
      none: 'none',
      base: '#232323',
      subdued: '#B1B1B1',
      inherit: 'inherit',
      primary: '#343C6A',
      secondary: '#718EBF',
      light: '#FFFFFF',
      payment: {
        card: '#FFBB38',
        paypal: '#396AFF',
        cash: '#16DBCC',
      },
    },
    stroke: {
      secondary: '#718EBF',
    },

    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
    },
    extend: {
      height: {
        header: 100,
        content: 'calc(100vh - 100px)',
      },
      width: {
        sidebar: 250,
      },
      fontSize: {
        h1: ['1.75rem', '2.125rem'],
        h2: ['1.375rem', '1.625rem'],
        h3: ['17px', '1.25rem'],
      },
      borderRadius: {
        '25px': 25,
        '50px': 50,
      },
      padding: {
        7.5: '1.875rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in',
      },
      keyframes: () => ({
        fadeIn: {
          from: { visibility: 'hidden', opacity: 0 },
          to: { visibility: 'visible', opacity: 1 },
        },
      }),
    },
  },
  safelist: [],
  plugins: [],
};
