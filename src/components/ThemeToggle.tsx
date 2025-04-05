'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-light-darker dark:bg-dark-lighter hover:bg-light-dark dark:hover:bg-dark-light transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-6 h-6"
      >
        <Sun className="absolute inset-0 w-6 h-6 text-primary transition-opacity duration-300" style={{ opacity: theme === 'light' ? 1 : 0 }} />
        <Moon className="absolute inset-0 w-6 h-6 text-primary transition-opacity duration-300" style={{ opacity: theme === 'dark' ? 1 : 0 }} />
      </motion.div>
    </motion.button>
  );
} 