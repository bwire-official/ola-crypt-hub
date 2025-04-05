'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { Calendar, Clock, MapPin, Share2, Bookmark, MessageSquare, Hash, Users, CalendarPlus } from 'lucide-react';
import { useState } from 'react';

type EventType = 'CONFERENCE' | 'PANEL' | 'MEETUP' | 'TWITTER_SPACE';
type EventStatus = 'UPCOMING' | 'COMPLETED';

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: EventType;
  status: EventStatus;
  link: string;
  thumbnail: string;
  recording?: string;
  twitterSpaceId?: string;
}

export default function EventCard({
  title,
  date,
  time,
  location,
  description,
  type,
  status,
  link,
  recording,
  thumbnail,
  twitterSpaceId
}: EventCardProps) {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const addToCalendar = () => {
    // Format date and time for calendar
    const [year, month, day] = date.split('-');
    const [startTime, endTime] = time.split(' - ');
    const [startHour, startMinute] = startTime.split(':');
    const [endHour, endMinute] = endTime.split(':');

    // Create calendar event URL
    const startDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), 
      parseInt(startHour), parseInt(startMinute));
    const endDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), 
      parseInt(endHour), parseInt(endMinute));

    const calendarUrl = new URL('https://calendar.google.com/calendar/render');
    calendarUrl.searchParams.append('action', 'TEMPLATE');
    calendarUrl.searchParams.append('text', title);
    calendarUrl.searchParams.append('details', description);
    calendarUrl.searchParams.append('location', location);
    calendarUrl.searchParams.append('dates', 
      `${startDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z` + '/' +
      `${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z`
    );

    window.open(calendarUrl.toString(), '_blank');
  };

  const getStatusColor = () => {
    switch (status) {
      case 'UPCOMING':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'COMPLETED':
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
      default:
        return 'bg-[#FF8C00]/10 text-[#FF8C00] border-[#FF8C00]/20';
    }
  };

  const getTypeIcon = () => {
    switch (type) {
      case 'CONFERENCE':
        return <Calendar className="w-5 h-5" />;
      case 'PANEL':
        return <MessageSquare className="w-5 h-5" />;
      case 'MEETUP':
        return <Hash className="w-5 h-5" />;
      case 'TWITTER_SPACE':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        );
      default:
        return <Calendar className="w-5 h-5" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative rounded-xl overflow-hidden ${
        theme === 'dark'
          ? 'bg-white/5 border border-white/10'
          : 'bg-black/5 border border-black/10'
      } backdrop-blur-sm`}
    >
      {/* Thumbnail */}
      {thumbnail && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            {getTypeIcon()}
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {type.charAt(0) + type.slice(1).toLowerCase().replace('_', ' ')}
            </span>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSaved(!isSaved)}
            className={`p-2 rounded-full ${
              isSaved
                ? 'text-[#FF8C00] bg-[#FF8C00]/10'
                : 'text-gray-400 hover:text-[#FF8C00] hover:bg-[#FF8C00]/5'
            } transition-colors`}
          >
            <Bookmark className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Title */}
        <motion.h3 
          className="text-xl font-bold mb-2"
          animate={{ color: isHovered ? '#FF8C00' : 'inherit' }}
        >
          {title}
        </motion.h3>

        {/* Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <Clock className="w-4 h-4" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Status Badge */}
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor()}`}>
          {status.charAt(0) + status.slice(1).toLowerCase()}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mt-6">
          {status === 'UPCOMING' && link && (
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 px-4 py-2 bg-[#FF8C00] text-white rounded-lg hover:bg-[#FF8C00]/90 transition-colors text-center font-medium"
            >
              {type === 'TWITTER_SPACE' ? 'Join Space' : 'Join Event'}
            </motion.a>
          )}
          {status === 'COMPLETED' && recording && (
            <motion.a
              href={recording}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 px-4 py-2 bg-[#FF8C00] text-white rounded-lg hover:bg-[#FF8C00]/90 transition-colors text-center font-medium"
            >
              {type === 'TWITTER_SPACE' ? 'Listen to Space' : 'Watch Recording'}
            </motion.a>
          )}
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={addToCalendar}
              className="p-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              title="Add to Calendar"
            >
              <CalendarPlus className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <Share2 className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 