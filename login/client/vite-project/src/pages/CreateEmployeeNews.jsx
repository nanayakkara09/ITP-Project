import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {toast} from 'react-hot-toast'
import AdminNavBar from '../components/adminNavBar';

const CreateEmployeeNews = (e) => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        email: '',
        description: '',
        
    });

    

    

    const createEmployeeNews = async (e) => {
        e.preventDefault();

       // Create a FormData object
 const { description } = data;
        try {
           const data = await axios.post('/employee/createEmployeeNews', {  description });
           if(data.error) {
            toast.error(data.error)
           }else{
            setData({})
            toast.success('Login Successful.Welcome')
            navigate('/getEmployeeNews'); // Navigate to the employee list page
           }
           
        } catch (error) {
            console.error(error);
        }
    };

    
    return (
        <div className='container d-flex justify-content-center align-items-center min-vh-100'>
            <AdminNavBar />
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={createEmployeeNews}>
                    <h2>Create Employee</h2>

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

export default CreateEmployeeNews;



