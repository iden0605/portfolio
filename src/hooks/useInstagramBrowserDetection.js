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
      
      // Optional: Add viewport meta tag to prevent scaling issues
      const viewportMeta = document.querySelector('meta[name="viewport"]');
      if (viewportMeta) {
        viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
      } else {
        const meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
        document.head.appendChild(meta);
      }
      
      // Optionally listen to resize events to handle orientation changes
      const handleResize = () => {
        // You could adjust variables based on orientation if needed
        console.log('Resize detected in Instagram browser');
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        // Clean up if component unmounts
        document.documentElement.classList.remove('instagram-browser');
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);
};

export default useInstagramBrowserDetection;