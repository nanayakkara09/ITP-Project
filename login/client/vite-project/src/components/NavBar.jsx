import React, { useContext } from "react";
import { UserContext } from "../../contex/userContex";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserPlus,
  faSignInAlt,
  faUser,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../components/NavBar.css";
import logo from "../images/123.png";
import "./NavBar.css";


export default function NavBar() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      try {
        await axios.post("/logout");
        setUser(null);
        navigate("/login"); // Redirect to the login page
        toast.success("Logout successful"); // Show success message
      } catch (error) {
        console.log(error);
        toast.error("Failed to logout"); // Show error message
      }
    }
  };

  return (
    <div className="menu-bar1">
      <div className="logo1">
        <img src={logo} alt="Logo" />
      </div>
      <Link to={user ? "/dashboard" : "/"}>
        <FontAwesomeIcon icon={faHome} /> Home
      </Link>
      {!user ? (
        <>
          <Link to="/register">
            <FontAwesomeIcon icon={faUserPlus} /> Register
          </Link>
          <Link to="/login">
            <FontAwesomeIcon icon={faSignInAlt} /> Login
          </Link>
        </>
      ) : (
        <>
          <Link to="/profile">
            <FontAwesomeIcon icon={faUser} /> Profile
          </Link>
          <button onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </button>
        </>
      )}
    </div>
  );
}
