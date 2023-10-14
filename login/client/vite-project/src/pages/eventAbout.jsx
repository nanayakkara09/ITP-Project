import React from 'react';
import './eventAbout.css';
import chooseus from '../images/chooseus.jpg';

export default function EventAbout() {
  return (
    <div className="event-about-container22">
      <div className="background-image-container22">
        <img src={chooseus} alt="Event" className="background-image" />
      </div>
      <div className="card-container22">
        <div className="card why-choose-us22">
          <div className="card-icon22">
            <i className="fas fa-cogs"></i>
         
          <h1>Why Choose Us</h1>
          <p text-size="23px">We curate your event using the latest technology and equipment available in the market.</p>
       
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
    
      <footer className="footer">
        <div className="container">
          <div className="contact-section">
            <h4>Contact Us</h4>
            <p>Phone: 123-456-7890</p>
            <p>Email: info@foodstore.com</p>
        <p className="text-center">All rights reserved &copy;</p>
        </div></div> 
      </footer>
    </div> </div></div> 
        
  );
}
