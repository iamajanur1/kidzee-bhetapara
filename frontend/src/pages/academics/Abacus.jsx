import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Brain, TrendingUp, Award } from 'lucide-react';
import '../styles/kidzee.css';

const Abacus = () => {
  return (
    <div className="academics-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="display-medium">Abacus Programme</h1>
          <p className="body-large">Mental math mastery through visual calculation</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-block">
            <h2 className="heading-1">Benefits & Outcomes</h2>
            <p className="body-large">
              Our Abacus program helps children develop lightning-fast mental calculation abilities while enhancing 
              concentration, memory, and logical thinking.
            </p>
            <div className="benefits-grid">
              <div className="network-card">
                <Calculator size={40} />
                <h3 className="network-card-title">Speed Calculation</h3>
                <p className="network-card-content">Perform complex arithmetic mentally with accuracy and speed</p>
              </div>
              <div className="network-card">
                <Brain size={40} />
                <h3 className="network-card-title">Cognitive Development</h3>
                <p className="network-card-content">Enhanced memory, concentration, and visualization skills</p>
              </div>
              <div className="network-card">
                <TrendingUp size={40} />
                <h3 className="network-card-title">Academic Excellence</h3>
                <p className="network-card-content">Improved performance in mathematics and problem-solving</p>
              </div>
              <div className="network-card">
                <Award size={40} />
                <h3 className="network-card-title">Confidence Boost</h3>
                <p className="network-card-content">Builds self-esteem through measurable skill achievement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section program-section">
        <div className="container">
          <h2 className="heading-1 text-center mb-xl">Program Structure</h2>
          <div className="program-details">
            <div className="detail-card">
              <h3 className="heading-3">Class Cadence</h3>
              <p className="body-medium">2-3 sessions per week, 45 minutes each</p>
            </div>
            <div className="detail-card">
              <h3 className="heading-3">Age Group</h3>
              <p className="body-medium">4 years onwards (Jr KG to Class 2)</p>
            </div>
            <div className="detail-card">
              <h3 className="heading-3">Progress Tracking</h3>
              <p className="body-medium">Monthly assessments and level progression</p>
            </div>
            <div className="detail-card">
              <h3 className="heading-3">Certification</h3>
              <p className="body-medium">Level-wise certificates on completion</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section skills-section">
        <div className="container">
          <div className="content-block">
            <h2 className="heading-1">Skills Developed</h2>
            <div className="skills-list">
              <div className="skill-item">
                <span className="skill-icon">✓</span>
                <span>Mental arithmetic without calculator or pen-paper</span>
              </div>
              <div className="skill-item">
                <span className="skill-icon">✓</span>
                <span>Visual memory and photographic recall</span>
              </div>
              <div className="skill-item">
                <span className="skill-icon">✓</span>
                <span>Improved focus and attention span</span>
              </div>
              <div className="skill-item">
                <span className="skill-icon">✓</span>
                <span>Left-right brain coordination</span>
              </div>
              <div className="skill-item">
                <span className="skill-icon">✓</span>
                <span>Problem-solving and logical reasoning</span>
              </div>
              <div className="skill-item">
                <span className="skill-icon">✓</span>
                <span>Academic confidence and enthusiasm for math</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-1">Enroll in Our Abacus Programme</h2>
            <p className="body-large">Give your child the gift of mental math mastery. Limited seats available.</p>
            <Link to="/admissions/enquiry" className="btn-cta">Enquire Now</Link>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .academics-page {
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

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--spacing-large);
          margin-top: var(--spacing-xl);
        }

        .benefits-grid .network-card {
          text-align: center;
        }

        .benefits-grid svg {
          color: var(--brand-dark);
          margin-bottom: var(--spacing-small);
        }

        .program-section {
          background: var(--bg-subtle);
        }

        .program-details {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--spacing-large);
          max-width: 1000px;
          margin: 0 auto;
        }

        .detail-card {
          background: white;
          border-radius: 24px;
          padding: var(--spacing-large);
          text-align: center;
          box-shadow: 0 2px 8px rgba(0, 69, 52, 0.15);
        }

        .detail-card h3 {
          margin-bottom: var(--spacing-xs);
        }

        .skills-section {
          background: var(--bg-card);
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-medium);
          margin-top: var(--spacing-xl);
        }

        .skill-item {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-small);
          font-size: 1.125rem;
          color: var(--text-secondary);
        }

        .skill-icon {
          color: var(--brand-primary);
          font-weight: 700;
          font-size: 1.5rem;
          flex-shrink: 0;
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

        .cta-content .btn-cta {
          margin-top: var(--spacing-large);
        }

        @media (max-width: 781px) {
          .academics-page {
            padding-top: 70px;
          }

          .benefits-grid,
          .program-details {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Abacus;