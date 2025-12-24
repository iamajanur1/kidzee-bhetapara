import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles, Music, Calculator } from 'lucide-react';
import '../../styles/kidzee.css';

const EarlyYears = () => {
  const learningGoals = [
    { age: 'Play Group (1.5-2.5 years)', goals: ['Social interaction', 'Sensory exploration', 'Basic motor skills', 'Language exposure'] },
    { age: 'Nursery (2.5-3.5 years)', goals: ['Pre-literacy skills', 'Number recognition', 'Emotional regulation', 'Creative expression'] },
    { age: 'Jr KG (3.5-4.5 years)', goals: ['Phonics introduction', 'Writing readiness', 'Problem-solving', 'Group activities'] },
    { age: 'Sr KG (4.5-5.5 years)', goals: ['Reading fluency', 'Basic math concepts', 'Critical thinking', 'School readiness'] }
  ];

  return (
    <div className="academics-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="display-medium">Early Years Curriculum</h1>
          <p className="body-large">Building strong foundations through play-based learning</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-block">
            <h2 className="heading-1">Learning Goals by Age Group</h2>
            <div className="goals-grid">
              {learningGoals.map((item, index) => (
                <div key={index} className="network-card">
                  <h3 className="network-card-title">{item.age}</h3>
                  <ul className="goals-list">
                    {item.goals.map((goal, i) => (
                      <li key={i}>{goal}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section modules-section">
        <div className="container">
          <h2 className="heading-1 text-center mb-xl">Curriculum Modules</h2>
          <div className="modules-grid">
            <div className="module-card">
              <BookOpen size={40} />
              <h3 className="heading-3">Literacy Development</h3>
              <p className="body-medium">Phonics-based reading program, storytelling, and vocabulary building</p>
            </div>
            <div className="module-card">
              <Calculator size={40} />
              <h3 className="heading-3">Numeracy Skills</h3>
              <p className="body-medium">Number recognition, counting, patterns, and basic operations</p>
            </div>
            <div className="module-card">
              <Sparkles size={40} />
              <h3 className="heading-3">STEM Exposure</h3>
              <p className="body-medium">Simple experiments, nature exploration, and problem-solving activities</p>
            </div>
            <div className="module-card">
              <Music size={40} />
              <h3 className="heading-3">Communication</h3>
              <p className="body-medium">Language skills, pronunciation, conversation, and self-expression</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section methodology-section">
        <div className="container">
          <div className="content-block">
            <h2 className="heading-1">Play-Based Learning Methodology</h2>
            <p className="body-large">
              Our curriculum recognizes that children learn best through play. Every activity is designed to feel like 
              fun while building essential skills for lifelong learning.
            </p>
            <div className="methodology-points">
              <div className="point-card">
                <h3 className="heading-3">Hands-On Activities</h3>
                <p className="body-medium">Learning through touching, building, and creating</p>
              </div>
              <div className="point-card">
                <h3 className="heading-3">Storytelling & Role Play</h3>
                <p className="body-medium">Developing imagination and language through narratives</p>
              </div>
              <div className="point-card">
                <h3 className="heading-3">Outdoor Exploration</h3>
                <p className="body-medium">Connecting with nature and developing motor skills</p>
              </div>
              <div className="point-card">
                <h3 className="heading-3">Group Learning</h3>
                <p className="body-medium">Social skills, cooperation, and teamwork</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-1">Ready to Enroll Your Child?</h2>
            <p className="body-large">Limited seats available. Secure your child's spot today.</p>
            <Link to="/admissions/enquiry" className="btn-cta">Start Admission Process</Link>
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

        .goals-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: var(--spacing-large);
          margin-top: var(--spacing-xl);
        }

        .goals-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
        }

        .goals-list li::before {
          content: "✓ ";
          color: var(--brand-primary);
          font-weight: 700;
          margin-right: var(--spacing-xs);
        }

        .modules-section {
          background: var(--bg-subtle);
        }

        .modules-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--spacing-large);
        }

        .module-card {
          background: white;
          border-radius: 24px;
          padding: var(--spacing-large);
          text-align: center;
          box-shadow: 0 2px 8px rgba(0, 69, 52, 0.15);
        }

        .module-card svg {
          color: var(--brand-dark);
          margin-bottom: var(--spacing-small);
        }

        .module-card h3 {
          margin-bottom: var(--spacing-xs);
        }

        .methodology-section {
          background: var(--bg-card);
        }

        .methodology-points {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--spacing-large);
          margin-top: var(--spacing-xl);
        }

        .point-card {
          background: var(--bg-subtle);
          border-radius: 20px;
          padding: var(--spacing-medium);
        }

        .point-card h3 {
          margin-bottom: var(--spacing-xs);
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

          .goals-grid,
          .modules-grid,
          .methodology-points {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default EarlyYears;