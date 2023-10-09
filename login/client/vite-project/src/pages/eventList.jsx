import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import AdminNavBar from '../components/adminNavBar';
import './eventListUser.css';
import { Link } from 'react-router-dom';

export default function EventList() {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchEventList = async () => {
      try {
        const { data } = await axios.get('/Event/getAllEvent');
        setEvents(data.events);
      } catch (error) {
        console.error(error);
        toast.error('Failed to fetch event data');
      }
    };

    fetchEventList();
  }, []);

  const handleSearch = () => {
    const filteredEvents = events.filter(
      (event) =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.eventcode.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setEvents(filteredEvents);
  };

  const deleteEvent = async (eventId) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this event?');
    
    if (shouldDelete) {
      try {
        await axios.delete(`/Event/deleteEvent/${eventId}`);
        const updatedEvents = events.filter((event) => event._id !== eventId);
        setEvents(updatedEvents);
        toast.success('Event deleted successfully');
      } catch (error) {
        console.error(error);
        toast.error('Failed to delete event');
      }
    }
  };

  return (
    <div>
      <div className='container'>
        <div className='title'>
          <h1 className="item-list-title">Event List</h1>
        </div>

        <div className="item-list-buttons">
          <input
            className="form-control"
            type="text"
            placeholder="Search by name or event code..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>Search</button>
       
        </div>

        <div className="item-list-container">
          <table className="item-list-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>PhoneNumber</th>
                <th>Email</th>
                <th>EventName</th>
                <th>EventTime</th>
                <th>Date</th>
                <th>NoPeople</th>
                <th>Fneed</th>
                <th>Extra</th>
               
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={index}>
                  <td>{event.name}</td>
                  <td>{event.phonenumber}</td>
                  <td>{event.email}</td>
                  <td>{event.ename}</td>
                  <td>{event.etime}</td>
                  <td>{event.date}</td>
                  <td>{event.npeople}</td>
                  <td>{event.theme}</td>
                  <td>{event.Fneed}</td>
                  <td>{event.extra}</td>
                  <td>
                    <Link to={`/admin-confirm`}>
                      <button className="Edit-button">confirm</button>
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => deleteEvent(event._id)} className="Delete-button">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
