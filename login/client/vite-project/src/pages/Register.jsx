import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    address: '',
    phonenumber: '',
    email: '',
    password: '',
    userType: 'customer', // Default to 'customer', but you can provide an option to select 'admin'
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, address, phonenumber, email, password, userType } = data;

    try {
      const { data: response } = await axios.post('/register', {
        name,
        address,
        phonenumber,
        email,
        password,
        userType, 
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

  return (
    <div className="form-container">
      <div className="bg-image"></div>
      <div className="content">
        <h2>Register</h2>
        <form onSubmit={registerUser}>
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
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Address..."
              value={data.address}
              onChange={(e) => setData({ ...data, address: e.target.value })}
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password..."
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="userType">User Type</label>
            <select
              className="form-control"
              value={data.userType}
              onChange={(e) => setData({ ...data, userType: e.target.value })}
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
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
