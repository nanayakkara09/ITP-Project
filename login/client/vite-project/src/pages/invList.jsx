import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contex/userContex"; // Correct the typo in "context"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import AdminNavBar from '../components/adminNavBar';
import './invList.css'

function InvList() {
    const navigate = useNavigate();

  

  return (
    <div className="inventory-item-container">
      <AdminNavBar />
      <div className="bg-image">
        <br></br>
        <br></br>
        <br></br>
        <div className="inv-list food-list">
          <h3>Food</h3>
          <Link to="/customer-details">View Customer Details</Link>
        </div>
        <div className="inv-list furniture-list">
          <h3>Furniture</h3>
          <Link to="/seefeedbacks">See Feedbacks</Link>
        </div>
        <div className="inv-list machinery-list">
          <h3>Machinery</h3>
          <Link to="/seesupport">Go to Support</Link>
        </div>
        <div className="inv-list issued-list">
          <h3>Issued</h3>
          <Link to="/seefeedbacks">See Feedbacks</Link>
        </div>
        <div className="inv-list reports-list">
          <h3>Reports</h3>
          <Link to="/seesupport">Go to Support</Link>
        </div>
      </div>
    </div>
  );
}

export default InvList;
