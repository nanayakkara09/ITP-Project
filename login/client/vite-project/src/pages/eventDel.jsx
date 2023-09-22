import React from 'react';

export default function eventDel() {
  return (
    <div className="success-container">
      <div className="content">
        <h2>DELETED !</h2>
        <p>Your request has been successfully processed.</p>
        <p>Thank you for choosing Street Bitz.</p>
        
      </div>
      <button onClick={() => navigate('/event')} type="submit" className="btn btn-primary">
        BACK TO THE FRONT PAGE
      </button>
      {'\n'}
      {'\n'}
      <button onClick={() => navigate('/eventDetail')} type="submit" className="btn btn-primary">
           Event Details
          </button>
      {'\n'}
      {'\n'}
     {'\n'}
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