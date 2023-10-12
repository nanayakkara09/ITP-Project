import React from 'react';
import AdminNavBar from '../components/adminNavBar';

import './eventSuccess.css';

import { useNavigate } from 'react-router-dom';



export default function adminConfirm() {
  const navigate = useNavigate();
  return (
    <div className="success-container">
      <h1 className="success-heading">CONFIRM!</h1>
      <h2 className="success-heading">MAKE FURTHER REQUIREMENTS!</h2>
      <p>Your request has been successfully processed.</p>
      <p>You may inform the customer through EMAIL.</p>

      <div className="button-container">
       
        <button onClick={() => navigate('/eventList')} className="btn btn-primary">
          Customer Event Details
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


