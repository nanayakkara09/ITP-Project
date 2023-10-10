import React from 'react'
import './EmployeeDashboard.css';
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 import { Link, useNavigate } from "react-router-dom";
 import AdminNavBar from '../components/adminNavBar';
 import './EmployeeDashboard.css';
 import { useEffect,useState } from 'react';
 import axios from 'axios';

const EmployeeDashboard = () => {

  const [employeeCount, setEmployeeCount] = useState(0);

  useEffect(() => {
    const fetchEmployeeCount = async () => {
      try {
        const response = await axios.get('/employee/getEmployee');
        setEmployeeCount(response.data.length);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmployeeCount();
  }, []);

  return (
    <div className='main-container'>
      <AdminNavBar />
    <div className='main-title'>
        <h3>DASHBOARD</h3>
    </div>

    <div className='main-cards'>
        <div className='card'>
            <div className='card-inner'>
                <h3>Employees</h3>
                <BsFillArchiveFill className='card_icon'/>
            </div>
            <h1>{employeeCount}</h1>
        </div>
        <div className='card'>
            <div className='card-inner'>
                <h3>Teams</h3>
                <BsFillGrid3X3GapFill className='card_icon'/>
            </div>
            <h1>5</h1>
        </div>
        
    </div>

    <div className='charts'>
      
{/* charts */}
       

    </div>
    <div className="customer-admin-container">
      <div className="bg-image">
        <br></br>
        <br></br>
        <br></br>
        <div className="admin-box customer-list-box">
          <h3>Customer List</h3>

          <Link to="/getEmployee">Employee</Link>


        </div>
        <div className="admin-box feedbacks-box">
          <h3>Feedbacks</h3>
          <Link to="/getEmployeeShift">Employee Shifts</Link>
        </div>
        <div className="admin-box support-box">
          <h3>Support</h3>
          <Link to="/getEmployeeLeaveA">Employee Leaves</Link>
        </div>
        <div className="admin-box support-box">
          <h3>Support</h3>
          <Link to="/getEmployeeContact">Contacts</Link>
        </div>
        <div className="admin-box support-box">
          <h3>Support</h3>
          <Link to="/getEmployeeNews">Notices</Link>
        </div>
      </div>
    </div>
    
</div>

  )
}

export default EmployeeDashboard