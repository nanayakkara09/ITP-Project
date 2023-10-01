
import React from 'react';
import './StoleCard.css'; // Create this CSS file for styling

const StoleCard = ({ id }) => {
  return (
    <div className="stole-card">
      <h3>Stole ID: {id}</h3>
      {/* Add more details about the stole as needed */}
    </div>
  );
};

export default StoleCard;
