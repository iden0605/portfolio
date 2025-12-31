import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './ContactMePage.css';
import { toast } from 'react-toastify';

function ContactMePage() {
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                navigate('/');
            }
        };

        window.addEventListener('resize', handleResize);

        // Check on initial render as well
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [navigate]);
    const [formData, setFormData] = useState({
        from_name: '',
        reply_to: '',
        message: ''
    });
    const [isSending, setIsSending] = useState(false);
    const [cooldown, setCooldown] = useState(0);
    const cooldownTimerRef = useRef(null);

    const cooldownEndTimeKey = 'contactPageCooldownEndTime';

    useEffect(() => {
        const storedEndTime = localStorage.getItem(cooldownEndTimeKey);
        if (storedEndTime) {
            const endTime = parseInt(storedEndTime);
            const now = Date.now();
            if (endTime > now) {
                const remainingSeconds = Math.ceil((endTime - now) / 1000);
                setCooldown(remainingSeconds);
            } else {
                localStorage.removeItem(cooldownEndTimeKey);
            }
        }
    }, []);

    useEffect(() => {
        if (cooldown > 0) {
            const endTime = Date.now() + cooldown * 1000;
            localStorage.setItem(cooldownEndTimeKey, endTime.toString());

            cooldownTimerRef.current = setInterval(() => {
                setCooldown((prevCooldown) => {
                    const newCooldown = prevCooldown - 1;
                    if (newCooldown <= 0) {
                        clearInterval(cooldownTimerRef.current);
                        localStorage.removeItem(cooldownEndTimeKey);
                        return 0;
                    }
                    return newCooldown;
                });
            }, 1000);
        }
        return () => {
            if (cooldownTimerRef.current) {
                clearInterval(cooldownTimerRef.current);
            }
        };
    }, [cooldown]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (cooldown > 0) {
            toast.info(`Please wait ${cooldown}s before trying again`, {
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
            return;
        }

        setIsSending(true);

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

    return (
        <div className="contact-me-page">
            <div className="contact-popup-content">
                <h2>Drop me a message!</h2>
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
                        <textarea id="message" name="message" placeholder="Enter your message" aria-required="true" required value={formData.message} onChange={handleChange}></textarea>
                    </div>
                    <button type="submit" className="submit-button" disabled={isSending || cooldown > 0}>
                        {isSending ? 'Sending...' : cooldown > 0 ? `Wait ${cooldown}s` : 'Send'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactMePage;