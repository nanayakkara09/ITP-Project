import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminNavBar from '../components/adminNavBar';
import { Link } from 'react-router-dom';
import './IssueEntry.css';

export default function NewIssueEntry() {
const navigate = useNavigate();
const [formData, setFormData] = useState({
    stoleid: '',
    itemName: '',
    itemCode: '',
    date: '',
    quantity: '',
    price: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        const { date, itemName, quantity, price, itemCode ,stoleid} = formData;
        const { data } = await axios.post('./issuedDetails/', { date, itemName, quantity, price, itemCode ,stoleid});
        console.log('Form data submitted:', formData);
        navigate('/IssuedDetails');
    };

  return (
    <div className="issue-entry-form">
      <h2>Issue Entry Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="stoleId">Stole ID:</label>
          <select
            id="stoleId"
            name="stoleId"
            value={formData.stoleid}
            onChange={(e) => setFormData({ ...formData, stoleid: e.target.value })}
            required
          >
            <option value="">Select Stole ID</option>
            <option value="1">1</option>
            <option value="2">2</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="itemName">Item Name:</label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            value={formData.itemName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="itemCode">Item Code:</label>
          <input
            type="text"
            id="itemCode"
            name="itemCode"
            value={formData.itemCode}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

