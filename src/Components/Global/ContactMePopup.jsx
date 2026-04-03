import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactMePopup.css';
import { toast } from 'react-toastify';

const ContactMePopup = ({ isOpen, onClose }) => {
  // State for popup visibility and animation
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);
  // State for form data
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: '',
  });

  // State for button disable during sending
  const [isSending, setIsSending] = useState(false);

  // State for cooldown
  const [cooldown, setCooldown] = useState(0);
  const cooldownTimerRef = useRef(null);
  const toastIdRef = useRef(null);
  
  // Store cooldown end time in localStorage
  const cooldownEndTimeKey = 'contactFormCooldownEndTime';

  // Check for existing cooldown on component mount
  useEffect(() => {
    const storedEndTime = localStorage.getItem(cooldownEndTimeKey);
    if (storedEndTime) {
      const endTime = parseInt(storedEndTime);
      const now = Date.now();
      if (endTime > now) {
        // Calculate remaining cooldown time
        const remainingSeconds = Math.ceil((endTime - now) / 1000);
        setCooldown(remainingSeconds);
      } 
      else {
        // Clear expired cooldown
        localStorage.removeItem(cooldownEndTimeKey);
      }
    }
  }, []);

  // Effect to handle popup open/close animation
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
      // Lock scrolling
      document.body.style.overflow = 'hidden';
    } 
    else {
      setIsClosing(true);
      const timeoutId = setTimeout(() => {
        setShouldRender(false);
      }, 200);
      
      // Only dismiss toast when popup closes, don't cancel cooldown
      if (toastIdRef.current) {
        toast.dismiss('cooldown-toast');
        toastIdRef.current = null;
      }
      
      // Unlock scrolling
      document.body.style.overflow = '';
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen]);

  // Ensure scrolling is re-enabled if component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);


  // Manage cooldown timer and toast
  useEffect(() => {
    if (cooldown > 0) {
      // Store cooldown end time in localStorage
      const endTime = Date.now() + cooldown * 1000;
      localStorage.setItem(cooldownEndTimeKey, endTime.toString());
      
      // Show initial toast when cooldown starts if popup is open
      if (isOpen && !toast.isActive('cooldown-toast')) {
        toastIdRef.current = toast.info(`Please wait ${cooldown}s before trying again`, {
          position: "bottom-right",
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "colored",
          style: { backgroundColor: '#6a7fda' },
          toastId: 'cooldown-toast',
        });
      }

      cooldownTimerRef.current = setInterval(() => {
        setCooldown((prevCooldown) => {
          const newCooldown = prevCooldown - 1;
          if (newCooldown > 0) {
            // Update toast with remaining time if popup is open
            if (isOpen && toast.isActive('cooldown-toast')) {
              toast.update('cooldown-toast', {
                render: `Please wait ${newCooldown}s before trying again`,
              });
            }
          } else {
            // Cooldown finished
            clearInterval(cooldownTimerRef.current);
            cooldownTimerRef.current = null; // Clear the ref
            localStorage.removeItem(cooldownEndTimeKey); // Remove from localStorage
            if (toastIdRef.current) {
              toast.dismiss('cooldown-toast');
              toastIdRef.current = null;
            }
          }
          return newCooldown;
        });
      }, 1000);
    } 
    else {
      // Cooldown is 0 or less, timer and toast are cleared
      if (cooldownTimerRef.current) {
        clearInterval(cooldownTimerRef.current);
        cooldownTimerRef.current = null;
      }
      if (toastIdRef.current) {
        toast.dismiss('cooldown-toast');
        toastIdRef.current = null;
      }
      localStorage.removeItem(cooldownEndTimeKey);
    }

    return () => {
      // Only clear interval on unmount, keep localStorage
      if (cooldownTimerRef.current) {
        clearInterval(cooldownTimerRef.current);
      }
      if (toastIdRef.current && !isOpen) {
        toast.dismiss('cooldown-toast');
      }
    };
  }, [cooldown, isOpen]);

  // Don't render if not open and not closing
  if (!shouldRender) {
    return null;
  }

  // handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (cooldown > 0) {
      // Show toast with current cooldown time
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
          toastId: 'cooldown-toast',
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

    emailjs.send(
        'service_0b37ufm',
        'template_8w7zuar',
        formData,
        'MzUMvjt8d-4_2K4Mi'
    )
    .then(() => {
        setFormData({ from_name: '', reply_to: '', message: '' });
        toast.success('Thank you for your message! I\'ll get back to you soon.', {
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
        setCooldown(120);
        onClose();
    }, (error) => {
        console.error('Error sending message:', error);
        toast.error('Failed to send message. Please try again later.', {
           position: "bottom-right",
           autoClose: 5000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           theme: "colored",
        });
    })
    .finally(() => {
        setIsSending(false);
    });
  };

  const overlayClassName = `popup-overlay ${isClosing ? 'closing' : ''}`;
  const contentClassName = `popup-content ${isClosing ? 'closing' : ''}`;

  // Button text
  const buttonText = isSending
    ? 'Sending...'
    : cooldown > 0
      ? `Wait ${cooldown}s`
      : 'Send Message';

  // Render the popup
  return (
    <div className={overlayClassName}>
      <div className={contentClassName}>
        <div className="popup-prompt-line">
          <span className="popup-prompt-arrow">❯</span>
          <span className="popup-prompt-cmd" style={{ '--cmd-len': 16 }}> cat contact.md</span>
        </div>
        <h2><span className="subtitle">Drop me a message!</span></h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="from_name">Name: <span className="required-asterisk">*</span></label>
            <input type="text" id="from_name" name="from_name" placeholder="Enter your name" aria-required="true" required value={formData.from_name} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="reply_to">Email: <span className="required-asterisk">*</span></label>
            <input type="email" id="reply_to" name="reply_to" placeholder="your.email@example.com" aria-required="true" required value={formData.reply_to} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message: <span className="required-asterisk">*</span></label>
            <textarea id="message" name="message" placeholder="Enter your message" aria-required="true" required value={formData.message} onChange={handleInputChange}></textarea>
          </div>
          <button type="submit" disabled={cooldown > 0 || isSending}>
            {buttonText}
          </button>
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
