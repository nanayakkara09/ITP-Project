import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import AdminNavBar from '../components/adminNavBar';
import { useNavigate } from "react-router-dom";

export default function StallAdmin() {
    const navigate = useNavigate();    

  return (
    <div>
       <div className="stall-container">
      <AdminNavBar />
      <div className="bg-image">
        <br></br>
        <br></br>
        <br></br>
        <div className="stall request-list">
          <h3>Requests for Stall creation</h3>
          <Link to="/StallAdminreq">View Stall Creation Requests</Link>
        </div>

        <div className="stall created stall-list">
          <h3>Created Stalls</h3>
          <Link to="/createdStalls">View Stall List</Link>
        </div>

        <div className="stall marketing- list">
          <h3>Marketing & Promotion</h3>
          <Link to="/promotions">Create promo</Link>
        </div>

        <div className="stall support-list">
          <h3>Support System</h3>
          <Link to="/getTicket">View Tickets</Link>
        </div>
        <div className="stall reports-list">
          <h3>Reports</h3>
          <Link to="">Generate Reports</Link>
        </div>
      </div>
    </div>
    </div>
  );
}
