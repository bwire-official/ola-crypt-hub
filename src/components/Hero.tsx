'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { ArrowRight, Twitter, Linkedin, Github, Sparkles, Coins, Network, Lock, Globe, Zap, Shield, Brain, Rocket, Users, X, CalendarDays, BookOpen, MessageSquare } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Floating element component
const FloatingElement = ({ x, y, size, delay, icon: Icon, theme }: { x: number; y: number; size: number; delay: number; icon: any; theme: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0.2, 0.4, 0.2],
      scale: [1, 1.2, 1],
      y: [0, -15, 0],
      rotate: [0, 8, 0],
    }}
    transition={{ 
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="absolute"
    style={{ left: `${x}%`, top: `${y}%` }}
  >
    <Icon className={`w-${size} h-${size} ${
      theme === 'dark' 
        ? 'text-[#FF8C00]/40 drop-shadow-[0_0_12px_rgba(255,140,0,0.4)]' 
        : 'text-[#FF8C00]/50 drop-shadow-[0_0_16px_rgba(255,140,0,0.5)]'
    }`} />
  </motion.div>
);

// Animated gradient background
const GradientBackground = ({ theme }: { theme: string }) => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Base gradient */}
    <div className={`absolute inset-0 bg-gradient-to-br ${
      theme === 'dark' 
        ? 'from-[#1A0F0F] via-[#2A1B1B] to-[#3A2B1B]' 
        : 'from-white via-gray-50/80 to-gray-100/80'
    }`} />

    {/* Animated mesh gradient */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0"
    >
      <div className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,${
        theme === 'dark' 
          ? 'rgba(255,140,0,0.05)' 
          : 'rgba(255,140,0,0.03)'
      },transparent_50%)]`} />
      <motion.div
        animate={{
          background: [
            `radial-gradient(circle at 0% 0%, ${theme === 'dark' ? 'rgba(255,140,0,0.05)' : 'rgba(255,140,0,0.03)'}, transparent 50%)`,
            `radial-gradient(circle at 100% 100%, ${theme === 'dark' ? 'rgba(255,140,0,0.05)' : 'rgba(255,140,0,0.03)'}, transparent 50%)`,
            `radial-gradient(circle at 0% 0%, ${theme === 'dark' ? 'rgba(255,140,0,0.05)' : 'rgba(255,140,0,0.03)'}, transparent 50%)`,
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0"
      />
    </motion.div>

    {/* Animated grid pattern */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`absolute inset-0 bg-[linear-gradient(to_right,${
        theme === 'dark' 
          ? '#80808002_1px,transparent_1px' 
          : '#80808001_1px,transparent_1px'
      }),linear-gradient(to_bottom,${
        theme === 'dark' 
          ? '#80808002_1px,transparent_1px' 
          : '#80808001_1px,transparent_1px'
      })] bg-[size:24px_24px]`}
    >
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0"
      />
    </motion.div>

    {/* Floating gradient orbs */}
    <motion.div
      animate={{
        x: [0, 100, 0],
        y: [0, 50, 0],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`absolute w-96 h-96 rounded-full ${
        theme === 'dark'
          ? 'bg-[#FF8C00]/5 blur-3xl'
          : 'bg-[#FF8C00]/3 blur-2xl'
      }`}
      style={{ top: '20%', left: '20%' }}
    />
    <motion.div
      animate={{
        x: [100, 0, 100],
        y: [50, 0, 50],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`absolute w-96 h-96 rounded-full ${
        theme === 'dark'
          ? 'bg-[#FFA500]/5 blur-3xl'
          : 'bg-[#FFA500]/3 blur-2xl'
      }`}
      style={{ top: '60%', left: '60%' }}
    />
  </div>
);

// Add floating particles
const FloatingParticle = ({ x, y, size, delay, theme }: { x: number; y: number; size: number; delay: number; theme: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0.1, 0.3, 0.1],
      scale: [1, 1.2, 1],
      y: [0, -20, 0],
      x: [0, 10, 0],
    }}
    transition={{ 
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className={`absolute rounded-full ${
      theme === 'dark'
        ? 'bg-[#FF8C00]/10 blur-sm'
        : 'bg-[#FF8C00]/5 blur-sm'
    }`}
    style={{ 
      left: `${x}%`, 
      top: `${y}%`,
      width: `${size}px`,
      height: `${size}px`
    }}
  />
);

// Generate random particles
const generateParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 2
  }));
};

// Update social links
const socialLinks = [
  {
    name: 'X',
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    href: 'https://x.com/Ola_Crrypt',
    color: 'text-gray-400 hover:text-gray-500'
  },
  {
    name: 'Telegram',
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.52.36-.99.53-1.41.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.4-.89.03-.24.37-.49 1.02-.75 4.04-1.76 6.74-2.92 8.09-3.48 3.85-1.6 4.64-1.88 5.17-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.02.14-.02.3-.03.42z"/>
      </svg>
    ),
    href: 'https://t.me/Ola_Crrypt',
    color: 'text-blue-400 hover:text-blue-500'
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/Ola-Crrypt/',
    color: 'text-gray-400 hover:text-gray-500'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/yourusername',
    color: 'text-blue-600 hover:text-blue-700'
  }
];

// Update the TypingText component for better animation
const TypingText = ({ text, className }: { text: string; className: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 30); // Faster typing speed

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <motion.span 
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-[2px] h-[1em] bg-current ml-1"
      />
    </motion.span>
  );
};

// Add loading state component
const LoadingState = ({ theme }: { theme: string }) => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="relative">
      <div className={`w-16 h-16 rounded-full border-4 ${
        theme === 'dark' ? 'border-[#FF8C00]/20' : 'border-[#FF8C00]/30'
      }`}>
        <div className="absolute inset-0 rounded-full border-4 border-[#FF8C00] border-t-transparent animate-spin" />
      </div>
      <div className={`absolute inset-0 rounded-full border-4 ${
        theme === 'dark' ? 'border-[#FF8C00]/10' : 'border-[#FF8C00]/20'
      } animate-pulse`} />
    </div>
  </div>
);

// Add network error state component
const NetworkError = ({ theme }: { theme: string }) => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className={`p-6 rounded-2xl ${
      theme === 'dark' ? 'bg-white/5' : 'bg-white/90'
    } border ${
      theme === 'dark' ? 'border-[#FF8C00]/20' : 'border-[#FF8C00]/30'
    } backdrop-blur-sm`}>
      <div className="text-[#FF8C00] text-xl font-semibold mb-2">Network Error</div>
      <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
        Please check your connection and try again
      </div>
    </div>
  </div>
);

// Add animated button component
const AnimatedButton = ({ children, href, variant = 'primary' }: { children: React.ReactNode; href: string; variant?: 'primary' | 'secondary' }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold overflow-hidden ${
        variant === 'primary'
          ? 'bg-[#FF8C00] text-white hover:bg-[#FFA500]'
          : 'border-2 border-[#FF8C00] text-[#FF8C00] hover:bg-[#FF8C00]/10'
      } transition-colors`}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{
          x: isHovered ? ['-100%', '100%'] : '-100%',
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      {isLoading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </motion.div>
      ) : (
        children
      )}
    </motion.a>
  );
};

export default function Hero() {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const exploreRef = useRef<HTMLDivElement>(null);

  // Simulate loading and network states
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Generate particles
  const particles = generateParticles(30);

  // Generate floating elements
  const floatingElements = [
    { icon: Coins, x: 10, y: 20, size: 32, delay: 0 },
    { icon: Network, x: 80, y: 30, size: 32, delay: 0.2 },
    { icon: Lock, x: 20, y: 70, size: 32, delay: 0.4 },
    { icon: Globe, x: 70, y: 80, size: 32, delay: 0.6 },
    { icon: Zap, x: 40, y: 40, size: 32, delay: 0.8 },
    { icon: Shield, x: 60, y: 60, size: 32, delay: 1 },
    { icon: Brain, x: 30, y: 50, size: 32, delay: 1.2 },
    { icon: Coins, x: 85, y: 15, size: 28, delay: 1.4 },
    { icon: Network, x: 15, y: 85, size: 28, delay: 1.6 },
  ];

  // Close explore menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (exploreRef.current && !exploreRef.current.contains(event.target as Node)) {
        setIsExploreOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-24">
      {/* Loading and Error States */}
      {isLoading && <LoadingState theme={theme} />}
      {hasError && <NetworkError theme={theme} />}

      {/* Background */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <GradientBackground theme={theme} />
      </motion.div>

      {/* Floating Elements */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {floatingElements.map((element, index) => (
          <FloatingElement key={index} {...element} theme={theme} />
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="container relative mx-auto px-4 max-w-7xl">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center md:text-left"
          >
            {/* Animated Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                theme === 'dark'
                  ? 'bg-[#FF8C00]/5 text-[#FF8C00] border-[#FF8C00]/10 hover:bg-[#FF8C00]/10'
                  : 'bg-[#FF8C00]/10 text-[#FF8C00] border-[#FF8C00]/20 hover:bg-[#FF8C00]/20'
              } border transition-colors mb-4 md:mb-6`}
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">All about Securing My Future</span>
            </motion.div>

            {/* Logo and other content */}
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 md:mb-6 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="relative inline-flex items-center">
                <span className="absolute inset-0 bg-[#FF8C00] blur-2xl opacity-20 animate-pulse" />
                <span className="relative">
                  <span className="text-red-500">O</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF8C00] via-[#FFA500] to-[#FF6B00]">la_Crrypt</span>
                </span>
                <motion.span
                  className="ml-2 text-[#FF8C00]"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  ₿
                </motion.span>
                <motion.div
                  className="absolute -inset-2 bg-[#FF8C00]/10 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </span>
            </motion.h1>

            {/* Updated content with better text */}
            <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
              <TypingText 
                text="Building the Future of Web3" 
                className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF8C00] via-[#FFA500] to-[#FF6B00] dark:from-[#FF8C00] dark:via-[#FFA500] dark:to-[#FF6B00]" 
              />
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto">
              Web3 Startups · Brand Ambassador · SpacesHost · Data Scientist
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 md:mb-24">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsExploreOpen(true)}
                className="px-8 py-3 bg-[#FF8C00] text-white rounded-lg font-medium hover:bg-[#FF8C00]/90 transition-colors flex items-center gap-2 shadow-lg hover:shadow-[#FF8C00]/20"
              >
                <Rocket className="w-5 h-5" />
                Explore
              </motion.button>
              <Link href="/network">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white/10 dark:bg-black/10 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-white/20 dark:hover:bg-black/20 transition-colors flex items-center gap-2 backdrop-blur-sm border border-white/20 dark:border-black/20 shadow-lg hover:shadow-white/10 dark:hover:shadow-black/10"
                >
                  <Users className="w-5 h-5" />
                  Join Network
                </motion.button>
              </Link>
            </div>

            {/* Stats Section */}
            <div className="w-full max-w-4xl mx-auto mb-16 md:mb-24">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`p-4 rounded-xl backdrop-blur-sm ${
                    theme === 'dark'
                      ? 'bg-white/5 border border-white/10'
                      : 'bg-black/5 border border-black/10'
                  }`}
                >
                  <motion.div 
                    className="text-2xl font-bold text-[#FF8C00]"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    66.5K+
                  </motion.div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Community
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`p-4 rounded-xl backdrop-blur-sm ${
                    theme === 'dark'
                      ? 'bg-white/5 border border-white/10'
                      : 'bg-black/5 border border-black/10'
                  }`}
                >
                  <motion.div 
                    className="text-2xl font-bold text-[#FF8C00]"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  >
                    700+
                  </motion.div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Connections
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`p-4 rounded-xl backdrop-blur-sm ${
                    theme === 'dark'
                      ? 'bg-white/5 border border-white/10'
                      : 'bg-black/5 border border-black/10'
                  }`}
                >
                  <motion.div 
                    className="text-2xl font-bold text-[#FF8C00]"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  >
                    100+
                  </motion.div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Projects
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`p-4 rounded-xl backdrop-blur-sm ${
                    theme === 'dark'
                      ? 'bg-white/5 border border-white/10'
                      : 'bg-black/5 border border-black/10'
                  }`}
                >
                  <motion.div 
                    className="text-2xl font-bold text-[#FF8C00]"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  >
                    50+
                  </motion.div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Articles
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="flex justify-center md:justify-start gap-4 md:gap-6 mb-8 md:gap-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${social.color} transition-colors`}
                >
                  <social.icon className="w-5 h-5 md:w-6 md:h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right content - Rotating profile picture */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mb-8 md:mb-0 flex-shrink-0"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Outer glow ring */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "linear",
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#FF8C00] via-[#FFA500] to-[#FF8C00] blur-3xl"
              />

              {/* Middle glow ring */}
              <motion.div
                animate={{ 
                  rotate: -360,
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.6, 0.4]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "linear",
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#FF8C00] via-[#FFA500] to-[#FF8C00] blur-2xl"
              />

              {/* Inner glow ring */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.7, 0.5]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "linear",
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#FF8C00] via-[#FFA500] to-[#FF8C00] blur-xl"
              />
              
              {/* Profile picture container */}
              <motion.div
                animate={{ 
                  rotate: -360,
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "linear",
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF8C00] via-[#FFA500] to-[#FF8C00] p-2"
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-[#1A0F0F] p-2">
                  <Image
                    src="/images/pfp.jpg"
                    alt="Profile Picture"
                    width={384}
                    height={384}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div 
          className={`w-6 h-10 border-2 ${
            theme === 'dark' ? 'border-[#FF8C00]/20' : 'border-[#FF8C00]/30'
          } rounded-full flex justify-center`}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div 
            className="w-1 h-3 bg-[#FF8C00] rounded-full mt-2"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>

      {/* Explore Popup Menu */}
      <AnimatePresence>
        {isExploreOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-xl"
              onClick={() => setIsExploreOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              ref={exploreRef}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              className="relative w-full max-w-2xl bg-white dark:bg-dark rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden mx-4"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
                <h3 className="text-2xl font-bold text-[#FF8C00]">Explore</h3>
                <button
                  onClick={() => setIsExploreOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Grid */}
              <div className="grid grid-cols-2 gap-4 p-6">
                <Link href="/about">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-4 rounded-xl bg-white/5 dark:bg-black/5 hover:bg-[#FF8C00]/5 transition-colors cursor-pointer"
                  >
                    <Users className="w-8 h-8 text-[#FF8C00] mb-2" />
                    <h4 className="font-medium">About</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Learn more about us</p>
                  </motion.div>
                </Link>
                <Link href="/network">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-4 rounded-xl bg-white/5 dark:bg-black/5 hover:bg-[#FF8C00]/5 transition-colors cursor-pointer"
                  >
                    <Globe className="w-8 h-8 text-[#FF8C00] mb-2" />
                    <h4 className="font-medium">Network</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Join our community</p>
                  </motion.div>
                </Link>
                <Link href="/events">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-4 rounded-xl bg-white/5 dark:bg-black/5 hover:bg-[#FF8C00]/5 transition-colors cursor-pointer"
                  >
                    <CalendarDays className="w-8 h-8 text-[#FF8C00] mb-2" />
                    <h4 className="font-medium">Events</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Upcoming gatherings</p>
                  </motion.div>
                </Link>
                <Link href="/insights">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-4 rounded-xl bg-white/5 dark:bg-black/5 hover:bg-[#FF8C00]/5 transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-8 h-8 text-[#FF8C00] mb-2" />
                    <h4 className="font-medium">Insights</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Latest articles</p>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
} ;