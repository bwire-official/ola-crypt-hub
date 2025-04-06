'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  time: string;
  attendees: number;
  image: string;
  delay?: number;
}

export default function EventCard({ title, date, location, time, attendees, image, delay = 0 }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <Clock className="w-4 h-4" />
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <Users className="w-4 h-4" />
          <span>{attendees} attendees</span>
        </div>
      </div>
    </motion.div>
  );
} 