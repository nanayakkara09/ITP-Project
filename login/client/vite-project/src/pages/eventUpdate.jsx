import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import './eventBackground.css'; // Import the CSS file for styling
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export default function EventUpdate() {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const [formData, setFormData] = useState({
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData)
    const{name,
      phonenumber,
      email,
      Ename,
      Etime,
      date,
      Npeople,
      theme,
      Fneed,
      Extra,}= formData 
    const {data} =await axios.post(`/event/updateEvent/${eventId}`,{name,
      phonenumber,
      email,
      Ename,
      Etime,
      date,
      Npeople,
      theme,
      Fneed,
      Extra})
    console.log('Form data submitted:', formData);
    navigate('/eventListUser');
  };

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        console.log(eventId);
        const { data } = await axios.get(`/event/getEvent${eventId}`);
        console.log(data)
  
         setFormData({
           
           name:data.name,
           phonenumber:data.phonenumber,
           email:data.email,
           Ename:data.Ename,
           Etime:data.Etime,
           date:data.date,
           Npeople:data.Npeople,
           theme:data.theme,
           Fneed:data.Fneed,
           Extra:data.Extra,

         });
      } catch (error) {
        console.log(error);
        toast.error('Failed to fetch event data');
      }
    };
  
    fetchEvent();
  }, [eventId]);

  return (
    <div className="login-container">
    
     <div className="contentL"></div>
     
      <h2>Update Event</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
          className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
            
        </div>
        <div className="form-group">
          <label htmlFor="tel">Phone Number:</label>
          <input
          className="form-control"
            type="tel"
            id="tel"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Ename">Event Name:</label>
          <select
          className="form-control"
            id="Ename"
            name="Ename"
            value={formData.Ename}
            onChange={handleChange}
            required
          ><option value="Select">Select</option>
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
            type="Etime"
            id="Etime"
            name="Etime"
            value={formData.Etime}
            onChange={handleChange}
            required
          ><option value="Select">Select</option>
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
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="npeople">No of People Expected:</label>
          <select
          className="form-control"
            type="npeople"
            id="npeople"
            name="npeople"
            value={formData.npeople}
            onChange={handleChange}
            required
          > <option value="Select">Select</option>
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
            type="theme"
            id="theme"
            name="theme"
            value={formData.theme}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Fneed">Facilities Needed:</label>
          <input
          className="form-control"
            type="Fneed"
            id="Fneed"
            name="Fneed"
            value={formData.Fneed}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Extra">Extra Details:</label>
          <input
          className="form-control"
            type="Extra"
            id="Extra"
            name="Extra"
            value={formData.Extra}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" onClick={() => navigate('/eventListUser')}>Submit</button>
        <button type="submit" onClick={() => navigate('/eventDel')}>
          Delete
        </button>
      </form>
    </div>
  );
}
