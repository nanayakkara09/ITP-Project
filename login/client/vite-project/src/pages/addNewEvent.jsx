import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


export default function AddNewEvent() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('/Event/createEvent', {
        name: e.target.name.value,
        phonenumber: e.target.phonenumber.value,
        email: e.target.email.value,
        Ename: e.target.Ename.value,
        Etime: e.target.Etime.value,
        date: e.target.date.value,
        Npeople: e.target.Npeople.value,
        theme: e.target.theme.value,
        Fneed: e.target.Fneed.value,
        Extra: e.target.Extra.value,
      });

      console.log('Form data submitted:', data);
      toast.success('Event created successfully');
     
    } catch (error) {
      console.error('Error submitting form data:', error);
      toast.error('Failed to create event');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>EVENT PROPOSAL FORM</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            className="form-control"
            id="name"
            name="name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phonenumber">Phone Number:</label>
          <input
            className="form-control"
            type="tel"
            id="phonenumber"
            name="phonenumber"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            className="form-control"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Ename">Event Name:</label>
          <select
            className="form-control"
            id="Ename"
            name="Ename"
            required
          >
            <option value="">Select</option>
            <option value="Birthday">Birthday</option>
            <option value="Wedding">BrideToBe Party</option>
            <option value="GetTogether">GetTogether</option>
            <option value="FreeEvent">FreeEvent</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="Etime">Event Time:</label>
          <select
            className="form-control"
            id="Etime"
            name="Etime"
            required
          >
            <option value="">Select</option>
            <option value="Morning">Morning</option>
            <option value="Evening">Evening</option>
            <option value="Night">Night</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">Event Date:</label>
          <input
            className="form-control"
            type="date"
            id="date"
            name="date"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Npeople">No of People Expected:</label>
          <select
            className="form-control"
            id="Npeople"
            name="Npeople"
            required
          >
            <option value="">Select</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="150">150</option>
            <option value="200">200</option>
            <option value="250">250</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="theme">Theme Of The Event:</label>
          <input
            className="form-control"
            id="theme"
            name="theme"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Fneed">Facilities Needed:</label>
          <input
            className="form-control"
            id="Fneed"
            name="Fneed"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Extra">Extra Details:</label>
          <input
            className="form-control"
            id="Extra"
            name="Extra"
            required
          />
        </div>

        <button 
        onClick={() => navigate('/eventSuccess')}type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
