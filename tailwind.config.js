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
        background: 'hsl(0, 0%, 100%)',
        foreground: 'hsl(222.2, 84%, 4.9%)',
        card: 'hsl(0, 0%, 100%)',
        'card-foreground': 'hsl(222.2, 84%, 4.9%)',
        popover: 'hsl(0, 0%, 100%)',
        'popover-foreground': 'hsl(222.2, 84%, 4.9%)',
        primary: 'hsl(221.2, 83.2%, 53.3%)',
        'primary-foreground': 'hsl(210, 40%, 98%)',
        secondary: 'hsl(210, 40%, 96.1%)',
        'secondary-foreground': 'hsl(222.2, 47.4%, 11.2%)',
        muted: 'hsl(210, 40%, 96.1%)',
        'muted-foreground': 'hsl(215.4, 16.3%, 44%)',
        accent: 'hsl(210, 40%, 96.1%)',
        'accent-foreground': 'hsl(222.2, 47.4%, 11.2%)',
        destructive: 'hsl(0, 72%, 51%)',
        'destructive-foreground': 'hsl(210, 40%, 98%)',
        border: 'hsl(214.3, 31.8%, 91.4%)',
        input: 'hsl(214.3, 31.8%, 91.4%)',
        ring: 'hsl(221.2, 83.2%, 53.3%)',
        'chart-1': 'hsl(221.2, 83.2%, 53.3%)',
        'chart-2': 'hsl(216, 92%, 60%)',
        'chart-3': 'hsl(212, 95%, 68%)',
        'chart-4': 'hsl(210, 98%, 78%)',
        'chart-5': 'hsl(212, 97%, 87%)',
        radius: '0.5rem',
      },
      borderRadius: {
        DEFAULT: '1rem',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sans: ['Manrope', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [
    function({ addBase }) {
      addBase({
        'img[src="/placeholder.svg"], img[src="/placeholder-user.jpg"]': {
          filter: 'sepia(0.3) hue-rotate(150deg) saturate(0.5) opacity(0.8)',
        },
        'h1, h2, h3, h4, h5, h6': {
          fontFamily: 'Manrope, sans-serif',
        },
        body: {
          fontFamily: 'Manrope, sans-serif',
        },
      });
    },
    require('@tailwindcss/typography'),
  ],
}
