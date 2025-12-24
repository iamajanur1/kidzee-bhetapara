import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/kidzee.css';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    childName: '',
    applyingFor: '',
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
      setFormData({
        parentName: '',
        phone: '',
        email: '',
        childName: '',
        applyingFor: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className="enquiry-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="display-medium">Admission Enquiry</h1>
          <p className="body-large">Take the first step towards your child's bright future</p>
        </div>
      </section>

      {/* Urgency Bar */}
      <section className="urgency-notice">
        <div className="container">
          <p className="urgency-text">
            ⚠️ Limited seats available each session. Admissions close once capacity is reached. Apply now to secure your child's spot!
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="form-layout">
            <div className="form-main">
              <div className="form-container">
                <h2 className="heading-2 mb-lg">Enquiry Form</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="parentName" className="form-label">Parent/Guardian Name *</label>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-row">
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
                  </div>

                  <div className="form-group">
                    <label htmlFor="childName" className="form-label">Child's Name *</label>
                    <input
                      type="text"
                      id="childName"
                      name="childName"
                      value={formData.childName}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="applyingFor" className="form-label">Applying For *</label>
                    <select
                      id="applyingFor"
                      name="applyingFor"
                      value={formData.applyingFor}
                      onChange={handleChange}
                      className="form-select"
                      required
                    >
                      <option value="">Select Program</option>
                      <option value="playgroup">Play Group (1.5-2.5 years)</option>
                      <option value="nursery">Nursery (2.5-3.5 years)</option>
                      <option value="jrkg">Junior KG (3.5-4.5 years)</option>
                      <option value="srkg">Senior KG (4.5-5.5 years)</option>
                      <option value="class1">Class 1 (5.5-6.5 years)</option>
                      <option value="class2">Class 2 (6.5-7.5 years)</option>
                      <option value="dayboarding">Day Boarding</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message / Questions</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                      rows="4"
                      placeholder="Any specific questions or requirements..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-cta full-width" disabled={submitStatus === 'submitting'}>
                    {submitStatus === 'submitting' ? 'Submitting...' : 'Submit Enquiry'}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="success-message">
                      ✅ Thank you for your enquiry! Our admissions team will contact you within 24 hours.
                    </div>
                  )}
                </form>
              </div>
            </div>

            <div className="form-sidebar">
              <div className="info-card">
                <h3 className="heading-3">What Happens Next?</h3>
                <ol className="process-list">
                  <li>Our admissions team reviews your enquiry</li>
                  <li>We contact you within 24 hours</li>
                  <li>Schedule a campus visit at your convenience</li>
                  <li>Meet our team and tour the facilities</li>
                  <li>Complete the admission process</li>
                </ol>
              </div>

              <div className="info-card">
                <h3 className="heading-3">Quick Links</h3>
                <div className="quick-links">
                  <Link to="/admissions/process" className="quick-link">Admission Process</Link>
                  <Link to="/admissions/fee-structure" className="quick-link">Fee Structure</Link>
                  <Link to="/admissions/prospectus" className="quick-link">Download Prospectus</Link>
                  <Link to="/contact" className="quick-link">Contact Us</Link>
                </div>
              </div>

              <div className="info-card contact-card">
                <h3 className="heading-3">Need Help?</h3>
                <p className="body-small mb-sm">Call us directly for immediate assistance</p>
                <a href="tel:+917577010005" className="btn-secondary full-width">Call +91 7577010005</a>
                <a href="https://wa.me/917577010005" className="btn-accent full-width" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .enquiry-page {
          padding-top: 90px;
        }

        .page-hero {
          background: linear-gradient(135deg, rgba(250, 255, 238, 0.6) 0%, rgba(237, 237, 254, 0.6) 100%);
          padding: var(--spacing-xl) 0;
          text-align: center;
        }

        .urgency-notice {
          background: var(--brand-red);
          color: white;
          padding: var(--spacing-medium) 0;
        }

        .urgency-text {
          text-align: center;
          font-weight: 600;
          font-size: 1rem;
        }

        .form-layout {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: var(--spacing-xl);
          align-items: start;
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

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-medium);
        }

        .form-label {
          display: block;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--spacing-xs);
          font-size: 0.95rem;
        }

        .form-input,
        .form-select,
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
        .form-select:focus,
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

        .form-sidebar {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-large);
        }

        .info-card {
          background: var(--bg-card);
          border-radius: 20px;
          padding: var(--spacing-large);
          box-shadow: 0 2px 8px rgba(0, 69, 52, 0.15);
        }

        .info-card h3 {
          margin-bottom: var(--spacing-medium);
        }

        .process-list {
          list-style-position: inside;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-small);
          color: var(--text-secondary);
          padding-left: 0;
        }

        .process-list li {
          padding-left: var(--spacing-small);
        }

        .quick-links {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
        }

        .quick-link {
          color: var(--text-secondary);
          text-decoration: none;
          padding: var(--spacing-xs) 0;
          transition: color 0.2s ease;
          font-weight: 500;
        }

        .quick-link:hover {
          color: var(--brand-hover);
        }

        .contact-card .btn-secondary,
        .contact-card .btn-accent {
          margin-top: var(--spacing-xs);
        }

        @media (max-width: 1024px) {
          .form-layout {
            grid-template-columns: 1fr;
          }

          .form-row {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 781px) {
          .enquiry-page {
            padding-top: 70px;
          }

          .form-container {
            padding: var(--spacing-large);
          }
        }
      `}</style>
    </div>
  );
};

export default EnquiryForm;