/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#FFFFFF',
        grey: {
          100: '#EEEEEE',
          500: '#D9D9D9',
          900: '#333333',
        },
        accent: {
          100: '#FCEACF',
          500: '#EEB969',
          900: '#E09D38',
        },
      },
    },
  },
  plugins: [],
}
