import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, BookOpen, Sparkles, ArrowRight, Star, CheckCircle } from 'lucide-react';
import '../../styles/kidzee.css';

const Home = () => {
  const programs = [
    { id: 1, name: 'Play Group', age: '1.5 - 2.5 years', description: 'Foundation for social interaction and sensory development' },
    { id: 2, name: 'Nursery', age: '2.5 - 3.5 years', description: 'Building confidence through play-based learning' },
    { id: 3, name: 'Junior KG', age: '3.5 - 4.5 years', description: 'Structured learning with phonics and early literacy' },
    { id: 4, name: 'Senior KG', age: '4.5 - 5.5 years', description: 'School readiness with numeracy and writing skills' },
    { id: 5, name: 'Class 1-2', age: '5.5 - 7.5 years', description: 'Primary education with strong academic foundation' },
    { id: 6, name: 'Day Boarding', age: 'All Ages', description: 'Extended care with meals, activities, and supervision' }
  ];

  const testimonials = [
    { id: 1, name: 'Priya Sharma', text: 'The best decision we made for our daughter. The teachers are caring and the curriculum is exceptional.', rating: 5 },
    { id: 2, name: 'Rajesh Verma', text: '8 years of proven excellence. My son has grown tremendously in confidence and learning abilities.', rating: 5 },
    { id: 3, name: 'Anita Borthakur', text: 'A* audit rating speaks for itself. Professional, safe, and nurturing environment for children.', rating: 5 },
    { id: 4, name: 'Manish Das', text: 'Amazing STEM exposure and creative programs. My child loves the Abacus and art classes!', rating: 5 },
    { id: 5, name: 'Sneha Goswami', text: 'The day boarding facility is a lifesaver for working parents. Highly recommend Kidzee Bhetapara!', rating: 5 }
  ];

  const whyChooseUs = [
    { icon: <Award />, title: 'A* Audit Rated Centre', description: 'Certified excellence in early childhood education standards' },
    { icon: <Users />, title: '8+ Years Legacy', description: 'Established in 2015 with proven track record of nurturing young minds' },
    { icon: <BookOpen />, title: 'Holistic Curriculum', description: 'Play-based learning with STEM exposure, Abacus, Art & Dance' },
    { icon: <Sparkles />, title: 'Hidden Talent Nurturing', description: 'Identifying and developing unique abilities in every child' }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="legacy-badge">
              <Star size={16} fill="currentColor" />
              <span>Estd 2015 | A* Audit Rated | 8+ Years of Excellence</span>
            </div>
            <h1 className="display-large hero-title">
              Where Young Minds Begin Their Bright Future
            </h1>
            <p className="body-large hero-subtitle">
              Premium early education powered by care, creativity, and a proven child-development curriculum.
            </p>
            <div className="hero-cta">
              <Link to="/admissions/enquiry" className="btn-cta">Enquire for Admission</Link>
              <Link to="/contact" className="btn-secondary">Book a School Visit</Link>
              <Link to="/admissions/prospectus" className="btn-accent">Download Prospectus</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Urgency Bar */}
      <section className="urgency-bar">
        <div className="container">
          <div className="urgency-content">
            <CheckCircle size={24} />
            <span>Limited seats available each session. Admissions close once capacity is reached.</span>
            <Link to="/admissions/enquiry" className="urgency-link">
              Apply Now <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section programs-section">
        <div className="container">
          <div className="section-title">
            <h2 className="heading-1">Our Programs</h2>
            <p className="body-large">Comprehensive early education from Play Group to Primary Classes</p>
          </div>
          <div className="programs-grid">
            {programs.map(program => (
              <div key={program.id} className="network-card program-card">
                <div className="program-icon">{program.name[0]}</div>
                <h3 className="network-card-title">{program.name}</h3>
                <p className="program-age">{program.age}</p>
                <p className="network-card-content">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section why-section">
        <div className="container">
          <div className="section-title">
            <h2 className="heading-1">Why Parents Trust Us</h2>
            <p className="body-large">Built on a foundation of excellence, care, and proven results</p>
          </div>
          <div className="why-grid">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="network-card why-card">
                <div className="why-icon">{item.icon}</div>
                <h3 className="heading-3">{item.title}</h3>
                <p className="body-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-title">
            <h2 className="heading-1">What Parents Say</h2>
            <p className="body-large">Trusted by families across Guwahati</p>
          </div>
          <div className="testimonials-slider">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--brand-gold)" color="var(--brand-gold)" />
                  ))}
                </div>
                <p className="body-medium testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="section gallery-preview-section">
        <div className="container">
          <div className="section-title">
            <h2 className="heading-1">Life at Kidzee Bhetapara</h2>
            <p className="body-large">Moments of joy, learning, and growth</p>
          </div>
          <div className="gallery-grid">
            {[1, 2, 3, 4, 5, 6].map(num => (
              <div key={num} className="gallery-placeholder">
                <span>Gallery Image {num}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-lg">
            <Link to="/gallery" className="btn-primary">
              View Full Gallery <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-1">Ready to Start Your Child's Journey?</h2>
            <p className="body-large">Join the Kidzee Bhetapara family today. Limited seats available.</p>
            <div className="cta-buttons">
              <Link to="/admissions/enquiry" className="btn-cta">Enquire Now</Link>
              <Link to="/contact" className="btn-secondary">Schedule a Visit</Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .home-page {
          padding-top: 90px;
        }

        .hero-section {
          background: linear-gradient(135deg, rgba(250, 255, 238, 0.6) 0%, rgba(237, 237, 254, 0.6) 100%);
          padding: var(--spacing-giant) 0;
          min-height: 70vh;
          display: flex;
          align-items: center;
        }

        .hero-content {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .legacy-badge {
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-xs);
          background: var(--brand-dark);
          color: var(--brand-primary);
          padding: 10px 20px;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: var(--spacing-medium);
        }

        .hero-title {
          margin-bottom: var(--spacing-medium);
        }

        .hero-subtitle {
          margin-bottom: var(--spacing-xl);
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-cta {
          display: flex;
          gap: var(--spacing-small);
          justify-content: center;
          flex-wrap: wrap;
        }

        .urgency-bar {
          background: var(--brand-red);
          color: white;
          padding: var(--spacing-small) 0;
        }

        .urgency-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-small);
          font-weight: 600;
          flex-wrap: wrap;
        }

        .urgency-link {
          color: var(--brand-primary);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: all 0.2s ease;
        }

        .urgency-link:hover {
          transform: translateX(4px);
        }

        .programs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-large);
        }

        .program-card {
          text-align: center;
        }

        .program-icon {
          width: 64px;
          height: 64px;
          background: var(--brand-primary);
          color: var(--brand-dark);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: 700;
          margin: 0 auto var(--spacing-small);
        }

        .program-age {
          color: var(--brand-hover);
          font-weight: 600;
          margin-bottom: var(--spacing-xs);
        }

        .why-section {
          background: var(--bg-subtle);
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: var(--spacing-large);
        }

        .why-card {
          text-align: center;
        }

        .why-icon {
          width: 72px;
          height: 72px;
          background: var(--brand-dark);
          color: var(--brand-primary);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--spacing-medium);
        }

        .testimonials-slider {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-large);
        }

        .testimonial-card {
          background: var(--bg-card);
          border-radius: 24px;
          padding: var(--spacing-large);
          box-shadow: 0 2px 8px rgba(0, 69, 52, 0.15);
        }

        .testimonial-rating {
          display: flex;
          gap: 4px;
          margin-bottom: var(--spacing-small);
        }

        .testimonial-text {
          margin-bottom: var(--spacing-small);
          font-style: italic;
        }

        .testimonial-author {
          font-weight: 600;
          color: var(--text-primary);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-medium);
        }

        .gallery-placeholder {
          aspect-ratio: 4/3;
          background: var(--bg-section);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          font-weight: 600;
        }

        .cta-section {
          background: linear-gradient(135deg, var(--brand-dark) 0%, var(--brand-hover) 100%);
          color: white;
        }

        .cta-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
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
          .home-page {
            padding-top: 70px;
          }

          .hero-section {
            min-height: auto;
            padding: var(--spacing-xl) 0;
          }

          .programs-grid,
          .why-grid,
          .testimonials-slider,
          .gallery-grid {
            grid-template-columns: 1fr;
          }

          .hero-cta,
          .cta-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .urgency-content {
            text-align: center;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;