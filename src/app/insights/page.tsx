'use client';

import { motion } from 'framer-motion';
import { Bookmark, Share2, Tag } from 'lucide-react';
import { useLoader } from '@/hooks/useLoader';
import Loader from '@/components/Loader';

interface Article {
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

const articles: Article[] = [
  {
    title: 'Understanding Web3 Security',
    description: 'A comprehensive guide to securing Web3 applications and smart contracts.',
    image: '/images/article1.jpg',
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Security',
    tags: ['Web3', 'Security', 'Smart Contracts']
  },
  // Add more articles as needed
];

export default function Insights() {
  const { isLoading, error, retry } = useLoader({
    onLoad: async () => {
      // Simulate loading articles data
      await new Promise(resolve => setTimeout(resolve, 1500));
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Loader error={error} onRetry={retry} />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-red-500">O</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF8C00] via-[#FFA500] to-[#FF6B00]">
              la_Crrypt
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Insights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white dark:bg-[#2A2A2A] rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white">
                    {article.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Tag className="w-4 h-4" />
                    <span>{article.category}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {article.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-full text-xs bg-[#FF8C00]/10 text-[#FF8C00]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">
                    {article.date}
                  </span>
                  <div className="flex items-center gap-4">
                    <button className="text-gray-600 dark:text-gray-300 hover:text-[#FF8C00] transition-colors">
                      <Bookmark className="w-4 h-4" />
                    </button>
                    <button className="text-gray-600 dark:text-gray-300 hover:text-[#FF8C00] transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 