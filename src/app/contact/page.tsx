'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { Mail, MessageSquare, Twitter, Linkedin, Github, Send, MapPin, Phone, Clock, Youtube, Mail as Gmail, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF8C00]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a question or want to collaborate? I'd love to hear from you. Let's connect and build something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -5 }}
                className={`p-6 rounded-xl ${
                  theme === 'dark'
                    ? 'bg-white/5 border border-white/10'
                    : 'bg-black/5 border border-black/10'
                } backdrop-blur-sm`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-[#FF8C00]/10">
                    <Mail className="w-6 h-6 text-[#FF8C00]" />
                  </div>
                  <h3 className="text-lg font-semibold">Email</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  contact@olacrypt.com
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className={`p-6 rounded-xl ${
                  theme === 'dark'
                    ? 'bg-white/5 border border-white/10'
                    : 'bg-black/5 border border-black/10'
                } backdrop-blur-sm`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-[#FF8C00]/10">
                    <Phone className="w-6 h-6 text-[#FF8C00]" />
                  </div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  +1 (555) 123-4567
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className={`p-6 rounded-xl ${
                  theme === 'dark'
                    ? 'bg-white/5 border border-white/10'
                    : 'bg-black/5 border border-black/10'
                } backdrop-blur-sm`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-[#FF8C00]/10">
                    <MapPin className="w-6 h-6 text-[#FF8C00]" />
                  </div>
                  <h3 className="text-lg font-semibold">Location</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Greenwich, United Kingdom
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className={`p-6 rounded-xl ${
                  theme === 'dark'
                    ? 'bg-white/5 border border-white/10'
                    : 'bg-black/5 border border-black/10'
                } backdrop-blur-sm`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-[#FF8C00]/10">
                    <Clock className="w-6 h-6 text-[#FF8C00]" />
                  </div>
                  <h3 className="text-lg font-semibold">Response Time</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Within 24 hours
                </p>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <motion.a
                  href="https://twitter.com/Ola_Crrypt"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className={`p-4 rounded-xl ${
                    theme === 'dark'
                      ? 'bg-white/5 border border-white/10'
                      : 'bg-black/5 border border-black/10'
                  } backdrop-blur-sm flex items-center gap-3`}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span>X (Twitter)</span>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/olacrypt"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className={`p-4 rounded-xl ${
                    theme === 'dark'
                      ? 'bg-white/5 border border-white/10'
                      : 'bg-black/5 border border-black/10'
                  } backdrop-blur-sm flex items-center gap-3`}
                >
                  <Linkedin className="w-5 h-5 text-blue-600" />
                  <span>LinkedIn</span>
                </motion.a>

                <motion.a
                  href="https://github.com/Ola-Crrypt"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className={`p-4 rounded-xl ${
                    theme === 'dark'
                      ? 'bg-white/5 border border-white/10'
                      : 'bg-black/5 border border-black/10'
                  } backdrop-blur-sm flex items-center gap-3`}
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </motion.a>

                <motion.a
                  href="https://youtube.com/@Ola_Crrypt"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className={`p-4 rounded-xl ${
                    theme === 'dark'
                      ? 'bg-white/5 border border-white/10'
                      : 'bg-black/5 border border-black/10'
                  } backdrop-blur-sm flex items-center gap-3`}
                >
                  <Youtube className="w-5 h-5 text-red-600" />
                  <span>YouTube</span>
                </motion.a>

                <motion.a
                  href="https://t.me/Ola_Crrypt"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className={`p-4 rounded-xl ${
                    theme === 'dark'
                      ? 'bg-white/5 border border-white/10'
                      : 'bg-black/5 border border-black/10'
                  } backdrop-blur-sm flex items-center gap-3`}
                >
                  <MessageCircle className="w-5 h-5 text-blue-400" />
                  <span>Telegram</span>
                </motion.a>

                <motion.a
                  href="mailto:contact@olacrypt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className={`p-4 rounded-xl ${
                    theme === 'dark'
                      ? 'bg-white/5 border border-white/10'
                      : 'bg-black/5 border border-black/10'
                  } backdrop-blur-sm flex items-center gap-3`}
                >
                  <Gmail className="w-5 h-5 text-red-500" />
                  <span>Gmail</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className={`p-8 rounded-xl ${
              theme === 'dark'
                ? 'bg-white/5 border border-white/10'
                : 'bg-black/5 border border-black/10'
            } backdrop-blur-sm`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#FF8C00]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#FF8C00]"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#FF8C00]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#FF8C00] resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full px-6 py-3 rounded-lg text-white font-medium flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#FF8C00] hover:bg-[#FF8C00]/90'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500 text-center"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 