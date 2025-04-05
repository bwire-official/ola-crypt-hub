'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { 
  Code2, 
  Brain, 
  Network, 
  Shield, 
  BookOpen, 
  Users, 
  Globe, 
  Zap,
  Loader2,
  ArrowRight,
  ExternalLink,
  Github,
  Twitter,
  Link as LinkIcon
} from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const floatingIcons = [
  { icon: Code2, delay: 0 },
  { icon: Brain, delay: 0.2 },
  { icon: Shield, delay: 0.4 },
  { icon: Network, delay: 0.6 },
  { icon: BookOpen, delay: 0.8 },
  { icon: Users, delay: 1 },
  { icon: Globe, delay: 1.2 },
  { icon: Zap, delay: 1.4 },
];

const portfolioCategories = [
  { name: 'All Projects', icon: Globe },
  { name: 'Web3 Development', icon: Code2 },
  { name: 'Security Audits', icon: Shield },
  { name: 'Data Analysis', icon: Brain },
  { name: 'Brand Collaborations', icon: Network },
];

const portfolioItems = [
  {
    title: 'Secure DeFi Protocol',
    category: 'Web3 Development',
    description: 'Built a secure DeFi protocol with advanced security measures and audit-ready architecture.',
    image: '/images/project1.jpg',
    metrics: {
      tvl: '$10M+',
      users: '5K+',
      security: '98%',
    },
    links: {
      github: '#',
      twitter: '#',
      website: '#',
    },
    tags: ['Solidity', 'Web3.js', 'Security'],
  },
  {
    title: 'Blockchain Analytics Platform',
    category: 'Data Analysis',
    description: 'Developed a comprehensive analytics platform for blockchain data visualization and insights.',
    image: '/images/project2.jpg',
    metrics: {
      dataPoints: '1M+',
      accuracy: '99.9%',
      users: '2K+',
    },
    links: {
      github: '#',
      twitter: '#',
      website: '#',
    },
    tags: ['Python', 'React', 'D3.js'],
  },
  // Add more portfolio items as needed
];

export default function Portfolio() {
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All Projects');

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className={`text-[#FF8C00]`}
        >
          <Loader2 className="w-12 h-12" />
        </motion.div>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${
          theme === 'dark' 
            ? 'from-[#1A0F0F] via-[#2A1B1B] to-[#3A2B1B]' 
            : 'from-gray-50 via-gray-100 to-gray-200'
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
        </motion.div>
        {/* Floating Icons */}
        {floatingIcons.map((icon, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: [0, 1, 0],
              y: [20, -20, 20],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: icon.delay,
              ease: "easeInOut"
            }}
            className={`absolute ${
              theme === 'dark' ? 'text-[#FF8C00]/20' : 'text-[#FF8C00]/10'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <icon.icon className="w-8 h-8" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 w-full"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                theme === 'dark'
                  ? 'bg-[#FF8C00]/5 text-[#FF8C00] border-[#FF8C00]/10'
                  : 'bg-[#FF8C00]/10 text-[#FF8C00] border-[#FF8C00]/20'
              } border mb-6`}
            >
              <span className="text-sm font-medium">Web3 Contributions</span>
            </motion.div>
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Portfolio
            </h1>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Showcasing impactful projects and collaborations
            </p>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {portfolioCategories.map((category) => (
              <motion.button
                key={category.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-2 rounded-full flex items-center gap-2 ${
                  selectedCategory === category.name
                    ? theme === 'dark'
                      ? 'bg-[#FF8C00] text-white'
                      : 'bg-[#FF8C00] text-white'
                    : theme === 'dark'
                      ? 'bg-white/5 text-gray-300 hover:bg-white/10'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                } transition-colors duration-200`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
          >
            {portfolioItems
              .filter(item => selectedCategory === 'All Projects' || item.category === selectedCategory)
              .map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`group p-6 rounded-2xl ${
                    theme === 'dark'
                      ? 'bg-white/5 border-white/10 hover:border-[#FF8C00]/20 hover:bg-[#FF8C00]/5'
                      : 'bg-white border-gray-200 hover:border-[#FF8C00]/30 hover:bg-[#FF8C00]/5'
                  } border transition-all duration-300 hover:shadow-lg hover:shadow-[#FF8C00]/10 backdrop-blur-sm`}
                >
                  <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${
                      theme === 'dark' ? 'from-black/60' : 'from-black/40'
                    } to-transparent`} />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className={`text-xl font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-white'
                      }`}>
                        {item.title}
                      </h3>
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-200'
                      }`}>
                        {item.category}
                      </p>
                    </div>
                  </div>
                  <p className={`mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-1 rounded-full text-xs ${
                          theme === 'dark'
                            ? 'bg-[#FF8C00]/10 text-[#FF8C00]'
                            : 'bg-[#FF8C00]/5 text-[#FF8C00]'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {Object.entries(item.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className={`text-lg font-semibold ${
                          theme === 'dark' ? 'text-[#FF8C00]' : 'text-[#FF8C00]'
                        }`}>
                          {value}
                        </div>
                        <div className={`text-xs ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end gap-4">
                    {Object.entries(item.links).map(([key, value]) => (
                      <motion.a
                        key={key}
                        href={value}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-2 rounded-full ${
                          theme === 'dark'
                            ? 'bg-white/5 hover:bg-white/10'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        {key === 'github' && <Github className="w-4 h-4" />}
                        {key === 'twitter' && <Twitter className="w-4 h-4" />}
                        {key === 'website' && <ExternalLink className="w-4 h-4" />}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 