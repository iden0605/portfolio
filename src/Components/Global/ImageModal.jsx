import { useEffect } from 'react';
import './ImageModal.css';

const ImageModal = ({ src, alt, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleResize = () => { if (window.innerWidth <= 768) onClose(); };
    window.addEventListener('resize', handleResize);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('resize', handleResize);
    };
  }, [onClose]);

  const handleClick = (e) => {
    if (e.target.classList.contains('image-modal-overlay')) onClose();
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