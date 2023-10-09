import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export default function EventUpdate() {
  const navigate = useNavigate();
  const { eventId } = useParams(); // Get the eventId from the URL

  const [eventData, setEventData] = useState({
    name: '',
    phonenumber: '',
    email: '',
    Ename: '',
    Etime: '',
    date: '',
    Npeople: '',
    theme: '',
    Fneed: '',
    Extra: '',
  });

  useEffect(() => {
    // Fetch the event data for the specified eventId
    const fetchEventData = async () => {
      try {
        const { data } = await axios.get(`/Event/getEvent/${eventId}`);
        setEventData(data.event);
      } catch (error) {
        console.error(error);
        toast.error('Failed to fetch event data');
      }
    };

    fetchEventData();
  }, [eventId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.put(`/Event/updateEvent/${eventId}`, eventData);
      console.log('Form data updated:', data);
      toast.success('Event updated successfully');
      navigate('/eventListUser'); // Navigate back to the event list after updating
    } catch (error) {
      console.error('Error updating form data:', error);
      toast.error('Failed to update event');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Update Event</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            className="form-control"
            id="name"
            name="name"
            value={eventData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phonenumber">Phone Number:</label>
          <input
            className="form-control"
            id="phonenumber"
            name="phonenumber"
            value={eventData.phonenumber}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            className="form-control"
            id="email"
            name="email"
            value={eventData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Ename">Event Name:</label>
          <input
            className="form-control"
            id="Ename"
            name="Ename"
            value={eventData.Ename}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Ename">Event Name:</label>
          <input
            className="form-control"
            id="Ename"
            name="Ename"
            value={eventData.Ename}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}
