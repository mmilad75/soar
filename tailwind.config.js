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
      gray: '#F5F7FA',
      dark: '#232323',
    },
    textColor: {
      base: '#232323',
      subdued: '#B1B1B1',
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
