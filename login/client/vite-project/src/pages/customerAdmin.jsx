import React from 'react';
import AdminNavBar from '../components/adminNavBar';
import './customerAdmin.css'
// Create a CSS file for styling

function CustomerAdminPage() {
  return (
    <div className="customer-admin-container">
        <AdminNavBar/>
        <div className="bg-image">
  
      <div className="admin-box customer-list-box">
        <h3>Customer List</h3>
        {/* Add content for the Customer List box */}
      </div>
      <div className="admin-box feedbacks-box">
        <h3>Feedbacks</h3>
        {/* Add content for the Feedbacks box */}
      </div>
      <div className="admin-box support-box">
        <h3>Support</h3>
        {/* Add content for the Support box */}
      </div>
      </div>
    </div>
  );
}

export default CustomerAdminPage;
