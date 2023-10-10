import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CreatedStallsAdminView() {
  const [createdStalls, setCreatedStalls] = useState([]);

  useEffect(() => {
    axios.get('/stall/createdStalls')
      .then(result => {
        setCreatedStalls(result.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <div className="mt-5"> {/* Add margin-top to create space between the title and the navigation bar */}
        <h4 className="mb-4 font-weight-bold" style={{ color: 'blue' }}>Created Stalls Details</h4> {/* Apply bold font weight and change font color */}
      </div>

      <div className="table-responsive p-3" style={{ fontSize: '1.2rem', margin: '20px' }}>
        <table className="table table-bordered table-striped rounded" style={{ backgroundColor: '#E1D4FF', margin: '20px' }}>
          <thead className="thead-light" style={{ backgroundColor: '#B18BFF' }}>
            <tr>
              <th>Stall ID</th>
              <th>Stall Name</th>
              <th>Cuisine Type</th>
              <th>Owner's Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {createdStalls.map((stall) => (
              <tr key={stall.id}>
                <td>{stall.stallId}</td>
                <td>{stall.stallName}</td>
                <td>{stall.type}</td>
                <td>{stall.fName}</td>
                <td>{stall.email}</td>
                <td>{stall.phonenumber}</td>
                <td>{stall.payment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CreatedStallsAdminView;
