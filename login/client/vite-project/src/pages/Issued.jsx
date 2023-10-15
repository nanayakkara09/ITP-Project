import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import AdminNavBar from '../components/adminNavBar';
//import './Issued.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';


export default function Issued() {
    const [stalls, setStalls] = useState([]);

    useEffect(() => {
        const fetchItemList = async () => {
          try {
            
                const { data } = await axios.get('/stall/getIssuedStalls');
                console.log(data)
                setStalls(data);
          } catch (error) {
            console.error(error);
            toast.error('Failed to fetch inventory data');
            //setIsLoading(false);
          }
        };
    
        fetchItemList();
      }, []);

    return (
        <div className="issued-container">
            <AdminNavBar />
            {stalls.map((item, index) => (
            <div className="card h-100">

                <div className="card-body">
                    <h5 className="card-title">{item.stallId}</h5>
                    <p className="card-text">{item.stallName}</p>
                </div>
                <div className="card-footer">
                      <Link to={`/IssuedDetails/${item.stallId}`} className="btn btn-primary">
            View Stall
          </Link> 
                </div>
            </div>
               ))}
        </div>
      
    );



}
