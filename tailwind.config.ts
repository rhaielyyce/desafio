import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: { 
      colors: {
      'pink-pink': '#B70084',
    },

      backgroundImage: {
       background: "url('/bg.png')",
      },
    },
  },
  plugins: [],
}
export default config
