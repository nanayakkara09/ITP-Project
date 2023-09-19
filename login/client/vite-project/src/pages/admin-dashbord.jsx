import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contex/userContex";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import AdminNavBar from "../components/adminNavBar";
import "./admin-dashbord.css";

export default function AdminDashboard() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility

  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
      });
    }
  }, [user, setUser]);

  const handleLogout = async () => {
    try {
      await axios.post("/logout");
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <AdminNavBar />

      <div className="bg-image"></div>
      <div className="content">
        <div className="black-box">
          <br></br>
          <div className="vertical-text">Customer</div>
          
          <div className="vertical-text">Order</div>
          <div className="vertical-text">Delivery</div>
          <div className={`dropdown ${showDropdown ? "show" : ""}`}>
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              onClick={toggleDropdown}
            >
              Inventory
            </button>
            <div className={`dropdown-menu ${showDropdown ? "show" : ""}`}>
              <Link className="dropdown-item" to="/itemlist">
                Food
              </Link>
              <Link className="dropdown-item" to="/inventory-page-2">
                Furniture
              </Link>
              <Link className="dropdown-item" to="/inventory-page-3">
                Machinery
              </Link>
              <Link className="dropdown-item" to="/inventory-page-4">
                Issued
              </Link>
              <Link className="dropdown-item" to="/inventory-page-5">
                Reports
              </Link>
              {/* Add more dropdown items as needed */}
            </div>
          </div>
          <div className="vertical-text">Finance</div>
          <div className="vertical-text">Event</div>
          <div className="vertical-text">Stall</div>
          <div className="vertical-text">Employee</div>
        </div>
        <br></br>
        {!!user && <h2>Welcome, {user.name}!</h2>}
        <br></br>
      </div>
      <footer className="footers">
        <div className="container">
          <hr></hr>
          <p className="text-center">All rights reserved &copy; </p>
        </div>
      </footer>
    </div>
  );
}
