'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF8C00]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Section Skeleton */}
        <div className="text-center mb-12">
          <div className="h-12 w-64 bg-gray-200 dark:bg-gray-800 rounded-lg mx-auto mb-4 animate-pulse" />
          <div className="h-6 w-96 bg-gray-200 dark:bg-gray-800 rounded-lg mx-auto animate-pulse" />
        </div>

        {/* Search Bar Skeleton */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse" />
        </div>

        {/* Categories Skeleton */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-10 w-24 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"
            />
          ))}
        </div>

        {/* Insights Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-xl overflow-hidden bg-white/5 dark:bg-black/5 border border-white/10 dark:border-black/10 backdrop-blur-sm"
            >
              {/* Thumbnail Skeleton */}
              <div className="h-48 bg-gray-200 dark:bg-gray-800 animate-pulse" />

              {/* Content Skeleton */}
              <div className="p-6">
                {/* Category Skeleton */}
                <div className="h-4 w-24 bg-gray-200 dark:bg-gray-800 rounded mb-2 animate-pulse" />

                {/* Title Skeleton */}
                <div className="h-6 w-full bg-gray-200 dark:bg-gray-800 rounded mb-2 animate-pulse" />
                <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-800 rounded mb-4 animate-pulse" />

                {/* Excerpt Skeleton */}
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded mb-2 animate-pulse" />
                <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-800 rounded mb-4 animate-pulse" />

                {/* Meta Info Skeleton */}
                <div className="flex items-center justify-between mb-4">
                  <div className="h-4 w-20 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                  <div className="h-4 w-24 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                </div>

                {/* Tags Skeleton */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {[...Array(3)].map((_, j) => (
                    <div
                      key={j}
                      className="h-6 w-16 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse"
                    />
                  ))}
                </div>

                {/* Action Buttons Skeleton */}
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-10 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse" />
                  <div className="flex gap-2">
                    <div className="h-10 w-10 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse" />
                    <div className="h-10 w-10 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse" />
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