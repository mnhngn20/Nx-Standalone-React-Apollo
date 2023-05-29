module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  important: true,
  plugins: [],
  theme: {
    container: { center: true },
    extend: {
      boxShadow: {
        default:
          '0px 0px 1px rgba(12, 26, 75, 0.1), 0px 4px 20px -2px rgba(50, 50, 71, 0.08)',
      },
      colors: {
        primary: 'var(--primary-color)',
      },
      fontFamily: {
        ['myriad-pro']: ['Myriad Pro', 'Inter', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      screens: {
        ['2xl']: { max: '1600px' },
        lg: { max: '992px' },
        md: { max: '768px' },
        quiz: { max: '1440px' },
        sm: { max: '576px' },
        ss: { max: '480px' },
        xl: { max: '1200px' },
        xlg: { max: '1150px' },
        xmd: { max: '960px' },
        xs: { max: '375px' },
      },
    },
  },
};
