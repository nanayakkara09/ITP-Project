import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import AdminNavBar from '../components/adminNavBar';
import { useParams } from 'react-router-dom';

export default function UserEdit() {
  const { userId } = useParams(); // Define userId using useParams

  const [data, setData] = useState({
    name: '',
    address: '',
    phonenumber: '',
    email: '',
  });

  useEffect(() => {
    const fetchUserProfileById = async (userId) => {
      try {
        const response = await axios.get(`/profileA/${userId}`); 
        if (response.status === 200) {
          const { data } = response;
          setData({
            name: data.name,
            address: data.address,
            phonenumber: data.phonenumber,
            email: data.email,
          });
        } else if (response.status === 404) {
          toast.error('User not found.');
        } else {
          console.error('Unexpected status:', response.status);
          toast.error('Failed to fetch user data. Please try again later.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        toast.error('Failed to fetch user data. Please check the network.');
      }
    };

    fetchUserProfileById(userId);
  }, [userId]);
  

  const updateUserA = async () => {
    try {
      await axios.put(`/usersA/${userId}`, {
        ...data,
      });
      toast.success('User updated successfully');
   
    } catch (error) {
      console.log(error);
      toast.error('Failed to update user');
    }
  };
  

  return (
    <div>
      <AdminNavBar />
      <div className="user-edit-container">
        <br />
        <h1>Edit User</h1>
        <br />
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Enter address"
              value={data.address}
              onChange={(e) => setData({ ...data, address: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phonenumber">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="phonenumber"
              placeholder="Enter phone number"
              value={data.phonenumber}
              onChange={(e) =>
                setData({
                  ...data,
                  phonenumber: e.target.value.replace(/[^0-9]/g, ''),
                })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <button
  type="button"
  className="btn btn-primary"
  onClick={updateUserA}
>
  Update User
</button>
        </form>
      </div>
    </div>
  );
}
