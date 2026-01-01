import React, { useEffect, useState } from 'react';
import './ImageModal.css';

const ImageModal = ({ src, alt, onClose }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Disable scrolling on the body when the modal is open
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = (e) => {
    // Close the modal only if clicking on the overlay, not the image itself
    if (e.target.classList.contains('image-modal-overlay')) {
      onClose();
    }
  };

  if (isMobile) {
    return null; // Don't render modal on mobile
  }

  return (
    <div className="image-modal-overlay" onClick={handleClick}>
      <div className="image-modal-content">
        <img src={src} alt={alt} className="expanded-image" />
        <button className="close-button" onClick={onClose}>&times;</button>
      </div>
    </div>
  );
};

export default ImageModal;