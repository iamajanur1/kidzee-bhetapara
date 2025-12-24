import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Trophy, Star, Users } from 'lucide-react';
import '../../styles/kidzee.css';

const Achievements = () => {
  return (
    <div className="achievements-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="display-medium">Achievements & Recognition</h1>
          <p className="body-large">Celebrating excellence and proven impact</p>
        </div>
      </section>

      {/* A* Audit Rating */}
      <section className="section audit-section">
        <div className="container">
          <div className="content-block text-center">
            <div className="audit-badge-large">
              <Award size={64} />
              <span className="audit-rating">A*</span>
            </div>
            <h2 className="heading-1">A* Audit Rating</h2>
            <p className="body-large">
              We are proud to be an A* Audit Rated Centre—the highest tier of certification awarded to preschools 
              in India that demonstrate exceptional standards across all parameters.
            </p>
            <div className="audit-criteria">
              <div className="criteria-item">
                <Star size={24} />
                <span>Curriculum Excellence & Delivery</span>
              </div>
              <div className="criteria-item">
                <Star size={24} />
                <span>Infrastructure & Safety Standards</span>
              </div>
              <div className="criteria-item">
                <Star size={24} />
                <span>Teacher Qualification & Training</span>
              </div>
              <div className="criteria-item">
                <Star size={24} />
                <span>Parent Satisfaction & Trust</span>
              </div>
              <div className="criteria-item">
                <Star size={24} />
                <span>Student Development Outcomes</span>
              </div>
              <div className="criteria-item">
                <Star size={24} />
                <span>Hygiene & Health Protocols</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8+ Years Legacy */}
      <section className="section legacy-section">
        <div className="container">
          <h2 className="heading-1 text-center mb-xl">8+ Years Legacy Highlights</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2015</div>
              <div className="timeline-content">
                <h3 className="heading-3">Foundation Year</h3>
                <p className="body-medium">Kidzee Bhetapara established with vision to provide premium early education</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2017</div>
              <div className="timeline-content">
                <h3 className="heading-3">Expansion & Growth</h3>
                <p className="body-medium">Added Day Boarding, Abacus, and STEM modules to curriculum</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2019</div>
              <div className="timeline-content">
                <h3 className="heading-3">Infrastructure Upgrade</h3>
                <p className="body-medium">Smart classrooms, activity labs, and enhanced play areas installed</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                <h3 className="heading-3">A* Audit Certification</h3>
                <p className="body-medium">Awarded highest rating for excellence in all quality parameters</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <h3 className="heading-3">500+ Alumni Milestone</h3>
                <p className="body-medium">Reached significant milestone of nurturing 500+ young learners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Development Milestones */}
      <section className="section milestones-section">
        <div className="container">
          <h2 className="heading-1 text-center mb-xl">Student Development Milestones</h2>
          <div className="milestones-grid">
            <div className="milestone-card">
              <Trophy size={48} />
              <div className="milestone-number">95%</div>
              <div className="milestone-label">School Readiness Achievement</div>
            </div>
            <div className="milestone-card">
              <Users size={48} />
              <div className="milestone-number">500+</div>
              <div className="milestone-label">Students Nurtured</div>
            </div>
            <div className="milestone-card">
              <Star size={48} />
              <div className="milestone-number">4.9/5</div>
              <div className="milestone-label">Parent Satisfaction Rating</div>
            </div>
            <div className="milestone-card">
              <Award size={48} />
              <div className="milestone-number">100%</div>
              <div className="milestone-label">Safety Compliance Score</div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="section community-section">
        <div className="container">
          <div className="content-block">
            <h2 className="heading-1">Community Involvement & Trust</h2>
            <p className="body-large">
              We are deeply rooted in the Guwahati community, trusted by families across Bhetapara and surrounding areas.
            </p>
            <div className="community-points">
              <div className="point">
                <strong>Local Guide Recommendations:</strong> Consistently featured as top-rated preschool on Google
              </div>
              <div className="point">
                <strong>Parent Referrals:</strong> 70% of new admissions come through word-of-mouth recommendations
              </div>
              <div className="point">
                <strong>Community Events:</strong> Regular participation in neighborhood festivals and celebrations
              </div>
              <div className="point">
                <strong>Alumni Network:</strong> Strong connections with families even after children graduate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="section recognition-section">
        <div className="container">
          <div className="content-block text-center">
            <h2 className="heading-1">Awards & Recognition</h2>
            <div className="awards-display">
              <div className="award-item">
                <Award size={40} />
                <span>A* Audit Rated Centre</span>
              </div>
              <div className="award-item">
                <Trophy size={40} />
                <span>Excellence in Early Education</span>
              </div>
              <div className="award-item">
                <Star size={40} />
                <span>Parent Choice Award 2022</span>
              </div>
              <div className="award-item">
                <Users size={40} />
                <span>Community Trust Leader</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-1">Join Our Award-Winning School</h2>
            <p className="body-large">Become part of the Kidzee Bhetapara legacy. Limited seats available for 2025 session.</p>
            <div className="cta-buttons">
              <Link to="/admissions/enquiry" className="btn-cta">Apply Now</Link>
              <Link to="/contact" className="btn-accent">Schedule Campus Visit</Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .achievements-page {
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

        .audit-section {
          background: var(--bg-card);
        }

        .audit-badge-large {
          width: 160px;
          height: 160px;
          background: var(--brand-dark);
          color: var(--brand-primary);
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--spacing-large);
          box-shadow: 0 8px 24px rgba(0, 69, 52, 0.25);
        }

        .audit-rating {
          font-size: 2.5rem;
          font-weight: 700;
          margin-top: 8px;
        }

        .audit-criteria {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: var(--spacing-medium);
          margin-top: var(--spacing-xl);
        }

        .criteria-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-small);
          background: var(--bg-subtle);
          padding: var(--spacing-medium);
          border-radius: 16px;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .criteria-item svg {
          color: var(--brand-gold);
          flex-shrink: 0;
        }

        .legacy-section {
          background: var(--bg-subtle);
        }

        .timeline {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-large);
        }

        .timeline-item {
          display: flex;
          gap: var(--spacing-large);
          align-items: flex-start;
        }

        .timeline-year {
          background: var(--brand-dark);
          color: var(--brand-primary);
          padding: 16px 24px;
          border-radius: 25px;
          font-weight: 700;
          font-size: 1.25rem;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .timeline-content {
          background: white;
          border-radius: 20px;
          padding: var(--spacing-large);
          flex-grow: 1;
          box-shadow: 0 2px 8px rgba(0, 69, 52, 0.15);
        }

        .timeline-content h3 {
          margin-bottom: var(--spacing-xs);
        }

        .milestones-section {
          background: var(--bg-card);
        }

        .milestones-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: var(--spacing-large);
        }

        .milestone-card {
          background: white;
          border-radius: 24px;
          padding: var(--spacing-xl);
          text-align: center;
          box-shadow: 0 4px 12px rgba(0, 69, 52, 0.2);
        }

        .milestone-card svg {
          color: var(--brand-dark);
          margin-bottom: var(--spacing-small);
        }

        .milestone-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--brand-dark);
          margin: var(--spacing-small) 0;
        }

        .milestone-label {
          color: var(--text-secondary);
          font-size: 1rem;
          font-weight: 600;
        }

        .community-section {
          background: var(--bg-subtle);
        }

        .community-points {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-medium);
          margin-top: var(--spacing-xl);
        }

        .point {
          background: white;
          padding: var(--spacing-medium);
          border-radius: 16px;
          color: var(--text-secondary);
        }

        .point strong {
          color: var(--text-primary);
          display: block;
          margin-bottom: 4px;
        }

        .recognition-section {
          background: var(--bg-card);
        }

        .awards-display {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--spacing-large);
          margin-top: var(--spacing-xl);
        }

        .award-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacing-small);
          background: var(--bg-subtle);
          padding: var(--spacing-large);
          border-radius: 20px;
        }

        .award-item svg {
          color: var(--brand-gold);
        }

        .award-item span {
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

        .cta-buttons {
          display: flex;
          gap: var(--spacing-small);
          justify-content: center;
          margin-top: var(--spacing-xl);
          flex-wrap: wrap;
        }

        @media (max-width: 781px) {
          .achievements-page {
            padding-top: 70px;
          }

          .timeline-item {
            flex-direction: column;
          }

          .audit-criteria,
          .milestones-grid,
          .awards-display {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Achievements;