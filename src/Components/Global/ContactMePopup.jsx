import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import './ContactMePopup.css';

const ContactMePopup = ({ isOpen, onClose }) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success (e.g., clear form, show message)
        setFormData({ name: '', email: '', message: '' });
        alert('Message sent successfully!'); // Simple alert for now
        onClose(); // Close the popup on success
      } else {
        // Handle errors
        const errorData = await response.json();
        console.error('Error sending message:', errorData.error);
        alert(`Failed to send message: ${errorData.error}`); // Simple alert for now
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred while sending the message.'); // Simple alert for now
    }
  };

  const overlayClassName = `popup-overlay ${isClosing ? 'closing' : ''}`;
  const contentClassName = `popup-content ${isClosing ? 'closing' : ''}`;

  return (
    <div className={overlayClassName}>
      <div className={contentClassName}>
        <h2><span className="subtitle">Contact Me</span></h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name: <span className="required-asterisk">*</span></label>
            <input type="text" id="name" name="name" placeholder="Enter your name" aria-required="true" required value={formData.name} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email: <span className="required-asterisk">*</span></label>
            <input type="email" id="email" name="email" placeholder="your.email@example.com" aria-required="true" required value={formData.email} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message: <span className="required-asterisk">*</span></label>
            <textarea id="message" name="message" placeholder="Enter your message" aria-required="true" required value={formData.message} onChange={handleInputChange}></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
        <button className="close-button" onClick={onClose}>&times;</button>
      </div>
    </div>
  );
};

export default ContactMePopup;
