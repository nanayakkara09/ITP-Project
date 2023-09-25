import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import AdminNavBar from '../components/adminNavBar';
import './itemDetails.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';


export default function itemDetails() {
    const { itemcode } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItem = async () => {
          try {
            console.log(itemcode);
            const { data } = await axios.get(`/invDetails/getItem${itemcode}`);
            console.log(data)
            setItems(data);
      
            
               
               
             
          } catch (error) {
            console.log(error);
            toast.error('Failed to fetch item data');
          }
        };
      
        fetchItem();
      }, [itemcode]);

    return (
        <div>
          <div><AdminNavBar /></div>
          <div className='details-container'>
            <div className='title'>
              <h1 className="item-details-title">Item Details</h1>
            </div>
            <div className="item-list-buttons">
            <Link to="/itemlist" className="back">Back</Link>
            <Link to={`/addStock/${itemcode}`} className="add-stock-button">Add Stock</Link>
            </div>
            <div className="item-details-container">
              <table className="item-details-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Supplier</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                   {items.map((item, index) => ( 
                    <tr >
                      
                      <td>{item.date}</td>
                      <td>{item.supplier}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price}</td>
                      
            
                    </tr>
                   ))} 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
    
    
    