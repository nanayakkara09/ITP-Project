import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contex/userContex"; // Correct the typo in "context"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import AdminNavBar from '../components/adminNavBar';
import './customerAdmin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComments, faLifeRing } from '@fortawesome/free-solid-svg-icons'; // Choose appropriate icons


function CustomerAdminPage() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [totalUsers, setTotalUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
      });
    }

    axios.get("/total-users")
      .then(({ data }) => {
        setTotalUsers(data.totalUsers);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching total users:", error);
        setIsLoading(false);
      });
  }, [user, setUser]);

  return (
    <div className="customer-admin-container">
      <AdminNavBar />
      

      

    </div>
  );
}

export default CustomerAdminPage;
