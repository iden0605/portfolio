import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const COOLDOWN_KEY = 'contactCooldownEndTime';
const COOLDOWN_SECONDS = 120;

export function useContactForm({ onSuccess } = {}) {
  const [formData, setFormData] = useState({ from_name: '', reply_to: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const cooldownTimerRef = useRef(null);

  useEffect(() => {
    const stored = localStorage.getItem(COOLDOWN_KEY);
    if (stored) {
      const remaining = Math.ceil((parseInt(stored) - Date.now()) / 1000);
      if (remaining > 0) setCooldown(remaining);
      else localStorage.removeItem(COOLDOWN_KEY);
    }
  }, []);

  useEffect(() => {
    if (cooldown <= 0) {
      if (cooldownTimerRef.current) clearInterval(cooldownTimerRef.current);
      localStorage.removeItem(COOLDOWN_KEY);
      return;
    }

    localStorage.setItem(COOLDOWN_KEY, (Date.now() + cooldown * 1000).toString());

    cooldownTimerRef.current = setInterval(() => {
      setCooldown(prev => {
        const next = prev - 1;
        if (next <= 0) {
          clearInterval(cooldownTimerRef.current);
          localStorage.removeItem(COOLDOWN_KEY);
        }
        return next;
      });
    }, 1000);

    return () => { if (cooldownTimerRef.current) clearInterval(cooldownTimerRef.current); };
  }, [cooldown]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cooldown > 0) return;
    setIsSending(true);
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setFormData({ from_name: '', reply_to: '', message: '' });
      toast.success("Thank you for your message! I'll get back to you soon.", {
        position: 'bottom-right', autoClose: 5000, theme: 'colored',
        style: { backgroundColor: '#6a7fda' },
      });
      setCooldown(COOLDOWN_SECONDS);
      onSuccess?.();
    })
    .catch((err) => {
      console.error(err);
      toast.error('Failed to send message. Please try again later.', {
        position: 'bottom-right', autoClose: 5000, theme: 'colored',
      });
    })
    .finally(() => setIsSending(false));
  };

  const buttonText = isSending ? 'Sending...' : cooldown > 0 ? `Wait ${cooldown}s` : 'Send Message';

  return { formData, isSending, cooldown, handleChange, handleSubmit, buttonText };
}
