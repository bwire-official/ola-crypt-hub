'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { 
  Users, 
  Briefcase, 
  Search, 
  Filter,
  ArrowRight,
  Wallet,
  Shield,
  Zap,
  MessageSquare,
  X,
  MapPin,
  ChevronDown,
  User,
  Clock,
  DollarSign,
  Star
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import Image from 'next/image';

// Features data
const features = [
  {
    title: 'Smart Matching',
    description: 'AI-powered matching system connects you with the perfect talent or project based on skills, experience, and preferences.',
    icon: Users
  },
  {
    title: 'Secure Payments',
    description: 'Built-in escrow system ensures safe and secure transactions for all projects and collaborations.',
    icon: Shield
  },
  {
    title: 'Real-time Updates',
    description: 'Stay informed with instant notifications about project progress, messages, and important updates.',
    icon: Zap
  },
  {
    title: 'Direct Communication',
    description: 'Seamless communication tools for real-time collaboration and project management.',
    icon: MessageSquare
  }
];

// Mock data for talents
const talents = [
  {
    id: 1,
    name: 'Alex Chen',
    title: 'Smart Contract Developer',
    skills: ['Solidity', 'Web3.js', 'React'],
    hourlyRate: '$150',
    experience: '5 years',
    location: 'Remote',
    rating: 4.8
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    title: 'Blockchain Security Expert',
    skills: ['Security', 'Auditing', 'Penetration Testing'],
    hourlyRate: '$200',
    experience: '8 years',
    location: 'New York',
    rating: 4.9
  },
  {
    id: 3,
    name: 'Michael Brown',
    title: 'DeFi Protocol Architect',
    skills: ['DeFi', 'Architecture', 'TypeScript'],
    hourlyRate: '$180',
    experience: '6 years',
    location: 'London',
    rating: 4.7
  },
  {
    id: 4,
    name: 'Emma Wilson',
    title: 'Web3 UI/UX Designer',
    skills: ['UI/UX', 'Figma', 'Web3 Design'],
    hourlyRate: '$120',
    experience: '4 years',
    location: 'Berlin',
    rating: 4.6
  },
  {
    id: 5,
    name: 'David Lee',
    title: 'Blockchain Infrastructure Engineer',
    skills: ['DevOps', 'AWS', 'Kubernetes'],
    hourlyRate: '$160',
    experience: '7 years',
    location: 'Singapore',
    rating: 4.8
  },
  {
    id: 6,
    name: 'Lisa Zhang',
    title: 'NFT Marketplace Developer',
    skills: ['NFT', 'IPFS', 'Ethereum'],
    hourlyRate: '$140',
    experience: '5 years',
    location: 'Tokyo',
    rating: 4.7
  }
];

// Mock data for projects
const projects = [
  {
    id: 1,
    title: 'DeFi Lending Protocol',
    description: 'Building a decentralized lending platform with yield optimization',
    budget: '$50,000 - $100,000',
    duration: '3-6 months',
    skills: ['Solidity', 'Web3.js', 'React'],
    location: 'Remote'
  },
  {
    id: 2,
    title: 'NFT Marketplace',
    description: 'Creating a marketplace for digital art and collectibles',
    budget: '$30,000 - $60,000',
    duration: '2-4 months',
    skills: ['NFT', 'IPFS', 'Ethereum'],
    location: 'Remote'
  },
  {
    id: 3,
    title: 'Cross-Chain Bridge',
    description: 'Developing a bridge for cross-chain asset transfers',
    budget: '$40,000 - $80,000',
    duration: '4-6 months',
    skills: ['Blockchain', 'Security', 'Smart Contracts'],
    location: 'Remote'
  },
  {
    id: 4,
    title: 'DAO Governance Platform',
    description: 'Building a platform for DAO governance and voting',
    budget: '$25,000 - $50,000',
    duration: '2-3 months',
    skills: ['Solidity', 'React', 'Web3.js'],
    location: 'Remote'
  },
  {
    id: 5,
    title: 'Web3 Analytics Dashboard',
    description: 'Creating analytics tools for DeFi protocols',
    budget: '$35,000 - $70,000',
    duration: '3-5 months',
    skills: ['Data Analysis', 'React', 'Web3.js'],
    location: 'Remote'
  },
  {
    id: 6,
    title: 'Blockchain Security Tool',
    description: 'Developing security analysis tools for smart contracts',
    budget: '$45,000 - $90,000',
    duration: '4-6 months',
    skills: ['Security', 'Solidity', 'Python'],
    location: 'Remote'
  }
];

// Constants
const LOCATIONS = ['All Locations', 'Remote', 'New York', 'London', 'Berlin', 'Singapore', 'Tokyo'] as const;
type Location = (typeof LOCATIONS)[number];

// Types for items
interface TalentItem {
  id: number;
  name: string;
  title: string;
  skills: string[];
  hourlyRate: string;
  experience: string;
  location: string;
  rating: number;
}

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  budget: string;
  duration: string;
  skills: string[];
  location: string;
}

type NetworkItem = TalentItem | ProjectItem;

// Types
interface FloatingElementProps {
  icon: LucideIcon;
  className?: string;
  delay?: number;
}

interface FilterDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

interface LoginPromptProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
}

// Floating element component with enhanced animations
const FloatingElement = ({ icon: Icon, className = '', delay = 0 }: FloatingElementProps) => (
  <motion.div
    className={`absolute ${className}`}
    initial={{ opacity: 0, scale: 0, y: -20 }}
    animate={{ 
      opacity: [0.2, 0.4, 0.2],
      scale: [1, 1.2, 1],
      y: [0, -15, 0],
      rotate: [0, 8, 0],
    }}
    transition={{ 
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <div className="relative">
      <div className="absolute inset-0 bg-[#FF8C00] blur-xl opacity-20 animate-pulse" />
      <Icon className="relative w-6 h-6 text-[#FF8C00] drop-shadow-[0_0_8px_rgba(255,140,0,0.5)]" />
    </div>
  </motion.div>
);

// Filter dropdown component
const FilterDropdown = ({ value, onChange }: FilterDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        <MapPin className="w-4 h-4" />
        {value === 'all' ? 'All Locations' : value}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
          >
            <div className="py-1">
              {LOCATIONS.map((location) => (
                <button
                  key={location}
                  onClick={() => {
                    onChange(location === 'All Locations' ? 'all' : location);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-left text-sm ${
                    value === (location === 'All Locations' ? 'all' : location)
                      ? 'text-[#FF8C00] bg-[#FF8C00]/10'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  } transition-colors`}
                >
                  {location}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Login prompt modal component
const LoginPrompt = ({ isOpen, onClose, onContinue }: LoginPromptProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative w-full max-w-md p-6 bg-white dark:bg-dark rounded-2xl shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <h3 className="text-2xl font-bold mb-4">Join Our Network</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Connect with other professionals, share insights, and grow your network in the Web3 space.
          </p>
          
          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onContinue}
              className="w-full px-6 py-3 bg-[#FF8C00] text-white rounded-xl font-medium hover:bg-[#FF8C00]/90 transition-colors"
            >
              Continue with Email
            </motion.button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-800" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-dark text-gray-500">or continue with</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 border border-gray-200 dark:border-gray-800 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 border border-gray-200 dark:border-gray-800 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Twitter
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

// Helper function to check item type
const isTalentItem = (item: NetworkItem): item is TalentItem => {
  return 'name' in item;
};

// Item card component
const ItemCard = ({ item, onClick }: { item: NetworkItem; onClick: (item: NetworkItem) => void }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(item)}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 cursor-pointer"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          {isTalentItem(item) ? (
            <div className="w-12 h-12 rounded-full bg-[#FF8C00]/10 flex items-center justify-center">
              <User className="w-6 h-6 text-[#FF8C00]" />
            </div>
          ) : (
            <div className="w-12 h-12 rounded-full bg-[#FF8C00]/10 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-[#FF8C00]" />
            </div>
          )}
        </div>
        <div className="flex-grow">
          <motion.h3
            className="text-lg font-semibold mb-1 text-gray-900 dark:text-white"
            whileHover={{ x: 5 }}
          >
            {isTalentItem(item) ? item.name : item.title}
          </motion.h3>
          <p className="text-gray-600 dark:text-gray-400">
            {isTalentItem(item) ? item.title : item.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {item.skills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium bg-[#FF8C00]/10 text-[#FF8C00] rounded-full"
              >
                {skill}
              </span>
            ))}
            {item.skills.length > 3 && (
              <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                +{item.skills.length - 3}
              </span>
            )}
          </div>
          <div className="mt-4 flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {item.location}
            </div>
            {isTalentItem(item) ? (
              <>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {item.experience}
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign className="w-4 h-4" />
                  {item.hourlyRate}/hr
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {item.rating.toFixed(1)}
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {item.duration}
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign className="w-4 h-4" />
                  {item.budget}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Network() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<'talents' | 'projects'>('talents');
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [selectedItem, setSelectedItem] = useState<NetworkItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');

  // Filter functions
  const filterTalentItems = (items: TalentItem[], query: string): TalentItem[] => {
    if (!query) return items;
    const searchQuery = query.toLowerCase();
    
    return items.filter(item =>
      item.name.toLowerCase().includes(searchQuery) ||
      item.title.toLowerCase().includes(searchQuery) ||
      item.skills.some(skill => skill.toLowerCase().includes(searchQuery))
    );
  };

  const filterProjectItems = (items: ProjectItem[], query: string): ProjectItem[] => {
    if (!query) return items;
    const searchQuery = query.toLowerCase();
    
    return items.filter(item =>
      item.title.toLowerCase().includes(searchQuery) ||
      item.description.toLowerCase().includes(searchQuery) ||
      item.skills.some(skill => skill.toLowerCase().includes(searchQuery))
    );
  };

  const filterByLocation = <T extends { location: string }>(items: T[], location: string): T[] => {
    if (location === 'All Locations') return items;
    return items.filter(item => item.location === location);
  };

  // Update the items filtering
  const filteredItems = useMemo(() => {
    // Start with properly typed data
    if (activeTab === 'talents') {
      let items = talents as TalentItem[];
      
      // Apply search filter
      if (searchQuery) {
        items = filterTalentItems(items, searchQuery);
      }
      
      // Apply location filter
      if (locationFilter !== 'all') {
        items = filterByLocation(items, locationFilter);
      }
      
      return items;
    } else {
      let items = projects as ProjectItem[];
      
      // Apply search filter
      if (searchQuery) {
        items = filterProjectItems(items, searchQuery);
      }
      
      // Apply location filter
      if (locationFilter !== 'all') {
        items = filterByLocation(items, locationFilter);
      }
      
      return items;
    }
  }, [activeTab, searchQuery, locationFilter]);

  const handleItemClick = (item: NetworkItem) => {
    setSelectedItem(item);
    setShowLoginPrompt(true);
  };

  const handleContinue = () => {
    setShowLoginPrompt(false);
    console.log('Connecting wallet...');
  };

  return (
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
            Join Our Network
          </h1>
          <p className={`text-xl ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Connect with talented professionals in the Web3 ecosystem
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
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
              <feature.icon className={`w-8 h-8 mb-4 ${
                theme === 'dark' ? 'text-[#FF8C00]' : 'text-[#FF8C00]'
              }`} />
              <h3 className={`text-xl font-semibold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {feature.title}
              </h3>
              <p className={`${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`p-6 rounded-2xl mb-8 ${
            theme === 'dark'
              ? 'bg-white/5 border-white/10'
              : 'bg-white border-gray-200'
          } border backdrop-blur-sm`}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`} />
              <input
                type="text"
                placeholder="Search by skills, location, or interests..."
                className={`w-full pl-10 pr-4 py-2 rounded-lg ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 text-white placeholder-gray-400'
                    : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500'
                } border focus:outline-none focus:ring-2 focus:ring-[#FF8C00]/20`}
              />
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setIsLocationOpen(true)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                    : 'bg-gray-50 border-gray-200 text-gray-900 hover:bg-gray-100'
                } border transition-colors`}
              >
                <MapPin className="w-5 h-5" />
                <span>Location</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsFilterOpen(true)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                    : 'bg-gray-50 border-gray-200 text-gray-900 hover:bg-gray-100'
                } border transition-colors`}
              >
                <Filter className="w-5 h-5" />
                <span>Filter</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Network Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id || item.title}
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
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={`/images/${isTalentItem(item) ? 'talent' : 'project'}.jpg`}
                    alt={isTalentItem(item) ? item.name : item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {isTalentItem(item) ? item.name : item.title}
                  </h3>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {isTalentItem(item) ? item.title : item.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-2 py-1 rounded-full text-xs ${
                      theme === 'dark'
                        ? 'bg-[#FF8C00]/10 text-[#FF8C00]'
                        : 'bg-[#FF8C00]/5 text-[#FF8C00]'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className={`w-4 h-4 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`} />
                  <span className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {isTalentItem(item) ? item.location : item.location}
                  </span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleItemClick(item);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    theme === 'dark'
                      ? 'bg-[#FF8C00] text-white hover:bg-[#FF8C00]/90'
                      : 'bg-[#FF8C00] text-white hover:bg-[#FF8C00]/90'
                  } transition-colors`}
                >
                  Connect
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Login Prompt Modal */}
      <AnimatePresence>
        {showLoginPrompt && (
          <LoginPrompt
            isOpen={showLoginPrompt}
            onClose={() => setShowLoginPrompt(false)}
            onContinue={handleContinue}
          />
        )}
      </AnimatePresence>
    </div>
  );
} 