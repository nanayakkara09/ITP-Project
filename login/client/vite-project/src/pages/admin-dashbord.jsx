import { useContext, useEffect } from "react";
import { UserContext } from "../../contex/userContex";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import AdminNavBar from '../components/adminNavBar'; 
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
