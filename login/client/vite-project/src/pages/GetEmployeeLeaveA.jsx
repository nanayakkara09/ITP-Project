import axios from "axios";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'; // Assuming you have toast imported
import AdminNavBar from '../components/adminNavBar';

// Import your CSS file
import 'bootstrap/dist/css/bootstrap.min.css';

function GetEmployeeLeaveA() {
  const [employeeLeave, setEmployeeLeave] = useState([]);

  useEffect(() => {
    const getEmployeeLeave = async () => {
      try {
        const { data } = await axios.get('/employee/getEmployeeLeave');
        setEmployeeLeave(data);
      } catch (error) {
        console.error(error);
        toast.error('Failed to fetch employee data');
      }
    };

    getEmployeeLeave();
  }, []);

  const deleteEmployeeLeave = async (leaveId) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this item?');

    if (shouldDelete) {
      try {
        await axios.delete(`/employee/deleteEmployeeLeave/${leaveId}`);
        toast.success('Item deleted successfully');
        setEmployeeLeave(prevEmployeeLeaves => prevEmployeeLeaves.filter(leave => leave._id !== leaveId));
      } catch (error) {
        console.error(error);
        toast.error('Failed to delete item');
      }
    }
  };

  const completeLeave = async (leaveId) => {
    try {
      await axios.put(`/employee/completeEmployeeLeave/${leaveId}`, { done: true });
      toast.success('Leave marked as completed');
      setEmployeeLeave((prevLeaves) =>
        prevLeaves.map((leave) =>
          leave._id === leaveId ? { ...leave, done: true } : leave
        )
      );
    } catch (error) {
      console.error(error);
      toast.error('Failed to mark leave as completed');
    }
  };

 

  return (
    <div className=''>
      <AdminNavBar />
      <div className='d-flex justify-content-center align-items-center'></div>
      <div className='d-flex vh-100 justify-content-center align-items-center'>
        <div className='w-100 p-3'>
          <div className="mb-3">
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Type</th>
                <th>Time</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Reason</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>
              {employeeLeave.map((leave) => (
                <tr key={leave._id}>
                  <td>{leave.name}</td>
                  <td>{leave.email}</td>
                  <td>{leave.type}</td>
                  <td>{leave.time}</td>
                  <td>{leave.startDate}</td>
                  <td>{leave.endDate}</td>
                  <td>{leave.reason}</td>
                  <td>
                    {leave.done ? (
                      <button className='btn btn-danger mr-2' disabled>
                        Completed
                      </button>
                    ) : (
                      <button
                        className='btn btn-success mr-2'
                        onClick={() => completeLeave(leave._id)}
                      >
                        Complete
                      </button>
                    )}
                  </td>
                  <td>
                   
                    <button className='btn btn-danger' onClick={() => deleteEmployeeLeave(leave._id)}>Delete</button>
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

export default GetEmployeeLeaveA;
