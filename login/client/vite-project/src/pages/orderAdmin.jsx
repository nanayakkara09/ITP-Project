import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavBar from '../components/adminNavBar';
import './customerDetails.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { Calendar } from 'react-calendar';
import './orderAdmin.css'

export default function orderAdmin() {
  const [confirmedOrders, setConfirmedOrders] = useState([]);
  const [date, setDate] = useState(new Date());


  useEffect(() => {
    axios.get('http://localhost:8000/order/confirmed-orders')
      .then((response) => {
        setConfirmedOrders(response.data);
      })
      .catch((error) => {
        console.error('Error fetching confirmed orders:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <div><AdminNavBar/></div>
      

      <div className="customer-details-container">
        <br></br>
        <br></br>
        <h1>
          <FontAwesomeIcon icon={faUsers} /> Order Details
        </h1>
        <br></br>
       
       
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Item Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total Price</th>
                <th scope="col"> Ordered Date</th>
                
              </tr>
            </thead>
            <tbody>
  {confirmedOrders.map((order, index) => (
    <tr key={order._id}>
      <th scope="row">{index + 1}</th>
      <td>{order.name}</td>
      <td>{order.price}</td>
      <td>{order.quantity}</td>
      <td>{order.total}</td>
      <td>{order.date}</td>
    </tr>
  ))}
</tbody>
          </table>
       
        <button className="print-button" >
  Generate PDF
</button>
      </div>
      </div>
      
  )
}
