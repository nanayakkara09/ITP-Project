import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function RequestStall() {
  const [sName, setsName] = useState("");
  const [type, settype] = useState("");
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};

    if (!sName) {
      errors.sName = "Stall Name is required.";
    }

    if (!fName) {
      errors.fName = "First Name is required.";
    }

    if (!lName) {
      errors.lName = "Last Name is required.";
    }

    if (!email) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Invalid email format.";
    }

    if (!phone) {
      errors.phone = "Phone Number is required.";
    } else if (!/^\d{10}$/.test(phone)) {
      errors.phone = "Phone Number must be 10 digits.";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      // If there are no validation errors, submit the form
      axios
        .post("http://localhost:8070/auth/requestStall", {
          sName,
          type,
          fName,
          lName,
          email,
          phone,
        })
        .then((result) => {
          console.log(result);
          // Assuming a successful submission should navigate to a success page
          navigate("/success");
        })
        .catch((err) => console.log(err));
    } else {
      // If there are validation errors, update the state to display them
      setErrors(validationErrors);
    }
  };

  return (
    
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100 background">
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header text-center">
            <h2>Stall Creation Request</h2>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="stallName">Stall Name:</label>
                <input
                  type="text"
                  className={`form-control form-control-lg ${
                    errors.sName ? "is-invalid" : ""
                  }`}
                  id="stallName"
                  placeholder="Enter Stall Name"
                  value={sName}
                  onChange={(e) => setsName(e.target.value)}
                />
                {errors.sName && (
                  <div className="invalid-feedback">{errors.sName}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="cuisineType">Cuisine Type:</label>
                <select
                  className="form-control form-control-lg"
                  id="cuisineType"
                  value={type}
                  onChange={(e) => settype(e.target.value)}
                >
                  <option value="">Select Cuisine Type</option>
                  <option value="Italian">Italian</option>
                  <option value="Mexican">Mexican</option>
                  <option value="Indian">Indian</option>
                  {/* Add more cuisine types as needed */}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  className={`form-control form-control-lg ${
                    errors.fName ? "is-invalid" : ""
                  }`}
                  id="firstName"
                  placeholder="Enter First Name"
                  value={fName}
                  onChange={(e) => setfName(e.target.value)}
                />
                {errors.fName && (
                  <div className="invalid-feedback">{errors.fName}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  className={`form-control form-control-lg ${
                    errors.lName ? "is-invalid" : ""
                  }`}
                  id="lastName"
                  placeholder="Enter Last Name"
                  value={lName}
                  onChange={(e) => setlName(e.target.value)}
                />
                {errors.lName && (
                  <div className="invalid-feedback">{errors.lName}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className={`form-control form-control-lg ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  id="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="tel"
                  className={`form-control form-control-lg ${
                    errors.phone ? "is-invalid" : ""
                  }`}
                  id="phoneNumber"
                  placeholder="Enter Phone Number"
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                />
                {errors.phone && (
                  <div className="invalid-feedback">{errors.phone}</div>
                )}
              </div>
              <br/>
              <button type="submit" className="btn btn-primary btn-block">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div> 
   
  );
}

export default RequestStall;
