import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavBar from '../components/adminNavBar';
import './customerDetails.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { Calendar } from 'react-calendar';
import '../pages/orderAdmin.css'
import Reactdatepicker from '../components/Reactdatepicker';
import DatePicker from '../components/DatePicker'; 

export default function orderAdmin() {
  const [confirmedOrders, setConfirmedOrders] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  

  const handleDateSubmit = () => {
    const formattedDate = selectedDate.toISOString(); // Don't split by 'T'
    axios.get(`http://localhost:8000/order/confirmed-orders/${formattedDate}`)
      .then((response) => {
        setConfirmedOrders(response.data);
      })
      .catch((error) => {
        console.error('Error fetching confirmed orders:', error);
      });
  };
  
  

  useEffect(() => {
    handleDateSubmit(); // Fetch orders for today on initial load
  }, []);


  
  return (
    <div className='date-container'>
      <div><AdminNavBar/></div>

    
    
    
      
      <div className="customer-details-container centered-table">
        <br></br>
        <br></br>
        <h1 className='odetails'>
          <FontAwesomeIcon icon={faUsers} /> Order Details
        </h1>
        <Reactdatepicker date={selectedDate} onDateChange={setSelectedDate} onSubmit={handleDateSubmit} />
        <br></br>
       
       
          <table className="table ">
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
