import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import AdminNavBar from '../components/adminNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function GetEmployee() {
  const [employee, setEmployee] = useState([]);
  const [employeeCount, setEmployeeCount] = useState(0); // Initialize count to 0

  useEffect(() => {
    const getEmployee = async () => {
      try {
        const { data } = await axios.get('/employee/getEmployee');
        setEmployee(data);
        setEmployeeCount(data.length); // Count and set the employee count
      } catch (error) {
        console.error(error);
        toast.error('Failed to fetch employee data');
      }
    };

    getEmployee();
  }, []);

  const deleteEmployee = async (employeeId) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this item?');

    if (shouldDelete) {
      try {
        await axios.delete(`/employee/deleteEmployee/${employeeId}`);
        toast.success('Item deleted successfully');
        setEmployee(prevEmployees => prevEmployees.filter(emp => emp._id !== employeeId));
        setEmployeeCount(prevCount => prevCount - 1); // Decrement the count when an employee is deleted
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
            <Link to="/createEmployee" className='btn btn-success mb-3'>Add +</Link>
          </div>
          <h3>Total Employees: {employeeCount}</h3> {/* Display the employee count */}
          <table className="table">
            <thead>
              <tr>
            
                <th>Name</th>
                <th>Email</th>
                <th>ID Number</th>
                <th>Phone Number</th>
                <th>Team</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employee.map((employee) => (
                <tr key={employee._id}>
                 
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.idNumber}</td>
                  <td>{employee.phoneNumber}</td>
                  <td>{employee.team}</td>
                  <td>
                    <Link to={`/updateEmployee/${employee._id}`} className='btn btn-success mr-2'>Update</Link>
                    <button className='btn btn-danger' onClick={() => deleteEmployee(employee._id)}>Delete</button>
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

export default GetEmployee;
