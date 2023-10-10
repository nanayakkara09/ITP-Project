import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import AdminNavBar from '../components/adminNavBar';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function GetEmployeeShift() {
  const [employeeShift, setEmployeeShift] = useState([]);

  useEffect(() => {
    const getEmployeeShift = async () => {
      try {
        const { data } = await axios.get('/employee/getEmployeeShift');
        setEmployeeShift(data);
      } catch (error) {
        console.error(error);
        toast.error('Failed to fetch employee data');
      }
    };

    getEmployeeShift();
  }, []);

  const deleteEmployeeShift = async (shiftId) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this item?');

    if (shouldDelete) {
      try {
        await axios.delete(`/employee/deleteEmployeeShift/${shiftId}`);
        toast.success('Item deleted successfully');
        setEmployeeShift(prevShifts => prevShifts.filter(shift => shift._id !== shiftId));
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
            <Link to="/createEmployeeShift" className='btn btn-success mb-3'>Add +</Link>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Team</th>
                <th>Date</th>
                <th>Time</th>
                <th>Venue</th>
                <th>Task</th>
                <th>Status</th> {/* Changed 'Done' to 'Status' */}
              </tr>
            </thead>
            <tbody>
              {employeeShift.map((shift) => (
                <tr key={shift._id}>
                  <td>{shift.team}</td>
                  <td>{shift.date}</td>
                  <td>{shift.time}</td>
                  <td>{shift.venue}</td>
                  <td>{shift.task}</td>
                  <td>
                    {shift.done ? (
                      <span className="text-success">Completed</span>
                    ) : (
                      <span className="text-warning">Incomplete</span>
                    )}
                  </td>
                  <td>
                    <Link to={`/updateEmployeeShift/${shift._id}`} className='btn btn-success mr-2'>Update</Link>
                    <button className='btn btn-danger' onClick={() => deleteEmployeeShift(shift._id)}>Delete</button>
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

export default GetEmployeeShift;
