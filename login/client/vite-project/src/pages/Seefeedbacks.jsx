import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavBar from '../components/adminNavBar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons"; // Import the desired icon

export default function SeeFeedbacksPage() {
  const [feedbackList, setFeedbackList] = useState([]);
  const [filteredFeedbackList, setFilteredFeedbackList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchFeedbackList = async () => {
      try {
        const { data } = await axios.get('/all-feedbacks');
        setFeedbackList(data);
        setFilteredFeedbackList(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchFeedbackList();
  }, []);

  const handleSearch = () => {
    const filteredFeedbacks = feedbackList.filter((feedback) =>
      feedback.userName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFeedbackList(filteredFeedbacks);
  };

  const handleMarkAsRead = async (feedbackId) => {
    try {
      // Make an API request to mark feedback as read
      await axios.put(`/mark-as-read/${feedbackId}`);

      // Update the isRead property in the UI
      const updatedFeedbackList = feedbackList.map((feedback) => {
        if (feedback._id === feedbackId) {
          return { ...feedback, isRead: true };
        } else {
          return feedback;
        }
      });

      setFeedbackList(updatedFeedbackList);
      setFilteredFeedbackList(updatedFeedbackList);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <AdminNavBar />
      <div className="customer-details-container">
        <br />
        <br />
        <h1>
          <FontAwesomeIcon icon={faComments} /> Feedbacks
        </h1>
        <br />
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        {isLoading ? (
          <p>Loading feedback data...</p>
        ) : feedbackList.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">User Name</th>
                <th scope="col">Feedback</th>
                <th scope="col">Rating</th> {/* New column for rating */}
                <th scope="col">Date and Time</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredFeedbackList.map((feedback, index) => (
                <tr key={feedback._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{feedback.userName}</td>
                  <td>{feedback.feedbackText}</td>
                  <td>{feedback.rating}</td> {/* Display the rating */}
                  <td>{feedback.createdAt}</td>
                  <td>
                    {!feedback.isRead ? (
                      <button onClick={() => handleMarkAsRead(feedback._id)}>
                        Mark as Read
                      </button>
                    ) : (
                      <span>Read</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No feedback data available.</p>
        )}
        <button className="print-button" onClick={handlePrint}>
          Print Table
        </button>
      </div>
    </div>
  );
}
