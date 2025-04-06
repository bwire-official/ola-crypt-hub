import { useState, useEffect } from 'react';

export const useLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Ensure loader shows for at least 1.5 seconds
    const minLoadingTime = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Also listen for when the page is fully loaded
    const handleLoad = () => {
      // Only hide loader after minimum time has passed
      if (document.readyState === 'complete') {
        clearTimeout(minLoadingTime);
        setIsLoading(false);
      }
    };

    window.addEventListener('load', handleLoad);
    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(minLoadingTime);
    };
  }, []);

  const setErrorState = (message: string) => {
    setError(message);
    setIsLoading(false);
  };

  return { isLoading, error, setError: setErrorState };
}; 