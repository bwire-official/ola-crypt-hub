'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  MessageSquare, 
  Send,
  Github,
  Linkedin,
  MapPin,
  Clock,
  Phone,
  Globe,
  Shield,
  CheckCircle2,
  ArrowRight,
  Youtube,
  MessageCircle,
  Code,
  Database,
  Network,
  Brain,
  LineChart,
  Cpu,
  Server,
  Lock,
  Key,
  Wallet,
  Coins,
  Globe2,
  Zap,
  Sparkles,
  LucideIcon
} from 'lucide-react';
import Image from 'next/image';

interface FloatingIconProps {
  icon: LucideIcon;
  delay?: number;
  position: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
}

const FloatingIcon = ({ icon: Icon, delay = 0, position }: FloatingIconProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ 
      opacity: [0.3, 0.6, 0.3],
      y: [0, -30, 0],
    }}
    transition={{
      duration: 6,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="absolute text-[#FF8C00]/30 dark:text-[#FF8C00]/20"
    style={position}
  >
    <Icon className="w-12 h-12" />
  </motion.div>
);

export default function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white relative overflow-hidden">
      {/* Floating Icons Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingIcon icon={Code} delay={0} position={{ top: '5%', left: '5%' }} />
        <FloatingIcon icon={Database} delay={1} position={{ top: '15%', right: '10%' }} />
        <FloatingIcon icon={Network} delay={2} position={{ bottom: '20%', left: '15%' }} />
        <FloatingIcon icon={Brain} delay={3} position={{ bottom: '15%', right: '20%' }} />
        <FloatingIcon icon={LineChart} delay={4} position={{ top: '30%', left: '25%' }} />
        <FloatingIcon icon={Cpu} delay={5} position={{ top: '50%', right: '30%' }} />
        <FloatingIcon icon={Server} delay={6} position={{ bottom: '30%', left: '35%' }} />
        <FloatingIcon icon={Lock} delay={7} position={{ top: '70%', right: '40%' }} />
        <FloatingIcon icon={Key} delay={8} position={{ bottom: '50%', left: '45%' }} />
        <FloatingIcon icon={Wallet} delay={9} position={{ top: '20%', right: '50%' }} />
        <FloatingIcon icon={Coins} delay={10} position={{ bottom: '60%', left: '55%' }} />
        <FloatingIcon icon={Globe2} delay={11} position={{ top: '40%', right: '60%' }} />
        <FloatingIcon icon={Zap} delay={12} position={{ bottom: '70%', left: '65%' }} />
        <FloatingIcon icon={Sparkles} delay={13} position={{ top: '60%', right: '70%' }} />
      </div>

      {/* Hero Section with Glowing Logo */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 relative">
              <span className="text-red-500 relative">
                O
                <span className="absolute inset-0 bg-red-500/20 blur-xl animate-pulse"></span>
              </span>
              <span className="relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF8C00] via-[#FFA500] to-[#FF6B00]">
                  la_Crrypt
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#FF8C00]/20 via-[#FFA500]/20 to-[#FF6B00]/20 blur-xl animate-pulse"></span>
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get in touch with me
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards with Enhanced Animations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: 'Location',
                content: 'Global Remote',
                color: 'from-[#FF8C00] to-[#FF6B00]'
              },
              {
                icon: Clock,
                title: 'Response Time',
                content: 'Within 24 hours',
                color: 'from-[#FFA500] to-[#FF8C00]'
              },
              {
                icon: Globe,
                title: 'Timezone',
                content: 'UTC+1',
                color: 'from-[#FF6B00] to-[#FF8C00]'
              }
            ].map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white dark:bg-[#2A2A2A] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div 
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center mb-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <info.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{info.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-[#2A2A2A] rounded-2xl shadow-lg p-8"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Send a Message</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Have a question or want to collaborate? I'd love to hear from you.
                </p>
              </div>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent transition-colors"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 rounded-lg bg-[#FF8C00] text-white font-medium hover:bg-[#FF6B00] transition-colors"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Features */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Security Card */}
              <div className="bg-white dark:bg-[#2A2A2A] rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#FF8C00]/10 flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-[#FF8C00]" />
                  </div>
                  <h3 className="text-xl font-semibold">Secure Communication</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Your messages are encrypted and secure. We take your privacy seriously.
                </p>
              </div>

              {/* Response Time Card */}
              <div className="bg-white dark:bg-[#2A2A2A] rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#FF8C00]/10 flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-[#FF8C00]" />
                  </div>
                  <h3 className="text-xl font-semibold">Quick Response</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Expect a response within 24 hours. We value your time.
                </p>
              </div>

              {/* Support Card */}
              <div className="bg-white dark:bg-[#2A2A2A] rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#FF8C00]/10 flex items-center justify-center mr-4">
                    <CheckCircle2 className="w-6 h-6 text-[#FF8C00]" />
                  </div>
                  <h3 className="text-xl font-semibold">24/7 Support</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Our support team is always ready to help you with any questions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-8">Connect With Me</h2>
            <div className="flex justify-center space-x-6">
              {[
                { 
                  name: 'GitHub', 
                  icon: Github, 
                  href: 'https://github.com/olacrypt',
                  color: '#333333'
                },
                { 
                  name: 'LinkedIn', 
                  icon: Linkedin, 
                  href: 'https://linkedin.com/in/olacrypt',
                  color: '#0077B5'
                },
                { 
                  name: 'X (Twitter)', 
                  href: 'https://twitter.com/olacrypt',
                  color: '#000000',
                  customIcon: (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  )
                },
                { 
                  name: 'YouTube', 
                  icon: Youtube, 
                  href: 'https://youtube.com/@olacrypt',
                  color: '#FF0000'
                },
                { 
                  name: 'Telegram', 
                  href: 'https://t.me/olacrypt',
                  color: '#0088cc',
                  customIcon: (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.52.36-.99.53-1.41.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.4-.89.03-.24.37-.49 1.02-.75 4.04-1.76 6.74-2.92 8.09-3.48 3.85-1.6 4.64-1.88 5.17-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.02.14-.02.3-.03.42z"/>
                    </svg>
                  )
                },
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FF8C00]/10 hover:bg-[#FF8C00]/20 transition-all duration-300"
                >
                  {social.customIcon ? (
                    <span className="text-[#FF8C00] group-hover:text-[#FF6B00] transition-colors duration-300">
                      {social.customIcon}
                    </span>
                  ) : (
                    <social.icon className="w-6 h-6 text-[#FF8C00] group-hover:text-[#FF6B00] transition-colors duration-300" />
                  )}
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white dark:bg-[#2A2A2A] px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 