import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contex/userContex";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import AdminNavBar from "../components/adminNavBar";
import "./admin-dashbord.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faCalendar,
  faStore,
  faUsersCog,
  faClipboardList,
  faTruck,
  faBox,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

export default function AdminDashboard() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [totalUsers, setTotalUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
      });
    }

    axios
      .get("/total-users")
      .then(({ data }) => {
        setTotalUsers(data.totalUsers);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching total users:", error);
        setIsLoading(false);
      });
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
          <Link to="/customerAdmin" className="vertical-text">
            <FontAwesomeIcon icon={faUsers} /> Customer
          </Link>
          <div className="vertical-text">
            <FontAwesomeIcon icon={faCalendar} /> Event
          </div>
          <div className="vertical-text">
            <FontAwesomeIcon icon={faStore} /> Stall
          </div>
          <div className="vertical-text">
            <FontAwesomeIcon icon={faUsersCog} /> Employee
          </div>
          <div className="vertical-text">
            <FontAwesomeIcon icon={faClipboardList} /> Order
          </div>
          <div className="vertical-text">
            <FontAwesomeIcon icon={faTruck} /> Delivery
          </div>
          <Link to="/invList" className="vertical-text">
            <FontAwesomeIcon icon={faBox} /> Inventory
          </Link>
          <Link to="/FinancePage"   className="vertical-text">
            <FontAwesomeIcon icon={faDollarSign} /> Finance
          </Link>
        </div>
        <br></br>
        {!!user && (
          <div>
            <h2>Welcome {user.name}!</h2>
            <div className={`total-users-box${isLoading ? ' loading-text' : ''}`}>
              {isLoading ? (
                <p>Loading total users...</p>
              ) : (
                
                <p>Total Users: {totalUsers}</p>
              )}
            </div>
          </div>
        )}
        <br></br>
      </div>
    </div>
  );
}
