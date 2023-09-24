import React, { useState } from 'react';
import axios from 'axios';
//import './addStock.css'; // Import the CSS file for styling
import { useNavigate, useParams } from 'react-router-dom';

export default function NewItemForm() {
  const navigate = useNavigate();
  const { itemcode } = useParams();
  const [formData, setFormData] = useState({

    
    date: '',
    supplier: '',
    quantity: '',
    price: ''
    
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData)
    const{date,supplier,quantity,price}= formData 
    const {data} =await axios.post('./invDetails/',{date,supplier,quantity,price,itemcode})
    console.log('Form data submitted:', formData);
    navigate(`/itemDetails/${itemcode}`);
  };

  return (
    <div className="add-stock-container">
      <h2>Add Stock</h2>
      <form onSubmit={handleSubmit}>
      
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="supplier">Supplier:</label>
          <input
            type="text"
            id="supplier"
            name="supplier"
            value={formData.supplier}
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
        <button type="cancel">Cancel</button>
      </form>
    </div>
  );
}