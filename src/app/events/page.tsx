'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Bookmark, Share2, Tag } from 'lucide-react';
import { useLoader } from '@/hooks/useLoader';
import Loader from '@/components/Loader';

interface Event {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  image: string;
  category: string;
  tags: string[];
}

const events: Event[] = [
  {
    title: 'Web3 Security Workshop',
    description: 'Learn about the latest security practices in Web3 development.',
    date: '2024-04-01',
    time: '14:00 - 16:00',
    location: 'Virtual Event',
    attendees: 50,
    image: '/images/event1.jpg',
    category: 'Workshop',
    tags: ['Web3', 'Security', 'Development']
  },
  // Add more events as needed
];

export default function Events() {
  const { isLoading, error, retry } = useLoader({
    onLoad: async () => {
      // Simulate loading events data
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
            Upcoming Events
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white dark:bg-[#2A2A2A] rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white">
                    {event.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {event.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-full text-xs bg-[#FF8C00]/10 text-[#FF8C00]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees} attendees</span>
                  </div>
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