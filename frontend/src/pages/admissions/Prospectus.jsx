import React from 'react';
import { Link } from 'react-router-dom';
import { Download, FileText, CheckCircle } from 'lucide-react';
import '../styles/kidzee.css';

const Prospectus = () => {
  const prospectusHighlights = [
    'Complete program details for all age groups',
    'Curriculum overview and learning methodology',
    'Infrastructure and facilities information',
    'Fee structure and payment options',
    'Admission process and requirements',
    'Faculty profiles and qualifications',
    'Safety protocols and care systems',
    'Extra-curricular programs (Abacus, Art, Dance)',
    'Parent testimonials and success stories',
    'Contact information and campus location'
  ];

  return (
    <div className="prospectus-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="display-medium">School Prospectus</h1>
          <p className="body-large">Download our comprehensive guide to Kidzee Bhetapara</p>
        </div>
      </section>

      {/* Main Prospectus Section */}
      <section className="section">
        <div className="container">
          <div className="prospectus-layout">
            <div className="prospectus-main">
              <div className="prospectus-card">
                <div className="prospectus-icon">
                  <FileText size={64} />
                </div>
                <h2 className="heading-2">Kidzee Bhetapara Prospectus 2025-26</h2>
                <p className="body-large">
                  Our comprehensive prospectus contains everything you need to know about Kidzee Bhetapara—from 
                  our educational philosophy and programs to admission details and fee structure.
                </p>
                <div className="download-section">
                  <a href="/assets/prospectus.pdf" download className="btn-cta">
                    <Download size={20} />
                    Download Prospectus (PDF)
                  </a>
                  <p className="body-small mt-md">File size: ~5 MB | Last updated: January 2025</p>
                </div>
              </div>
            </div>

            <div className="prospectus-sidebar">
              <div className="highlights-card">
                <h3 className="heading-3 mb-md">What's Inside</h3>
                <div className="highlights-list">
                  {prospectusHighlights.map((item, index) => (
                    <div key={index} className="highlight-item">
                      <CheckCircle size={18} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Download */}
      <section className="section why-download-section">
        <div className="container">
          <div className="content-block text-center">
            <h2 className="heading-1">Why Download Our Prospectus?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3 className="heading-3">Detailed Information</h3>
                <p className="body-medium">Get complete details about our programs, curriculum, and facilities in one comprehensive document</p>
              </div>
              <div className="benefit-card">
                <h3 className="heading-3">Share with Family</h3>
                <p className="body-medium">Easy to share with family members involved in the admission decision-making process</p>
              </div>
              <div className="benefit-card">
                <h3 className="heading-3">Offline Access</h3>
                <p className="body-medium">Read at your convenience without needing an internet connection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="section resources-section">
        <div className="container">
          <h2 className="heading-1 text-center mb-xl">Additional Resources</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <h3 className="heading-3">Admission Guidelines</h3>
              <p className="body-medium">Step-by-step guide to the admission process</p>
              <Link to="/admissions/process" className="resource-link">View Details →</Link>
            </div>
            <div className="resource-card">
              <h3 className="heading-3">Fee Structure</h3>
              <p className="body-medium">Transparent pricing for all programs and add-ons</p>
              <Link to="/admissions/fee-structure" className="resource-link">View Details →</Link>
            </div>
            <div className="resource-card">
              <h3 className="heading-3">Campus Tour</h3>
              <p className="body-medium">Schedule a visit to see our facilities in person</p>
              <Link to="/contact" className="resource-link">Book Now →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-1">Have Questions?</h2>
            <p className="body-large">Our admissions team is here to help. Reach out for personalized guidance.</p>
            <div className="cta-buttons">
              <Link to="/admissions/enquiry" className="btn-cta">Submit Enquiry</Link>
              <a href="tel:+917577010005" className="btn-accent">Call +91 7577010005</a>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .prospectus-page {
          padding-top: 90px;
        }

        .page-hero {
          background: linear-gradient(135deg, rgba(250, 255, 238, 0.6) 0%, rgba(237, 237, 254, 0.6) 100%);
          padding: var(--spacing-xl) 0;
          text-align: center;
        }

        .content-block {
          max-width: 900px;
          margin: 0 auto;
        }

        .prospectus-layout {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: var(--spacing-xl);
          align-items: start;
        }

        .prospectus-card {
          background: var(--bg-card);
          border-radius: 32px;
          padding: var(--spacing-giant);
          text-align: center;
          box-shadow: 0 4px 16px rgba(0, 69, 52, 0.15);
        }

        .prospectus-icon {
          width: 120px;
          height: 120px;
          background: var(--brand-dark);
          color: var(--brand-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--spacing-large);
        }

        .prospectus-card h2 {
          margin-bottom: var(--spacing-medium);
        }

        .prospectus-card p {
          margin-bottom: var(--spacing-xl);
        }

        .download-section {
          margin-top: var(--spacing-xl);
        }

        .btn-cta {
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-xs);
        }

        .highlights-card {
          background: var(--bg-card);
          border-radius: 24px;
          padding: var(--spacing-large);
          box-shadow: 0 2px 8px rgba(0, 69, 52, 0.15);
          position: sticky;
          top: 100px;
        }

        .highlights-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-small);
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-xs);
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .highlight-item svg {
          color: var(--brand-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .why-download-section {
          background: var(--bg-subtle);
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: var(--spacing-large);
          margin-top: var(--spacing-xl);
        }

        .benefit-card {
          background: white;
          border-radius: 24px;
          padding: var(--spacing-large);
          text-align: center;
          box-shadow: 0 2px 8px rgba(0, 69, 52, 0.15);
        }

        .benefit-card h3 {
          margin-bottom: var(--spacing-xs);
        }

        .resources-section {
          background: var(--bg-card);
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-large);
        }

        .resource-card {
          background: var(--bg-subtle);
          border-radius: 20px;
          padding: var(--spacing-large);
        }

        .resource-card h3 {
          margin-bottom: var(--spacing-xs);
        }

        .resource-card p {
          margin-bottom: var(--spacing-medium);
        }

        .resource-link {
          color: var(--brand-hover);
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .resource-link:hover {
          color: var(--brand-dark);
        }

        .cta-section {
          background: linear-gradient(135deg, var(--brand-dark) 0%, var(--brand-hover) 100%);
          color: white;
        }

        .cta-content {
          text-align: center;
        }

        .cta-content h2,
        .cta-content p {
          color: white;
        }

        .cta-buttons {
          display: flex;
          gap: var(--spacing-small);
          justify-content: center;
          margin-top: var(--spacing-xl);
          flex-wrap: wrap;
        }

        @media (max-width: 1024px) {
          .prospectus-layout {
            grid-template-columns: 1fr;
          }

          .highlights-card {
            position: static;
          }
        }

        @media (max-width: 781px) {
          .prospectus-page {
            padding-top: 70px;
          }

          .prospectus-card {
            padding: var(--spacing-xl);
          }

          .benefits-grid,
          .resources-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Prospectus;