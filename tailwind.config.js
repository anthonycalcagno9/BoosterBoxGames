/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "linear-gradient(to_right_bottom,rgba(0, 122, 255, 0.8),rgba(16,71,52,0.8)),url('/The+Enchanted+Forest+Banner.jpeg')",
      },
      colors: {}
    }
  },
  plugins: [],
}
