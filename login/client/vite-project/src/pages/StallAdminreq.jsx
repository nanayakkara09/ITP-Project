import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StallAdminreq.css';

function StallAdminreq() {
  const [stallsadminreq, setStallsadminreq] = useState([]);

  useEffect(() => {
    axios.get('/stall/stalladminreq')
      .then((result) => {
        const dataWithIds = result.data;
        setStallsadminreq(dataWithIds);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`/stall/deleteStallreq/${id}`)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="stall-admin-req-container">
      <div className="stall-admin-req-list">
        {stallsadminreq.map((stalladminreq) => (
          <div className="stall-admin-req-item" key={stalladminreq._id}>
            <div className="stall-info">
              <p><strong>Stall Name:</strong> {stalladminreq.sName}</p>
              <p><strong>Cuisine Type:</strong> {stalladminreq.type}</p>
              <p><strong>First Name:</strong> {stalladminreq.fName}</p>
              <p><strong>Last Name:</strong> {stalladminreq.lName}</p>
              <p><strong>Email:</strong> {stalladminreq.email}</p>
              <p><strong>Phone Number:</strong> {stalladminreq.phone}</p>
            </div>
            <div className="stall-actions">
              <button className="btn btn-success">ACCEPT</button>
              <button className="btn btn-danger" onClick={(e) => handleDelete(stalladminreq._id)}>
                DELETE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StallAdminreq;
