import React from 'react';
import event5 from '../images/event5.jpg';

export default function eventAbout() {
  return (
    <div className="background-container" >
     <div className="content">
     <div className="centered-content">
      <h2>Why Choose Us</h2>
      <ul className="dot-list">
        <li>
          <div className="box">
            <p>Latest Equipment</p>
            <p>We will e-curate your event using the latest technology of event equipment available in the market.</p>
          </div>
        </li>
        <li>
          <div className="box">
            <p>Experience And Expertise</p>
            <p>We have been working as Event Planners for the last 5 years, now working extensively with various clients and events.</p>
          </div>
        </li>
        <li>
          <div className="box">
            <p>Cost Efficient</p>
            <p>Though our services are affordable, we never compromise with the quality provided to clients.</p>
          </div>
        </li>
      </ul>
    </div></div>
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