import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Leaf, Sun, Heart } from 'lucide-react';
import '../styles/kidzee.css';

const Campus = () => {
  return (
    <div className="infrastructure-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="display-medium">Campus Overview</h1>
          <p className="body-large">A nurturing space designed for young learners</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-block">
            <h2 className="heading-1">Our Learning Environment</h2>
            <p className="body-large">
              Our campus at Vidya Mandir Lane is thoughtfully designed to provide a safe, stimulating, and joyful 
              environment where children can explore, learn, and grow with confidence.
            </p>
            <div className="features-grid">
              <div className="network-card">
                <Building size={40} />
                <h3 className="network-card-title">Spacious Classrooms</h3>
                <p className="network-card-content">Well-ventilated, naturally lit rooms designed for comfort and focus</p>
              </div>
              <div className="network-card">
                <Leaf size={40} />
                <h3 className="network-card-title">Green Spaces</h3>
                <p className="network-card-content">Outdoor areas for play, exploration, and connection with nature</p>
              </div>
              <div className="network-card">
                <Sun size={40} />
                <h3 className="network-card-title">Bright & Cheerful</h3>
                <p className="network-card-content">Colorful, child-friendly decor that inspires joy and creativity</p>
              </div>
              <div className="network-card">
                <Heart size={40} />
                <h3 className="network-card-title">Safe & Secure</h3>
                <p className="network-card-content">Childproofed infrastructure with safety as top priority</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section classrooms-section">
        <div className="container">
          <h2 className="heading-1 text-center mb-xl">Classroom Features</h2>
          <div className="classroom-features">
            <div className="feature-card">
              <h3 className="heading-3">Age-Appropriate Furniture</h3>
              <p className="body-medium">Child-sized tables, chairs, and storage units for comfort and independence</p>
            </div>
            <div className="feature-card">
              <h3 className="heading-3">Learning Corners</h3>
              <p className="body-medium">Dedicated zones for reading, art, blocks, and sensory play</p>
            </div>
            <div className="feature-card">
              <h3 className="heading-3">Display Boards</h3>
              <p className="body-medium">Celebrating children's work and creating a print-rich environment</p>
            </div>
            <div className="feature-card">
              <h3 className="heading-3">Natural Lighting</h3>
              <p className="body-medium">Large windows providing ample daylight for healthy development</p>
            </div>
            <div className="feature-card">
              <h3 className="heading-3">Clean & Hygienic</h3>
              <p className="body-medium">Daily sanitization and maintenance for a healthy environment</p>
            </div>
            <div className="feature-card">
              <h3 className="heading-3">Technology Integration</h3>
              <p className="body-medium">Smart boards and digital tools for interactive learning</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section play-area-section">
        <div className="container">
          <div className="content-block">
            <h2 className="heading-1">Play Areas</h2>
            <p className="body-large">
              Our outdoor and indoor play spaces are designed to support physical development, social interaction, 
              and imaginative play.
            </p>
            <div className="play-features">
              <div className="play-card">
                <h3 className="heading-3">Outdoor Play Zone</h3>
                <p className="body-medium">Swings, slides, climbing structures, and open space for running games</p>
              </div>
              <div className="play-card">
                <h3 className="heading-3">Indoor Play Area</h3>
                <p className="body-medium">Soft play equipment, role-play corners, and rainy-day activity space</p>
              </div>
              <div className="play-card">
                <h3 className="heading-3">Safety Features</h3>
                <p className="body-medium">Rubberized flooring, rounded edges, and constant supervision</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section vibe-section">
        <div className="container">
          <div className="content-block text-center">
            <h2 className="heading-1">Learning Environment Vibe</h2>
            <p className="body-large">
              We've created a space where children feel safe to explore, confident to ask questions, and excited 
              to learn every single day. Our campus radiates warmth, trust, and joy.
            </p>
            <div className="vibe-badges">
              <span className="vibe-badge">Welcoming</span>
              <span className="vibe-badge">Nurturing</span>
              <span className="vibe-badge">Stimulating</span>
              <span className="vibe-badge">Joyful</span>
              <span className="vibe-badge">Safe</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-1">Visit Our Campus</h2>
            <p className="body-large">Experience the Kidzee Bhetapara environment firsthand. Schedule a campus tour today.</p>
            <Link to="/contact" className="btn-cta">Book a Visit</Link>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .infrastructure-page {
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

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--spacing-large);
          margin-top: var(--spacing-xl);
        }

        .features-grid .network-card {
          text-align: center;
        }

        .features-grid svg {
          color: var(--brand-dark);
          margin-bottom: var(--spacing-small);
        }

        .classrooms-section {
          background: var(--bg-subtle);
        }

        .classroom-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: var(--spacing-large);
        }

        .feature-card {
          background: white;
          border-radius: 20px;
          padding: var(--spacing-large);
          box-shadow: 0 2px 8px rgba(0, 69, 52, 0.15);
        }

        .feature-card h3 {
          margin-bottom: var(--spacing-xs);
        }

        .play-area-section {
          background: var(--bg-card);
        }

        .play-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-large);
          margin-top: var(--spacing-xl);
        }

        .play-card {
          background: var(--bg-subtle);
          border-radius: 20px;
          padding: var(--spacing-large);
        }

        .play-card h3 {
          margin-bottom: var(--spacing-xs);
        }

        .vibe-section {
          background: var(--bg-subtle);
        }

        .vibe-badges {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: var(--spacing-small);
          margin-top: var(--spacing-xl);
        }

        .vibe-badge {
          background: var(--brand-dark);
          color: var(--brand-primary);
          padding: 12px 24px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 1rem;
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
          .infrastructure-page {
            padding-top: 70px;
          }

          .features-grid,
          .classroom-features,
          .play-features {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Campus;