import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import './ContactMePopup.css';

const ContactMePopup = ({ isOpen, onClose }) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
    } else {
      setIsClosing(true);
      const timeoutId = setTimeout(() => {
        setShouldRender(false);
      }, 200); // Match the new animation duration
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen]);

  if (!shouldRender) {
    return null;
  }

  const overlayClassName = `popup-overlay ${isClosing ? 'closing' : ''}`;
  const contentClassName = `popup-content ${isClosing ? 'closing' : ''}`;

  return (
    <div className={overlayClassName}>
      <div className={contentClassName}>
        <h2><span className="subtitle">Contact Me</span></h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name: <span className="required-asterisk">*</span></label>
            <input type="text" id="name" name="name" placeholder="Enter your name" aria-required="true" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email: <span className="required-asterisk">*</span></label>
            <input type="email" id="email" name="email" placeholder="your.email@example.com" aria-required="true" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message: <span className="required-asterisk">*</span></label>
            <textarea id="message" name="message" placeholder="Enter your message" aria-required="true" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
        <button className="close-button" onClick={onClose}>&times;</button>
      </div>
    </div>
  );
};

export default ContactMePopup;
