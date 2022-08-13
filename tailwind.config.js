/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // this is for overriding existing color theme
    },
    extend: {
      colors: {
        // This is for extending the existing color theme
        'custom-milan': '#fbffa7',
        'custom-coral': '#ff764d',
        'custom-melrose': '#b1c5ff',
        'custom-mauve': '#d5b3ff',
        'custom-snowy-mint': '#b6ffc0',
        'custom-blue': '#0000ff',
        'custom-text': '#000000'
      },
    },
  },
  plugins: [],
}
