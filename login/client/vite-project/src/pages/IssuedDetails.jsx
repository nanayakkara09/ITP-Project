import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import AdminNavBar from '../components/adminNavBar';
//import './IssuedData.css'; // Import the CSS file for styling
import { Link, useLocation } from 'react-router-dom';

export default function itemlist(props) {
 /*  
  
  const location = useLocation();
  console.log(location)
  const category = location.state; */
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItemList = async () => {
      try {
        var stoleid = "1";
            const { data } = await axios.get(`/issuedDetails/getIssuedDetails${stoleid}`);
            console.log(data)
            setItems(data);
      } catch (error) {
        console.error(error);
        toast.error('Failed to fetch inventory data');
        //setIsLoading(false);
      }
    };

    fetchItemList();
  }, []);

  const handleSearch = () => {


    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.itemcode.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setItems(filteredItems);
  };
  const deleteItem = async (itemId) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this item?');
    
    if (shouldDelete) {
      try {
        await axios.delete(`/inventory/deleteItem/${itemId}`);
        window.location.reload(); // Reload the page
        toast.success('Item deleted successfully');
      } catch (error) {
        console.error(error);
        toast.error('Failed to delete item');
      }
    }
  };
  return (
    <div>
      <div><AdminNavBar /></div>
      <div className='container'>
        <div className='title'>
          <h1 className="item-list-title">Item List</h1>
        </div>

        <div className="item-list-buttons">
          <input
            type="text"
            placeholder="Search by name/itemcode..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>Search</button>
          <Link to="/IssueEntry" className="add-new-button">Add New</Link>

        </div>
        <div className="item-list-container">
          <table className="item-list-table">
            <thead>
              <tr>
                
                <th>Item Code</th>
                <th>Name</th>
                <th>Date</th>
                <th>Quantity</th>
                <th>Price</th>
               
              
              </tr>
            </thead>
            <tbody>
               {items.map((item, index) => (
                <tr key={index}>
                  {/* <td><Link to={`/itemDetails/${item.itemcode}`}><button className="view-button">View</button></Link></td> */}
                  <td>{item.itemCode}</td>
                  <td>{item.itemName}</td>
                  <td>{item.date}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  {/* <td><Link to={`/invEdit/${item._id}`}>
                    <button className="Edit-button">Edit</button></Link></td>
                  <td>
                    <button onClick={() => deleteItem(item._id)} className="Delete-button">Delete</button></td> */}
                </tr>
              ))} 
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


