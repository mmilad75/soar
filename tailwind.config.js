/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    borderColor: {
      sky: '#E6EFF5',
      'sky-darker': '#DFEAF2',
    },
    backgroundColor: {
      base: '#FFFFFF',
      gray: '#F5F7FA',
      dark: '#232323',
    },
    textColor: {
      base: '#232323',
      subdued: '#B1B1B1',
      primary: '#343C6A',
    },
    fill: {
      base: '#232323',
      subdued: '#B1B1B1',
      inherit: 'inherit',
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
