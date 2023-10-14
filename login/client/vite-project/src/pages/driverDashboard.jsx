import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./driverDashboard.css";

function DriverDashboard() {
  const [driver, setDriver] = useState(null);

  useEffect(() => {
    // Make an API request to fetch the driver's data
    fetch('/api/driver') // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API response contains the driver's name in a 'name' field
        setDriver(data.name);
      })
      .catch((error) => {
        console.error('Error fetching driver data:', error);
      });
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="driver-container">
      <div className="driver-bgh-image"></div>
      <div className="driver-content">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>Street Bitez</h1>
        {driver && <h1>Hi {driver}</h1>}
        <br></br>

        {/* Add a button to navigate to driverProfile */}
        <Link to="/driver-profile">
          <button>Profile</button>
        </Link>
        
        {/* Add other content here */}
      </div>
    </div>
  );
}

export default DriverDashboard;
