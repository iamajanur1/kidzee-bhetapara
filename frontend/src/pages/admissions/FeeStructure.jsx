import React from 'react';
import { Link } from 'react-router-dom';
import { Info, CheckCircle } from 'lucide-react';
import '../styles/kidzee.css';

const FeeStructure = () => {
  return (
    <div className="fee-structure-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="display-medium">Fee Structure</h1>
          <p className="body-large">Transparent and affordable premium education</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="container">
          <div className="content-block text-center">
            <h2 className="heading-1">Our Fee Philosophy</h2>
            <p className="body-large">
              At Kidzee Bhetapara, we believe in transparent pricing with no hidden costs. Our fees are structured 
              to provide premium early education while remaining accessible to families who value quality learning.
            </p>
          </div>
        </div>
      </section>

      {/* Fee Components */}
      <section className="section fee-components-section">
        <div className="container">
          <h2 className="heading-1 text-center mb-xl">Fee Components</h2>
          <div className="components-grid">
            <div className="component-card">
              <h3 className="heading-3">Registration Fee</h3>
              <p className="body-medium">One-time, non-refundable charge at the time of enrollment</p>
              <div className="fee-placeholder">Contact for Details</div>
            </div>
            <div className="component-card">
              <h3 className="heading-3">Admission Fee</h3>
              <p className="body-medium">Annual fee paid at the beginning of each academic year</p>
              <div className="fee-placeholder">Contact for Details</div>
            </div>
            <div className="component-card">
              <h3 className="heading-3">Tuition Fee</h3>
              <p className="body-medium">Quarterly or monthly fee for academic programs</p>
              <div className="fee-placeholder">Contact for Details</div>
            </div>
            <div className="component-card">
              <h3 className="heading-3">Transport Fee</h3>
              <p className="body-medium">Optional, distance-based charges (if transport is required)</p>
              <div className="fee-placeholder">Optional Add-on</div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section included-section">
        <div className="container">
          <div className="content-block">
            <h2 className="heading-1">What's Included in Tuition</h2>
            <div className="included-grid">
              <div className="included-item">
                <CheckCircle size={24} />
                <span>All curriculum materials and textbooks</span>
              </div>
              <div className="included-item">
                <CheckCircle size={24} />
                <span>Activity kits and worksheets</span>
              </div>
              <div className="included-item">
                <CheckCircle size={24} />
                <span>STEM, Abacus, Art, and Dance programs</span>
              </div>
              <div className="included-item">
                <CheckCircle size={24} />
                <span>Access to smart classrooms and activity labs</span>
              </div>
              <div className="included-item">
                <CheckCircle size={24} />
                <span>Regular parent-teacher meetings</span>
              </div>
              <div className="included-item">
                <CheckCircle size={24} />
                <span>Progress reports and assessments</span>
              </div>
              <div className="included-item">
                <CheckCircle size={24} />
                <span>Participation in school events and celebrations</span>
              </div>
              <div className="included-item">
                <CheckCircle size={24} />
                <span>Parent communication app access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optional Add-ons */}
      <section className="section addons-section">
        <div className="container">
          <h2 className="heading-1 text-center mb-xl">Optional Add-ons</h2>
          <div className="addons-grid">
            <div className="addon-card">
              <h3 className="heading-3">Day Boarding</h3>
              <p className="body-medium">Extended care with meals, activities, and supervision</p>
              <div className="addon-price">Additional charges apply</div>
            </div>
            <div className="addon-card">
              <h3 className="heading-3">Transport Service</h3>
              <p className="body-medium">Safe and reliable pick-up and drop-off service</p>
              <div className="addon-price">Distance-based pricing</div>
            </div>
            <div className="addon-card">
              <h3 className="heading-3">Summer Camp</h3>
              <p className="body-medium">Seasonal enrichment programs during vacation</p>
              <div className="addon-price">Separate registration</div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="section payment-section">
        <div className="container">
          <div className="content-block">
            <h2 className="heading-1">Payment Options</h2>
            <p className="body-large mb-xl">
              We offer flexible payment schedules to suit your convenience:
            </p>
            <div className="payment-options">
              <div className="payment-card">
                <h3 className="heading-3">Quarterly Payment</h3>
                <p className="body-medium">Pay in 4 installments throughout the year</p>
              </div>
              <div className="payment-card">
                <h3 className="heading-3">Monthly Payment</h3>
                <p className="body-medium">Spread payments across 10-12 months</p>
              </div>
              <div className="payment-card">
                <h3 className="heading-3">Annual Payment</h3>
                <p className="body-medium">One-time payment with special discount</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="section notes-section">
        <div className="container">
          <div className="notes-card">
            <div className="notes-icon">
              <Info size={32} />
            </div>
            <div className="notes-content">
              <h3 className="heading-3">Important Information</h3>
              <ul className="notes-list">
                <li>Fee structure may vary slightly based on the program and age group</li>
                <li>Sibling discount of 10% is available for second child onwards</li>
                <li>All payments can be made via bank transfer, cheque, or online payment</li>
                <li>Late payment charges apply after the due date</li>
                <li>Fee refund policy applies only during the 2-week trial period</li>
                <li>For exact fee details, please contact our admissions office or schedule a visit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-1">Get Detailed Fee Information</h2>
            <p className="body-large">Contact us for a personalized fee structure based on your child's program and requirements.</p>
            <div className="cta-buttons">
              <Link to="/admissions/enquiry" className="btn-cta">Enquire Now</Link>
              <Link to="/contact" className="btn-accent">Call +91 7577010005</Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .fee-structure-page {
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

        .fee-components-section {
          background: var(--bg-subtle);
        }

        .components-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--spacing-large);
        }

        .component-card {
          background: white;
          border-radius: 24px;
          padding: var(--spacing-large);
          text-align: center;
          box-shadow: 0 2px 8px rgba(0, 69, 52, 0.15);
        }

        .component-card h3 {
          margin-bottom: var(--spacing-small);
        }

        .component-card p {
          margin-bottom: var(--spacing-medium);
          min-height: 48px;
        }

        .fee-placeholder {
          background: var(--bg-section);
          color: var(--text-primary);
          padding: 12px 20px;
          border-radius: 16px;
          font-weight: 600;
        }

        .included-section {
          background: var(--bg-card);
        }

        .included-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-medium);
          margin-top: var(--spacing-xl);
        }

        .included-item {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-small);
          color: var(--text-secondary);
          font-weight: 500;
        }

        .included-item svg {
          color: var(--brand-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .addons-section {
          background: var(--bg-subtle);
        }

        .addons-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: var(--spacing-large);
        }

        .addon-card {
          background: white;
          border-radius: 24px;
          padding: var(--spacing-large);
          text-align: center;
          box-shadow: 0 2px 8px rgba(0, 69, 52, 0.15);
        }

        .addon-card h3 {
          margin-bottom: var(--spacing-xs);
        }

        .addon-card p {
          margin-bottom: var(--spacing-medium);
        }

        .addon-price {
          color: var(--brand-hover);
          font-weight: 600;
          font-size: 1.05rem;
        }

        .payment-section {
          background: var(--bg-card);
        }

        .payment-options {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--spacing-large);
        }

        .payment-card {
          background: var(--bg-subtle);
          border-radius: 20px;
          padding: var(--spacing-large);
          text-align: center;
        }

        .payment-card h3 {
          margin-bottom: var(--spacing-xs);
        }

        .notes-section {
          background: var(--bg-subtle);
        }

        .notes-card {
          background: white;
          border-radius: 24px;
          padding: var(--spacing-xl);
          display: flex;
          gap: var(--spacing-large);
          box-shadow: 0 2px 8px rgba(0, 69, 52, 0.15);
          max-width: 1000px;
          margin: 0 auto;
        }

        .notes-icon {
          width: 72px;
          height: 72px;
          background: var(--brand-dark);
          color: var(--brand-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .notes-content h3 {
          margin-bottom: var(--spacing-medium);
        }

        .notes-list {
          list-style-position: inside;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-small);
          color: var(--text-secondary);
        }

        .notes-list li {
          padding-left: var(--spacing-small);
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
          .fee-structure-page {
            padding-top: 70px;
          }

          .components-grid,
          .included-grid,
          .addons-grid,
          .payment-options {
            grid-template-columns: 1fr;
          }

          .notes-card {
            flex-direction: column;
            text-align: center;
          }

          .notes-icon {
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
};

export default FeeStructure;