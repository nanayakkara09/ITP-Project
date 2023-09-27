import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function StallAdminreq() {
    const [stalladminreq, setStallAdminreq] = useState([{
        StallName: "ABCD",
        CusineType: "abcd",
        FirstName: "Sandithi",
        LastName:"Wanniarachchi",
        Email:"sandigmail.com",
        PhoneNumber:"0704437719"
    }])
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <table className='table'>
                <thead>
                    <tr>
                    <th>Stall Name</th>
                    <th>Cusine type</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    
                    </tr>
                </thead>
                <tbody>
                     {
                        stalladminreq.map((stalladminreq) => {
                            return <tr>
                                <td>{stalladminreq.StallName}</td>
                                <td>{stalladminreq.CusineType}</td>
                                <td>{stalladminreq.FirstName}</td>
                                <td>{stalladminreq.LastName}</td>
                                <td>{stalladminreq.Email}</td>
                                <td>{stalladminreq.PhoneNumber}</td>
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
