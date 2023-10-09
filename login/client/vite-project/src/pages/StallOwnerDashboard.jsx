import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StallContext } from '../../contex/stallContext';
import { Link } from 'react-router-dom';
import GetProduct from './GetProduct';



export default function StallOwnerDashboard() {
  const { stall } = useContext(StallContext);    
  const [data, setData] = useState({
    name: '' ,
    price: '',
    description: '',
       
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };
  
  const createProduct = async (e) => {
    e.preventDefault();
    const { name, price, description} = data;
    try {
      const { data } = await axios.post('./stall/createProduct', {
        name,
        price,
        description,
        
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success('Product Created Successful. Welcome!');
        
        
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className="container">
      <h1 className="my-4">Create Products</h1>
      {!!stall && (<h2>Hi {stall.fName}!</h2>)}
      <div className="admin-product-form-container">
        <form onSubmit={createProduct}>
          <div className="form-group">
            <label htmlFor="stallName">Product Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={data.name}
              onChange={(e) => setData({...data, name:e.target.value})}
            />
          </div>
          
          
          <div className="form-group">
            <label htmlFor="mType">Price</label>
            <input
              type="text"
              name="price"
              className="form-control"
              value={data.price}
              onChange={(e) => setData({...data, price:e.target.value})}
            />
          </div>

          <div className="form-group">
            <label htmlFor="mType">Description</label>
            <input
              type="text"
              name="stallId"
              className="form-control"
              value={data.description}
              onChange={(e) => setData({...data, description:e.target.value})}
            />
          </div>  
          
               
          
          
          <button type="submit" className="btn btn-primary">
            Add Product
          </button>
          
        </form>
      </div>
      
      <GetProduct/>
    </div>

  );
}

