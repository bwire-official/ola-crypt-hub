'use client';

import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

const LoadingCard = ({ delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-dark"
  >
    <div className="flex items-start justify-between mb-4">
      <div className="space-y-2">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-4 w-24" />
      </div>
      <Skeleton className="h-6 w-20" />
    </div>
    
    <div className="flex flex-wrap gap-2 mb-4">
      {[...Array(3)].map((_, j) => (
        <Skeleton key={j} className="h-6 w-16 rounded-full" />
      ))}
    </div>
    
    <div className="flex items-center justify-between">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-4 w-24" />
    </div>
  </motion.div>
);

const LoadingFeature = ({ delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-dark"
  >
    <Skeleton className="h-12 w-12 mb-4" />
    <Skeleton className="h-6 w-3/4 mb-2" />
    <Skeleton className="h-4 w-full" />
  </motion.div>
);

export default function NetworkLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF8C00]/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <Skeleton className="h-12 w-3/4 mx-auto mb-4" />
            <Skeleton className="h-6 w-1/2 mx-auto" />
          </motion.div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <LoadingFeature key={i} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-4 mb-8"
        >
          <Skeleton className="h-10 w-32" />
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 w-32" />
        </motion.div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <LoadingCard key={i} delay={i * 0.1} />
          ))}
        </div>
      </section>
    </div>
  );
} 