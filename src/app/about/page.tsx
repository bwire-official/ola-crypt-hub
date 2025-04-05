'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { 
  Code2, 
  Brain, 
  Network, 
  Shield, 
  BookOpen, 
  Users, 
  Globe, 
  Zap,
  Loader2
} from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const skills = [
  { name: 'Web3 Development', icon: Code2, description: 'Building secure and scalable blockchain solutions' },
  { name: 'Data Science', icon: Brain, description: 'Driving data-driven decisions and insights' },
  { name: 'Network Security', icon: Shield, description: 'Protecting digital assets and infrastructure' },
  { name: 'Community Building', icon: Users, description: 'Fostering Web3 ecosystem growth' },
  { name: 'Brand Ambassadorship', icon: Globe, description: 'Representing innovative Web3 projects' },
  { name: 'Content Creation', icon: BookOpen, description: 'Sharing knowledge and insights' },
  { name: 'Event Hosting', icon: Zap, description: 'Leading impactful Twitter Spaces' },
];

const achievements = [
  { title: 'Web3 Projects', count: '20+', description: 'Secure and innovative solutions' },
  { title: 'Twitter Spaces', count: '50+', description: 'Engaging community discussions' },
  { title: 'Brand Collaborations', count: '10+', description: 'Strategic partnerships' },
  { title: 'Data Insights', count: '100+', description: 'Published analyses and reports' },
];

const floatingIcons = [
  { icon: Code2, delay: 0 },
  { icon: Brain, delay: 0.2 },
  { icon: Shield, delay: 0.4 },
  { icon: Network, delay: 0.6 },
  { icon: BookOpen, delay: 0.8 },
  { icon: Users, delay: 1 },
  { icon: Globe, delay: 1.2 },
  { icon: Zap, delay: 1.4 },
];

const bioText = `As a multifaceted professional in the Web3 ecosystem, I focus on building secure foundations
for the future of decentralized technology. My work spans across development, data science,
and community building, all with the goal of creating sustainable value in the blockchain space.

Through my role as a Web3 startup advisor and brand ambassador, I help projects establish
robust security practices and long-term growth strategies. My expertise in data science
enables me to identify emerging trends and opportunities, while my commitment to community
building fosters collaboration and knowledge sharing within the ecosystem.

As a host of Twitter Spaces (#SpacesHost), I facilitate meaningful discussions about
Web3's future, bringing together thought leaders and innovators to explore solutions for
securing digital assets and building sustainable blockchain infrastructure.

My approach combines technical excellence with strategic vision, ensuring that every
project and partnership contributes to a more secure and prosperous future in the Web3
space. Through "The Network," I connect talented individuals with opportunities in
blockchain development, helping to build strong teams that drive innovation forward.`;

export default function About() {
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const [isLoading, setIsLoading] = useState(true);
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1500);

    // Typing effect
    if (currentIndex < bioText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + bioText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className={`text-[#FF8C00]`}
        >
          <Loader2 className="w-12 h-12" />
        </motion.div>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${
          theme === 'dark' 
            ? 'from-[#1A0F0F] via-[#2A1B1B] to-[#3A2B1B]' 
            : 'from-gray-50 via-gray-100 to-gray-200'
        }`} />
        {/* Animated mesh gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,${
            theme === 'dark' 
              ? 'rgba(255,140,0,0.05)' 
              : 'rgba(255,140,0,0.03)'
          },transparent_50%)]`} />
        </motion.div>
        {/* Floating Icons */}
        {floatingIcons.map((icon, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: [0, 1, 0],
              y: [20, -20, 20],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: icon.delay,
              ease: "easeInOut"
            }}
            className={`absolute ${
              theme === 'dark' ? 'text-[#FF8C00]/20' : 'text-[#FF8C00]/10'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <icon.icon className="w-8 h-8" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 w-full"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-24 h-24 mx-auto mb-8"
            >
              <div className={`absolute inset-0 rounded-full ${
                theme === 'dark' ? 'bg-[#FF8C00]/10' : 'bg-[#FF8C00]/5'
              } blur-xl`} />
              <div className={`absolute inset-0 rounded-full ${
                theme === 'dark' ? 'bg-[#FF8C00]/5' : 'bg-[#FF8C00]/10'
              } border-2 border-[#FF8C00]/20`} />
              <div className="absolute inset-2 rounded-full overflow-hidden">
                <Image
                  src="/images/pfp.jpg"
                  alt="Ola_Crrypt Logo"
                  fill
                  className="object-cover"
                  priority
                  loading="eager"
                  unoptimized
                  quality={100}
                  onError={(e) => {
                    console.error('Image loading error:', e);
                  }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                theme === 'dark'
                  ? 'bg-[#FF8C00]/5 text-[#FF8C00] border-[#FF8C00]/10'
                  : 'bg-[#FF8C00]/10 text-[#FF8C00] border-[#FF8C00]/20'
              } border mb-6`}
            >
              <span className="text-sm font-medium">Securing the Future</span>
            </motion.div>
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              About{' '}
              <span className="relative inline-block">
                <span className="text-red-500">O</span>
                <span className="text-[#FF8C00]">la_Crrypt</span>
                <span className={`absolute inset-0 blur-sm ${
                  theme === 'dark' ? 'text-[#FF8C00]/30' : 'text-[#FF8C00]/20'
                }`}>
                  Ola_Crrypt
                </span>
              </span>
            </h1>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Web3 Innovator, Data Scientist, and Community Builder
            </p>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`prose prose-lg mx-auto mb-16 ${
              theme === 'dark' ? 'prose-invert' : ''
            } max-w-3xl text-center`}
          >
            <div className="whitespace-pre-line">
              {displayedText}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 w-full"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-4 rounded-xl backdrop-blur-sm ${
                  theme === 'dark'
                    ? 'bg-white/5 border border-white/10 hover:border-[#FF8C00]/20 hover:bg-[#FF8C00]/5'
                    : 'bg-white border-gray-200 hover:border-[#FF8C00]/30 hover:bg-[#FF8C00]/5'
                } border transition-all duration-300 hover:shadow-lg hover:shadow-[#FF8C00]/10`}
              >
                <div className="text-2xl font-bold text-[#FF8C00] mb-1">
                  {achievement.count}
                </div>
                <div className={`text-sm font-medium mb-1 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {achievement.title}
                </div>
                <div className={`text-xs ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {achievement.description}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`group p-6 rounded-2xl ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 hover:border-[#FF8C00]/20 hover:bg-[#FF8C00]/5'
                    : 'bg-white border-gray-200 hover:border-[#FF8C00]/30 hover:bg-[#FF8C00]/5'
                } border transition-all duration-300 hover:shadow-lg hover:shadow-[#FF8C00]/10 backdrop-blur-sm`}
              >
                <motion.div
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <skill.icon className={`w-8 h-8 mb-4 ${
                    theme === 'dark' ? 'text-[#FF8C00]' : 'text-[#FF8C00]'
                  }`} />
                </motion.div>
                <h3 className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {skill.name}
                </h3>
                <p className={`${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 