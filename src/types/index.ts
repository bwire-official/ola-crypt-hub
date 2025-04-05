export interface Article {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  coverImage: string;
  publishedAt: Date;
  updatedAt: Date;
  tags: string[];
  readingTime: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  technologies: string[];
  link?: string;
  github?: string;
  featured: boolean;
  completedAt: Date;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  type: 'twitter-space' | 'conference' | 'panel';
  link?: string;
  recording?: string;
  attendees?: number;
  tags: string[];
}

export interface NetworkConnection {
  id: string;
  title: string;
  description: string;
  requiredSkills: string[];
  type: 'full-time' | 'contract' | 'freelance';
  location: string;
  link: string;
  postedAt: Date;
  active: boolean;
} 