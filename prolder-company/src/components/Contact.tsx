import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      // Using Formspree service to send emails directly to your Gmail
      const response = await fetch('https://formspree.io/f/xjkvoqab', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div 
          className="section-header"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Get Started Today</h2>
          <p className="section-description">
            Ready to transform your business? Let's discuss your project
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Let's Connect</h3>
            <p>
              We're here to help you build innovative solutions that drive your business forward. 
              Reach out to discuss your project requirements and discover how we can collaborate.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <span className="contact-icon">📧</span>
                <div>
                  <strong>Email</strong>
                  <p>info@proldersolutions.com</p>
                </div>
              </div>
              
              <div className="contact-method">
                <span className="contact-icon">💼</span>
                <div>
                  <strong>Business Hours</strong>
                  <p>Monday - Friday, 9:00 AM - 6:00 PM</p>
                </div>
              </div>
              
              <div className="contact-method">
                <span className="contact-icon">🌍</span>
                <div>
                  <strong>Remote Collaboration</strong>
                  <p>Working with clients worldwide</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary-large"
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              
              {formStatus === 'success' && (
                <div className="form-status success">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="form-status error">
                  ❌ Failed to send message. Please try again or email me directly.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;