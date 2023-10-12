import React from 'react';
import './eventDetail4.css';
import BrideToBe from '../images/BrideToBe.jpg';
import { useNavigate } from 'react-router-dom';

export default function eventDetail() {
  const navigate = useNavigate();
  return (
    <div className="bgh-image4">
    <div className="event-details-container4">
    <div className="bgh-image4">
        <img src={BrideToBe} alt="Event" className="background-image4" />
      </div>
      <div className="event-detail-container4">
        <h2>SEASONAL OFFERS!</h2>
        <div className="event-proposal-details4">
          <h2>EVENT PROPOSAL DETAILS</h2>
          <ul className="event-table">
          <li>
              <strong>Event Name:</strong> BrideToBe Party
            </li>
            <li>
              <strong>Number of crowd expected:</strong> 40
            </li>
            <li>
              <strong>Theme:</strong> Fancy
            </li>
            <li>
              <strong>Event time:</strong> Night function
            </li>
            <li>
              <strong>Event location:</strong> Outdoor
            </li>
            <li>
              <strong>Extra needs:</strong>
              <ul>
                <li>DJ and music</li>
                <li>Styling & Decor</li>
                <li>Food and Beverages</li>
               
              </ul>
            </li>
            <li>
              <strong>Budget:</strong> RS.40000/=
            </li>
          </ul>
          <button
            onClick={() => navigate('/eventSuccess')}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
      
  
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
    </div>  </div>
      </div>
  );
}