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
        primary: '#7938CC',        // Royal Purple - brand and CTA color
        'primary-light': '#9A5FDD', // Lighter purple
        'primary-lighter': '#B886E8', // Even lighter purple
        'primary-lightest': '#E6D7F5', // Lightest purple for backgrounds
        secondary: '#FFFFFF',      // White - background and content area
        accent: '#DD6722',         // Orange - highlight and supporting accent
        'text-primary': '#1F2937', // Dark Gray - main text color (better contrast)
        'text-secondary': '#6B7280', // Medium Gray - subtext and body tone
        background: '#FFFFFF',     // White - light background
        'background-light': '#F9FAFB', // Very light gray background
        'background-dark': '#0E0E0E', // Black - dark background
        'border-gray': '#E5E7EB',  // Light Gray - border/divider
        'border-light': '#F3F4F6', // Lighter border
        'alert-red': '#DC2626',
        'card-bg': '#FFFFFF',      // White - card background
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1-desktop': '2.625rem',  // 42px - H1 size from design spec
        'h2-desktop': '2rem',      // 32px - H2 size from design spec
        'h3-desktop': '1.5rem',    // 24px - H3 size from design spec
        'body-desktop': '1.125rem', // 18px - Body size from design spec
        'small-desktop': '0.875rem', // 14px - Small size from design spec
        'h1-tablet': '2.25rem',    // Responsive scaling
        'h2-tablet': '1.75rem',    // Responsive scaling
        'h3-tablet': '1.375rem',   // Responsive scaling
        'body-tablet': '1rem',     // Responsive scaling
        'h1-mobile': '1.875rem',   // Responsive scaling
        'h2-mobile': '1.5rem',     // Responsive scaling
        'h3-mobile': '1.25rem',    // Responsive scaling
        'body-mobile': '1rem',     // Responsive scaling
        'small-mobile': '0.875rem', // Responsive scaling
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
