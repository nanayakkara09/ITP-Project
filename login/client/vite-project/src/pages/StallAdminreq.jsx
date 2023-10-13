import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './StallAdminreq.css'


function StallAdminreq() {
  const [stallsadminreq, setStallsadminreq] = useState([]);

  useEffect(() => {
    axios.get('/stall/stalladminreq') 
      .then(result => {        
        const dataWithIds = result.data;
        setStallsadminreq(dataWithIds);
      })
      .catch(err => console.log(err))
  }, []);
    
  const handleDelete = (id) => {
    axios.delete(`/stall/deleteStallreq/${id}`) 
        .then(res => {
            console.log(res);
            window.location.reload();
        })
        .catch(err => console.log(err));
}

const handleAccept = (stalladminreq) => {
  axios
    .post(`/stall/acceptStallreq/${stalladminreq._id}`, stalladminreq)
    .then((res) => {
      // Assuming res.data contains the accepted stall data
      console.log(res);
      sendEmail(
        stalladminreq.email,
        'Stall Request Accepted',
        'Your stall request has been accepted. You can now start using our platform.'
      );
      window.location.reload();
    })
    .catch((err) => console.log(err));
};
 

  return (
    <div className='d-flex vh-100 justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <table className='table'>
          <thead>
            <tr>
              <th>Stall Name</th>
              <th>Cuisine Type</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Actions</th>
              
            </tr>
          </thead>
          <tbody>
            {stallsadminreq.map((stalladminreq) => (
              <tr key={stalladminreq._id}>
                <td>{stalladminreq.sName}</td>
                <td>{stalladminreq.type}</td>
                <td>{stalladminreq.fName}</td>
                <td>{stalladminreq.lName}</td>
                <td>{stalladminreq.email}</td>
                <td>{stalladminreq.phone}</td>
                
                <td>
                          <button >ACCEPT</button>
                          <button className='btn btn-danger' 
                        onClick={(e) => handleDelete(stalladminreq._id)}>DELETE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StallAdminreq;