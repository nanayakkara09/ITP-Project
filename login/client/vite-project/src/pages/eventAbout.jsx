import React from 'react';
import event5 from '../images/event5.jpg';

export default function eventAbout() {
  return (
    
     <div className="why-choose-us-container"><br /><br />
      <h1>Why Choose Us</h1>
      <div className="card-container">
        <div className="card">
          <div className="card-icon">
            <i className="fas fa-cogs"></i>
          </div>
          <h3>Latest Equipment</h3>
          <p>We curate your event using the latest technology and equipment available in the market.</p>
        </div>
        <div className="card">
          <div className="card-icon">
            <i className="fas fa-users"></i>
          </div>
          <h3>Experience & Expertise</h3>
          <p>With 5 years of experience, we work extensively with various clients and events.</p>
        </div>
        <div className="card">
          <div className="card-icon">
            <i className="fas fa-money-check"></i>
          </div>
          <h3>Cost Efficient</h3>
          <p>Our services are affordable without compromising on quality.</p>
        </div>
      </div>
   
      <hr />
      <footer className="footer">
        <div className="container">
          <div className="contact-section">
            <h4>Contact Us</h4>
            <p>Phone: 123-456-7890</p>
            <p>Email: info@foodstore.com</p>
          </div>
          <div className="social-section">
            {/* Add your social media links here */}
          </div>
          <hr />
          <p className="text-center">All rights reserved &copy; </p>
        </div>
      </footer>
    </div>
  );
}