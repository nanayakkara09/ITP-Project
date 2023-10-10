import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {toast} from 'react-hot-toast'
import AdminNavBar from '../components/adminNavBar';

const CreateEmployeeShift = (e) => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        team: '',
        date: '',
        time: '',
        venue: '',
        task: '',
        
    });

    

    

    const createEmployeeShift = async (e) => {
        e.preventDefault();

       // Create a FormData object
 const { team,date,time,venue,task,done } = data;
        try {
           const data = await axios.post('/employee/createEmployeeShift', { team,date,time,venue,task,  });
           if(data.error) {
            toast.error(data.error)
           }else{
            setData({})
            toast.success('Login Successful.Welcome')
            navigate('/getEmployeeShift'); // Navigate to the employee list page
           }
           
        } catch (error) {
            console.error(error);
        }
    };

    
    return (
        <div className='container d-flex justify-content-center align-items-center min-vh-100'>
            <AdminNavBar />
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={createEmployeeShift}>
                    <h2>Create Employee</h2>
                    <div className='mb-2'>
                        <label htmlFor='team'>Team</label>
                        <select
                            name='team'
                            className='form-control'
                            value={data.team}
                            onChange={(e) => setData({...data, team:e.target.value})}
                        >
                            <option value='teamA'>Team A</option>
                            <option value='teamB'>Team B</option>
                            <option value='teamC'>Team C</option>
                            <option value='teamD'>Team D</option>
                            <option value='teamE'>Team E</option>
                        </select>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='date'>Date</label>
                        <input
                            type='date'
                            placeholder='Enter Date'
                            className='form-control'
                            name='date'
                            value={data.date}
                            onChange={(e) => setData({...data, date:e.target.value})}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='time'>Time</label>
                        <input
                            type='time'
                            placeholder='Enter Time'
                            className='form-control'
                            name='time'
                            value={data.time}
                            onChange={(e) => setData({...data, time:e.target.value})}
                        />
                       
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='venue'>Venue</label>
                        <input
                            type='text'
                            placeholder='Enter Venue'
                            className='form-control'
                            name='venue'
                            value={data.venue}
                            onChange={(e) => setData({...data, venue:e.target.value})}
                        />
                       
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='task'>Task</label>
                        <input
                            type='text'
                            placeholder='Enter Task'
                            className='form-control'
                            name='task'
                            value={data.task}
                            onChange={(e) => setData({...data, task:e.target.value})}
                        />
                       
                    </div>
                    
                    <button className='btn btn-success'>Create</button>
                </form>
            </div>
        </div>
    );
};

export default CreateEmployeeShift;



