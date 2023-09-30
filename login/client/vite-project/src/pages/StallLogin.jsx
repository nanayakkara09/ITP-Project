import { useState } from 'react';
import stallNavBar from '../components/stallNavBar';
import axios from 'axios';

export default function StallLogin() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  
 const loginStall = () => {
  e.preventDefault()
  axios.get('/stall')
 }

  return (
    <div className="login-container">
      <stallNavBar/>    
    
      <div className="bgs-image"></div>
      <br></br>
      <br></br>
      
        <div className="contentL">
          <h2>Login</h2>
          <form onSubmit={loginStall}>
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Enter Email..."
                value='{data.email}'
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
                value='{data.password}'
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
          <p className="register-link">
            
          </p>
          <p className="forgot-password-link">
  
</p>

</div>
    </div>
    
  );
}
