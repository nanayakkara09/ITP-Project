import axios from "axios";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'; // Assuming you have toast imported
import AdminNavBar from '../components/adminNavBar';

// Import your CSS file
import 'bootstrap/dist/css/bootstrap.min.css';

function GetEmployeeSalary() {
  const [employeeSalary, setEmployeeSalary] = useState([]);

  useEffect(() => {
    const getEmployeeSalary = async () => {
      try {
        const { data } = await axios.get('/employee/getEmployeeSalary');
        setEmployeeSalary(data);
      } catch (error) {
        console.error(error);
        toast.error('Failed to fetch employee salary data');
      }
    };

    getEmployeeSalary();
  }, []);

  const deleteEmployeeSalary = async (salaryId) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this item?');

    if (shouldDelete) {
      try {
        await axios.delete(`/employee/deleteEmployeeSalary/${salaryId}`);
        toast.success('Item deleted successfully');
        setEmployeeSalary(prevSalaries => prevSalaries.filter(salary => salary._id !== salaryId));
      } catch (error) {
        console.error(error);
        toast.error('Failed to delete item');
      }
    }
  };

  return (
    <div className=''>
      <AdminNavBar />
      <div className='d-flex justify-content-center align-items-center'></div>
      <div className='d-flex vh-100 justify-content-center align-items-center'>
        <div className='w-100 p-3'>
          <div className="mb-3">
            <Link to="/createEmployeeSalary" className='btn btn-success mb-3'>Add +</Link>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>ID Number</th>
                <th>Phone Number</th>
                <th>Team</th>
                <th>Day Salary</th>
                <th>Working Days</th>
                <th>Leave Days</th>
                <th>Calculated Salary</th>
              </tr>
            </thead>
            <tbody>
              {employeeSalary.map((salary) => (
                <tr key={salary._id}>
                  <td>{salary.name}</td>
                  <td>{salary.email}</td>
                  <td>{salary.idNumber}</td>
                  <td>{salary.phoneNumber}</td>
                  <td>{salary.team}</td>
                  <td>{salary.daySalary}</td>
                  <td>{salary.wDays}</td>
                  <td>{salary.lDays}</td>
                  <td>{salary.calculatedSalary}</td>
                  <td>
                    <button className='btn btn-danger' onClick={() => deleteEmployeeSalary(salary._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default GetEmployeeSalary;
