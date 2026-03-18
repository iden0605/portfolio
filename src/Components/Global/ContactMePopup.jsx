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
          <a href="mailto:iden0605@gmail.com" target="_blank" rel="noopener noreferrer" className="popup-social-link">
            <img src="/assets/logo/Gmail-logo.png" alt="Gmail" className="popup-social-icon" />
          </a>
          <a href="https://github.com/iden0605" target="_blank" rel="noopener noreferrer" className="popup-social-link">
            <img src="/assets/logo/Github-black-logo.png" alt="GitHub" className="popup-social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/iden-mcelhone-8a6983354/" target="_blank" rel="noopener noreferrer" className="popup-social-link">
            <img src="/assets/logo/LinkedIn-logo.png" alt="LinkedIn" className="popup-social-icon" />
          </a>
        </div>
        <button className="close-button" onClick={onClose}>&times;</button>
      </div>
    </div>
  );
};

export default ContactMePopup;
