import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/kidzee.css';

const Gallery = () => {
  // Placeholder gallery images
  const galleryImages = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    src: `/assets/gallery/img${i + 1}.jpg`,
    alt: `Kidzee Bhetapara Gallery Image ${i + 1}`,
    caption: `Learning & Fun Moment ${i + 1}`
  }));

  return (
    <div className="gallery-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="display-medium">Our Gallery</h1>
          <p className="body-large">Capturing moments of joy, learning, and growth</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {galleryImages.map(image => (
              <div key={image.id} className="gallery-item">
                <div className="gallery-placeholder">
                  <span>{image.caption}</span>
                </div>
                <p className="gallery-caption body-small">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section description-section">
        <div className="container">
          <div className="content-block text-center">
            <h2 className="heading-2">Life at Kidzee Bhetapara</h2>
            <p className="body-large">
              Our gallery showcases the vibrant life at Kidzee Bhetapara—from classroom activities and outdoor play 
              to special events and celebrations. Every photograph tells a story of discovery, friendship, and growth.
            </p>
            <p className="body-medium mt-md">
              We believe in documenting and celebrating every milestone in your child's learning journey. 
              Parents receive regular photo updates through our communication app.
            </p>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-1">Come See for Yourself</h2>
            <p className="body-large">Visit our campus and experience the joy firsthand. Schedule a tour today.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-cta">Book Campus Visit</Link>
              <Link to="/admissions/enquiry" className="btn-accent">Enquire About Admission</Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .gallery-page {
          padding-top: 90px;
        }

        .page-hero {
          background: linear-gradient(135deg, rgba(250, 255, 238, 0.6) 0%, rgba(237, 237, 254, 0.6) 100%);
          padding: var(--spacing-xl) 0;
          text-align: center;
        }

        .content-block {
          max-width: 800px;
          margin: 0 auto;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: var(--spacing-large);
        }

        .gallery-item {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
        }

        .gallery-placeholder {
          aspect-ratio: 4/3;
          background: var(--bg-section);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          font-weight: 600;
          text-align: center;
          padding: var(--spacing-medium);
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .gallery-placeholder:hover {
          transform: scale(1.03);
        }

        .gallery-caption {
          text-align: center;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .description-section {
          background: var(--bg-subtle);
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
          .gallery-page {
            padding-top: 70px;
          }

          .gallery-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;