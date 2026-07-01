import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactMePage.css';
import { useContactForm } from '../../hooks/useContactForm';

function ContactMePage() {
  const navigate = useNavigate();
  const { formData, isSending, cooldown, handleChange, handleSubmit, buttonText } = useContactForm();

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 768) navigate('/'); };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [navigate]);

  return (
    <div className="contact-me-page">
      <div className="contact-popup-content">
        <div className="contact-popup-prompt-line">
          <span className="contact-popup-prompt-arrow">❯</span>
          <span className="contact-popup-prompt-cmd" style={{ '--cmd-len': 16 }}> cat contact.md</span>
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
          <button type="submit" className="submit-button" disabled={isSending || cooldown > 0}>{buttonText}</button>
        </form>
      </div>
    </div>
  );
}

export default ContactMePage;
