import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import '../../styles/kidzee.css';

const AdmissionProcess = () => {
  const steps = [
    {
      step: 1,
      title: 'Submit Enquiry',
      description: 'Fill out our online enquiry form or call us directly to express your interest.',
      action: 'Complete enquiry form online or call +91 7577010005'
    },
    {
      step: 2,
      title: 'Campus Visit',
      description: 'Schedule a visit to tour our facilities, meet our team, and see our learning environment.',
      action: 'Book a convenient time slot for campus tour'
    },
    {
      step: 3,
      title: 'Parent Counselling',
      description: 'One-on-one discussion with our admissions team about your child\'s needs and our programs.',
      action: 'Meet with admissions counselor (30-45 minutes)'
    },
    {
      step: 4,
      title: 'Registration',
      description: 'Complete the registration form and submit required documents.',
      action: 'Fill registration form and provide necessary documents'
    },
    {
      step: 5,
      title: 'Seat Confirmation',
      description: 'Pay the admission fee to secure your child\'s seat for the upcoming session.',
      action: 'Payment of admission fee and seat confirmation'
    },
    {
      step: 6,
      title: 'Welcome Orientation',
      description: 'Attend the orientation session before the academic year begins.',
      action: 'Participate in welcome orientation and meet teachers'
    }
  ];

  const documents = [
    'Child\'s birth certificate (original and photocopy)',
    'Passport-size photographs of child (4 copies)',
    'Parent/Guardian ID proof (Aadhaar/Passport/Driving License)',
    'Address proof (Utility bill/Aadhaar)',
    'Previous school report card (if applicable)',
    'Medical records and vaccination certificate'
  ];

  return (
    <div className="admission-process-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="display-medium">Admission Process</h1>
          <p className="body-large">Simple steps to enroll your child at Kidzee Bhetapara</p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section">
        <div className="container">
          <h2 className="heading-1 text-center mb-xl">6 Simple Steps</h2>
          <div className="steps-container">
            {steps.map((item) => (
              <div key={item.step} className="step-card">
                <div className="step-number">{item.step}</div>
                <div className="step-content">
                  <h3 className="heading-3">{item.title}</h3>
                  <p className="body-medium">{item.description}</p>
                  <div className="step-action">
                    <ArrowRight size={18} />
                    <span>{item.action}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="section documents-section">
        <div className="container">
          <div className="content-block">
            <h2 className="heading-1">Required Documents</h2>
            <p className="body-large mb-xl">
              Please prepare the following documents for the registration process:
            </p>
            <div className="documents-list">
              {documents.map((doc, index) => (
                <div key={index} className="document-item">
                  <CheckCircle size={24} />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="section info-section">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <h3 className="heading-3">Admission Timeline</h3>
              <p className="body-medium">
                Admissions for the 2025-26 session are now open. We recommend applying early as seats fill quickly. 
                Admissions close once we reach full capacity.
              </p>
            </div>
            <div className="info-card">
              <h3 className="heading-3">Age Criteria</h3>
              <p className="body-medium">
                Children must meet the minimum age requirement for each program as of April 1st of the admission year. 
                Age-appropriate placement ensures optimal learning and development.
              </p>
            </div>
            <div className="info-card">
              <h3 className="heading-3">Trial Period</h3>
              <p className="body-medium">
                We offer a 2-week trial period for new admissions. If your child is not settling in, we provide a full refund 
                of the admission fee (excluding registration charges).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-1">Ready to Begin?</h2>
            <p className="body-large">Start your admission journey today. Our team is here to help every step of the way.</p>
            <div className="cta-buttons">
              <Link to="/admissions/enquiry" className="btn-cta">Submit Enquiry</Link>
              <Link to="/contact" className="btn-accent">Schedule Campus Visit</Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .admission-process-page {
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

        .steps-container {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-large);
          max-width: 1000px;
          margin: 0 auto;
        }

        .step-card {
          background: var(--bg-card);
          border-radius: 24px;
          padding: var(--spacing-large);
          display: flex;
          gap: var(--spacing-large);
          box-shadow: 0 2px 8px rgba(0, 69, 52, 0.15);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .step-card:hover {
          transform: translateX(8px);
          box-shadow: 0 4px 16px rgba(0, 69, 52, 0.2);
        }

        .step-number {
          width: 64px;
          height: 64px;
          background: var(--brand-dark);
          color: var(--brand-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.75rem;
          font-weight: 700;
          flex-shrink: 0;
        }

        .step-content {
          flex-grow: 1;
        }

        .step-content h3 {
          margin-bottom: var(--spacing-xs);
        }

        .step-content p {
          margin-bottom: var(--spacing-small);
        }

        .step-action {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          color: var(--brand-hover);
          font-weight: 600;
          font-size: 0.95rem;
        }

        .documents-section {
          background: var(--bg-subtle);
        }

        .documents-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-medium);
        }

        .document-item {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-small);
          background: white;
          padding: var(--spacing-medium);
          border-radius: 16px;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .document-item svg {
          color: var(--brand-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .info-section {
          background: var(--bg-card);
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-large);
        }

        .info-card {
          background: var(--bg-subtle);
          border-radius: 20px;
          padding: var(--spacing-large);
        }

        .info-card h3 {
          margin-bottom: var(--spacing-small);
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

        @media (max-width: 781px) {
          .admission-process-page {
            padding-top: 70px;
          }

          .step-card {
            flex-direction: column;
            text-align: center;
          }

          .step-number {
            margin: 0 auto;
          }

          .step-action {
            justify-content: center;
          }

          .info-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default AdmissionProcess;