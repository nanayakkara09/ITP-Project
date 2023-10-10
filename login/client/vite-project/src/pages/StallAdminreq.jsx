import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './StallAdminreq.css';

function StallAdminreq() {
  const [stallsadminreq, setStallsadminreq] = useState([]);

  useEffect(() => {
    axios.get('/stall/stalladminreq')
      .then(result => {
        const dataWithIds = result.data;
        setStallsadminreq(dataWithIds);
      })
      .catch(err => console.log(err));
  }, []);

<<<<<<< Updated upstream
const handleAccept = (stalladminreq) => {
  axios.post(`/stall/acceptStallreq/${stalladminreq._id}`, stalladminreq)
    .then(res => {
      console.log(res);
      window.location.reload();
    })
    .catch(err => console.log(err));
}

  
=======
  const handleAccept = (stalladminreq) => {
    axios.put(`/stall/updateStallreq/${stalladminreq._id}`, { done: true }) // Use the correct route URL
      .then(res => {
        const updatedStalls = stallsadminreq.map(item => {
          if (item._id === stalladminreq._id) {
            return { ...item, done: true };
          }
          return item;
        });
        setStallsadminreq(updatedStalls);
      })
      .catch(err => console.log(err));
  };
>>>>>>> Stashed changes

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
              <th>Done</th>
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
                  {stalladminreq.done ? (
                    <span className='text-success'>Accepted</span>
                  ) : (
                    <>
                      <button
                        className='btn btn-success'
                        onClick={(e) => handleAccept(stalladminreq)}
                      >
                        ACCEPT
                      </button>
                      <button
                        className='btn btn-danger'
                        onClick={(e) => handleDelete(stalladminreq._id)}
                      >
                        DELETE
                      </button>
                    </>
                  )}
                </td>
                <td>{stalladminreq.done ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StallAdminreq;
