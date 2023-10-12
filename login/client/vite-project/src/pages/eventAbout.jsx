import React from 'react';

import eventAboutus from '../images/eventAboutus.jpg';

export default function eventAbout() {
  return (
    
    <div className="bgh-image11">
    <img src={eventAboutus} alt="Event" className="background-image11" />
    
    <div className="card-container11">
        <div className="card11">
          <div className="card-icon11">
     <div className="why-choose-us-container11"><br /><br />
      <h1>Why Choose Us</h1>
     
            <i className="fas fa-cogs"></i>
          </div>
          <h3>Latest Equipment</h3>
          <p>We curate your event using the latest technology and equipment available in the market.</p>
        </div>
        <div className="card11">
          <div className="card-icon11">
            <i className="fas fa-users"></i>
          </div>
          <h3>Experience & Expertise</h3>
          <p>With 5 years of experience, we work extensively with various clients and events.</p>
        </div>
        <div className="card11">
          <div className="card-icon11">
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
    </div> </div>
  );
}