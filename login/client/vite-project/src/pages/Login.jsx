import React, { useState, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom';
import { UserContext } from '../../contex/userContex';
import 'bootstrap/dist/css/bootstrap.css';
import './login.css'

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    try {
      const { data: response } = await axios.post('/login', {
        email,
        password,
      });

      if (response.error) {
        toast.error(response.error);
      } else {
        setData({});
        setUser(response.user);

        
        if (response.user.userType === 'admin') {
          navigate('/admin-dashbord');
        } else 
          navigate('/dashbord');
         
      
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <div className="bgs-image"></div>
      <div className="outer-box">
        <div className="contentL">
          <h2>Login</h2>
          <form onSubmit={loginUser}>
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Enter Email..."
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter Password..."
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          <p className="register-link">
            New user? <Link to="/register">Register now</Link>
          </p>
        </div>
      </div>
      <footer className="footers">
        <div className="container">
          <hr />
          <p className="text-center">All rights reserved &copy; </p>
        </div>
      </footer>
    </div>
  );
}

