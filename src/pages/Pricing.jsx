import React from "react";
import Footer from '../portfolio-ibm/Footer';
function Pricing() {
  return (
    <>
<section className="pricing">
      <div className="price-plan">
        <h1>Our Pricing Plans</h1>
        <p>
          Choose a plan that fits your goals. Whether you're just starting or
          need advanced features, we've got you covered.
        </p>
        <div className="plan">
          <span>Monthly</span>
          <span>Yearly</span>
        </div>
      </div>
      <div className="plan-cards">
        <div className="card">
          <div className="card-header">
            <h2>🆓 Free Plan</h2>
            <p>$10/month</p>
          </div>

          <ul>
            <li>Access to 3 basic templates</li>
            <li>Mobile responsive designs</li>
            <li>Publish with platform branding</li>
          </ul>
          <button>Get started</button>
        </div>
        <div className="card">
          <div className="card-header">
            <h2>💼 Pro Plan</h2>
            <p>$10/month</p>
          </div>
          <ul>
            <li>Access to 10+ premium templates</li>
            <li>Custom domain support</li>
            <li>Portfolio analytics</li>
           
          </ul>
          <button>Get started</button>
        </div>
        <div className="card">
          <div className="card-header">
            <h2>🏢 Business Plan</h2>
            <p>$10/month</p>
          </div>
          <ul>
            <li>Unlimited template access</li>
            <li>Team collaboration tools</li>
            <li>SEO optimization tools</li>
           
          </ul>
          <button>Get started</button>
        </div>
      </div>
    </section>
    <Footer/>
    </>
    
  );
}

export default Pricing;
