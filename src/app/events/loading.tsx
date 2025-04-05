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
          <div className="h-14 bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse" />
          <div className="flex justify-center gap-2 mt-4">
            <div className="h-10 w-24 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse" />
          </div>
        </div>

        {/* Tabs Skeleton */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-10 w-24 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse" />
          ))}
        </div>

        {/* Event Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl overflow-hidden bg-white/5 dark:bg-black/5 backdrop-blur-sm border border-gray-200 dark:border-gray-800"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-800 animate-pulse" />
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-5 w-24 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                  <div className="h-8 w-8 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse" />
                </div>
                <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                  <div className="h-4 w-1/3 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                  <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                </div>
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                <div className="h-8 w-24 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 