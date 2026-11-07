/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#091C30', // Deep Navy
          900: '#102B46', // Primary Navy
          850: '#133556',
          800: '#193F66',
          700: '#235384',
          600: '#2F6DAA',
        },
        teal: {
          DEFAULT: '#398D89',
          dark: '#2A6E6A',
          light: '#4EA5A1',
          tint: '#EBF6F5',
        },
        gold: {
          DEFAULT: '#C8A45D',
          dark: '#B5924B',
          light: '#DFBF7C',
          tint: '#FAF5EB',
          subtle: '#F4ECE0',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          light: '#F7F9FA',
          subtle: '#EEF2F6',
          card: '#F8FAFC',
        },
        trade: {
          text: '#263746',
          muted: '#64748B',
          light: '#94A3B8',
          border: '#E2E8F0',
          darkBorder: '#1E3A5F',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(16, 43, 70, 0.05), 0 1px 2px rgba(16, 43, 70, 0.03)',
        'card': '0 4px 20px -2px rgba(16, 43, 70, 0.08)',
        'card-hover': '0 12px 30px -4px rgba(16, 43, 70, 0.12)',
        'premium': '0 20px 40px -10px rgba(9, 28, 48, 0.35)',
        'gold-glow': '0 0 25px rgba(200, 164, 93, 0.25)',
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(180deg, #102B46 0%, #091C30 100%)',
        'navy-radial': 'radial-gradient(circle at top right, #163B5F 0%, #091C30 70%)',
      }
    },
  },
  plugins: [],
};
