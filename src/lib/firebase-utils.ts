import { 
  collection, 
  getDocs, 
  getDoc, 
  doc, 
  query, 
  where, 
  orderBy, 
  limit 
} from 'firebase/firestore';
import { db } from './firebase';
import type { Article, Project, Event, NetworkConnection } from '@/types';

// Articles
export const getArticles = async (limitCount: number = 10) => {
  const articlesRef = collection(db, 'articles');
  const q = query(articlesRef, orderBy('publishedAt', 'desc'), limit(limitCount));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Article));
};

// Projects
export const getProjects = async (featured: boolean = false) => {
  const projectsRef = collection(db, 'projects');
  const q = query(
    projectsRef,
    where('featured', '==', featured),
    orderBy('completedAt', 'desc')
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project));
};

// Events
export const getEvents = async (type?: 'twitter-space' | 'conference' | 'panel') => {
  const eventsRef = collection(db, 'events');
  let q = query(eventsRef, orderBy('date', 'desc'));
  
  if (type) {
    q = query(q, where('type', '==', type));
  }
  
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Event));
};

// Network Connections
export const getNetworkConnections = async (active: boolean = true) => {
  const connectionsRef = collection(db, 'network');
  const q = query(
    connectionsRef,
    where('active', '==', active),
    orderBy('postedAt', 'desc')
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as NetworkConnection));
}; 