import { useState } from 'react';
import './ContactMePage.css';
import { toast } from 'react-toastify';

function ContactMePage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);

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
            setIsSending(false);
        }
    };

    return (
        <div className="contact-me-page">
            <div className="contact-popup-content">
                <h2>Drop me a message!</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name: <span className="required-asterisk">*</span></label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" aria-required="true" required value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email: <span className="required-asterisk">*</span></label>
                        <input type="email" id="email" name="email" placeholder="your.email@example.com" aria-required="true" required value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message: <span className="required-asterisk">*</span></label>
                        <textarea id="message" name="message" placeholder="Enter your message" aria-required="true" required value={formData.message} onChange={handleChange}></textarea>
                    </div>
                    <button type="submit" className="submit-button" disabled={isSending}>
                        {isSending ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactMePage;