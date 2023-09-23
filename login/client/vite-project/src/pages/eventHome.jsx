import React from 'react';
import './eventHome.css';
import event1 from '../images/event1.jpg';
import event2 from '../images/event2.jpg';
import event3 from '../images/event3.jpg';

import event4 from '../images/3.jpg';
import { Link, useNavigate } from 'react-router-dom';


export default function eventHome() {
    const navigate = useNavigate();
  return (
    <div className="front-page-container">
      <div className="headline">
        {/* Your headline content goes here */}
      </div>
      <div className="success-container">
        <div className="event-selection-container">
          <h1>CHOOSE YOUR EVENT</h1>
          <div className="image-grid">
            <Link to="/event" className="event-link">
              <div className="image-card">
                <img src={event1} alt="event1" />
                <p>
                  <span className="emphasis-text">Decide to celebrate,</span>
                  <br />
                  <span className="emphasis-text">it's totally okay to throw your</span>
                  <br />
                  <span className="emphasis-text">own birthday party</span>
                </p>
              </div>
            </Link>
           
            <Link to="/event" className="event-link">
              <div className="image-card">
                <img src={event2} alt="event2" />
                <p>
                  <span className="emphasis-text">Decide to celebrate,</span>
                  <br />
                  <span className="emphasis-text">it's totally okay to throw your</span>
                  <br />
                  <span className="emphasis-text">own birthday party</span>
                </p>
              </div>
            </Link>
            
            <Link to="/event" className="event-link">
              <div className="image-card">
                <img src={event3} alt="event3" />
                <p>
                  <span className="emphasis-text">Decide to celebrate,</span>
                  <br />
                  <span className="emphasis-text">it's totally okay to throw your</span>
                  <br />
                  <span className="emphasis-text">own birthday party</span>
                </p>
              </div>
            </Link>
            
            <Link to="/event" className="event-link">
              <div className="image-card">
                <img src={event4} alt="event4" />
                <p>
                  <span className="emphasis-text">Decide to celebrate,</span>
                  <br />
                  <span className="emphasis-text">it's totally okay to throw your</span>
                  <br />
                  <span className="emphasis-text">own birthday party</span>
                </p>
              </div>
            </Link>
            {/* Repeat the same structure for other event options */}
          
        </div></div></div>
          <div className="App">
            <h2>Thank you for choosing Street Bitz.</h2>
          </div>
          <hr />
          <div className="button-container">
            <button onClick={() => navigate('/eventDetail')} className="btn btn-primary">
              Event Details
            </button>
            <button onClick={() => navigate('/event')} className="btn btn-primary">
              Event Proposal
            </button>
            <button onClick={() => navigate('/eventAbout')} className="btn btn-primary">
              About Us
            </button>
          </div>
       

   
      
    
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