import React, { useState, useEffect, useRef } from 'react';
import './ContactMePopup.css';
import { toast } from 'react-toastify';

const ContactMePopup = ({ isOpen, onClose }) => {
  // state for popup visibility and animation
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);
  // state for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [cooldown, setCooldown] = useState(0);
  const cooldownTimerRef = useRef(null);
  const toastIdRef = useRef(null);

  // effect to handle popup open/close animation
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
    } else {
      setIsClosing(true);
      const timeoutId = setTimeout(() => {
        setShouldRender(false);
      }, 200);
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen]);

  useEffect(() => {
    if (cooldown > 0) {
      toastIdRef.current = toast.info(`Please wait ${cooldown}s before trying again`, {
        position: "bottom-right",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
        style: { backgroundColor: '#6a7fda' },
        toastId: 'cooldown-toast', // Use a consistent ID to update the toast
      });

      cooldownTimerRef.current = setInterval(() => {
        setCooldown((prevCooldown) => {
          const newCooldown = prevCooldown - 1;
          if (newCooldown > 0) {
            toast.update('cooldown-toast', {
              render: `Please wait ${newCooldown}s before trying again`,
            });
          } else {
            toast.dismiss('cooldown-toast');
            clearInterval(cooldownTimerRef.current);
          }
          return newCooldown;
        });
      }, 1000);
    }

    return () => {
      if (cooldownTimerRef.current) {
        clearInterval(cooldownTimerRef.current);
      }
      if (toastIdRef.current) {
        toast.dismiss('cooldown-toast');
      }
    };
  }, [cooldown]);

  // don't render if not open and not closing
  if (!shouldRender) {
    return null;
  }

  // handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (cooldown > 0) {
      return;
    }

    try {
      const response = await fetch('https://portfolio-six-delta-96.vercel.app/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        toast.success('Thank you for your message! I’ll get back to you soon.', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          style: { backgroundColor: '#6a7fda' },
        });
        onClose();
        setCooldown(60);
      } else {
        const errorData = await response.json();
        console.error('Error sending message:', errorData.error);
        toast.error(`Failed to send message: ${errorData.error}`, {
           position: "bottom-right",
           autoClose: 5000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           theme: "colored",
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('An error occurred while sending the message.', {
         position: "bottom-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
      });
    }
  };

  const overlayClassName = `popup-overlay ${isClosing ? 'closing' : ''}`;
  const contentClassName = `popup-content ${isClosing ? 'closing' : ''}`;

  // render the popup
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
          <button type="submit" disabled={cooldown > 0}>
            Send Message
          </button>
        </form>
        <button className="close-button" onClick={onClose}>&times;</button>
      </div>
    </div>
  );
};

export default ContactMePopup;
