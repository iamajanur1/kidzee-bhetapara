import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Music, Sparkles, Heart } from 'lucide-react';
import '../styles/kidzee.css';

const ArtDance = () => {
  return (
    <div className="academics-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="display-medium">Art & Dance Curriculum</h1>
          <p className="body-large">Nurturing creativity and self-expression</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-block">
            <h2 className="heading-1">Creativity & Expression Focus</h2>
            <p className="body-large">
              Our art and dance programs are designed to help children discover their creative voices, build confidence, 
              and express emotions through visual arts and movement.
            </p>
            <div className="focus-grid">
              <div className="network-card">
                <Palette size={40} />
                <h3 className="network-card-title">Visual Arts</h3>
                <p className="network-card-content">Drawing, painting, clay modeling, craft, and mixed media</p>
              </div>
              <div className="network-card">
                <Music size={40} />
                <h3 className="network-card-title">Dance & Movement</h3>
                <p className="network-card-content">Classical, folk, contemporary, and creative movement</p>
              </div>
              <div className="network-card">
                <Sparkles size={40} />
                <h3 className="network-card-title">Creativity Skills</h3>
                <p className="network-card-content">Imagination, innovation, aesthetic appreciation</p>
              </div>
              <div className="network-card">
                <Heart size={40} />
                <h3 className="network-card-title">Emotional Expression</h3>
                <p className="network-card-content">Self-awareness, confidence, communication through art</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section programs-section">
        <div className="container">
          <h2 className="heading-1 text-center mb-xl">Program Details</h2>
          <div className="two-column">
            <div className="program-block">
              <h3 className="heading-2">Art Classes</h3>
              <ul className="program-list">
                <li>Weekly structured sessions</li>
                <li>Age-appropriate techniques and materials</li>
                <li>Individual and group projects</li>
                <li>Quarterly art exhibitions</li>
                <li>Portfolio development for each child</li>
              </ul>
            </div>
            <div className="program-block">
              <h3 className="heading-2">Dance Sessions</h3>
              <ul className="program-list">
                <li>Multiple dance forms exposure</li>
                <li>Rhythm and coordination development</li>
                <li>Performance opportunities</li>
                <li>Annual day showcases</li>
                <li>Confidence and stage presence building</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section showcase-section">
        <div className="container">
          <div className="content-block">
            <h2 className="heading-1">Skill Showcase System</h2>
            <p className="body-large">
              We celebrate every child's creative journey through regular showcases, exhibitions, and performances.
            </p>
            <div className="showcase-grid">
              <div className="showcase-card">
                <h3 className="heading-3">Quarterly Art Exhibitions</h3>
                <p className="body-medium">Display of children's artwork with parent viewing sessions</p>
              </div>
              <div className="showcase-card">
                <h3 className="heading-3">Annual Day Performances</h3>
                <p className="body-medium">Grand stage performances showcasing dance and talent</p>
              </div>
              <div className="showcase-card">
                <h3 className="heading-3">Parent Sharing Sessions</h3>
                <p className="body-medium">Regular updates on creative milestones and achievements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section integration-section">
        <div className="container">
          <div className="content-block">
            <h2 className="heading-1">Co-Curricular Integration</h2>
            <p className="body-large">
              Art and dance are seamlessly woven into our daily curriculum, enhancing learning across all subjects.
            </p>
            <div className="integration-points">
              <div className="point">
                <strong>Storytelling through Art:</strong> Visual narratives to strengthen literacy
              </div>
              <div className="point">
                <strong>Math through Patterns:</strong> Geometric art and symmetry exploration
              </div>
              <div className="point">
                <strong>Movement Learning:</strong> Kinesthetic activities for concept retention
              </div>
              <div className="point">
                <strong>Cultural Awareness:</strong> Folk arts and traditional dance forms
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-1">Unleash Your Child's Creativity</h2>
            <p className="body-large">Join our art and dance programs. Admission open now.</p>
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

        .focus-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--spacing-large);
          margin-top: var(--spacing-xl);
        }

        .focus-grid .network-card {
          text-align: center;
        }

        .focus-grid svg {
          color: var(--brand-dark);
          margin-bottom: var(--spacing-small);
        }

        .programs-section {
          background: var(--bg-subtle);
        }

        .two-column {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-xl);
        }

        .program-block h3 {
          margin-bottom: var(--spacing-medium);
        }

        .program-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-small);
        }

        .program-list li {
          padding-left: var(--spacing-medium);
          position: relative;
          color: var(--text-secondary);
        }

        .program-list li::before {
          content: "•";
          position: absolute;
          left: 0;
          color: var(--brand-primary);
          font-weight: 700;
          font-size: 1.5rem;
          line-height: 1;
        }

        .showcase-section {
          background: var(--bg-card);
        }

        .showcase-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: var(--spacing-large);
          margin-top: var(--spacing-xl);
        }

        .showcase-card {
          background: var(--bg-subtle);
          border-radius: 20px;
          padding: var(--spacing-large);
        }

        .showcase-card h3 {
          margin-bottom: var(--spacing-xs);
        }

        .integration-section {
          background: var(--bg-subtle);
        }

        .integration-points {
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

          .focus-grid,
          .showcase-grid,
          .two-column {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default ArtDance;