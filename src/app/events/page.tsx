'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { Search, Filter, Calendar, Clock, MapPin, Share2, Bookmark, MessageSquare, Hash, Users, CalendarPlus, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import EventGrid from '@/components/EventGrid';
import Loading from './loading';
import Image from 'next/image';

type EventType = 'CONFERENCE' | 'PANEL' | 'MEETUP' | 'TWITTER_SPACE';
type EventStatus = 'UPCOMING' | 'COMPLETED';

interface Event {
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

// Mock data for events
const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Web3 Development Workshop',
    date: '2024-03-15',
    time: '14:00 UTC',
    location: 'Virtual',
    description: 'Learn the fundamentals of Web3 development and smart contract programming.',
    type: 'CONFERENCE' as const,
    status: 'UPCOMING',
    link: '#',
    thumbnail: '/images/event1.jpg'
  },
  {
    id: '2',
    title: 'Blockchain Security Panel',
    date: '2024-03-20',
    time: '16:00 UTC',
    location: 'Virtual',
    description: 'Expert panel discussion on blockchain security best practices.',
    type: 'PANEL' as const,
    status: 'UPCOMING',
    link: '#',
    thumbnail: '/images/event2.jpg'
  },
  {
    id: '3',
    title: 'Community Meetup',
    date: '2024-03-25',
    time: '18:00 UTC',
    location: 'Virtual',
    description: 'Monthly community meetup to discuss latest developments.',
    type: 'MEETUP' as const,
    status: 'UPCOMING',
    link: '#',
    thumbnail: '/images/event3.jpg'
  },
  {
    id: '4',
    title: 'Twitter Space: Future of DeFi',
    date: '2024-03-10',
    time: '15:00 UTC',
    location: 'Twitter',
    description: 'Join us for a Twitter Space discussion on the future of DeFi.',
    type: 'TWITTER_SPACE' as const,
    status: 'COMPLETED',
    link: '#',
    thumbnail: '/images/event4.jpg',
    twitterSpaceId: '123456789'
  },
  {
    id: '5',
    title: 'Previous Conference Recording',
    date: '2024-02-15',
    time: '14:00 UTC',
    location: 'Virtual',
    description: 'Watch the recording of our previous conference on Web3 development.',
    type: 'CONFERENCE' as const,
    status: 'COMPLETED',
    link: '#',
    thumbnail: '/images/event5.jpg',
    recording: 'https://youtube.com/watch?v=example'
  }
];

const FloatingIcon = ({ icon: Icon, delay, duration, x, y }: { 
  icon: any; 
  delay: number; 
  duration: number;
  x: number;
  y: number;
}) => {
  const { theme } = useTheme();
  
  return (
    <motion.div
      initial={{ 
        opacity: 0,
        scale: 0,
        x: x,
        y: -100
      }}
      animate={{ 
        opacity: [0.3, 0.6, 0.3],
        scale: [1, 1.3, 1],
        y: [y, y + 150, y],
        rotate: [0, 15, 0],
      }}
      transition={{ 
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <div className="relative">
        <div className={`absolute inset-0 blur-xl ${
          theme === 'dark' 
            ? 'bg-[#FF8C00]/20' 
            : 'bg-[#FF8C00]/30'
        } rounded-full`} />
        <Icon className={`w-8 h-8 relative z-10 ${
          theme === 'dark' 
            ? 'text-[#FF8C00] drop-shadow-[0_0_15px_rgba(255,140,0,0.6)]' 
            : 'text-[#FF8C00] drop-shadow-[0_0_20px_rgba(255,140,0,0.7)]'
        }`} />
      </div>
    </motion.div>
  );
};

export default function Events() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<'ALL' | 'UPCOMING' | 'COMPLETED'>('ALL');
  const [activeType, setActiveType] = useState<'ALL' | EventType>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredEvents = mockEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF8C00]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        
        {/* Floating Icons with adjusted positions and timing */}
        <FloatingIcon icon={Calendar} delay={0} duration={6} x={5} y={15} />
        <FloatingIcon icon={Clock} delay={1} duration={7} x={15} y={35} />
        <FloatingIcon icon={Users} delay={2} duration={8} x={25} y={55} />
        <FloatingIcon icon={MapPin} delay={3} duration={6} x={35} y={75} />
        <FloatingIcon icon={MessageSquare} delay={4} duration={7} x={45} y={25} />
        <FloatingIcon icon={Hash} delay={5} duration={8} x={55} y={45} />
        <FloatingIcon icon={CalendarPlus} delay={6} duration={6} x={65} y={65} />
        <FloatingIcon icon={Share2} delay={7} duration={7} x={75} y={35} />
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Upcoming Events
            </h1>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Join us for exciting Web3 events and networking opportunities
            </p>
          </motion.div>

          {/* Events Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`p-6 rounded-2xl ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 hover:border-[#FF8C00]/20 hover:bg-[#FF8C00]/5'
                    : 'bg-white border-gray-200 hover:border-[#FF8C00]/30 hover:bg-[#FF8C00]/5'
                } border transition-all duration-300 hover:shadow-lg hover:shadow-[#FF8C00]/10 backdrop-blur-sm`}
              >
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={event.thumbnail}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      theme === 'dark'
                        ? 'bg-[#FF8C00] text-white'
                        : 'bg-[#FF8C00] text-white'
                    }`}>
                      {event.date}
                    </span>
                  </div>
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {event.title}
                </h3>
                <p className={`mb-4 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {event.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className={`w-4 h-4 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`} />
                    <span className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {event.location}
                    </span>
                  </div>
                  <button
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      theme === 'dark'
                        ? 'bg-[#FF8C00] text-white hover:bg-[#FF8C00]/90'
                        : 'bg-[#FF8C00] text-white hover:bg-[#FF8C00]/90'
                    } transition-colors`}
                  >
                    Register
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
} 