import React from 'react';
import './eventSuccess.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function eventSuccess() {
  const navigate = useNavigate();
  return (
    <div className="success-container">
      <h1 className="success-heading">SUBMITTED!</h1>
      <h2 className="success-heading">THANK YOU!</h2>
      <p>Your request has been successfully processed.</p>
      <p>Thank you for choosing Street Bitz.</p>

      <div className="button-container">
        <Link to="/eventHome" className="btn btn-primary">
          Event Home
        </Link>
        <button onClick={() => navigate('/eventListUser')} className="btn btn-primary">
          Event Details
        </button>
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


