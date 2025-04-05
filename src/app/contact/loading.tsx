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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information Skeleton */}
          <div className="space-y-8">
            {/* Contact Cards Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl bg-white/5 dark:bg-black/5 border border-white/10 dark:border-black/10 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse" />
                    <div className="h-6 w-24 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                  </div>
                  <div className="h-4 w-32 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                </div>
              ))}
            </div>

            {/* Social Links Skeleton */}
            <div className="space-y-4">
              <div className="h-6 w-48 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white/5 dark:bg-black/5 border border-white/10 dark:border-black/10 backdrop-blur-sm flex items-center gap-3"
                  >
                    <div className="w-5 h-5 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                    <div className="h-4 w-20 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Skeleton */}
          <div className="p-8 rounded-xl bg-white/5 dark:bg-black/5 border border-white/10 dark:border-black/10 backdrop-blur-sm">
            <div className="space-y-6">
              {[...Array(4)].map((_, i) => (
                <div key={i}>
                  <div className="h-4 w-16 bg-gray-200 dark:bg-gray-800 rounded mb-2 animate-pulse" />
                  <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse" />
                </div>
              ))}
              <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 