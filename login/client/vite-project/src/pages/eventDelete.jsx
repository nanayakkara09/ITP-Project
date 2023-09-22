import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


export default function eventDelete() {
  const navigate = useNavigate();
  const [data, setData] = useState({
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

  const eventDelete = async (e) => {
    e.preventDefault();
    const { name, phonenumber, email, Ename, Etime, date, Npeople, theme, Fneed, Extra } = data;

    try {
      const { data: response } = await axios.post('/eventDelete', {
        name,
        phonenumber,
        email,
        Ename,
        Etime,
        date,
        Npeople,
        theme,
        Fneed,
        Extra,
      });

      if (response.error) {
        toast.error(response.error);
      } else {
        setData({});
        toast.success('Registration successful, welcome!');
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
    }
  };
const [isSubmitted, setIsSubmitted]= useState(false);

  return (
    <div className="form-container">
      <div className="bg-image"></div>
      <div className="content">
        <h2>DELETE PROPOSAL FORM</h2>
        <form onSubmit={eventDelete}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name..."
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
        
          <div className="form-group">
            <label htmlFor="phonenumber">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter Phone number..."
              value={data.phonenumber}
              onChange={(e) => setData({ ...data, phonenumber: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email..."
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="Ename">Event Name</label>
            <select
              className="form-control"
              value={data.Ename}
              onChange={(e) => setData({ ...data, Ename: e.target.value })}
            >
              <option value="Select">Select</option>
              <option value="Birthday">Birthday</option>
              <option value="Wedding">Wedding</option>
              <option value="GetTogether">GetTogether</option>
              <option value="FreeEvent">FreeEvent</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="Etime">Event Time</label>
            <select
              className="form-control"
              value={data.Etime}
              onChange={(e) => setData({ ...data, Etime: e.target.value })}
            >
              <option value="Select">Select</option>
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
              <option value="Night">Night</option>
              
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="date">Event Date</label>
            <input
              type="date"
              className="form-control"
              id="date"
              placeholder="Enter the date..."
              value={data.date}
              onChange={(e) => setData({ ...data, date: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Npeople">No of People Expected</label>
            <select
              className="form-control"
              value={data.Npeople}
              onChange={(e) => setData({ ...data, Npeople: e.target.value })}
            >
              <option value="Select">Select</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="150">150</option>
              <option value="200">200</option>
              <option value="250">250</option>
              
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="theme">Theme Of The Event</label>
            <input
              type="theme"
              className="form-control"
              id="theme"
              placeholder="Enter the theme..."
              value={data.theme}
              onChange={(e) => setData({ ...data, theme: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Fneed">Facilities Needed</label>
            <input
              type="Fneed"
              className="form-control"
              id="Fneed"
              placeholder="Enter the Facilities ..."
              value={data.Fneed}
              onChange={(e) => setData({ ...data, Fneed: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Extra">Extra Details</label>
            <input
              type="Extra"
              className="form-control"
              id="Extra"
              placeholder="Enter the Details ..."
              value={data.Extra}
              onChange={(e) => setData({ ...data, Extra: e.target.value })}
            />
          </div>

          <button onClick={() => navigate('/eventDel')} type="submit" className="btn btn-primary">
          Submit
          </button>
          
        </form>
      </div>
      <footer className="footers">
        <div className="container">
          <hr />
          <p className="text-center">All rights reserved &copy;</p>
        </div>
      </footer>
    </div>
  );
}
