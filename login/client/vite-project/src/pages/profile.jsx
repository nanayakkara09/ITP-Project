import React, { useContext } from 'react';
import { UserContext } from '../../contex/userContex';
import { Link } from 'react-router-dom';
import './profile.css';

export default function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div className="profile-container">
      <div className="bg-image"></div>
      <div className="content">
        <h2>Profile</h2>
        {user ? (
          <>
            <div className="profile-section">
              <label className="profile-label">Name:</label>
              <span className="profile-value">{user.name}</span>
            </div>
            <div className="profile-section">
              <label className="profile-label">Address:</label>
              <span className="profile-value">{user.address}</span>
            </div>
            <div className="profile-section">
              <label className="profile-label">Phone Number:</label>
              <span className="profile-value">{user.phonenumber}</span>
            </div>
            <div className="profile-section">
              <label className="profile-label">Email:</label>
              <span className="profile-value">{user.email}</span>
            </div>
            <Link to="/edit" className="edit-button">
              Edit Account
            </Link>
          </>
        ) : (
          <p>You need to be logged in to view the profile. Please log in.</p>
        )}
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
