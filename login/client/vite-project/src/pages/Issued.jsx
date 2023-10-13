import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import AdminNavBar from '../components/adminNavBar';
//import './Issued.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';


export default function Issued() {
    return (
        <div className="issued-container">
            <AdminNavBar />

            <div className="card h-100">

                <div className="card-body">
                    <h5 className="card-title">fdfg</h5>
                    <p className="card-text">ghfg</p>
                </div>
                <div className="card-footer">
                    {/*  <Link to={`/shop/${stall.id}`} className="btn btn-primary">
            View Stall
          </Link> */}
                </div>
            </div>
        </div>
      
    );



}
