import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './register.css'


export default function Register() {
  const navigate = useNavigate()
  const [data,setData]=useState({
    name:'',
    address:'',
    phonenumber:'',
    email:'',
    password:'',
  })
  const registerUser = async(e) => {
    e.preventDefault();
    const{name,address,phonenumber,email, password}= data 
    try {
      const {data} =await axios.post('./register',{
        name,address,phonenumber,email,password
      })
      if(data.error) {
        toast.error(data.error)
      }else{
        setData({})
        toast.success('Register successful, welcome!')
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
   
    <div className="form-container">
    <div className="bg-image"></div> 
    <div className='content'>
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
          <br></br>
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
          <br></br>
          <label htmlFor="phonenumber">Phone Number</label>
          <input
            type="numbers"
            className="form-control"
            placeholder="Enter Phone number..."
            value={data.phonenumber}
            onChange={(e) => setData({ ...data, phonenumber: e.target.value })}
          />
        </div>
        <div className="form-group">
          <br></br>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter email..."
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <br></br>
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
        <br></br>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
      <footer className="footers">
        <div className="container">
          <hr></hr>
          <p className="text-center">All rights reserved &copy; </p>
        </div>
      </footer>
    </div>
  );
  
}
