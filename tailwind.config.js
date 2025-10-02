/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#F07E04',
        background: '#000000',
        'text-primary': '#FFFFFF',
        'text-secondary': '#F07E04',
        'border-gray': '#E5E7EB',
        'alert-red': '#DC2626',
        'card-bg': '#111111',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1-desktop': '3rem',    // 2.75rem + 9% more
        'h2-desktop': '2.4rem',  // 2.2rem + 9% more
        'h3-desktop': '1.8rem',  // 1.65rem + 9% more
        'body-desktop': '1.125rem',
        'small-desktop': '0.875rem',
        'h1-tablet': '2.4rem',   // 2.2rem + 9% more
        'h2-tablet': '2.1rem',   // 1.925rem + 9% more
        'h3-tablet': '1.65rem',  // 1.5125rem + 9% more
        'body-tablet': '1rem',
        'h1-mobile': '2.1rem',   // 1.925rem + 9% more
        'h2-mobile': '1.65rem',  // 1.5125rem + 9% more
        'h3-mobile': '1.5rem',   // 1.375rem + 9% more
        'body-mobile': '1rem',
        'small-mobile': '0.875rem',
      },
      maxWidth: {
        'content': '1200px',
      },
      spacing: {
        'section-desktop': '4rem',
        'section-tablet': '3rem',
        'section-mobile': '2rem',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'scale-hover': 'scaleHover 0.3s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        scaleHover: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
