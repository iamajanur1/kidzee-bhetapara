import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, TrendingUp, Users, Award } from 'lucide-react';
import '../../styles/kidzee.css';

const PrimaryLearning = () => {
  return (
    <div className="academics-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="display-medium">Class 1-2 Learning System</h1>
          <p className="body-large">Strong academic foundations for primary education</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-block">
            <h2 className="heading-1">Foundational Learning Structure</h2>
            <p className="body-large">
              Our primary education program builds on early years learning with structured academic focus while 
              maintaining the joy of discovery. We prepare children for seamless transition to formal schooling.
            </p>
            <div className="structure-grid">
              <div className="network-card">
                <BookOpen size={36} />
                <h3 className="network-card-title">Core Academics</h3>
                <p className="network-card-content">English, Mathematics, Environmental Studies, Hindi/Assamese</p>
              </div>
              <div className="network-card">
                <TrendingUp size={36} />
                <h3 className="network-card-title">Skill Development</h3>
                <p className="network-card-content">Reading fluency, writing skills, computational thinking</p>
              </div>
              <div className="network-card">
                <Users size={36} />
                <h3 className="network-card-title">Social Learning</h3>
                <p className="network-card-content">Teamwork, leadership, presentation, and communication</p>
              </div>
              <div className="network-card">
                <Award size={36} />
                <h3 className="network-card-title">Assessment</h3>
                <p className="network-card-content">Gentle, continuous evaluation with constructive feedback</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section outcomes-section">
        <div className="container">
          <h2 className="heading-1 text-center mb-xl">Weekly Learning Outcomes</h2>
          <div className="outcomes-timeline">
            <div className="outcome-item">
              <div className="outcome-day">Monday</div>
              <div className="outcome-content">
                <h3 className="heading-3">Literacy Focus</h3>
                <p className="body-medium">Reading comprehension, vocabulary building, creative writing</p>
              </div>
            </div>
            <div className="outcome-item">
              <div className="outcome-day">Tuesday</div>
              <div className="outcome-content">
                <h3 className="heading-3">Mathematics</h3>
                <p className="body-medium">Number operations, word problems, mental math practice</p>
              </div>
            </div>
            <div className="outcome-item">
              <div className="outcome-day">Wednesday</div>
              <div className="outcome-content">
                <h3 className="heading-3">Environmental Studies</h3>
                <p className="body-medium">Science concepts, nature exploration, social awareness</p>
              </div>
            </div>
            <div className="outcome-item">
              <div className="outcome-day">Thursday</div>
              <div className="outcome-content">
                <h3 className="heading-3">Creative Arts</h3>
                <p className="body-medium">Art, music, dance, and hands-on project work</p>
              </div>
            </div>
            <div className="outcome-item">
              <div className="outcome-day">Friday</div>
              <div className="outcome-content">
                <h3 className="heading-3">Review & Enrichment</h3>
                <p className="body-medium">Week recap, fun activities, talent showcases</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section tech-section">
        <div className="container">
          <div className="content-block">
            <h2 className="heading-1">Classroom Technology Adoption</h2>
            <p className="body-large">
              We integrate age-appropriate technology to enhance learning while ensuring balanced screen time.
            </p>
            <div className="tech-features">
              <div className="feature-item">Smart boards for interactive lessons</div>
              <div className="feature-item">Educational apps for skill reinforcement</div>
              <div className="feature-item">Digital library access for reading</div>
              <div className="feature-item">Parent communication app for updates</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-1">Enroll in Our Primary Program</h2>
            <p className="body-large">Give your child a strong academic foundation. Limited seats for Class 1-2.</p>
            <Link to="/admissions/enquiry" className="btn-cta">Apply Now</Link>
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

        .structure-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--spacing-large);
          margin-top: var(--spacing-xl);
        }

        .structure-grid .network-card {
          text-align: center;
        }

        .structure-grid svg {
          color: var(--brand-dark);
          margin-bottom: var(--spacing-small);
        }

        .outcomes-section {
          background: var(--bg-subtle);
        }

        .outcomes-timeline {
          max-width: 700px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-medium);
        }

        .outcome-item {
          display: flex;
          gap: var(--spacing-medium);
          align-items: flex-start;
        }

        .outcome-day {
          background: var(--brand-dark);
          color: var(--brand-primary);
          padding: 12px 20px;
          border-radius: 20px;
          font-weight: 600;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .outcome-content {
          background: white;
          border-radius: 20px;
          padding: var(--spacing-medium);
          flex-grow: 1;
        }

        .outcome-content h3 {
          margin-bottom: var(--spacing-xs);
        }

        .tech-section {
          background: var(--bg-card);
        }

        .tech-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--spacing-medium);
          margin-top: var(--spacing-xl);
        }

        .feature-item {
          background: var(--bg-subtle);
          padding: var(--spacing-medium);
          border-radius: 16px;
          font-weight: 600;
          color: var(--text-primary);
          text-align: center;
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

          .structure-grid,
          .tech-features {
            grid-template-columns: 1fr;
          }

          .outcome-item {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default PrimaryLearning;