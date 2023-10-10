import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-hot-toast';
import AdminNavBar from '../components/adminNavBar';

const CreateEmployeeLeave = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: '',
    email: '',
    type: 'halfday',
    reason: '',
    time:'',
    startDate: '', // Add startDate field
    endDate: '',   // Add endDate field
    leaveDays: 0,  // Add leaveDays field
  });

  useEffect(() => {
    if (data.startDate && data.endDate) {
      // Calculate the number of leave days between the selected dates
      const start = new Date(data.startDate);
      const end = new Date(data.endDate);
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      // Update the leaveDays field in the state
      setData({ ...data, leaveDays: diffDays + 1 });
    }
  }, [data.startDate, data.endDate]);

  const createEmployeeLeave = async (e) => {
    e.preventDefault();

    const { name, email, type, reason, time, startDate, endDate } = data;

    try {
      const response = await axios.post('/employee/createEmployeeLeave', {
        name,
        email,
        type,
        reason,
        time,
        startDate: type === 'multipledays' ? startDate : null,
        endDate: type === 'multipledays' ? endDate : null,
      });

      if (response.error) {
        toast.error(response.error);
      } else {
        setData({
          name: '',
          email: '',
          type: 'halfday',
          time:'',
          reason: '',
          startDate: '',
          endDate: '',
          leaveDays: 0,
        });
        toast.success('Leave request created successfully');
        navigate('/employeeDashboardHome')
        
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container d-flex justify-content-center align-items-center min-vh-100'>
      <AdminNavBar />
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={createEmployeeLeave}>
          <h2>Create Employee Leave</h2>
          <div className='mb-2'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              placeholder='Enter Name'
              className='form-control'
              name='name'
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              placeholder='Enter Email'
              className='form-control'
              name='email'
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='type'>Leave Type</label>
            <select
              name='type'
              className='form-control'
              value={data.type}
              onChange={(e) => setData({ ...data, type: e.target.value })}
            >
              <option value='halfday'>Half Day</option>
              <option value='fullday'>Full Day</option>
              <option value='multipledays'>Multiple Days</option>
            </select>
          </div>
          {data.type === 'halfday' && (
             <div className='mb-2'>
             <label htmlFor='team'>Time</label>
            <select
            name='time'
            className='form-control'
            value={data.time}
            onChange={(e) => setData({ ...data, time: e.target.value })}
          >
            <option value='daytime'>Day Time</option>
            <option value='fullday'>Night Time</option>
          </select>
          </div>
          )}
          {data.type === 'fullday' && (
            <div className='mb-2'>
              <label htmlFor='date'>Date</label>
              <input
                type='date'
                className='form-control'
                name='date'
                value={data.startDate}
                onChange={(e) => setData({ ...data, startDate: e.target.value })}
              />
            </div>
          )}
          {data.type === 'multipledays' && (
            <div>
              <div className='mb-2'>
                <label htmlFor='startDate'>Start Date</label>
                <input
                  type='date'
                  className='form-control'
                  name='startDate'
                  value={data.startDate}
                  onChange={(e) => setData({ ...data, startDate: e.target.value })}
                />
              </div>

              <div className='mb-2'>
                <label htmlFor='endDate'>End Date</label>
                <input
                  type='date'
                  className='form-control'
                  name='endDate'
                  value={data.endDate}
                  onChange={(e) => setData({ ...data, endDate: e.target.value })}
                />
              </div>

              <div className='mb-2'>
                <p>Leave Days: {data.leaveDays}</p>
              </div>
            </div>
          )}
          <div className='mb-2'>
            <label htmlFor='reason'>Reason</label>
            <input
              type='text'
              placeholder='Enter Reason'
              className='form-control'
              name='reason'
              value={data.reason}
              onChange={(e) => setData({ ...data, reason: e.target.value })}
            />
          </div>
          <button className='btn btn-success'>Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployeeLeave;
