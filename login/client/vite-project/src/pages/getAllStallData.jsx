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
        const response = await axios.get("http://localhost:8000/getAllStall");
        console.log(response)
        setStall(response.data.stalls);
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
      await axios.delete(`http://localhost:8000/deleteStall/${stallId}`);
      navigate("/DeleteCard");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredstall = stall.filter((stall) =>
    stall.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
 

  return (
    <div className="container my-5 backgr" >
     
      <div className="col-md-9">
     
     
        <table className="table table-striped table-bstalled">
          
          <thead>
            <tr>
              <th>Stall name</th>
              <th>Stall type</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {filteredstall.map((stall) => (
              <tr key={stall._id}>
                <td>{stall.sName}</td>
                <td>{stall.type}</td>
                <td>{stall.fName}</td>
                <td>{stall.lName}</td>
                <td>{stall.email}</td>
                <td>{stall.phone}</td>
                <td>
                 
                  <button onClick={() => deleteCard(stall._id)} className="btn btn-primary mr-2">
                    Delete Card
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          
        </table>
        
      </div>
      <div className="right-align-container" >
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
