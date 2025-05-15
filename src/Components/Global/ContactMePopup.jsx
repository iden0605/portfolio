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

  // State for button disable during sending
  const [isSending, setIsSending] = useState(false);

  // State for cooldown
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
      // Cleanup cooldown timer and toast when popup closes
      if (cooldownTimerRef.current) {
        clearInterval(cooldownTimerRef.current);
        cooldownTimerRef.current = null;
      }
      if (toastIdRef.current) {
        toast.dismiss('cooldown-toast');
        toastIdRef.current = null;
      }
      setCooldown(0); // Reset cooldown state
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen]);

  // Effect to manage cooldown timer and toast
  useEffect(() => {
    if (cooldown > 0) {
      // Show initial toast when cooldown starts
      if (!toast.isActive('cooldown-toast')) {
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
      }

      cooldownTimerRef.current = setInterval(() => {
        setCooldown((prevCooldown) => {
          const newCooldown = prevCooldown - 1;
          if (newCooldown > 0) {
            // Update toast with remaining time
            toast.update('cooldown-toast', {
              render: `Please wait ${newCooldown}s before trying again`,
            });
          } else {
            // Cooldown finished
            clearInterval(cooldownTimerRef.current);
            cooldownTimerRef.current = null; // Clear the ref
            if (toastIdRef.current) {
              toast.dismiss('cooldown-toast');
              toastIdRef.current = null;
            }
          }
          return newCooldown;
        });
      }, 1000);
    } else {
      // Cooldown is 0 or less, ensure timer and toast are cleared
      if (cooldownTimerRef.current) {
        clearInterval(cooldownTimerRef.current);
        cooldownTimerRef.current = null;
      }
      if (toastIdRef.current) {
        toast.dismiss('cooldown-toast');
        toastIdRef.current = null;
      }
    }

    return () => {
      // Cleanup on unmount or when cooldown changes
      if (cooldownTimerRef.current) {
        clearInterval(cooldownTimerRef.current);
      }
      if (toastIdRef.current) {
        toast.dismiss('cooldown-toast');
      }
    };
  }, [cooldown]); // Only re-run when cooldown changes

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
      // Prevent submission if cooldown is active and show/update toast
      if (!toast.isActive('cooldown-toast')) {
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
      } else {
         // Update existing toast with current cooldown time
         toast.update('cooldown-toast', {
           render: `Please wait ${cooldown}s before trying again`,
         });
      }
      return;
    }

    setIsSending(true); // Disable button immediately

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
        setCooldown(60); // Start cooldown BEFORE closing popup
        onClose();
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
    } finally {
      setIsSending(false); // Re-enable button after fetch completes
    }
  };

  const overlayClassName = `popup-overlay ${isClosing ? 'closing' : ''}`;
  const contentClassName = `popup-content ${isClosing ? 'closing' : ''}`;

  // Determine button text
  const buttonText = isSending
    ? 'Sending...'
    : cooldown > 0
      ? `Wait ${cooldown}s`
      : 'Send Message';

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
          <button type="submit" disabled={cooldown > 0 || isSending}>
            {buttonText}
          </button>
        </form>
        <button className="close-button" onClick={onClose}>&times;</button>
      </div>
    </div>
  );
};

export default ContactMePopup;
