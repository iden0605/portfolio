import { useEffect } from 'react';

/**
 * Custom hook to detect and adjust for Instagram's in-app browser
 */
const useInstagramBrowserDetection = () => {
  useEffect(() => {
    // Function to detect Instagram's in-app browser
    const detectInstagramBrowser = () => {
      const userAgent = navigator.userAgent || '';
      
      // Check for Instagram's in-app browser
      const isInstagram = userAgent.includes('Instagram') || 
                          (window.location.href.includes('instagram') && 
                           window.navigator.standalone !== true);
                          
      // Additional check for Instagram's embedded browser indicators
      const isEmbedded = document.referrer.includes('instagram.com') ||
                         window.name.includes('instagram');
      
      return isInstagram || isEmbedded;
    };

    // Apply Instagram class if detected
    if (detectInstagramBrowser()) {
      document.documentElement.classList.add('instagram-browser');
      console.log('Instagram browser detected, applying adjustments');
    }
    
    return () => {
      // Clean up if component unmounts
      document.documentElement.classList.remove('instagram-browser');
    };
  }, []);
};

export default useInstagramBrowserDetection;