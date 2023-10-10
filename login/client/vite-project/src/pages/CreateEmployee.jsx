import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-hot-toast';
import AdminNavBar from '../components/adminNavBar';

const CreateEmployee = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: '',
    email: '',
    idNumber: '',
    phoneNumber: '',
    team: '',
    password: '',
    cPassword: '',
  });

  const [emailValid, setEmailValid] = useState(true);
  const [phoneNumberValid, setPhoneNumberValid] = useState(true);
  const [idNumberValid, setIdNumberValid] = useState(true);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const [profilePhotoFile, setProfilePhotoFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfilePhotoFile(file);
  };

  const createEmployee = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (data.password !== data.cPassword) {
      setPasswordMatch(false);
      return;
    }

    // Check if phone number is valid
    if (data.phoneNumber.length !== 10 || !/^[0-9]+$/.test(data.phoneNumber)) {
      setPhoneNumberValid(false);
      return;
    }

    // Check if ID number is valid
    if (data.idNumber.length !== 10 && data.idNumber.length !== 12) {
      setIdNumberValid(false);
      return;
    }

    // Check if email is valid
    if (!validateEmail(data.email)) {
      setEmailValid(false);
      return;
    }

    // Create a FormData object
    const { name, email, idNumber, phoneNumber, team, password, cPassword } = data;
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('idNumber', idNumber);
    formData.append('phoneNumber', phoneNumber);
    formData.append('team', team);
    formData.append('password', password);
    formData.append('cPassword', cPassword);
    formData.append('profilePhoto', profilePhotoFile);

    try {
      const response = await axios.post('/employee/createEmployee', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the content type to multipart/form-data
        },
      });

      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        setData({});
        toast.success('Employee created successfully.');
        navigate('/getEmployee');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <div className='container d-flex justify-content-center align-items-center min-vh-100'>
      <AdminNavBar />
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={createEmployee}>
          <h2>Create Employee</h2>
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
              className={`form-control ${!emailValid ? 'is-invalid' : ''}`}
              name='email'
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            {!emailValid && <div className='invalid-feedback'>Invalid email address</div>}
          </div>
          <div className='mb-2'>
            <label htmlFor='idNumber'>ID Number</label>
            <input
              type='text'
              placeholder='Enter ID Number'
              className={`form-control ${!idNumberValid ? 'is-invalid' : ''}`}
              name='idNumber'
              value={data.idNumber}
              onChange={(e) => setData({ ...data, idNumber: e.target.value })}
            />
            {!idNumberValid && (
              <div className='invalid-feedback'>ID number must have 10 or 12 characters</div>
            )}
          </div>
          <div className='mb-2'>
            <label htmlFor='phoneNumber'>Phone Number</label>
            <input
              type='number'
              placeholder='Enter Phone Number'
              className={`form-control ${!phoneNumberValid ? 'is-invalid' : ''}`}
              name='phoneNumber'
              value={data.phoneNumber}
              onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
            />
            {!phoneNumberValid && <div className='invalid-feedback'>Phone number must have 10 digits</div>}
          </div>
          <div className='mb-2'>
            <label htmlFor='team'>Team</label>
            <select
              name='team'
              className='form-control'
              value={data.team}
              onChange={(e) => setData({ ...data, team: e.target.value })}
            >
              <option value='teamA'>Team A</option>
              <option value='teamB'>Team B</option>
              <option value='teamC'>Team C</option>
              <option value='teamD'>Team D</option>
              <option value='teamE'>Team E</option>
            </select>
          </div>
          <div className='mb-2'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              placeholder='Enter Password'
              className='form-control'
              name='password'
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='cPassword'>Confirm Password</label>
            <input
              type='password'
              placeholder='Confirm Password'
              className='form-control'
              name='cPassword'
              value={data.cPassword}
              onChange={(e) => setData({ ...data, cPassword: e.target.value })}
            />
            {!passwordMatch && <p className='text-danger'>Passwords do not match</p>}
          </div>
          <div className='mb-2'>
            <label htmlFor='profilePhoto'>Profile Photo</label>
            <input
              type='file'
              className='form-control'
              name='profilePhoto'
              onChange={(e) => handleFileChange(e)}
            />
          </div>
          <button className='btn btn-success'>Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployee;
