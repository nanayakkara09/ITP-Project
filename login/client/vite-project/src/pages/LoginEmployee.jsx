import React, { useState } from 'react';
import axios from 'axios'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const LoginEmployee = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const loginEmployee = async(e) => {
        e.preventDefault();
        // Add your login logic here
        const{email, password} = data
        try {
            const {data} = await axios.post('/employee/loginEmployee', {
                email,
                password
            })
            if(data.error){
                toast.error(data.error)
            }else{
                setData({});
                navigate('/employeeDashboardHome')
            }
        } catch (error) {
            
        }

    }

    return (
        <div>
            <form onSubmit={loginEmployee}>
                <div className='mb-2'>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        placeholder='Enter Email'
                        className={`form-control`}
                        name='email'
                        value={data.email}
                        onChange={(e) => setData({...data, email: e.target.value})}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        placeholder='Enter Password'
                        className='form-control'
                        name='password'
                        value={data.password}
                        onChange={(e) => setData({...data, password: e.target.value})}
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}

export default LoginEmployee;
