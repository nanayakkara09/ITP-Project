import React from 'react';
import './eventHome.css';
import event1 from '../images/event1.jpg';
import event2 from '../images/event2.jpg';
import event3 from '../images/event3.jpg';
import event4 from '../images/3.jpg';
import { useNavigate } from 'react-router-dom';


export default function eventHome() {
    const navigate = useNavigate();
  return (
    <div className="home-container">
      <div className="headline"></div>
    <div className="success-container">
      
        <h1>CHOOSE YOUR EVENT </h1>
        <div style={{  color: 'blue', fontSize: '16px'  }}className="frame">
        <img src={event1} alt="event1" />
        <p><span className="emphasis-text">Decide to celebrate,<br /> 
            it's totally okay to throw your<br /> own birthday party</span></p>
        </div>

        <div style={{  color: 'blue', fontSize: '16px'  }}className="frame">
        <img src={event2} alt="event2" />
        <p><span className="emphasis-text">Decide to celebrate,<br /> 
            it's totally okay to throw your<br /> function</span></p>
        </div>

        <div style={{  color: 'blue', fontSize: '16px'  }}className="frame">
        <img src={event4} alt="event4" />
        <p><span className="emphasis-text">Decide to celebrate,<br /> 
            it's totally okay to throw your<br /> gettogether</span></p>
        </div>

        <div style={{  color: 'blue', fontSize: '16px'  }}className="frame">
        <img src={event3} alt="event3" />
        <p><span className="emphasis-text">Decide to celebrate,<br /> 
            it's totally okay to throw your<br /> wedding</span></p>
        </div>
        <p>Thank you for choosing Street Bitz.</p>
      
      {'\n'}
      <button onClick={() => navigate('/eventDetail')} type="submit" className="btn btn-primary">
           Event Details
          </button>
      {'\n'}
      <button onClick={() => navigate('/event')} type="submit" className="btn btn-primary">
           Event Proposal
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