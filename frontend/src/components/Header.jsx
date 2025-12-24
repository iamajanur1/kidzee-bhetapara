import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import '../styles/kidzee.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [infrastructureOpen, setInfrastructureOpen] = useState(false);
  const [admissionsOpen, setAdmissionsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="kidzee-header">
      <div className="nav-wrapper">
        <Link to="/" className="network-logo">
          <div className="logo-content">
            <span className="logo-text">Kidzee Bhetapara</span>
            <span className="logo-subtitle">Primary K5</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="network-nav desktop-nav">
          <Link to="/" className={`network-nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <Link to="/about" className={`network-nav-link ${isActive('/about') ? 'active' : ''}`}>About Us</Link>
          
          <div className="nav-dropdown" onMouseEnter={() => setAcademicsOpen(true)} onMouseLeave={() => setAcademicsOpen(false)}>
            <span className="network-nav-link dropdown-trigger">
              Academics <ChevronDown size={16} />
            </span>
            {academicsOpen && (
              <div className="dropdown-menu">
                <Link to="/academics/early-years" className="dropdown-item">Early Years Curriculum</Link>
                <Link to="/academics/primary" className="dropdown-item">Class 1-2 Learning</Link>
                <Link to="/academics/abacus" className="dropdown-item">Abacus Programme</Link>
                <Link to="/academics/art-dance" className="dropdown-item">Art & Dance</Link>
              </div>
            )}
          </div>

          <div className="nav-dropdown" onMouseEnter={() => setInfrastructureOpen(true)} onMouseLeave={() => setInfrastructureOpen(false)}>
            <span className="network-nav-link dropdown-trigger">
              Infrastructure <ChevronDown size={16} />
            </span>
            {infrastructureOpen && (
              <div className="dropdown-menu">
                <Link to="/infrastructure/campus" className="dropdown-item">Campus Overview</Link>
                <Link to="/infrastructure/smart-classrooms" className="dropdown-item">Smart Classrooms</Link>
                <Link to="/infrastructure/activity-labs" className="dropdown-item">Activity & Talent Labs</Link>
                <Link to="/infrastructure/day-boarding" className="dropdown-item">Day Boarding</Link>
                <Link to="/infrastructure/safety" className="dropdown-item">Safety & Care</Link>
              </div>
            )}
          </div>

          <Link to="/achievements" className={`network-nav-link ${isActive('/achievements') ? 'active' : ''}`}>Achievements</Link>
          
          <div className="nav-dropdown" onMouseEnter={() => setAdmissionsOpen(true)} onMouseLeave={() => setAdmissionsOpen(false)}>
            <span className="network-nav-link dropdown-trigger">
              Admissions <ChevronDown size={16} />
            </span>
            {admissionsOpen && (
              <div className="dropdown-menu">
                <Link to="/admissions/process" className="dropdown-item">Admission Process</Link>
                <Link to="/admissions/fee-structure" className="dropdown-item">Fee Structure</Link>
                <Link to="/admissions/prospectus" className="dropdown-item">Prospectus</Link>
                <Link to="/admissions/enquiry" className="dropdown-item">Enquiry Form</Link>
              </div>
            )}
          </div>

          <Link to="/gallery" className={`network-nav-link ${isActive('/gallery') ? 'active' : ''}`}>Gallery</Link>
          <Link to="/contact" className={`network-nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-nav">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <Link to="/academics/early-years" onClick={() => setMobileMenuOpen(false)}>Early Years</Link>
          <Link to="/academics/primary" onClick={() => setMobileMenuOpen(false)}>Class 1-2</Link>
          <Link to="/infrastructure/campus" onClick={() => setMobileMenuOpen(false)}>Campus</Link>
          <Link to="/achievements" onClick={() => setMobileMenuOpen(false)}>Achievements</Link>
          <Link to="/admissions/enquiry" onClick={() => setMobileMenuOpen(false)}>Enquiry</Link>
          <Link to="/gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </div>
      )}

      <style jsx="true">{`
        .kidzee-header {
          background: var(--bg-page);
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 99999;
          padding: 16px 12px;
        }

        .nav-wrapper {
          max-width: 1440px;
          margin: 0 auto;
          background: var(--brand-dark);
          border-radius: 25px;
          padding: 12px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 2px 8px rgba(0, 69, 52, 0.25);
        }

        .network-logo {
          text-decoration: none;
        }

        .logo-content {
          display: flex;
          flex-direction: column;
        }

        .logo-text {
          font-size: 20px;
          font-weight: 700;
          color: white;
          line-height: 1;
        }

        .logo-subtitle {
          font-size: 11px;
          font-weight: 400;
          color: var(--brand-primary);
          margin-top: 2px;
        }

        .network-nav {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .network-nav-link {
          color: white;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          padding: 10px 16px;
          border-radius: 20px;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .network-nav-link:hover,
        .network-nav-link.active {
          background: rgba(255, 255, 255, 0.15);
        }

        .nav-dropdown {
          position: relative;
        }

        .dropdown-trigger {
          display: flex;
          align-items: center;
          gap: 4px;
          cursor: pointer;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          margin-top: 8px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 16px rgba(0, 69, 52, 0.2);
          min-width: 220px;
          padding: 8px;
          z-index: 100;
        }

        .dropdown-item {
          display: block;
          padding: 12px 16px;
          color: var(--text-primary);
          text-decoration: none;
          border-radius: 12px;
          transition: all 0.2s ease;
          font-size: 14px;
          font-weight: 500;
        }

        .dropdown-item:hover {
          background: var(--bg-subtle);
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 8px;
        }

        .mobile-nav {
          display: none;
        }

        @media (max-width: 1024px) {
          .desktop-nav {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .mobile-nav {
            display: flex;
            flex-direction: column;
            background: white;
            border-radius: 16px;
            margin-top: 12px;
            padding: 16px;
            box-shadow: 0 4px 16px rgba(0, 69, 52, 0.2);
          }

          .mobile-nav a {
            padding: 12px 16px;
            color: var(--text-primary);
            text-decoration: none;
            border-radius: 12px;
            transition: all 0.2s ease;
            font-weight: 500;
          }

          .mobile-nav a:hover {
            background: var(--bg-subtle);
          }

          .kidzee-header {
            padding: 8px;
          }

          .nav-wrapper {
            padding: 12px 16px;
          }

          .logo-text {
            font-size: 16px;
          }

          .logo-subtitle {
            font-size: 10px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;