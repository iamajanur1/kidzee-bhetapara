import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import '../styles/kidzee.css';

const Footer = () => {
  return (
    <footer className="kidzee-footer">
      <div className="container">
        <div className="footer-content">
          {/* Column 1 - About */}
          <div className="footer-column">
            <h3 className="footer-title">Kidzee Bhetapara</h3>
            <p className="footer-text">
              Established in 2015, Kidzee Bhetapara (Primary K5) is an A* Audit Rated centre committed to nurturing young minds with premium early education and care.
            </p>
            <div className="trust-badges">
              <span className="badge">Estd 2015</span>
              <span className="badge">A* Audit Rated</span>
              <span className="badge">8+ Years Legacy</span>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/academics/early-years">Academics</Link></li>
              <li><Link to="/infrastructure/campus">Infrastructure</Link></li>
              <li><Link to="/achievements">Achievements</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
            </ul>
          </div>

          {/* Column 3 - Admissions */}
          <div className="footer-column">
            <h4 className="footer-heading">Admissions</h4>
            <ul className="footer-links">
              <li><Link to="/admissions/process">Admission Process</Link></li>
              <li><Link to="/admissions/fee-structure">Fee Structure</Link></li>
              <li><Link to="/admissions/prospectus">Download Prospectus</Link></li>
              <li><Link to="/admissions/enquiry">Enquiry Form</Link></li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="footer-column">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={18} />
                <span>Vidya Mandir Lane, Vidya Mandir Path, Bhetapara, Guwahati, Assam, India</span>
              </div>
              <div className="contact-item">
                <Phone size={18} />
                <div>
                  <a href="tel:+917577010005">+91 7577010005</a>
                  <br />
                  <a href="tel:+917577010005">075770 10005</a>
                </div>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <a href="mailto:kidzee3246@kidzee.com">kidzee3246@kidzee.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Kidzee Bhetapara (Primary K5). All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <span><a href="https://brightforgelabs-main.vercel.app">Designed by BrightForge Labs</a></span>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .kidzee-footer {
          background: var(--brand-dark);
          color: white;
          padding: var(--spacing-giant) 0 var(--spacing-medium);
          margin-top: var(--spacing-giant);
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-xl);
          margin-bottom: var(--spacing-xl);
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-small);
        }

        .footer-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--brand-primary);
          margin-bottom: var(--spacing-xs);
        }

        .footer-text {
          font-size: 0.95rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: var(--spacing-small);
        }

        .trust-badges {
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-xs);
        }

        .badge {
          background: rgba(211, 255, 98, 0.2);
          color: var(--brand-primary);
          padding: 6px 12px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .footer-heading {
          font-size: 1.1rem;
          font-weight: 600;
          color: white;
          margin-bottom: var(--spacing-xs);
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          font-size: 0.95rem;
          transition: all 0.2s ease;
          display: inline-block;
        }

        .footer-links a:hover {
          color: var(--brand-primary);
          transform: translateX(4px);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-small);
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-xs);
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .contact-item svg {
          flex-shrink: 0;
          margin-top: 2px;
          color: var(--brand-primary);
        }

        .contact-item a {
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .contact-item a:hover {
          color: var(--brand-primary);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          padding-top: var(--spacing-medium);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: var(--spacing-small);
        }

        .copyright {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .footer-bottom-links {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
        }

        @media (max-width: 781px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-large);
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;