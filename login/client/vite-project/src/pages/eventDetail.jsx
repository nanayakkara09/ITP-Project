import React from 'react';
import './eventDetail.css';
import { useNavigate } from 'react-router-dom';

export default function eventDetail() {
  const navigate = useNavigate();
  return (
    <div className="event-table">
      <div className="content">
        <h2>SEASONAL OFFERS!</h2>
        <div>
      <h2>EVENT PROPOSAL DETAILS</h2>
      <table className="event-table">
      <ul>
        <li>
          <strong>Number of crowd expected:</strong> 50
        </li>
        <li>
          <strong>Theme:</strong> Black and white
        </li>
        <li>
          <strong>Event time:</strong> Night function
        </li>
        <li>
          <strong>Event location:</strong> Outdoor
        </li>
        <li>
          <strong>Extra details:</strong>
          <ul>
            <li>DJ and Disco</li>
            <li>Furniture Hire</li>
            <li>Styling & Decor</li>
            <li>Food and Beverages</li>
            <li>Liquor</li>
          </ul>
        </li>
        <li>
        <strong>Budget:</strong> RS.60000/=
        </li>
      </ul></table>
      <button onClick={() => navigate('/eventSuccess')} type="submit" className="btn btn-primary">
           Submit
          </button>
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