/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // New Premium Minimal Corporate Palette
        stone: {
          50: '#FAFAF7',   // Primary Page Background
          100: '#F1F0E9',  // Secondary Background
          200: '#E5E5DF',  // Subtle Borders
          300: '#D5D5CD',
          400: '#9CA39E',
          500: '#606963',  // Muted Body Text
          700: '#3D4640',
          800: '#2A332C',
          900: '#202923',  // Primary Text
        },
        forest: {
          DEFAULT: '#355C46', // Accent Green
          dark: '#284735',
          light: '#446F56',
          subtle: '#EBF2EE',
        },
        brand: {
          bg: '#FAFAF7',
          surface: '#F1F0E9',
          border: '#E5E5DF',
          text: '#202923',
          muted: '#606963',
          green: '#355C46',
          greenDark: '#284735',
          gold: '#B8860B',
        },
        // Backward compatibility mappings
        navy: {
          950: '#141C16',
          900: '#202923', // Primary Corporate Text
          850: '#28332C',
          800: '#35433A',
          700: '#48574D',
          600: '#5C6D62',
        },
        teal: {
          DEFAULT: '#355C46', // Map teal to Corporate Forest Green
          dark: '#284735',
          light: '#446F56',
          tint: '#EBF2EE',
        },
        gold: {
          DEFAULT: '#C29B38',
          dark: '#A68228',
          light: '#D4B35A',
          tint: '#FAF6EC',
          subtle: '#F4ECE0',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          light: '#FAFAF7',
          subtle: '#F1F0E9',
          card: '#FFFFFF',
        },
        trade: {
          text: '#202923',
          muted: '#606963',
          light: '#9CA39E',
          border: '#E5E5DF',
          darkBorder: '#35433A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        editorial: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'subtle': '0 1px 2px rgba(32, 41, 35, 0.04)',
        'card': '0 2px 8px -1px rgba(32, 41, 35, 0.05), 0 1px 3px rgba(32, 41, 35, 0.03)',
        'card-hover': '0 10px 24px -4px rgba(32, 41, 35, 0.08)',
        'premium': '0 16px 36px -8px rgba(32, 41, 35, 0.1)',
      }
    },
  },
  plugins: [],
};
