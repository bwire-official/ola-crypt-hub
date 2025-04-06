'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Sun, 
  Moon,
  Home,
  User,
  Users,
  CalendarDays,
  BookOpen,
  MessageSquare,
  Trophy,
  Sparkles
} from 'lucide-react';
import { colors } from '@/styles/colors';

// Navigation items
const navigationItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: User },
  { name: 'Network', href: '/network', icon: Users, disabled: true },
  { name: 'Events', href: '/events', icon: CalendarDays, disabled: true },
  { name: 'Insights', href: '/insights', icon: BookOpen, disabled: true },
  { name: 'Achievements', href: '/achievements', icon: Trophy, disabled: true },
  { name: 'Contact', href: '/contact', icon: MessageSquare },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    // Check local storage first, then system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      // Update document class and local storage
      if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }, [isDark, mounted]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#1A1A1A]/80 backdrop-blur-lg border-b border-gray-200 dark:border-[#2A2A2A] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center relative">
            <Link href="/" className="flex items-center relative z-10">
              <span className="text-2xl font-bold relative">
                <span className="text-red-500">O</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF8C00] via-[#FFA500] to-[#FF6B00] animate-pulse">
                  la_Crrypt
                </span>
                <span className="absolute inset-0 blur-sm bg-gradient-to-r from-[#FF8C00]/20 via-[#FFA500]/20 to-[#FF6B00]/20 animate-pulse pointer-events-none"></span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 relative z-10">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.disabled ? '#' : item.href}
                className={`inline-flex items-center text-sm font-medium transition-colors relative ${
                  item.disabled
                    ? 'text-gray-400 dark:text-[#666666] cursor-not-allowed'
                    : pathname === item.href
                    ? 'text-[#FF8C00] border-b-2 border-[#FF8C00]'
                    : 'text-gray-600 dark:text-[#CCCCCC] hover:text-[#FF8C00] dark:hover:text-[#FF8C00] hover:border-b-2 hover:border-[#FF8C00]'
                }`}
              >
                <item.icon className="w-4 h-4 mr-1" />
                {item.name}
                {item.disabled && (
                  <span className="ml-1 text-xs bg-[#FF8C00]/10 text-[#FF8C00] px-1.5 py-0.5 rounded-full">
                    SOON
                  </span>
                )}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2A2A2A] transition-colors relative"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-[#FF8C00]" />
              ) : (
                <Moon className="w-5 h-5 text-[#FF8C00]" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4 relative z-10">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2A2A2A] transition-colors relative"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-[#FF8C00]" />
              ) : (
                <Moon className="w-5 h-5 text-[#FF8C00]" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2A2A2A] transition-colors relative"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-600 dark:text-[#CCCCCC]" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600 dark:text-[#CCCCCC]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden relative z-10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-[#1A1A1A] border-b border-gray-200 dark:border-[#2A2A2A]">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.disabled ? '#' : item.href}
                  className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors relative ${
                    item.disabled
                      ? 'text-gray-400 dark:text-[#666666] cursor-not-allowed'
                      : pathname === item.href
                      ? 'text-[#FF8C00] bg-[#FF8C00]/10'
                      : 'text-gray-600 dark:text-[#CCCCCC] hover:text-[#FF8C00] dark:hover:text-[#FF8C00] hover:bg-[#FF8C00]/5'
                  }`}
                  onClick={() => !item.disabled && setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  <span className="flex-1">{item.name}</span>
                  {item.disabled && (
                    <span className="text-xs bg-[#FF8C00]/10 text-[#FF8C00] px-2 py-0.5 rounded-full">
                      SOON
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 