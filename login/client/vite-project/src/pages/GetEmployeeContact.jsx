
import axios from "axios";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'; // Assuming you have toast imported
import AdminNavBar from '../components/adminNavBar';

// Import your CSS file
import 'bootstrap/dist/css/bootstrap.min.css';

function GetEmployeeContact() {
  const [employeeContact, setEmployeeContact] = useState([]);

  useEffect(() => {
    const getEmployeeContact = async () => {
      try {
        const { data } = await axios.get('/employee/getEmployeeContact');
        setEmployeeContact(data);
      } catch (error) {
        console.error(error);
        toast.error('Failed to fetch employee data');
      }
    };

    getEmployeeContact();
  }, []);

  const deleteEmployeeContact = async (contactId) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this item?');

    if (shouldDelete) {
      try {
        await axios.delete(`/employee/deleteEmployeeContact/${contactId}`);
        toast.success('Item deleted successfully');
        setEmployeeContact(prevEmployeeContacts => prevEmployeeContacts.filter(contact => contact._id !== contactId));
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
          
          <table className="table">
            <thead>
              <tr>
                <th>Email</th>
                <th>Description</th>
                
              </tr>
            </thead>
            <tbody>
              {employeeContact.map((contact) => (
                <tr key={contact._id}>
                  <td>{contact.email}</td>
                  <td>{contact.description}</td>
                 
                  <td>
                    
                    <button className='btn btn-danger' onClick={() => deleteEmployeeContact(contact._id)}>Delete</button>
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

export default GetEmployeeContact;


