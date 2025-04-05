'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { Search, Filter, Calendar, Clock, MapPin, Share2, Bookmark, MessageSquare, Hash, Users, CalendarPlus } from 'lucide-react';
import { useState, useEffect } from 'react';
import EventGrid from '@/components/EventGrid';
import Loading from './loading';

// Mock data for events
const mockEvents = [
  {
    id: '1',
    title: 'Web3 Development Workshop',
    date: '2024-03-15',
    time: '2:00 PM - 4:00 PM',
    location: 'Virtual',
    description: 'Learn the fundamentals of Web3 development and blockchain technology in this hands-on workshop.',
    type: 'WORKSHOP',
    status: 'UPCOMING',
    link: 'https://example.com/workshop',
    thumbnail: '/images/workshop.jpg'
  },
  {
    id: '2',
    title: 'Crypto Trading Panel',
    date: '2024-03-10',
    time: '3:00 PM - 5:00 PM',
    location: 'Hybrid',
    description: 'Join industry experts for a discussion on cryptocurrency trading strategies and market analysis.',
    type: 'PANEL',
    status: 'PAST',
    recording: 'https://example.com/recording',
    thumbnail: '/images/panel.jpg'
  },
  {
    id: '3',
    title: 'NFT Art Space',
    date: '2024-03-20',
    time: '1:00 PM - 3:00 PM',
    location: 'In-person',
    description: 'Explore the world of NFT art and digital collectibles with leading artists and collectors.',
    type: 'SPACE',
    status: 'UPCOMING',
    link: 'https://example.com/nft-space',
    thumbnail: '/images/nft-space.jpg'
  },
  {
    id: '4',
    title: 'DeFi Conference',
    date: '2024-03-25',
    time: '10:00 AM - 6:00 PM',
    location: 'Virtual',
    description: 'A comprehensive conference on decentralized finance, featuring keynote speakers and workshops.',
    type: 'CONFERENCE',
    status: 'UPCOMING',
    link: 'https://example.com/defi-conf',
    thumbnail: '/images/conference.jpg'
  },
  {
    id: '5',
    title: 'Web3 Community Twitter Space',
    date: '2024-03-18',
    time: '4:00 PM - 5:00 PM',
    location: 'Twitter',
    description: 'Join us for an engaging discussion about the future of Web3 and blockchain technology.',
    type: 'TWITTER_SPACE',
    status: 'UPCOMING',
    link: 'https://twitter.com/i/spaces/example',
    twitterSpaceId: 'example',
    thumbnail: '/images/twitter-space.jpg'
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
  const [activeTab, setActiveTab] = useState<'ALL' | 'UPCOMING' | 'LIVE' | 'PAST'>('ALL');
  const [activeType, setActiveType] = useState<'ALL' | 'SPACE' | 'CONFERENCE' | 'PANEL' | 'MEETUP'>('ALL');
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
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Events & Workshops
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join our community events, workshops, and conferences to learn, connect, and grow in the world of Web3.
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search events by title, description, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#FF8C00] text-lg shadow-lg"
            />
            {searchQuery && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            )}
          </div>
          <div className="flex justify-center gap-2 mt-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <Filter className="w-5 h-5" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Event Type Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {['ALL', 'UPCOMING', 'LIVE', 'PAST'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as typeof activeTab)}
              className={`px-6 py-2 rounded-lg transition-colors ${
                activeTab === tab
                  ? 'bg-[#FF8C00] text-white shadow-lg'
                  : 'bg-white/50 dark:bg-black/50 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Event Grid */}
        <EventGrid
          events={filteredEvents}
          filter={activeTab}
          type={activeType}
        />
      </div>
    </div>
  );
} 