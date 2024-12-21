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
      base: '#232323',
      subdued: '#B1B1B1',
      inherit: 'inherit',
      primary: '#343C6A',
      secondary: '#718EBF',
      payment: {
        card: '#FFBB38',
        paypal: '#396AFF',
        cash: '#16DBCC',
      },
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
      },
    },
  },
  safelist: [
    {
      pattern: /fill-/,
      variants: ['hover'],
    },
  ],
  plugins: [],
};
