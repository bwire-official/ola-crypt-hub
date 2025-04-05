'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { Search, Filter, BookOpen, TrendingUp, BarChart, Lightbulb, Clock, Bookmark, Share2, MessageSquare, Twitter, Gift, Rocket } from 'lucide-react';
import { useState, useEffect } from 'react';
import Loading from './loading';

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
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Insights & Analysis
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover data-driven insights, market analysis, and thought leadership in Web3, blockchain, and future technology.
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search insights by title, content, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#FF8C00] text-lg shadow-lg"
            />
            {searchQuery && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-lg transition-colors ${
                activeCategory === category
                  ? 'bg-[#FF8C00] text-white shadow-lg'
                  : 'bg-white/50 dark:bg-black/50 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Insights Grid */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredInsights.map((insight, index) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`relative rounded-xl overflow-hidden ${
                  theme === 'dark'
                    ? 'bg-white/5 border border-white/10'
                    : 'bg-black/5 border border-black/10'
                } backdrop-blur-sm hover:shadow-xl transition-shadow`}
              >
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={insight.thumbnail}
                    alt={insight.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {insight.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-[#FF8C00] text-white rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                  {insight.type === 'thread' && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-medium flex items-center gap-2">
                      <Twitter className="w-4 h-4" />
                      Thread
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-[#FF8C00]">
                      {insight.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">
                    {insight.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {insight.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{insight.readTime}</span>
                    </div>
                    <span>{insight.date}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {insight.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-full text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4">
                    {insight.type === 'thread' ? (
                      <a
                        href={insight.threadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-center font-medium flex items-center justify-center gap-2"
                      >
                        <Twitter className="w-5 h-5" />
                        Read Thread
                      </a>
                    ) : (
                      <button className="flex-1 px-4 py-2 bg-[#FF8C00] text-white rounded-lg hover:bg-[#FF8C00]/90 transition-colors text-center font-medium">
                        Read More
                      </button>
                    )}
                    <div className="flex gap-2">
                      <button className="p-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <Bookmark className="w-5 h-5" />
                      </button>
                      <button className="p-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
} 