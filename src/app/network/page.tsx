'use client';

import { useState, useMemo } from 'react';
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
  ChevronDown
} from 'lucide-react';

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

// Floating element component with enhanced animations
const FloatingElement = ({ icon: Icon, className = '', delay = 0 }) => (
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
const FilterDropdown = ({ isOpen, onClose, onSelect, options, selected }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-dark rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 z-10"
      >
        {options.map((option) => (
          <button
            key={option}
            onClick={() => {
              onSelect(option);
              onClose();
            }}
            className={`w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
              selected === option ? 'text-[#FF8C00]' : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            {option}
          </button>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
);

// Login prompt modal component
const LoginPrompt = ({ isOpen, onClose, onContinue }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-md p-6 bg-white dark:bg-dark rounded-2xl shadow-xl"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Join The Network</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Choose how you want to participate in the Web3 community
            </p>
            
            <div className="space-y-4 mb-8">
              <button
                onClick={onContinue}
                className="w-full py-3 px-4 bg-[#FF8C00] text-white rounded-lg hover:bg-[#FF8C00]/90 transition-colors font-medium flex items-center justify-center gap-2"
              >
                <Users className="w-5 h-5" />
                Continue as Talent
              </button>
              <button
                onClick={onContinue}
                className="w-full py-3 px-4 bg-[#FF8C00] text-white rounded-lg hover:bg-[#FF8C00]/90 transition-colors font-medium flex items-center justify-center gap-2"
              >
                <Briefcase className="w-5 h-5" />
                Post a Project
              </button>
            </div>

            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-dark text-gray-500">or</span>
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={onClose}
                className="w-full py-3 px-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default function Network() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<'talents' | 'projects'>('talents');
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');

  const locations = ['All Locations', 'Remote', 'New York', 'London', 'Berlin', 'Singapore', 'Tokyo'];

  const filteredItems = useMemo(() => {
    let items = activeTab === 'talents' ? talents : projects;
    
    if (searchQuery) {
      items = items.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    if (locationFilter !== 'all') {
      items = items.filter(item => item.location === locationFilter);
    }
    
    return items;
  }, [activeTab, searchQuery, locationFilter]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowLoginPrompt(true);
  };

  const handleContinue = () => {
    setShowLoginPrompt(false);
    console.log('Connecting wallet...');
  };

  return (
    <div className="min-h-screen">
      {/* Floating Elements */}
      <FloatingElement icon={Wallet} className="top-20 left-10" delay={0} />
      <FloatingElement icon={Shield} className="top-40 right-20" delay={0.2} />
      <FloatingElement icon={Zap} className="bottom-20 left-1/4" delay={0.4} />
      <FloatingElement icon={MessageSquare} className="bottom-40 right-1/3" delay={0.6} />

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FF8C00]/5 to-transparent"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Connect with Web3 Talent
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Find the perfect match for your blockchain projects or discover exciting opportunities in the Web3 space.
          </motion.p>
        </div>
      </motion.div>

      {/* Feature Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                borderColor: "#FF8C00"
              }}
              className="p-6 rounded-xl bg-white dark:bg-dark border border-gray-200 dark:border-gray-800 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#FF8C00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Icon with glow effect */}
              <motion.div
                className="relative mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute inset-0 bg-[#FF8C00] blur-xl opacity-20 animate-pulse" />
                <feature.icon className="relative w-12 h-12 text-[#FF8C00] drop-shadow-[0_0_8px_rgba(255,140,0,0.5)]" />
              </motion.div>

              {/* Content */}
              <div className="relative">
                <motion.h3 
                  className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-[#FF8C00] transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 dark:text-gray-400"
                  whileHover={{ x: 5 }}
                >
                  {feature.description}
                </motion.p>
              </div>

              {/* Hover border effect */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent rounded-xl"
                whileHover={{ borderColor: "#FF8C00" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        {/* Tab Navigation */}
        <div className="flex space-x-4 mb-8">
          {['talents', 'projects'].map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab as 'talents' | 'projects')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-[#FF8C00] text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Search and Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={`Search ${activeTab}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-dark focus:outline-none focus:ring-2 focus:ring-[#FF8C00]"
            />
          </div>
          <FilterDropdown
            value={locationFilter}
            onChange={setLocationFilter}
          />
        </motion.div>

        {/* Results Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id || item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                borderColor: "#FF8C00"
              }}
              className="p-6 rounded-xl bg-white dark:bg-dark border border-gray-200 dark:border-gray-800 transition-all duration-300 cursor-pointer group"
              onClick={() => {
                setSelectedItem(item);
                setShowLoginPrompt(true);
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <motion.h3 
                    className="text-lg font-semibold mb-1 group-hover:text-[#FF8C00] transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {item.name}
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.title}</p>
                </div>
                <motion.span 
                  className="text-[#FF8C00] font-semibold"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.hourlyRate}/hr
                </motion.span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {item.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1, backgroundColor: "#FF8C00", color: "white" }}
                    className="px-2 py-1 bg-[#FF8C00]/10 text-[#FF8C00] rounded-full text-sm transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{item.experience}</span>
                <span>{item.location}</span>
                <span className="flex items-center gap-1">
                  <span className="text-yellow-500">★</span>
                  {item.rating}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Enhanced Login Prompt Modal */}
      <AnimatePresence>
        {showLoginPrompt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
              onClick={() => setShowLoginPrompt(false)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, type: "spring", damping: 20 }}
              className="relative bg-white dark:bg-dark rounded-xl shadow-2xl max-w-md w-full p-6 border border-gray-200 dark:border-gray-800"
            >
              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowLoginPrompt(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring", damping: 10 }}
                className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#FF8C00]/10 flex items-center justify-center"
              >
                <Users className="w-8 h-8 text-[#FF8C00]" />
              </motion.div>

              {/* Content */}
              <div className="text-center">
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
                >
                  Join The Network
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-600 dark:text-gray-400 mb-8"
                >
                  Choose how you want to participate in the Web3 community
                </motion.p>

                {/* Role Selection Buttons */}
                <div className="space-y-4 mb-8">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-4 bg-[#FF8C00] text-white rounded-lg hover:bg-[#FF8C00]/90 transition-colors font-medium flex items-center justify-center gap-2"
                    onClick={() => setShowLoginPrompt(false)}
                  >
                    <Users className="w-5 h-5" />
                    Continue as Talent
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-4 bg-[#FF8C00] text-white rounded-lg hover:bg-[#FF8C00]/90 transition-colors font-medium flex items-center justify-center gap-2"
                    onClick={() => setShowLoginPrompt(false)}
                  >
                    <Briefcase className="w-5 h-5" />
                    Post a Project
                  </motion.button>
                </div>

                {/* Divider */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white dark:bg-dark text-gray-500">or</span>
                  </div>
                </div>

                {/* Alternative Options */}
                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
                    onClick={() => setShowLoginPrompt(false)}
                  >
                    Maybe Later
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 