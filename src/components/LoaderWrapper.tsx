'use client';

import { useLoader } from '@/hooks/useLoader';
import Loader from '@/components/Loader';
import { useEffect, useState } from 'react';

export default function LoaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);
  const { isLoading, error } = useLoader();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render anything until component is mounted
  if (!isMounted) {
    return <Loader />;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#FF8C00] mb-4">Error</h2>
          <p className="text-gray-600 dark:text-gray-400">{error}</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
} 