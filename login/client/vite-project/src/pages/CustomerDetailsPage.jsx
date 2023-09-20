import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import AdminNavBar from '../components/adminNavBar'; 
import './customerDetails.css';

export default function CustomerDetailsPage() {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const { data } = await axios.get('/all-users');
        setUserList(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        toast.error('Failed to fetch user data');
        setIsLoading(false);
      }
    };

    fetchUserList();
  }, []);

  const updateUser = (userId) => {
    // Handle edit user action
  };

  const deleteUser = (userId) => {
    // Handle delete user action
  };

  const handleSearch = () => {
    // Filter the user list based on the search term
    const filteredUsers = userList.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setUserList(filteredUsers);
  };

  const handlePrint = () => {
    window.print(); // Trigger the browser's print dialog
  };

  return (
    <div>

      <AdminNavBar />

    <div className="customer-details-container">
        <br></br>
      <br></br>
      <h1>Customer Details</h1>
      <br></br>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
     
      {isLoading ? (
        <p>Loading user data...</p>
      ) : userList.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Edit</th>
              <th>Delete</th>
              {/* Add more table headers as needed */}
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.phonenumber}</td>
                <td>
                  <button
                    className="edit-button"
                    onClick={() => updateUser(user._id)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </button>
                </td>
                {/* Add more table cells for additional user details */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No user data available.</p>
      )} 
      
      <button className="print-button" onClick={handlePrint}>
  Print Table
</button>
    </div>
    </div>
  );
}
