import React, { useState } from 'react';
import './itemlist.css'; // Import the CSS file for styling

export default function itemlist() {
  const [items, setItems] = useState([
    {
      view: 'View 1',
      itemcode: '12345',
      name: 'Item 1',
      description: 'Description 1',
      quantity: 10,
      reorderLevel: 5,
    },
    {
      view: 'View 2',
      itemcode: '67890',
      name: 'Item 2',
      description: 'Description 2',
      quantity: 20,
      reorderLevel: 10,
    },
    // Add more items here
  ]);
    // Sample data for the table
      items: [
        {
          view: 'View 1',
          itemcode: '12345',
          name: 'Item 1',
          description: 'Description 1',
          quantity: 10,
          reorderLevel: 5,
        },
        {
          view: 'View 2',
          itemcode: '67890',
          name: 'Item 2',
          description: 'Description 2',
          quantity: 20,
          reorderLevel: 10,
        },
        // Add more items here
      ]

  

    return (
      <div className='container'>
        <div className='title'>
        <h1 className="item-list-title">Item List</h1>
        </div>
      
      <div className="item-list-buttons">
        <button className="search-button">Search</button>
        <button className="add-new-button">Add New</button>
      </div>
      <div className="item-list-container">
      <table className="item-list-table">
        <thead>
          <tr>
            <th>View</th>
            <th>Item Code</th>
            <th>Name</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Reorder Level</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td><button className="view-button">View</button></td>
              <td>{item.itemcode}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>{item.reorderLevel}</td>
              <td><button className="Edit-button">Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    );
  }


