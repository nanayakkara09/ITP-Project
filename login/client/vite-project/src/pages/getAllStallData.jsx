import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './getAllStalldata.css';

function Getstall() {
  const [isLoading, setIsLoading] = useState(true);
  const [stall, setStall] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllstall = async () => {
      try {
        const response = await axios.get("http://localhost:8000/stall/getAllStall");
        setStall(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchAllstall();
  }, []);

  const deleteCard = async (stallId) => {
    try {
      await axios.delete(`http://localhost:8000/stall/deleteStall/${stallId}`, {
        withCredentials: true, // Include credentials (cookies) in the request
      });
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container my-5 backgr">
      <div className="col-md-9">
        <h3 className="underline-bold">Your all stall payments</h3>
        <div className="allstall">
        <table className="table table-striped table-bstalled ">
          <thead>
            <tr>
                <th>Stall Id</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Stall name</th>
                <th>Stall type</th>
                <th>Amount</th>
                <th>M type</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {stall.map((stallItem) => (
              <tr key={stallItem._id}>
                <td>{stallItem.stallId}</td>
                  <td>{stallItem.fName}</td>
                  <td>{stallItem.lName}</td>
                  <td>{stallItem.stallName}</td>
                  <td>{stallItem.type}</td>
                  <td>{stallItem.amount}</td>
                  <td>{stallItem.mType}</td>
                  <td>{stallItem.phonenumber}</td>
                  <td>{stallItem.email}</td>
                  <td>{stallItem.payment}</td>
                <td>
                  <button onClick={() => deleteCard(stallItem._id)} className="btn btn-primary mr-2">
                    Delete Card
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        </div>
        
      </div>
      <div className="right-align-container">
        <div className="my-3 searchBar">
          <input
            type="text"
            placeholder="Search by stall name"
            className="form-controlll"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <button onClick={() => navigate("/Table")} className="btn btn-primary search-button"> Search stall name</button>
      </div>
    </div>
  );
}

export default Getstall;
