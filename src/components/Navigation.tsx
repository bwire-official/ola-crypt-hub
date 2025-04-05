'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { 
  Sun, 
  Moon, 
  Menu, 
  Home,
  BookOpen,
  Users,
  Mail,
  Settings,
  X,
  Globe,
  CalendarDays,
  MessageSquare
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Portfolio', href: '/portfolio', icon: BookOpen },
  { name: 'Network', href: '/network', icon: Globe },
  { name: 'Events', href: '/events', icon: CalendarDays },
  { name: 'Insights', href: '/insights', icon: BookOpen },
  { name: 'Contact', href: '/contact', icon: MessageSquare },
];

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled
          ? theme === 'dark'
            ? 'bg-dark/80 backdrop-blur-md border-b border-border/50'
            : 'bg-white/80 backdrop-blur-md border-b border-gray-200'
          : 'bg-transparent'
      } transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <a href="/" className="flex items-center">
              <span className="relative">
                <span className="absolute inset-0 bg-[#FF8C00] blur-2xl opacity-20 animate-pulse" />
                <span className="relative inline-flex items-center">
                  <span className="text-red-500 text-lg">O</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF8C00] via-[#FFA500] to-[#FF6B00] text-lg">la_Crrypt</span>
                  <motion.span
                    className="ml-1 text-[#FF8C00] text-lg"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    ₿
                  </motion.span>
                </span>
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#FF8C00] ${
                pathname === '/' ? 'text-[#FF8C00] border-b-2 border-[#FF8C00]' : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              <Home className="w-5 h-5" />
              Home
            </Link>
            <Link 
              href="/about" 
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#FF8C00] ${
                pathname === '/about' ? 'text-[#FF8C00] border-b-2 border-[#FF8C00]' : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              <Users className="w-5 h-5" />
              About
            </Link>
            <Link 
              href="/network" 
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#FF8C00] ${
                pathname === '/network' ? 'text-[#FF8C00] border-b-2 border-[#FF8C00]' : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              <Globe className="w-5 h-5" />
              Network
            </Link>
            <Link 
              href="/events" 
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#FF8C00] ${
                pathname === '/events' ? 'text-[#FF8C00] border-b-2 border-[#FF8C00]' : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              <CalendarDays className="w-5 h-5" />
              Events
            </Link>
            <Link 
              href="/insights" 
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#FF8C00] ${
                pathname === '/insights' ? 'text-[#FF8C00] border-b-2 border-[#FF8C00]' : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              Insights
            </Link>
            <Link 
              href="/contact" 
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#FF8C00] ${
                pathname === '/contact' ? 'text-[#FF8C00] border-b-2 border-[#FF8C00]' : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              <MessageSquare className="w-5 h-5" />
              Contact
            </Link>
          </div>

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className={`p-2.5 rounded-full ${
              theme === 'dark'
                ? 'bg-[#FF8C00]/5 text-[#FF8C00] hover:bg-[#FF8C00]/10'
                : 'bg-[#FF8C00]/5 text-[#FF8C00] hover:bg-[#FF8C00]/10'
            } transition-colors`}
          >
            {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-1.5 rounded-full ${
              theme === 'dark'
                ? 'text-gray-300 hover:text-[#FF8C00]'
                : 'text-gray-600 hover:text-[#FF8C00]'
            } transition-colors`}
          >
            <Menu className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-[9999]">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/90 backdrop-blur-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              
              {/* Menu Panel */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 20 }}
                className="fixed top-0 right-0 h-screen w-64 bg-white dark:bg-dark shadow-2xl border-l border-gray-200 dark:border-gray-800 flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-dark">
                  <Link href="/" className="text-2xl font-bold text-[#FF8C00]">
                    OlaCrypt
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                {/* Navigation Items */}
                <div className="flex-1 p-4 space-y-2 bg-white dark:bg-dark overflow-y-auto">
                  {/* Mobile menu items */}
                  <div className="flex flex-col gap-4">
                    <Link 
                      href="/" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 text-lg font-medium transition-colors hover:text-[#FF8C00] ${
                        pathname === '/' ? 'text-[#FF8C00]' : 'text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      <Home className="w-6 h-6" />
                      Home
                    </Link>
                    <Link 
                      href="/about" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 text-lg font-medium transition-colors hover:text-[#FF8C00] ${
                        pathname === '/about' ? 'text-[#FF8C00]' : 'text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      <Users className="w-6 h-6" />
                      About
                    </Link>
                    <Link 
                      href="/network" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 text-lg font-medium transition-colors hover:text-[#FF8C00] ${
                        pathname === '/network' ? 'text-[#FF8C00]' : 'text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      <Globe className="w-6 h-6" />
                      Network
                    </Link>
                    <Link 
                      href="/events" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 text-lg font-medium transition-colors hover:text-[#FF8C00] ${
                        pathname === '/events' ? 'text-[#FF8C00]' : 'text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      <CalendarDays className="w-6 h-6" />
                      Events
                    </Link>
                    <Link 
                      href="/insights" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 text-lg font-medium transition-colors hover:text-[#FF8C00] ${
                        pathname === '/insights' ? 'text-[#FF8C00]' : 'text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      <BookOpen className="w-6 h-6" />
                      Insights
                    </Link>
                    <Link 
                      href="/contact" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 text-lg font-medium transition-colors hover:text-[#FF8C00] ${
                        pathname === '/contact' ? 'text-[#FF8C00]' : 'text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      <MessageSquare className="w-6 h-6" />
                      Contact
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
} 