import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Notification from './Notification';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setNotification(null);

    try {
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: formData.name,
        message: formData.message,
        to_email: 'ahmadshahid78612345@gmail.com',
        reply_to: 'noreply@portfolio.com'
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setNotification({
        type: 'success',
        message: `Thanks ${formData.name}! Your message has been sent successfully.`
      });
      setFormData({ name: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setNotification({
        type: 'error',
        message: 'Failed to send message. Please try again or contact me directly at ahmadshahid78612345@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
      <div className="contact-container">
        <div className="contact-left">
          <h3 className="left-message">wanna say something?</h3>
          <svg className="curly-arrow" viewBox="0 0 250 300" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M 30 50 Q 50 80, 30 110 Q 10 140, 30 170 Q 50 200, 80 200 L 200 200" 
              stroke="#000000" 
              strokeWidth="4" 
              fill="none" 
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path 
              d="M 200 200 L 180 185 M 200 200 L 180 215" 
              stroke="#000000" 
              strokeWidth="4" 
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="contact-right">
          <h2 className="contact-title">Send me a message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Your name"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                placeholder="Your message"
                rows="6"
                required
              />
            </div>

            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
