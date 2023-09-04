import { useContext, useEffect } from "react";
import { UserContext } from "../../contex/userContex";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import AdminNavBar from '../components/adminNavBar'; 
import './admin-dashbord.css';
// Import custom CSS file for styling

export default function admindashbord() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
      });
    }
  }, [user, setUser]);

  const handleLogout = async () => {
    try {
      await axios.post('/logout');
      setUser(null);
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
        <AdminNavBar />
       
      <div className="bg-image"></div>
      <div className='content'>
        <div className="black-box">
          <br></br>
          <div className="vertical-text">Customer</div>
        <div className="vertical-text">Event</div>
        <div className="vertical-text">Stall</div>
        <div className="vertical-text">Employee</div>
        <div className="vertical-text">Order</div>
        <div className="vertical-text">Delivery</div>
        <div className="vertical-text">Inventory</div>
        <div className="vertical-text">Finance</div>
        </div>
        <br></br>
        {!!user && <h2>welcome {user.name}!</h2>}
        <br></br>
        
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
