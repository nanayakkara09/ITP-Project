import { EmployeeContext } from '../../contex/EmployeeContext';
import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import AdminNavBar from '../components/adminNavBar';
import Calendar from 'react-calendar'; // Import the calendar component
import 'react-calendar/dist/Calendar.css'; // Import calendar styles


const EmployeeDashboardHome = () => {
  const { employee } = useContext(EmployeeContext);

  const cardStyles = {
    borderRadius: '.5rem',
  };

  const avatarStyles = {
    width: '80px',
  };

  const sectionStyles = {
    backgroundColor: '#f4f5f7',
  };

  const [employeeNews, setEmployeeNews] = useState([]);

  useEffect(() => {
    const getEmployeeNews = async () => {
      try {
        const { data } = await axios.get('/employee/getEmployeeNews');
        setEmployeeNews(data);
      } catch (error) {
        console.error(error);
        toast.error('Failed to fetch employee data');
      }
    };

    getEmployeeNews();
  }, []);

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

  const completeShift = async (shiftId) => {
    try {
      await axios.put(`/employee/completeEmployeeShift/${shiftId}`, { done: true });
      toast.success('Shift marked as completed');
      setEmployeeShift((prevShifts) =>
        prevShifts.map((shift) =>
          shift._id === shiftId ? { ...shift, done: true } : shift
        )
      );
    } catch (error) {
      console.error(error);
      toast.error('Failed to mark shift as completed');
    }
  };

  const [employeeLeave, setEmployeeLeave] = useState([]);

  useEffect(() => {
    const getEmployeeLeave = async () => {
      try {
        const { data } = await axios.get('employee/getEmployeeLeave');
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

  const [data, setData] = useState({
    email: '',
    description: '',
  });

  const createEmployeeContact = async (e) => {
    e.preventDefault();

    const { email, description } = data;
    try {
      const data = await axios.post('/employee/createEmployeeContact', { email, description });
      if (data.error) {
        toast.error(data.error)
      } else {
        setData({ email: '', description: '' })
        toast.success('Login Successful. Welcome')
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Filter employee shifts by employee.team value
  const filteredEmployeeShift = employeeShift.filter(
    (shift) => shift.team === (employee ? employee.team : '')
  );

  const filteredEmployeeLeave = employeeLeave.filter(
    (leave) => leave.email === (employee ? employee.email : '')
  );

  return (
    <section className="vh-100" style={sectionStyles}>
      <AdminNavBar />
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="card mb-3" style={cardStyles}>
              <div className="row g-0">
                <div
                  className="col-md-4 gradient-custom text-center text-white"
                  style={{
                    borderTopLeftRadius: '.5rem',
                    borderBottomLeftRadius: '.5rem',
                  }}
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="profilePhoto"
                    className="my-5"
                    style={avatarStyles}
                  />
                  {!!employee && <h6 className="text-black">Hi {employee.name}!</h6>}
                  <p className="card-text">Web Designer</p>
                  <i className="far fa-edit mb-5"></i>
                </div>
                <div className="col-md-8">
                  <div className="card-body p-4">
                    <h6 className="card-title">Information</h6>
                    <hr className="mt-0 mb-4" />
                    <div className="row pt-1">
                      <div className="col-6 mb-3">
                        <h6>Email</h6>
                        <p className="text-muted">{employee ? employee.email : ''}</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Phone</h6>
                        <p className="text-muted">{employee ? employee.phoneNumber : ''}</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>IdNumber</h6>
                        <p className="text-muted">{employee ? employee.idNumber : ''}</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Team</h6>
                        <p className="text-muted">{employee ? employee.team : ''}</p>
                      </div>
                    </div>

                    <h6 className="card-title">Social Media</h6>
                    <hr className="mt-0 mb-4" />
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Employee News */}
        <div className='d-flex justify-content-center align-items-center min-vh-50'>
          <div className='container mt-4'>
          <hr className="mt-0 mb-4" />
            <h2 className="text-center">Notices</h2>
            <hr className="mt-0 mb-4" />
            {employeeNews.length > 0 ? (
              <div className="alert alert-danger" role="alert">
                This is an important notice.
                {employeeNews.map((news) => (
                  <p key={news._id}>
                    {news.description}
                  </p>
                ))}
              </div>
            ) : (
              <p>No employee news available.</p>
            )}
          </div>
        </div>

        {/* Employee Shifts */}
            
          <div className='d-flex justify-content-center align-items-center'>
            <div className='w-100 p-3'>
            <hr className="mt-0 mb-4" />
            <h2 className="text-center">Employee Shifts</h2>
            <hr className="mt-0 mb-4" />
              <table className="table">
                <thead>
                  <tr>
                    <th>Team</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Venue</th>
                    <th>Task</th>
                    <th>Done</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEmployeeShift.map((shift) => (
                    <tr key={shift._id}>
                      <td>{shift.team}</td>
                      <td>{shift.date}</td>
                      <td>{shift.time}</td>
                      <td>{shift.venue}</td>
                      <td>{shift.task}</td>
                      <td>
                        {shift.done ? (
                          <button className='btn btn-danger mr-2' disabled>
                            Completed
                          </button>
                        ) : (
                          <button
                            className='btn btn-success mr-2'
                            onClick={() => completeShift(shift._id)}
                          >
                            Complete
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
  
        

       
         
          <div className='d-flex min-vh-75 justify-content-center align-items-center'>
            <div className='w-100 p-3'>
            <hr className="mt-0 mb-4" />
            <h2 className="text-center">Employee Leaves</h2>
            <hr className="mt-0 mb-4" />
              <div className="mb-3">
                <Link to="/createEmployeeLeave" className='btn btn-success mb-3'>Add +</Link>
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
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEmployeeLeave.map((leave) => (
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
                          <span className="text-success">Completed</span>
                        ) : (
                          <span className="text-warning">Incomplete</span>
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
        

          <div className='container'>
  <div className='row justify-content-center align-items-center'>
  <hr className="mt-0 mb-4" />
  <h2 className="text-center">Contact</h2>
  <hr className="mt-0 mb-4" />
    <div className='col-md-6'>
      <div className='w-100 bg-white rounded p-3'>
        <form onSubmit={createEmployeeContact}>
          
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
            <label htmlFor='description'>Description</label>
            <textarea
              rows="10"
              placeholder='Enter Description'
              className='form-control'
              name='description'
              value={data.description}
              onChange={(e) => setData({ ...data, description: e.target.value })}
            />
          </div>
          <button className='btn btn-success'>Create</button>
        </form>
      </div>
    </div>
    <div className='col-md-6'>
      <img
        src='https://placekitten.com/400/400' // Replace with your image URL
        alt='Contact Image'
        className='img-fluid rounded'
      />
    </div>
  </div>
</div>

<div className='row justify-content-center align-items-center'>
  <hr className="mt-0 mb-4" />
  <h2 className="text-center">Calender</h2>
  <hr className="mt-0 mb-4" />
  {/* Add the Calendar component here */}
  <Calendar
  tileClassName={({ date }) => {
    // Check if any shift date matches the current date
    const isShiftDate = filteredEmployeeShift.some(
      (shift) =>
        new Date(shift.date).toDateString() === date.toDateString()
    );

    // Apply Bootstrap classes to mark the date if it's a shift date
    return isShiftDate ? 'bg-primary text-white' : '';
  }}
/>

  </div>

</div>
      
    </section>
  );
};

export default EmployeeDashboardHome;
