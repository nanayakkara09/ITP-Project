import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './edit.css';

export default function Edit() {
  const [name, setName] = useState('');
  const [address,setAddress]=useState('');
  const [phonenumber,setPhonenumber]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  const handleUpdate = async () => {
    try {
      await axios.put(`/users/${userId}`, {
        name,
        address,
        phonenumber,
        email,
        password,
      });
      toast.success('User updated successfully');
      // Redirect to a different page if needed
      navigate('/dashbord');
    } catch (error) {
      console.log(error);
      // Handle error or display an error message
      toast.error('Failed to update user');
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/users/${userId}`);
      toast.success('User deleted successfully');
      // Redirect to a different page if needed
      navigate('/dashbord');
    } catch (error) {
      console.log(error);
      // Handle error or display an error message
      toast.error('Failed to delete user');
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get('/profile');
        setUserId(data.id);
        setName(data.name);
        setAddress(data.address);
        setPhonenumber(data.phonenumber);
        setEmail(data.email);
        // Set other fields if needed
      } catch (error) {
        console.log(error);
        // Handle error or display an error message
        toast.error('Failed to fetch user data');
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="edit-container">
      <div className="bg-image"></div>
      <div className="content">
        <h2>Edit Profile</h2>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <br></br>
            <label>Address</label>
            <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className="form-group">
            <br></br>
            <label>Phone Number</label>
            <input type="number" className="form-control" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
          </div>
          <div className="form-group">
            <br></br>
            <label>Email</label>
            <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <br></br>
            <label>Password</label>
            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </form>
        <br></br>
        <button className="btn btn-primary" onClick={handleUpdate}>Update</button>
        <br></br>
        <br></br>
        <button className="btn btn-danger" onClick={handleDelete}>Delete My Account</button>
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
