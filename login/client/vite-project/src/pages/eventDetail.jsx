import React from 'react';
import { useNavigate } from 'react-router-dom';
import html2pdf from 'html2pdf.js';
import brithday from '../images/brithday.jpeg';
import './eventDetail.css';

export default function eventDetail() {
  const navigate = useNavigate();
  const downloadPDF = () => {
    const content = document.getElementById('eventDetail');

    html2pdf()
      .from(content)
      .set({ margin: 10, filename: 'event_details.pdf', image: { type: 'jpeg', quality: 0.98 } })
      .outputPdf()
      .then((pdf) => {
        const blob = new Blob([pdf], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'event_details.pdf';
        a.click();
      })
      .catch((error) => {
        console.error('Error creating PDF:', error);
      });
  };
  return (

    <div className="bgh-image1">

    <div className="event-detail-container1">
         <div className="bgh-image1">
           <img src={brithday} alt="Event" className="background-image1" />
         </div>
         <div className="event-details-content1">
        <h2>SEASONAL OFFERS!</h2>
        <div className="event-proposal-details1">
          <h2>EVENT PROPOSAL DETAILS</h2>
          <ul className="event-table">
          <li>
              <strong>Event Name:</strong> Birthday Party
            </li>
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
              <strong>Extra needs:</strong>
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
          </ul>
          <button   onClick={() => navigate('/eventSuccess')}
            type="submit" className="btn btn-primary">
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
    </div>
    </div>
      </div>
    
  );
}