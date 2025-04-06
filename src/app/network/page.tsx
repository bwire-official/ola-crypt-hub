'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Star,
  MessageCircle,
  Github,
  Twitter,
  Code,
  Share2,
  MoreVertical,
  FolderKanban,
  Globe
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import Image from 'next/image';

// Add this function at the top of the file, after the imports
const getRandomImage = (query: string) => {
  return `https://source.unsplash.com/featured/800x600/?${encodeURIComponent(query)}`;
};

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
    rating: 4.8,
    connections: 128,
    image: getRandomImage('developer,coding'),
    description: 'Experienced blockchain developer specializing in smart contracts and DeFi protocols.',
    industry: 'DeFi',
    availability: 'Full Time',
    postedAt: '2024-03-15'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    title: 'Blockchain Security Expert',
    skills: ['Security', 'Auditing', 'Penetration Testing'],
    hourlyRate: '$200',
    experience: '8 years',
    location: 'New York',
    rating: 4.9,
    connections: 256,
    image: getRandomImage('security,cybersecurity'),
    description: 'Leading blockchain security expert with a focus on smart contract auditing and vulnerability assessment.',
    industry: 'Security',
    availability: 'Full Time',
    postedAt: '2024-03-14'
  },
  {
    id: 3,
    name: 'Michael Brown',
    title: 'DeFi Protocol Architect',
    skills: ['DeFi', 'Architecture', 'TypeScript'],
    hourlyRate: '$180',
    experience: '6 years',
    location: 'London',
    rating: 4.7,
    connections: 192,
    image: getRandomImage('blockchain,technology'),
    description: 'Architect specializing in DeFi protocol design and implementation.',
    industry: 'DeFi',
    availability: 'Full Time',
    postedAt: '2024-03-13'
  },
  {
    id: 4,
    name: 'Emma Wilson',
    title: 'Web3 UI/UX Designer',
    skills: ['UI/UX', 'Figma', 'Web3 Design'],
    hourlyRate: '$120',
    experience: '4 years',
    location: 'Berlin',
    rating: 4.6,
    connections: 164,
    image: getRandomImage('design,ui'),
    description: 'Creative UI/UX designer focused on creating intuitive Web3 interfaces.',
    industry: 'UI/UX',
    availability: 'Full Time',
    postedAt: '2024-03-12'
  },
  {
    id: 5,
    name: 'David Lee',
    title: 'Blockchain Infrastructure Engineer',
    skills: ['DevOps', 'AWS', 'Kubernetes'],
    hourlyRate: '$160',
    experience: '7 years',
    location: 'Singapore',
    rating: 4.8,
    connections: 145,
    image: getRandomImage('infrastructure,server'),
    description: 'Infrastructure expert specializing in blockchain node deployment and maintenance.',
    industry: 'Infrastructure',
    availability: 'Full Time',
    postedAt: '2024-03-11'
  },
  {
    id: 6,
    name: 'Lisa Zhang',
    title: 'NFT Marketplace Developer',
    skills: ['NFT', 'IPFS', 'Ethereum'],
    hourlyRate: '$140',
    experience: '5 years',
    location: 'Tokyo',
    rating: 4.7,
    connections: 178,
    image: getRandomImage('nft,digital-art'),
    description: 'Full-stack developer specializing in NFT marketplace development.',
    industry: 'NFTs',
    availability: 'Full Time',
    postedAt: '2024-03-10'
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
    location: 'Remote',
    connections: 89,
    image: getRandomImage('defi,finance'),
    industry: 'DeFi',
    postedAt: '2024-03-15',
    deadline: '30 days'
  },
  {
    id: 2,
    title: 'NFT Marketplace',
    description: 'Creating a marketplace for digital art and collectibles',
    budget: '$30,000 - $60,000',
    duration: '2-4 months',
    skills: ['NFT', 'IPFS', 'Ethereum'],
    location: 'Remote',
    connections: 76,
    image: getRandomImage('nft,art-gallery'),
    industry: 'NFTs',
    postedAt: '2024-03-14',
    deadline: '25 days'
  },
  {
    id: 3,
    title: 'Cross-Chain Bridge',
    description: 'Developing a bridge for cross-chain asset transfers',
    budget: '$40,000 - $80,000',
    duration: '4-6 months',
    skills: ['Blockchain', 'Security', 'Smart Contracts'],
    location: 'Remote',
    connections: 92,
    image: getRandomImage('blockchain,network'),
    industry: 'Cross-chain',
    postedAt: '2024-03-13',
    deadline: '45 days'
  },
  {
    id: 4,
    title: 'DAO Governance Platform',
    description: 'Building a platform for DAO governance and voting',
    budget: '$25,000 - $50,000',
    duration: '2-3 months',
    skills: ['Solidity', 'React', 'Web3.js'],
    location: 'Remote',
    connections: 67,
    image: getRandomImage('governance,organization'),
    industry: 'DAO',
    postedAt: '2024-03-12',
    deadline: '20 days'
  },
  {
    id: 5,
    title: 'Web3 Analytics Dashboard',
    description: 'Creating analytics tools for DeFi protocols',
    budget: '$35,000 - $70,000',
    duration: '3-5 months',
    skills: ['Data Analysis', 'React', 'Web3.js'],
    location: 'Remote',
    connections: 83,
    image: getRandomImage('analytics,dashboard'),
    industry: 'Analytics',
    postedAt: '2024-03-11',
    deadline: '35 days'
  },
  {
    id: 6,
    title: 'Blockchain Security Tool',
    description: 'Developing security analysis tools for smart contracts',
    budget: '$45,000 - $90,000',
    duration: '4-6 months',
    skills: ['Security', 'Solidity', 'Python'],
    location: 'Remote',
    connections: 95,
    image: getRandomImage('security,cybersecurity'),
    industry: 'Security',
    postedAt: '2024-03-10',
    deadline: '40 days'
  }
];

// Constants
const LOCATIONS = ['All Locations', 'Remote', 'New York', 'London', 'Berlin', 'Singapore', 'Tokyo'] as const;
type Location = (typeof LOCATIONS)[number];

const INDUSTRIES = [
  'All Industries',
  'DeFi',
  'NFTs',
  'Gaming',
  'Infrastructure',
  'Security',
  'Analytics',
  'Social',
  'DAO',
  'Layer 2',
  'Cross-chain',
  'Web3 Tools'
] as const;

const SKILLS = [
  'Solidity',
  'Web3.js',
  'React',
  'TypeScript',
  'Node.js',
  'Python',
  'Rust',
  'Go',
  'Smart Contracts',
  'Blockchain',
  'Security',
  'UI/UX',
  'DevOps',
  'Testing',
  'Architecture',
  'DeFi',
  'NFTs',
  'IPFS',
  'Ethereum',
  'Layer 2'
] as const;

const EXPERIENCE_LEVELS = [
  'All Levels',
  'Entry Level',
  'Mid Level',
  'Senior Level',
  'Lead',
  'Architect'
] as const;

const AVAILABILITY_OPTIONS = [
  'All Availability',
  'Full Time',
  'Part Time',
  'Contract',
  'Freelance',
  'Open to Offers'
] as const;

const SORT_OPTIONS = [
  { label: 'Most Recent', value: 'recent' },
  { label: 'Most Popular', value: 'popular' },
  { label: 'Highest Rated', value: 'rating' },
  { label: 'Highest Budget', value: 'budget' },
  { label: 'Earliest Deadline', value: 'deadline' }
] as const;

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
  connections: number;
  image: string;
  description: string;
  industry: string;
  availability: string;
  postedAt: string;
}

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  budget: string;
  duration: string;
  skills: string[];
  location: string;
  connections: number;
  image: string;
  industry: string;
  postedAt: string;
  deadline?: string;
}

type NetworkItem = TalentItem | ProjectItem;

// Types
interface FloatingElementProps {
  icon: LucideIcon;
  className?: string;
  delay?: number;
}

interface FilterDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (value: string | string[]) => void;
  options: string[];
  selected: string | string[];
  multiple?: boolean;
  title: string;
  icon: LucideIcon;
  buttonRef: React.RefObject<HTMLButtonElement>;
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

// FilterDropdown component
const FilterDropdown = ({ isOpen, onClose, onSelect, options, selected, multiple = false, title, icon: Icon, buttonRef }: FilterDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isClickingButton = useRef(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Don't close if we're clicking the button
      if (isClickingButton.current) {
        isClickingButton.current = false;
        return;
      }

      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Don't render if not open
  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute top-full left-0 mt-2 w-64 rounded-lg shadow-lg z-50 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
    >
      <div className="p-4 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-[#FF8C00]" />
          <h3 className="font-medium text-gray-900 dark:text-white">{title}</h3>
        </div>
      </div>
      <div className="max-h-[300px] overflow-y-auto">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => {
              if (multiple) {
                const currentSelected = selected as string[];
                const newSelected = currentSelected.includes(option)
                  ? currentSelected.filter((item) => item !== option)
                  : [...currentSelected, option];
                onSelect(newSelected);
              } else {
                onSelect(option);
                onClose();
              }
            }}
            className={`w-full px-4 py-2 text-left hover:bg-[#FF8C00]/10 transition-colors text-gray-900 dark:text-white ${
              multiple
                ? (selected as string[])?.includes(option)
                  ? 'bg-[#FF8C00]/20 text-[#FF8C00]'
                  : ''
                : selected === option
                ? 'bg-[#FF8C00]/20 text-[#FF8C00]'
                : ''
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

// LoginPrompt component
const LoginPrompt = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="w-full max-w-md rounded-2xl p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
            Join Our Network
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Sign in to connect with talented professionals and exciting projects
          </p>
        </div>

        <div className="space-y-4">
          <button
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#FF8C00] text-white hover:bg-[#FF8C00]/90 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Continue with Email
          </button>

          <button
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <Github className="w-5 h-5" />
            Continue with GitHub
          </button>

          <button
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#1DA1F2] text-white hover:bg-[#1DA1F2]/90 transition-colors"
          >
            <Twitter className="w-5 h-5" />
            Continue with Twitter
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            By continuing, you agree to our{' '}
            <a href="#" className="text-[#FF8C00] hover:underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-[#FF8C00] hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

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
      className="group relative rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 cursor-pointer transition-all duration-300 hover:shadow-lg"
    >
      <div className="relative h-48">
        <Image
          src={item.image}
          alt={isTalentItem(item) ? item.name : item.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-semibold text-white mb-1">
            {isTalentItem(item) ? item.name : item.title}
          </h3>
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <MapPin className="w-4 h-4" />
            <span>{item.location}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm mb-4 text-gray-600 dark:text-gray-300">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {item.skills.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              {skill}
            </span>
          ))}
          {item.skills.length > 3 && (
            <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
              +{item.skills.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {isTalentItem(item) && (
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-[#FF8C00]" />
                <span className="text-sm text-gray-900 dark:text-white">
                  {item.rating.toFixed(1)}
                </span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-[#FF8C00]" />
              <span className="text-sm text-gray-900 dark:text-white">
                {item.connections}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <MessageSquare className="w-5 h-5 text-[#FF8C00]" />
            </button>
            <button
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Share2 className="w-5 h-5 text-[#FF8C00]" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Network() {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isIndustryOpen, setIsIndustryOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null);
  const [selectedAvailability, setSelectedAvailability] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>('recent');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [activeTab, setActiveTab] = useState<'talents' | 'projects'>('talents');
  const [selectedItem, setSelectedItem] = useState<NetworkItem | null>(null);

  // Add refs for each filter button
  const locationButtonRef = useRef<HTMLButtonElement>(null);
  const industryButtonRef = useRef<HTMLButtonElement>(null);
  const skillsButtonRef = useRef<HTMLButtonElement>(null);
  const experienceButtonRef = useRef<HTMLButtonElement>(null);
  const availabilityButtonRef = useRef<HTMLButtonElement>(null);
  const sortButtonRef = useRef<HTMLButtonElement>(null);

  // Filter functions
  const filterByLocation = (items: NetworkItem[], location: string) => {
    return items.filter(item => item.location === location);
  };

  const filterByIndustry = (items: NetworkItem[], industry: string) => {
    return items.filter(item => item.industry === industry);
  };

  const filterBySkills = (items: NetworkItem[], skills: string[]) => {
    return items.filter(item => 
      skills.every(skill => item.skills.includes(skill))
    );
  };

  const filterByExperience = (items: NetworkItem[], experience: string) => {
    return items.filter(item => item.experience === experience);
  };

  const filterByAvailability = (items: NetworkItem[], availability: string) => {
    return items.filter(item => item.availability === availability);
  };

  const sortItems = (items: NetworkItem[], sortBy: string) => {
    switch (sortBy) {
      case 'recent':
        return [...items].sort((a, b) => 
          new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
        );
      case 'popular':
        return [...items].sort((a, b) => b.connections - a.connections);
      case 'rating':
        return [...items].sort((a, b) => b.rating - a.rating);
      case 'budget':
        return [...items].sort((a, b) => {
          if (!a.budget || !b.budget) return 0;
          const aValue = parseInt(a.budget.split('-')[0].replace(/[^0-9]/g, ''));
          const bValue = parseInt(b.budget.split('-')[0].replace(/[^0-9]/g, ''));
          return bValue - aValue;
        });
      case 'deadline':
        return [...items].sort((a, b) => {
          if (!a.deadline || !b.deadline) return 0;
          const aValue = parseInt(a.deadline.split(' ')[0]);
          const bValue = parseInt(b.deadline.split(' ')[0]);
          return aValue - bValue;
        });
      default:
        return items;
    }
  };

  // Filtered and sorted items
  const filteredItems = useMemo(() => {
    let items = activeTab === 'talents' ? talents : projects;

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      items = items.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.skills.some(skill => skill.toLowerCase().includes(query))
      );
    }

    // Apply location filter
    if (selectedLocation) {
      items = filterByLocation(items, selectedLocation);
    }

    // Apply industry filter
    if (selectedIndustry) {
      items = filterByIndustry(items, selectedIndustry);
    }

    // Apply skills filter
    if (selectedSkills.length > 0) {
      items = filterBySkills(items, selectedSkills);
    }

    // Apply experience filter
    if (selectedExperience) {
      items = filterByExperience(items, selectedExperience);
    }

    // Apply availability filter
    if (selectedAvailability) {
      items = filterByAvailability(items, selectedAvailability);
    }

    // Apply sorting
    items = sortItems(items, sortBy);

    return items;
  }, [
    activeTab,
    searchQuery,
    selectedLocation,
    selectedIndustry,
    selectedSkills,
    selectedExperience,
    selectedAvailability,
    sortBy
  ]);

  const handleItemClick = (item: NetworkItem) => {
    if (!isLoggedIn) {
      setShowLoginPrompt(true);
      return;
    }
    setSelectedItem(item);
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF8C00]/10 to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
        
        {/* Floating Elements */}
        <FloatingElement icon={Users} className="top-1/4 left-1/4" delay={0} />
        <FloatingElement icon={FolderKanban} className="top-1/3 right-1/4" delay={0.2} />
        <FloatingElement icon={Star} className="bottom-1/4 left-1/3" delay={0.4} />
        <FloatingElement icon={MessageSquare} className="bottom-1/3 right-1/3" delay={0.6} />
        <FloatingElement icon={Share2} className="top-1/2 left-1/2" delay={0.8} />
        <FloatingElement icon={MoreVertical} className="top-2/3 right-1/2" delay={1} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Connect with Web3 Professionals
            </h1>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
              Find talented developers, designers, and project managers in the Web3 space
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg p-1 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveTab('talents')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'talents'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Talents
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'projects'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Projects
            </button>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search talents or projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="relative">
                <button
                  ref={locationButtonRef}
                  onMouseDown={() => {
                    isClickingButton.current = true;
                    setIsLocationOpen(!isLocationOpen);
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Location</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isLocationOpen ? 'rotate-180' : ''}`} />
                </button>
                <FilterDropdown
                  isOpen={isLocationOpen}
                  onClose={() => setIsLocationOpen(false)}
                  onSelect={setSelectedLocation}
                  options={LOCATIONS}
                  selected={selectedLocation}
                  title="Location"
                  icon={MapPin}
                  buttonRef={locationButtonRef}
                />
              </div>
              <div className="relative">
                <button
                  ref={industryButtonRef}
                  onMouseDown={() => {
                    isClickingButton.current = true;
                    setIsIndustryOpen(!isIndustryOpen);
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Industry</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isIndustryOpen ? 'rotate-180' : ''}`} />
                </button>
                <FilterDropdown
                  isOpen={isIndustryOpen}
                  onClose={() => setIsIndustryOpen(false)}
                  onSelect={setSelectedIndustry}
                  options={INDUSTRIES}
                  selected={selectedIndustry}
                  title="Industry"
                  icon={Briefcase}
                  buttonRef={industryButtonRef}
                />
              </div>
              <div className="relative">
                <button
                  ref={skillsButtonRef}
                  onMouseDown={() => {
                    isClickingButton.current = true;
                    setIsSkillsOpen(!isSkillsOpen);
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <Code className="w-4 h-4" />
                  <span>Skills</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isSkillsOpen ? 'rotate-180' : ''}`} />
                </button>
                <FilterDropdown
                  isOpen={isSkillsOpen}
                  onClose={() => setIsSkillsOpen(false)}
                  onSelect={setSelectedSkills}
                  options={SKILLS}
                  selected={selectedSkills}
                  multiple
                  title="Skills"
                  icon={Code}
                  buttonRef={skillsButtonRef}
                />
              </div>
              <div className="relative">
                <button
                  ref={experienceButtonRef}
                  onMouseDown={() => {
                    isClickingButton.current = true;
                    setIsExperienceOpen(!isExperienceOpen);
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <Star className="w-4 h-4" />
                  <span>Experience</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isExperienceOpen ? 'rotate-180' : ''}`} />
                </button>
                <FilterDropdown
                  isOpen={isExperienceOpen}
                  onClose={() => setIsExperienceOpen(false)}
                  onSelect={setSelectedExperience}
                  options={EXPERIENCE_LEVELS}
                  selected={selectedExperience}
                  title="Experience"
                  icon={Star}
                  buttonRef={experienceButtonRef}
                />
              </div>
              <div className="relative">
                <button
                  ref={availabilityButtonRef}
                  onMouseDown={() => {
                    isClickingButton.current = true;
                    setIsAvailabilityOpen(!isAvailabilityOpen);
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <Clock className="w-4 h-4" />
                  <span>Availability</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isAvailabilityOpen ? 'rotate-180' : ''}`} />
                </button>
                <FilterDropdown
                  isOpen={isAvailabilityOpen}
                  onClose={() => setIsAvailabilityOpen(false)}
                  onSelect={setSelectedAvailability}
                  options={AVAILABILITY_OPTIONS}
                  selected={selectedAvailability}
                  title="Availability"
                  icon={Clock}
                  buttonRef={availabilityButtonRef}
                />
              </div>
              <div className="relative">
                <button
                  ref={sortButtonRef}
                  onMouseDown={() => {
                    isClickingButton.current = true;
                    setIsSortOpen(!isSortOpen);
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <Filter className="w-4 h-4" />
                  <span>Sort</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
                </button>
                <FilterDropdown
                  isOpen={isSortOpen}
                  onClose={() => setIsSortOpen(false)}
                  onSelect={setSortBy}
                  options={SORT_OPTIONS.map(option => option.label)}
                  selected={SORT_OPTIONS.find(option => option.value === sortBy)?.label || ''}
                  title="Sort By"
                  icon={Filter}
                  buttonRef={sortButtonRef}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Network Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              onClick={handleItemClick}
            />
          ))}
        </div>
      </div>

      {/* Login Prompt */}
      {showLoginPrompt && (
        <LoginPrompt
          isOpen={showLoginPrompt}
          onClose={() => setShowLoginPrompt(false)}
        />
      )}
    </div>
  );
} 