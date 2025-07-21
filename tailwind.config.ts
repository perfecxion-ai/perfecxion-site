import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          400: '#38bdf8',
          500: '#149eca',
          600: '#0284c7',
          700: '#0369a1',
          900: '#0c4a6e',
        },
        background: {
          light: '#ffffff',
          dark: '#20232a',
          subtle: '#f7f7f8',
          'dark-subtle': '#282c34',
        },
        text: {
          primary: '#1a1a1a',
          'primary-dark': '#f6f8fa',
          secondary: '#6b7280',
          'secondary-dark': '#9ca3af',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'Monaco', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
