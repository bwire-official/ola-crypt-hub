'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, Users } from 'lucide-react';
import { useLoader } from '@/hooks/useLoader';
import Loader from '@/components/Loader';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  stars: number;
  contributors: number;
}

const projects: Project[] = [
  {
    title: 'Project 1',
    description: 'Description of project 1',
    image: '/images/project1.jpg',
    link: 'https://project1.com',
    github: 'https://github.com/username/project1',
    stars: 100,
    contributors: 5
  },
  // Add more projects as needed
];

export default function Portfolio() {
  const { isLoading, error, retry } = useLoader({
    onLoad: async () => {
      // Simulate loading projects data
      await new Promise(resolve => setTimeout(resolve, 1500));
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Loader error={error} onRetry={retry} />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-red-500">O</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF8C00] via-[#FFA500] to-[#FF6B00]">
              la_Crrypt
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Portfolio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white dark:bg-[#2A2A2A] rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex items-center gap-4 mb-4">
                  {project.stars && (
                    <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                      <Star className="w-4 h-4" />
                      <span>{project.stars}</span>
                    </div>
                  )}
                  {project.contributors && (
                    <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                      <Users className="w-4 h-4" />
                      <span>{project.contributors}</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#FF8C00] hover:text-[#FFA500] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Project</span>
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-[#FF8C00] transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 