import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Heart, Users, Target, BookOpen, Shield, Star } from 'lucide-react';
import '../../styles/kidzee.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="display-medium">About Kidzee Bhetapara</h1>
          <p className="body-large">A legacy of nurturing young minds since 2015</p>
        </div>
      </section>

      {/* Legacy & Impact */}
      <section className="section">
        <div className="container">
          <div className="content-block">
            <div className="icon-badge">
              <Award size={32} />
            </div>
            <h2 className="heading-1">Our Legacy & Impact</h2>
            <p className="body-large">
              Established in 2015, Kidzee Bhetapara (Primary K5) has proudly served the community for over 8 years, 
              earning the prestigious A* Audit Rating—a testament to our unwavering commitment to excellence in 
              early childhood education.
            </p>
            <p className="body-medium mt-md">
              From our founding, we've believed that every child deserves a nurturing start where learning feels like 
              play, and play becomes the foundation for lifelong curiosity. Our journey has been marked by the trust 
              of hundreds of families who have entrusted us with their most precious treasures.
            </p>
            <div className="impact-stats">
              <div className="stat-card">
                <div className="stat-number">8+</div>
                <div className="stat-label">Years of Excellence</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-label">Students Nurtured</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">A*</div>
                <div className="stat-label">Audit Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section vision-section">
        <div className="container">
          <div className="two-column">
            <div className="column">
              <div className="icon-badge">
                <Target size={32} />
              </div>
              <h2 className="heading-2">Our Vision</h2>
              <p className="body-medium">
                To be the most trusted preschool in Guwahati, recognized for creating joyful learners who are 
                confident, creative, and compassionate global citizens.
              </p>
              <p className="body-medium mt-md">
                We envision a future where every child discovers their unique talents and develops the courage to 
                pursue their dreams with integrity and excellence.
              </p>
            </div>
            <div className="column">
              <div className="icon-badge">
                <Heart size={32} />
              </div>
              <h2 className="heading-2">Our Mission</h2>
              <p className="body-medium">
                To provide premium early education that balances academic excellence with emotional well-being, 
                nurturing each child's natural curiosity through a play-based, child-centric curriculum.
              </p>
              <p className="body-medium mt-md">
                We are committed to creating a safe, inclusive, and stimulating environment where children feel 
                valued, heard, and empowered to explore, question, and grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pedagogy & Curriculum DNA */}
      <section className="section">
        <div className="container">
          <div className="content-block">
            <div className="icon-badge">
              <BookOpen size={32} />
            </div>
            <h2 className="heading-1">Our Pedagogy & Curriculum DNA</h2>
            <p className="body-large">
              Our curriculum is rooted in play-based learning principles that respect the developmental stages of 
              early childhood. We follow the Kidzee philosophy of "iLLUME"—a research-backed approach that 
              integrates Learning, Language, Understanding, Motor Skills, and Emotional Intelligence.
            </p>
            <div className="curriculum-pillars">
              <div className="pillar-card">
                <h3 className="heading-3">Play-Based Learning</h3>
                <p className="body-medium">Children learn best when they're having fun. Our curriculum uses games, 
                stories, and hands-on activities to make learning natural and joyful.</p>
              </div>
              <div className="pillar-card">
                <h3 className="heading-3">STEM Exposure</h3>
                <p className="body-medium">Early introduction to Science, Technology, Engineering, and Mathematics 
                through age-appropriate experiments and explorations.</p>
              </div>
              <div className="pillar-card">
                <h3 className="heading-3">Creativity & Expression</h3>
                <p className="body-medium">Art, dance, and music programs help children discover their creative 
                voices and build confidence in self-expression.</p>
              </div>
              <div className="pillar-card">
                <h3 className="heading-3">Life Skills Development</h3>
                <p className="body-medium">Focus on communication, collaboration, critical thinking, and 
                emotional regulation—skills for life, not just school.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Holistic Growth Framework */}
      <section className="section holistic-section">
        <div className="container">
          <h2 className="heading-1 text-center mb-xl">Holistic Growth Framework</h2>
          <div className="framework-grid">
            <div className="framework-card">
              <div className="framework-icon">🧠</div>
              <h3 className="heading-3">Cognitive Development</h3>
              <p className="body-small">Problem-solving, memory, literacy, numeracy, and logical thinking skills</p>
            </div>
            <div className="framework-card">
              <div className="framework-icon">❤️</div>
              <h3 className="heading-3">Social-Emotional</h3>
              <p className="body-small">Empathy, self-awareness, resilience, and healthy relationships</p>
            </div>
            <div className="framework-card">
              <div className="framework-icon">🏋️</div>
              <h3 className="heading-3">Physical Development</h3>
              <p className="body-small">Gross and fine motor skills, coordination, and healthy habits</p>
            </div>
            <div className="framework-card">
              <div className="framework-icon">🎨</div>
              <h3 className="heading-3">Creative Expression</h3>
              <p className="body-small">Art, music, dance, and imaginative play for self-discovery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Care Promise */}
      <section className="section safety-section">
        <div className="container">
          <div className="content-block">
            <div className="icon-badge">
              <Shield size={32} />
            </div>
            <h2 className="heading-1">Safety & Care Promise</h2>
            <p className="body-large">
              Your child's safety is our highest priority. We maintain rigorous protocols and a caring environment 
              where every family feels confident and at peace.
            </p>
            <div className="safety-features">
              <div className="safety-item">
                <Star size={20} />
                <span>Trained and verified teaching staff with background checks</span>
              </div>
              <div className="safety-item">
                <Star size={20} />
                <span>CCTV surveillance in all common areas for transparency</span>
              </div>
              <div className="safety-item">
                <Star size={20} />
                <span>Strict entry-exit protocols with parent authorization</span>
              </div>
              <div className="safety-item">
                <Star size={20} />
                <span>Regular health and hygiene audits by certified agencies</span>
              </div>
              <div className="safety-item">
                <Star size={20} />
                <span>Child-safe furniture, materials, and play equipment</span>
              </div>
              <div className="safety-item">
                <Star size={20} />
                <span>First-aid trained staff and emergency response systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent-School Collaboration */}
      <section className="section">
        <div className="container">
          <div className="content-block">
            <div className="icon-badge">
              <Users size={32} />
            </div>
            <h2 className="heading-1">Parent-School Collaboration</h2>
            <p className="body-large">
              We believe that education is a partnership. Our open-door policy and regular communication ensure 
              that parents are active participants in their child's learning journey.
            </p>
            <div className="collaboration-points">
              <div className="point">
                <h3 className="heading-3">Daily Updates</h3>
                <p className="body-medium">Real-time photos, videos, and notes about your child's day</p>
              </div>
              <div className="point">
                <h3 className="heading-3">Parent-Teacher Meetings</h3>
                <p className="body-medium">Quarterly progress reviews and personalized development plans</p>
              </div>
              <div className="point">
                <h3 className="heading-3">Workshops & Events</h3>
                <p className="body-medium">Parenting sessions, family days, and community celebrations</p>
              </div>
              <div className="point">
                <h3 className="heading-3">Open Communication</h3>
                <p className="body-medium">Direct access to teachers via app, email, or scheduled calls</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition & Audit Excellence */}
      <section className="section recognition-section">
        <div className="container">
          <div className="content-block text-center">
            <div className="icon-badge mx-auto">
              <Award size={32} />
            </div>
            <h2 className="heading-1">Recognition & Audit Excellence</h2>
            <p className="body-large">
              Our A* Audit Rating is the highest tier of certification awarded to preschools that demonstrate 
              exceptional standards in curriculum delivery, infrastructure, teacher qualification, safety protocols, 
              and parent satisfaction.
            </p>
            <div className="awards-grid">
              <div className="award-badge">A* Audit Rated Centre</div>
              <div className="award-badge">8+ Years Legacy</div>
              <div className="award-badge">Parent Satisfaction 4.9/5</div>
              <div className="award-badge">Community Trusted</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-1">Experience the Kidzee Difference</h2>
            <p className="body-large">Schedule a visit to see our classrooms, meet our team, and learn how we nurture young minds.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-cta">Book a School Visit</Link>
              <Link to="/admissions/enquiry" className="btn-accent">Enquire About Admission</Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .about-page {
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

        .icon-badge {
          width: 80px;
          height: 80px;
          background: var(--brand-dark);
          color: var(--brand-primary);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--spacing-medium);
        }

        .icon-badge.mx-auto {
          margin-left: auto;
          margin-right: auto;
        }

        .impact-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--spacing-large);
          margin-top: var(--spacing-xl);
        }

        .stat-card {
          background: var(--bg-card);
          border-radius: 24px;
          padding: var(--spacing-large);
          text-align: center;
          box-shadow: 0 2px 8px rgba(0, 69, 52, 0.15);
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 700;
          color: var(--brand-dark);
          line-height: 1;
        }

        .stat-label {
          font-size: 1rem;
          color: var(--text-secondary);
          margin-top: var(--spacing-xs);
        }

        .vision-section {
          background: var(--bg-subtle);
        }

        .two-column {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-xl);
        }

        .curriculum-pillars {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: var(--spacing-large);
          margin-top: var(--spacing-xl);
        }

        .pillar-card {
          background: var(--bg-card);
          border-radius: 24px;
          padding: var(--spacing-large);
          box-shadow: 0 2px 8px rgba(0, 69, 52, 0.15);
        }

        .pillar-card h3 {
          margin-bottom: var(--spacing-small);
        }

        .holistic-section {
          background: var(--bg-subtle);
        }

        .framework-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--spacing-large);
        }

        .framework-card {
          background: white;
          border-radius: 24px;
          padding: var(--spacing-large);
          text-align: center;
          box-shadow: 0 2px 8px rgba(0, 69, 52, 0.15);
        }

        .framework-icon {
          font-size: 3rem;
          margin-bottom: var(--spacing-small);
        }

        .framework-card h3 {
          margin-bottom: var(--spacing-xs);
        }

        .safety-section {
          background: var(--bg-card);
        }

        .safety-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-medium);
          margin-top: var(--spacing-xl);
        }

        .safety-item {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-small);
          color: var(--text-secondary);
        }

        .safety-item svg {
          color: var(--brand-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .collaboration-points {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--spacing-large);
          margin-top: var(--spacing-xl);
        }

        .point {
          background: var(--bg-card);
          border-radius: 20px;
          padding: var(--spacing-medium);
        }

        .point h3 {
          margin-bottom: var(--spacing-xs);
        }

        .recognition-section {
          background: var(--bg-subtle);
        }

        .awards-grid {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: var(--spacing-medium);
          margin-top: var(--spacing-xl);
        }

        .award-badge {
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
          .about-page {
            padding-top: 70px;
          }

          .impact-stats,
          .curriculum-pillars,
          .framework-grid,
          .safety-features,
          .collaboration-points {
            grid-template-columns: 1fr;
          }

          .two-column {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default About;