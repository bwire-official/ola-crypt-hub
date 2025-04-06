'use client';

import { motion } from 'framer-motion';
import { Bitcoin, Code2, Database, Globe2, Megaphone, Users, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const floatingIcons = [
  { icon: Bitcoin, delay: 0 },
  { icon: Code2, delay: 0.2 },
  { icon: Database, delay: 0.4 },
  { icon: Globe2, delay: 0.6 },
  { icon: Megaphone, delay: 0.8 },
  { icon: Users, delay: 1 }
];

export default function About() {
  const [bioText, setBioText] = useState("");
  const fullBio = "As a multifaceted professional in the Web3 space, I'm dedicated to building and securing the future of digital innovation. My approach combines technical expertise with strategic thinking, always focusing on sustainable growth and long-term value creation. Through my work as a data scientist, brand ambassador, and community leader, I help bridge the gap between complex blockchain technology and real-world applications, making Web3 more accessible and valuable for everyone. I actively mentor and advise Web3 startups, helping them navigate the complex landscape of blockchain technology, tokenomics, and community building. My experience in both technical and strategic aspects of Web3 enables me to provide comprehensive guidance to startups looking to make their mark in the decentralized future.";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < fullBio.length) {
        setBioText(prev => prev + fullBio[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const expertiseCards = [
    {
      icon: <Bitcoin className="w-8 h-8 text-[#FF8C00]" />,
      title: "Web3 Expert",
      description: "Deep expertise in blockchain technology, DeFi, and Web3 startups, focusing on sustainable growth and long-term value creation."
    },
    {
      icon: <Database className="w-8 h-8 text-[#FF8C00]" />,
      title: "Data Scientist",
      description: "Leveraging data analytics and machine learning to derive actionable insights and drive strategic decision-making in Web3."
    },
    {
      icon: <Megaphone className="w-8 h-8 text-[#FF8C00]" />,
      title: "Twitter Spaces Host",
      description: "Hosting engaging discussions on Web3, blockchain, and future technologies, building communities and sharing knowledge."
    },
    {
      icon: <Users className="w-8 h-8 text-[#FF8C00]" />,
      title: "Brand Ambassador",
      description: "Representing and advocating for innovative Web3 projects, helping them build strong communities and achieve their vision."
    },
    {
      icon: <Globe2 className="w-8 h-8 text-[#FF8C00]" />,
      title: "Digital Influencer",
      description: "Shaping conversations around Web3 and blockchain technology, with a focus on education and long-term value."
    },
    {
      icon: <Code2 className="w-8 h-8 text-[#FF8C00]" />,
      title: "Technical Advisor",
      description: "Providing strategic guidance to Web3 startups on technical implementation and ecosystem integration."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white">
      {/* Floating Icons Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.3, 0],
              scale: [0, 1.2, 0],
              y: [0, -150, 0],
            }}
            transition={{
              duration: 10,
              delay: item.delay,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <item.icon className="w-16 h-16 text-[#FF8C00]/30" />
          </motion.div>
        ))}
      </div>

      <div className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
        {/* Hero Section */}
        <motion.div 
          className="max-w-7xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold mb-6 relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-red-500">O</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF8C00] via-[#FFA500] to-[#FF6B00]">
              la_Crrypt
            </span>
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Securing the future through Web3 innovation, data-driven insights, and community building.
          </motion.p>
        </motion.div>

        {/* Profile Section */}
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="relative w-[300px] h-[300px] mx-auto"
            variants={fadeInUp}
          >
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#FF8C00] to-[#FFA500] animate-pulse blur-2xl opacity-30"></div>
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#FF8C00] to-[#FFA500] animate-pulse blur-xl opacity-20"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl ring-4 ring-[#FF8C00]/20">
              <Image
                src="/images/pfp.jpg"
                alt="Ola_Crrypt"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div 
            className="flex flex-col justify-center"
            variants={fadeInUp}
          >
            <motion.h2 
              className="text-3xl font-bold mb-6 text-[#FF8C00]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              The Vision
            </motion.h2>
            <div className="text-gray-600 dark:text-gray-300">
              <span className="inline-block">{bioText}</span>
              <span className="inline-block w-1 h-5 bg-[#FF8C00] ml-1 animate-blink"></span>
            </div>
          </motion.div>
        </motion.div>

        {/* Expertise Cards */}
        <motion.div 
          className="max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-[#FF8C00]"
            variants={fadeInUp}
          >
            Areas of Expertise
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseCards.map((card, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group hover:border-[#FF8C00] dark:hover:border-[#FF8C00] hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="mb-4 transform group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {card.icon}
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-[#FF8C00] transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {card.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 dark:text-gray-300"
                  whileHover={{ x: 5 }}
                >
                  {card.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 