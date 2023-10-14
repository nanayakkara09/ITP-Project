import { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast'
import { Link, useNavigate } from "react-router-dom";
import "./driverLogin.css"; // Import the CSS file

function DriverLogin(){
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const loginDriver = async (e) => {
        e.preventDefault()
        const { email, password} = data
        try {
            const {data} = await axios.post('http://localhost:8000/drivers/loginDriver', {
                email,
                password
        });
        if(data.error) {
            toast.error(data.error)
        } else {
            setData ({});
            toast.success('Login Successful, Welcome!!')
            navigate('/driver-dashboard')
        }
        } catch (error) {
          console.log(error);
          toast.error('An error occurred during login.'); // Handle network or server errors

        }
    }

    return (
        <div className='driver-login-Form-container'>
          <div className='driver-login-bgr-img'></div>
          <div className="content driv-form-box">
          <br></br>
            <h2>Login</h2>
            <form onSubmit={loginDriver}>
              <div className="form-group row">
                <label htmlFor="email"><strong>Email</strong></label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  autoComplete="off"
                  name="email"
                  id="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  />
              </div>

              <div className="form-group">
                <label htmlFor="password"><strong>Password</strong></label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  id="password"
                  className="form-control"
                  value={data.password}
                  onChange={(e) => setData({ ...data, password: e.target.value })}
                />
              </div>
              <button type="submit" className="btn btn-primary-driver-login">
                Login
              </button>
            </form>
            <p>New to here?</p>
            <Link to="/driver-register" className="register-btn btn-light btn-block border text-decoration-none">
              Register
            </Link>
        </div>
        </div>
    
 )
}

export default DriverLogin;