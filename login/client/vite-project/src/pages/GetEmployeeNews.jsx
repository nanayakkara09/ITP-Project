
import axios from "axios";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'; // Assuming you have toast imported
import AdminNavBar from '../components/adminNavBar';

// Import your CSS file
import 'bootstrap/dist/css/bootstrap.min.css';

function GetEmployeeNews() {
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

  const deleteEmployeeNews = async (newsId) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this item?');

    if (shouldDelete) {
      try {
        await axios.delete(`/employee/deleteEmployeeNews/${newsId}`);
        toast.success('Item deleted successfully');
        setEmployeeNews(prevEmployeeNewses => prevEmployeeNewses.filter(news => news._id !== newsId));
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
            <Link to="/createEmployeeNews" className='btn btn-success mb-3'>Add +</Link>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Description</th>
                
              </tr>
            </thead>
            <tbody>
              {employeeNews.map((news) => (
                <tr key={news._id}>
                  <td>{news.description}</td>
                 
                 
                  <td>
                    
                    <button className='btn btn-danger' onClick={() => deleteEmployeeNews(news._id)}>Delete</button>
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

export default GetEmployeeNews;


