import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {toast} from 'react-hot-toast'
import AdminNavBar from '../components/adminNavBar';

const CreateEmployeeContact = (e) => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        
        description: '',
        
    });

    

    

    const createEmployeeContact = async (e) => {
        e.preventDefault();

       // Create a FormData object
 const { email,description } = data;
        try {
           const data = await axios.post('/employee/createEmployeeContact', {  email,description });
           if(data.error) {
            toast.error(data.error)
           }else{
            setData({})
            toast.success('Login Successful.Welcome')
            navigate('/getEmployeeContact'); // Navigate to the employee list page
           }
           
        } catch (error) {
            console.error(error);
        }
    };

    
    return (
        <div className='container d-flex justify-content-center align-items-center min-vh-100'>
            <AdminNavBar />
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={createEmployeeContact}>
                    <h2>Create Employee</h2>
                    <div className='mb-2'>
                        <label htmlFor='date'>Email</label>
                        <input
                            type='email'
                            placeholder='Enter Date'
                            className='form-control'
                            name='date'
                            value={data.email}
                            onChange={(e) => setData({...data, email:e.target.value})}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='time'>Description</label>
                        <input
                            type='text'
                            placeholder='Enter Time'
                            className='form-control'
                            name='time'
                            value={data.description}
                            onChange={(e) => setData({...data, description:e.target.value})}
                        />
                       
                    </div>
                    
                    
                    <button className='btn btn-success'>Create</button>
                </form>
            </div>
        </div>
    );
};

export default CreateEmployeeContact;



