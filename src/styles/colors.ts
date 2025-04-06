export const colors = {
  orange: {
    primary: '#FF8C00',
    light: '#FFA500',
    dark: '#E67E00',
    accent: '#FF6B00',
    glow: 'rgba(255, 140, 0, 0.2)',
    border: 'rgba(255, 140, 0, 0.3)',
    bg: 'rgba(255, 140, 0, 0.1)',
    text: '#FF8C00',
    gradient: {
      light: 'from-[#FF8C00] via-[#FFA500] to-[#FF6B00]',
      dark: 'from-[#FF8C00] via-[#FFA500] to-[#FF6B00]'
    }
  },
  text: {
    primary: {
      light: 'text-gray-900',
      dark: 'text-white'
    },
    secondary: {
      light: 'text-gray-600',
      dark: 'text-gray-300'
    },
    tertiary: {
      light: 'text-gray-500',
      dark: 'text-gray-400'
    },
    brand: {
      light: 'text-[#FF8C00]',
      dark: 'text-[#FF8C00]'
    }
  },
  background: {
    primary: {
      light: 'bg-white',
      dark: 'bg-gray-900'
    },
    secondary: {
      light: 'bg-gray-50',
      dark: 'bg-gray-800'
    },
    tertiary: {
      light: 'bg-gray-100',
      dark: 'bg-gray-700'
    },
    brand: {
      light: 'bg-[#FF8C00]/10',
      dark: 'bg-[#FF8C00]/20'
    }
  },
  interactive: {
    button: {
      primary: {
        light: 'bg-[#FF8C00] hover:bg-[#FFA500] text-white',
        dark: 'bg-[#FF8C00] hover:bg-[#FFA500] text-white'
      },
      secondary: {
        light: 'border-2 border-[#FF8C00] text-[#FF8C00] hover:bg-[#FF8C00]/10',
        dark: 'border-2 border-[#FF8C00] text-[#FF8C00] hover:bg-[#FF8C00]/20'
      }
    },
    card: {
      light: 'bg-white border border-gray-200 hover:border-[#FF8C00]/30',
      dark: 'bg-gray-800 border border-gray-700 hover:border-[#FF8C00]/40'
    }
  },
  effects: {
    glow: {
      light: 'shadow-[0_0_12px_rgba(255,140,0,0.4)]',
      dark: 'shadow-[0_0_16px_rgba(255,140,0,0.5)]'
    },
    gradient: {
      light: 'bg-[radial-gradient(circle_at_50%_50%,rgba(255,140,0,0.03),transparent_50%)]',
      dark: 'bg-[radial-gradient(circle_at_50%_50%,rgba(255,140,0,0.05),transparent_50%)]'
    },
    blur: {
      light: 'blur-[#FF8C00]/20',
      dark: 'blur-[#FF8C00]/30'
    }
  }
}; 