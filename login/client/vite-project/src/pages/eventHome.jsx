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
    <div className="home-container">
      <div className="headline"></div>
    <div className="success-container">
      
      
        <h1>CHOOSE YOUR EVENT </h1>
        
        <div className="image-container">
          <Link to="/event">
        <div style={{  color: 'blue', fontSize: '16px'  }}className="frame  ">
        <img src={event1} alt="event1" />
        <p>  <span className="emphasis-text">Decide to celebrate,</span>
              <br />
              <span className="emphasis-text">it's totally okay to throw your</span>
              <br />
              <span className="emphasis-text">own birthday party</span></p>

        </div>
        </Link>
        <Link to="/event">
        <div style={{  color: 'blue', fontSize: '16px'  }}className="frame ">
        <img src={event2} alt="event2" />
        <p>
              <span className="emphasis-text">Decide to celebrate,</span>
              <br />
              <span className="emphasis-text">it's totally okay to throw your</span>
              <br />
              <span className="emphasis-text">function</span>
            </p>
</div></Link>
<Link to="/event">
        <div style={{  color: 'blue', fontSize: '16px'  }}className="frame">
        <img src={event4} alt="event4" />
        <p>
              <span className="emphasis-text">Decide to celebrate,</span>
              <br />
              <span className="emphasis-text">it's totally okay to throw your</span>
              <br />
              <span className="emphasis-text">gettogether</span>
            </p>
          
        </div></Link>
        <Link to="/event">
        <div style={{  color: 'blue', fontSize: '16px'  }}className="frame ">
        <img src={event3} alt="event3" />
        <p>
              <span className="emphasis-text">Decide to celebrate,</span>
              <br />
              <span className="emphasis-text">it's totally okay to throw your</span>
              <br />
              <span className="emphasis-text">wedding</span>
            </p>
            </div></Link>
        <hr/><hr/>
        <div className="App">
        <h2>Thank you for choosing Street Bitz.</h2>
      </div>
      
     
      <hr/>
      <button onClick={() => navigate('/eventDetail')} type="submit" className="btn btn-primary">
           Event Details
          </button>
  
      <button onClick={() => navigate('/event')} type="submit" className="btn btn-primary">
           Event Proposal
          </button>
          <button onClick={() => navigate('/eventAbout')} type="submit" className="btn btn-primary">
           About us
          </button>
      {'\n'}
      </div>
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