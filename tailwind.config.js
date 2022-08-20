/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'landing-image': 'calc(100vh - 130px)',
      },
      backgroundImage: {
        'fading-to-blue': 'linear-gradient(to right, rgba(0,0,255,0) 95%,rgba(0,0,255,1) 100%)',
        'landing-image': 'url("https://ableton-production.imgix.net/about/header.jpg?auto=format&dpr=2&fit=crop&fm=jpg&h=547&ixjsv=1.1.3&q=50&w=704")',
        'section-one-image-one': 'url("https://ableton-production.imgix.net/about/photo-1.jpg?fit=crop&h=322&ixjsv=1.1.3&w=322")',
        'section-one-image-two': 'url("https://ableton-production.imgix.net/about/photo-2.jpg?dpr=2&fit=crop&h=181&ixjsv=1.1.3&q=50&w=241")',
      },
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
      fontSize: {
        'custom-extra-small-bold': ['14px',{
          fontWeight: 600,
          lineHeight: '21px',
        }],
        'custom-small-bold': ['18px', {
            fontWeight: 600,
            lineHeight: '30px',
        }],
        'custom-small': ['18px', {
          fontWeight: 400,
          lineHeight: '30px',
        }],
        'custom-large-bold': ['24px', {
          fontWeight: 600,
          lineHeight: '42px',
        }]
      }
    },
  },
  plugins: [],
}
