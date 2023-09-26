import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import './feedbacks.css';

export default function SupportMessage() {
  const [supportText, setSupportText] = useState('');
  const [userName, setUserName] = useState(''); // State for user name

  const submitSupport = async (e) => {
    e.preventDefault();

    if (!supportText) {
      toast.error('Please enter support message before submitting');
      return;
    }

    try {
      await axios.post('/submitsupport', {
        userId: 'user_id_here', 
         userName,
        supportText,
       // Include the user name in the request
      });

      toast.success('Support message submitted successfully');
      setSupportText('');
      setUserName(''); // Clear the user name input after submission
    } catch (error) {
      console.error(error);
      toast.error('Error submitting support message');
    }
  };

  return (
    <div className="bg-image">
      <div className="container">
        <br />
        <br />
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Submit Support Message
        </h2>
        <div className="feedback-form">
          <form onSubmit={submitSupport}>
            <div className="md-form">
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Your Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div className="md-form">
              <textarea
                rows="5"
                id="message"
                className="form-control md-textarea"
                placeholder="Enter your support message"
                value={supportText}
                onChange={(e) => setSupportText(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Submit Support Message
              </button>
            </div>
          </form>
        </div>
        <footer className="footers">
          <hr />
          <p className="text-center">All rights reserved &copy;</p>
        </footer>
      </div>
    </div>
  );
}
