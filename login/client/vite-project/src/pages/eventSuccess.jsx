import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function eventSuccess() {
  const navigate = useNavigate();
  return (
    <div className="success-container">
      <div className="content">
        <h2>Thank You!</h2>
        <p>Your request has been successfully processed.</p>
        <p>Thank you for choosing Street Bitz.</p>

        {'\n'}
      <button onClick={() => navigate('/eventHome')} type="submit" className="btn btn-primary">
           Event Home
          </button>
      {'\n'}
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



