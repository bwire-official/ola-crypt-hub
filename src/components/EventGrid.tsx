'use client';

import { motion } from 'framer-motion';
import EventCard from './EventCard';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: 'SPACE' | 'CONFERENCE' | 'PANEL' | 'MEETUP' | 'TWITTER_SPACE';
  status: 'UPCOMING' | 'LIVE' | 'PAST';
  guests?: string[];
  link?: string;
  recording?: string;
  thumbnail?: string;
  twitterSpaceId?: string;
}

interface EventGridProps {
  events: Event[];
  filter?: 'ALL' | 'UPCOMING' | 'LIVE' | 'PAST';
  type?: 'ALL' | 'SPACE' | 'CONFERENCE' | 'PANEL' | 'MEETUP' | 'TWITTER_SPACE';
}

export default function EventGrid({ events, filter = 'ALL', type = 'ALL' }: EventGridProps) {
  const filteredEvents = events.filter(event => {
    const matchesFilter = filter === 'ALL' || event.status === filter;
    const matchesType = type === 'ALL' || event.type === type;
    return matchesFilter && matchesType;
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  if (filteredEvents.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12"
      >
        <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
          No events found
        </h3>
        <p className="text-gray-500 dark:text-gray-500">
          Try adjusting your filters to see more events
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {filteredEvents.map((event) => (
        <motion.div
          key={event.id}
          variants={item}
        >
          <EventCard {...event} />
        </motion.div>
      ))}
    </motion.div>
  );
} 