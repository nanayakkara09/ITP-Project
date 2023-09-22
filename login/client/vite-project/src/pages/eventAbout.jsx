import React from 'react';

export default function eventAbout() {
  return (
    <div className="success-container">
      <div className="content">
        <h2>ABOUT US!</h2>
        <p>Our dedication is to manage overall any event that our 
customers expect</p>
        <p>We’’ll make sure that all logistics, such as catering, the venue, 
and equipment, are running smoothly during the event.

Establish a budget and outline the coordination plan of the 
event. Secure permits for hosting the event.

Also we oversees the design, set-up, and execution of events 
that bring people together</p>
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