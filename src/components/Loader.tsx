'use client';

import { motion } from 'framer-motion';

interface LoaderProps {
  error?: string;
  onRetry?: () => void;
}

export default function Loader({ error, onRetry }: LoaderProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#1A1A1A]">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-red-500">O</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF8C00] via-[#FFA500] to-[#FF6B00]">
              la_crrypt
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF8C00] via-[#FFA500] to-[#FF6B00]">
              {" "}₿
            </span>
          </motion.h1>
          
          {error ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-red-500 mt-4"
            >
              <p>{error}</p>
              {onRetry && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onRetry}
                  className="mt-4 px-6 py-2 bg-[#FF8C00] text-white rounded-lg hover:bg-[#FFA500] transition-colors"
                >
                  Retry
                </motion.button>
              )}
            </motion.div>
          ) : (
            <motion.div
              className="w-24 h-1 bg-gray-200 dark:bg-gray-700 mx-auto mt-4 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[#FF8C00] to-[#FFA500]"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 0.75,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
} 