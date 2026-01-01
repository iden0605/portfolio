import React, { useEffect } from 'react';
import './ImageModal.css';

const ImageModal = ({ src, alt, onClose }) => {
  useEffect(() => {
    // Disable scrolling on the body when the modal is open
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClick = (e) => {
    // Close the modal only if clicking on the overlay, not the image itself
    if (e.target.classList.contains('image-modal-overlay')) {
      onClose();
    }
  };

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