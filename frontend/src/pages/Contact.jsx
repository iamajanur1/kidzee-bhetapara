import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import '../styles/kidzee.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    
    // TODO: Will connect to backend API
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1000);
  };

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="display-medium">Contact Us</h1>
          <p className="body-large">We're here to answer your questions and welcome you to our school</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info-section">
              <h2 className="heading-2 mb-lg">Get in Touch</h2>
              
              <div className="contact-card">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div className="contact-details">
                  <h3 className="heading-3">Visit Us</h3>
                  <p className="body-medium">
                    Vidya Mandir Lane,<br />
                    Vidya Mandir Path,<br />
                    Bhetapara, Guwahati,<br />
                    Assam, India
                  </p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div className="contact-details">
                  <h3 className="heading-3">Call Us</h3>
                  <p className="body-medium">
                    <a href="tel:+917577010005">+91 7577010005</a><br />
                    <a href="tel:+917577010005">075770 10005</a>
                  </p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-details">
                  <h3 className="heading-3">Email Us</h3>
                  <p className="body-medium">
                    <a href="mailto:kidzee3246@kidzee.com">kidzee3246@kidzee.com</a>
                  </p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <Clock size={24} />
                </div>
                <div className="contact-details">
                  <h3 className="heading-3">Operating Hours</h3>
                  <p className="body-medium">
                    Monday - Friday: 8:00 AM - 5:00 PM<br />
                    Saturday: 8:00 AM - 1:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <div className="cta-buttons-vertical">
                <a href="https://wa.me/917577010005" className="btn-primary" target="_blank" rel="noopener noreferrer">
                  WhatsApp Now
                </a>
                <a href="tel:+917577010005" className="btn-secondary">
                  Call Now
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-container">
                <h2 className="heading-2 mb-lg">Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                      rows="5"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-cta full-width" disabled={submitStatus === 'submitting'}>
                    {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="success-message">
                      Thank you! We'll get back to you soon.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section map-section">
        <div className="container">
          <h2 className="heading-1 text-center mb-xl">Find Us on Map</h2>
          <div className="map-placeholder">
            <p className="body-medium">Google Maps Embed Placeholder</p>
            <p className="body-small">Location: Vidya Mandir Lane, Bhetapara, Guwahati</p>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .contact-page {
          padding-top: 90px;
        }

        .page-hero {
          background: linear-gradient(135deg, rgba(250, 255, 238, 0.6) 0%, rgba(237, 237, 254, 0.6) 100%);
          padding: var(--spacing-xl) 0;
          text-align: center;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: var(--spacing-giant);
          align-items: start;
        }

        .contact-info-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-large);
        }

        .contact-card {
          background: var(--bg-card);
          border-radius: 20px;
          padding: var(--spacing-large);
          display: flex;
          gap: var(--spacing-medium);
          box-shadow: 0 2px 8px rgba(0, 69, 52, 0.15);
        }

        .contact-icon {
          width: 56px;
          height: 56px;
          background: var(--brand-dark);
          color: var(--brand-primary);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-details h3 {
          margin-bottom: var(--spacing-xs);
        }

        .contact-details a {
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .contact-details a:hover {
          color: var(--brand-hover);
        }

        .cta-buttons-vertical {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-small);
        }

        .form-container {
          background: var(--bg-card);
          border-radius: 24px;
          padding: var(--spacing-xl);
          box-shadow: 0 4px 16px rgba(0, 69, 52, 0.15);
        }

        .form-group {
          margin-bottom: var(--spacing-large);
        }

        .form-label {
          display: block;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--spacing-xs);
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 14px 18px;
          border: 2px solid var(--border-medium);
          border-radius: 12px;
          font-size: 1rem;
          font-family: inherit;
          color: var(--text-primary);
          transition: border-color 0.2s ease;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--brand-dark);
        }

        .form-textarea {
          resize: vertical;
        }

        .full-width {
          width: 100%;
        }

        .success-message {
          background: var(--brand-primary);
          color: var(--brand-dark);
          padding: var(--spacing-medium);
          border-radius: 12px;
          text-align: center;
          font-weight: 600;
          margin-top: var(--spacing-medium);
        }

        .map-section {
          background: var(--bg-subtle);
        }

        .map-placeholder {
          background: var(--bg-section);
          border-radius: 24px;
          padding: var(--spacing-giant);
          text-align: center;
          min-height: 400px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-small);
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 781px) {
          .contact-page {
            padding-top: 70px;
          }

          .form-container {
            padding: var(--spacing-large);
          }

          .map-placeholder {
            min-height: 300px;
            padding: var(--spacing-xl);
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;