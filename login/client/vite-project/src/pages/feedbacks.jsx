import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast'; 
import './feedbacks.css'; // Import your CSS file

const FeedbackPage = () => {
  const [feedbackText, setFeedbackText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!feedbackText) {
      toast.error('Please enter feedback before submitting');
      return;
    }
  
    try {
      const response = await axios.post('/submit-feedback', {
        userId: 'user_id_here',
        feedbackText,
      });
  
      console.log(response.data);
      toast.success('Feedback submitted successfully');
      setFeedbackText('');
    } catch (error) {
      console.error(error);
      toast.error('Error submitting feedback');
    }
  };

  return ( 
  <div className="bg-image">
    <div className="container"> 
    </div>{/* Apply the container class */}
      <div className="feedback-form"> {/* Apply the feedback-form class */}
        <h1>Submit Feedback</h1>
        <form onSubmit={handleSubmit}>
          <textarea
            rows="5"
            placeholder="Enter your feedback"
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            required
          ></textarea>
          <button type="submit">Submit Feedback</button>
        </form>
      </div>
      <footer className="footers">
        <div className="container">
          <hr></hr>
          <p className="text-center">All rights reserved &copy; </p>
        </div>
      </footer>
    </div>
  );
};

export default FeedbackPage;
