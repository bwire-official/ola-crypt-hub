'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { Search, Filter, BookOpen, TrendingUp, BarChart, Lightbulb, Clock, Bookmark, Share2, MessageSquare, Twitter, Gift, Rocket } from 'lucide-react';
import { useState, useEffect } from 'react';
import Loading from './loading';
import Image from 'next/image';
import { Calendar } from 'lucide-react';

// Types
import { LucideIcon } from 'lucide-react';

interface FloatingIconProps {
  icon: LucideIcon;
  delay?: number;
  style?: React.CSSProperties;
}

// Mock data for insights
const mockInsights = [
  {
    id: '1',
    title: 'The Future of Web3: A Data-Driven Analysis',
    excerpt: 'An in-depth look at emerging trends in blockchain technology and their potential impact on the future of digital assets.',
    category: 'Web3 & Blockchain',
    date: '2024-03-15',
    readTime: '8 min read',
    author: 'Ola_Crrypt',
    thumbnail: '/images/web3-future.jpg',
    featured: true,
    tags: ['Web3', 'Blockchain', 'Future Tech', 'Analysis'],
    type: 'article'
  },
  {
    id: '2',
    title: 'Building Sustainable Communities in Web3',
    excerpt: 'Learn how to create and maintain engaged communities in the Web3 space through data-driven strategies and authentic engagement.',
    category: 'Community Building',
    date: '2024-03-10',
    readTime: '6 min read',
    author: 'Ola_Crrypt',
    thumbnail: '/images/community-building.jpg',
    featured: false,
    tags: ['Community', 'Web3', 'Strategy', 'Growth'],
    type: 'article'
  },
  {
    id: '3',
    title: 'Data Science in Blockchain: A New Frontier',
    excerpt: 'Exploring the intersection of data science and blockchain technology, and how it\'s shaping the future of decentralized systems.',
    category: 'Data Science',
    date: '2024-03-05',
    readTime: '10 min read',
    author: 'Ola_Crrypt',
    thumbnail: '/images/data-science.jpg',
    featured: true,
    tags: ['Data Science', 'Blockchain', 'Technology', 'Innovation'],
    type: 'article'
  },
  {
    id: '4',
    title: '🚀 The Future of DeFi: A Thread',
    excerpt: '1/10 Let\'s dive into the future of DeFi and how it\'s reshaping the financial landscape. From yield farming to governance, here\'s what\'s coming next...',
    category: 'Twitter Thread',
    date: '2024-03-12',
    readTime: '5 min read',
    author: 'Ola_Crrypt',
    thumbnail: '/images/defi-future.jpg',
    featured: true,
    tags: ['DeFi', 'Thread', 'Finance', 'Future'],
    type: 'thread',
    threadUrl: 'https://twitter.com/Ola_Crrypt/status/1234567890'
  },
  {
    id: '5',
    title: '🎁 Top Airdrops to Watch in 2024',
    excerpt: 'A comprehensive guide to upcoming airdrops in the Web3 space, including eligibility criteria and potential rewards.',
    category: 'Airdrops',
    date: '2024-03-08',
    readTime: '7 min read',
    author: 'Ola_Crrypt',
    thumbnail: '/images/airdrops.jpg',
    featured: true,
    tags: ['Airdrops', 'Web3', 'Rewards', 'Guide'],
    type: 'article'
  },
  {
    id: '6',
    title: '💡 Web3 Startups to Watch',
    excerpt: 'Discover promising Web3 startups that are innovating in DeFi, NFTs, and blockchain infrastructure.',
    category: 'Startups',
    date: '2024-03-03',
    readTime: '6 min read',
    author: 'Ola_Crrypt',
    thumbnail: '/images/startups.jpg',
    featured: false,
    tags: ['Startups', 'Web3', 'Innovation', 'Investment'],
    type: 'article'
  }
];

const categories = [
  'All',
  'Web3 & Blockchain',
  'Data Science',
  'Future Tech',
  'Investment',
  'Community Building',
  'Personal Growth',
  'Industry Trends',
  'Twitter Thread',
  'Airdrops',
  'Startups'
];

// Floating icons component
const FloatingIcon = ({ icon: Icon, delay = 0, style }: FloatingIconProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="absolute"
    style={style}
  >
    <Icon className="w-6 h-6 text-[#FF8C00]" />
  </motion.div>
);

export default function Insights() {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedInsight, setSelectedInsight] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredInsights = mockInsights.filter(insight => {
    const matchesCategory = activeCategory === 'All' || insight.category === activeCategory;
    const matchesSearch = insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         insight.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         insight.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF8C00]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingIcon icon={Twitter} delay={0.2} style={{ top: '10%', left: '5%' }} />
        <FloatingIcon icon={Gift} delay={0.4} style={{ top: '20%', right: '15%' }} />
        <FloatingIcon icon={Rocket} delay={0.6} style={{ bottom: '30%', left: '20%' }} />
        <FloatingIcon icon={BookOpen} delay={0.8} style={{ bottom: '20%', right: '10%' }} />
        <FloatingIcon icon={TrendingUp} delay={1} style={{ top: '40%', left: '30%' }} />
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Web3 Insights
            </h1>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Stay updated with the latest trends and analysis in the Web3 space
            </p>
          </motion.div>

          {/* Insights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredInsights.map((insight, index) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`p-6 rounded-2xl ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 hover:border-[#FF8C00]/20 hover:bg-[#FF8C00]/5'
                    : 'bg-white border-gray-200 hover:border-[#FF8C00]/30 hover:bg-[#FF8C00]/5'
                } border transition-all duration-300 hover:shadow-lg hover:shadow-[#FF8C00]/10 backdrop-blur-sm`}
              >
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={insight.thumbnail}
                    alt={insight.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      theme === 'dark'
                        ? 'bg-[#FF8C00] text-white'
                        : 'bg-[#FF8C00] text-white'
                    }`}>
                      {insight.category}
                    </span>
                  </div>
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {insight.title}
                </h3>
                <p className={`mb-4 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {insight.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className={`w-4 h-4 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`} />
                    <span className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {insight.date}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedInsight(insight.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      theme === 'dark'
                        ? 'bg-[#FF8C00] text-white hover:bg-[#FF8C00]/90'
                        : 'bg-[#FF8C00] text-white hover:bg-[#FF8C00]/90'
                    } transition-colors`}
                  >
                    Read More
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
} 