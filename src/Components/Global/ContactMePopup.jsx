import { useState, useEffect } from 'react';
import './ContactMePopup.css';
import { useContactForm } from '../../hooks/useContactForm';

const ContactMePopup = ({ isOpen, onClose }) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);

  const { formData, isSending, cooldown, handleChange, handleSubmit, buttonText } = useContactForm({ onSuccess: onClose });

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
      document.body.style.overflow = 'hidden';
    } else {
      setIsClosing(true);
      const t = setTimeout(() => setShouldRender(false), 200);
      document.body.style.overflow = '';
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  useEffect(() => () => { document.body.style.overflow = ''; }, []);

  if (!shouldRender) return null;

  return (
    <div className={`popup-overlay${isClosing ? ' closing' : ''}`}>
      <div className={`popup-content${isClosing ? ' closing' : ''}`}>
        <div className="popup-prompt-line">
          <span className="popup-prompt-arrow">❯</span>
          <span className="popup-prompt-cmd" style={{ '--cmd-len': 16 }}> cat contact.md</span>
        </div>
        <h2><span className="subtitle">Drop me a message!</span></h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="from_name">Name: <span className="required-asterisk">*</span></label>
            <input type="text" id="from_name" name="from_name" placeholder="Enter your name" aria-required="true" required value={formData.from_name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="reply_to">Email: <span className="required-asterisk">*</span></label>
            <input type="email" id="reply_to" name="reply_to" placeholder="your.email@example.com" aria-required="true" required value={formData.reply_to} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message: <span className="required-asterisk">*</span></label>
            <textarea id="message" name="message" placeholder="Enter your message" aria-required="true" required value={formData.message} onChange={handleChange} />
          </div>
          <button type="submit" disabled={cooldown > 0 || isSending}>{buttonText}</button>
        </form>
        <div className="popup-socials">
          <a href="mailto:iden0605@gmail.com" target="_blank" rel="noopener noreferrer" className="popup-social-link" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
          <a href="https://github.com/iden0605" target="_blank" rel="noopener noreferrer" className="popup-social-link" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/iden-mcelhone-8a6983354/" target="_blank" rel="noopener noreferrer" className="popup-social-link" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>
        <button className="close-button" onClick={onClose}>&times;</button>
      </div>
    </div>
  );
};

export default ContactMePopup;
