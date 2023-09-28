import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function StallAdminreq() {
  const [stallsadminreq, setStallsadminreq] = useState([]);

  useEffect(() => {
    axios.get('./stall/stalladminreq')
      .then(result => setStallsadminreq(result.data)) // Update state variable
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <table className='table'>
          <thead>
            <tr>
              <th>Stall Name</th>
              <th>Cuisine Type</th> {/* Fixed typo in header */}
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {/* Use stallsadminreq state variable here */}
            {
              stallsadminreq.map((stalladminreq, index) => {
                return <tr key={stalladminreq.id}>
                  <td>{stalladminreq.sName}</td>
                  <td>{stalladminreq.type}</td>
                  <td>{stalladminreq.fName}</td>
                  <td>{stalladminreq.lName}</td>
                  <td>{stalladminreq.email}</td>
                  <td>{stalladminreq.phone}</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StallAdminreq;
