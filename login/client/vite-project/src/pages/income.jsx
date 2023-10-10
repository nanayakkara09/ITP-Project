import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './getAllOrderdata.css';

function IncomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [subtotal, setSubtotal] = useState(0);
  const [inputTypeOne, setInput1] = useState("");
  const [inputTypeTwo, setInput2] = useState("");
  const [inputTypeThree, setInput3] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [stall, setStall] = useState([]);
  const [income, setIncome] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllorder = async () => {
      try {
        const response = await axios.get("http://localhost:8000/orders");
        console.log(response)
        setOrder(response.data.orders);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchAllorder();
  }, []);

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

  useEffect(() => {
    const fetchAllIncome = async () => {
      try {
        const response = await axios.get("http://localhost:8000/getIncome");
        setIncome(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchAllIncome();
  }, []);


  const deleteCard = async (orderId) => {
    try {
      await axios.delete(`http://localhost:8000/delete/${orderId}`);
      navigate("/DeleteCard");
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const total = order.reduce((acc, currOrder) => acc + currOrder.total, 0);
    setSubtotal(total);
  }, [order]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send input data to the server
    axios
      .post("http://localhost:8000/Input", {
        inputTypeOne,
        inputTypeTwo,
        inputTypeThree,
      })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          setSuccessMessage("External income added successfully.");
          setErrorMessage("");
          navigate({
            pathname: `/GetShipping/${response.data._id}`,
          });
        }
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage("Error adding external income.");
        setSuccessMessage("");
      });
  };

  const filteredOrder = order.filter((order) =>
    order.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container my-5 backgr">
      <div className="col-md-9">
        <h3 className="underline-bold">Monthly income</h3>
        <div className="inputs">
          <p style={{ textAlign: "left", fontWeight: "bold", fontStyle: "italic" }}>
            Add external incomes
          </p>
          <div className="inputTypes">
            <div className="inpu1">
            <input
            type="text"
            placeholder="Input 1"
            value={inputTypeOne}
            onChange={(e) => setInput1(e.target.value)}
          />
          <input
            type="text"
            placeholder="Input 2"
            value={inputTypeTwo}
            onChange={(e) => setInput2(e.target.value)}
          />
          <input
            type="text"
            placeholder="Input 3"
            value={inputTypeThree}
            onChange={(e) => setInput3(e.target.value)}
          />

            </div>
            <div className="inpu2">
            <input
            type="text"
            placeholder="Input 1"
            value={inputTypeOne}
            onChange={(e) => setInput1(e.target.value)}
          />
          <input
            type="text"
            placeholder="Input 2"
            value={inputTypeTwo}
            onChange={(e) => setInput2(e.target.value)}
          />
          <input
            type="text"
            placeholder="Input 3"
            value={inputTypeThree}
            onChange={(e) => setInput3(e.target.value)}
          />


            </div>
         
          

          </div>
         

          <button type="submit" className="btn-primary" onClick={handleSubmit}>
            Add external income
          </button>

          {/* Display success and error messages */}
          {successMessage && <p className="text-success">{successMessage}</p>}
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
        </div>
        <h2 className="bold">Income from orders</h2>
        <table className="table table-striped table-bordered custom-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Date</th>
              <th>Total</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrder.map((order) => (
              <tr key={order._id}>
                <td>{order.name}</td>
                <td>{order.quantity}</td>
                <td>{order.price}</td>
                <td>{order.date}</td>
                <td>{order.total}</td>
                <td>{order.image}</td>
                <td>
                  <button
                    onClick={() => deleteCard(order._id)}
                    className="btn btn-primary mr-2"
                  >
                    Delete Card
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" className="text-right">
                <strong> Sub Total:</strong>
              </td>
              <td>${subtotal}</td>
            </tr>
          </tfoot>
        </table>
        <h2 className="bold">Income from Stalls</h2>
        <table className="table table-striped table-bordered custom-table">
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
            {stall.map((stallItem) => (
              <tr key={stallItem._id}>
                <td>{stallItem.sName}</td>
                <td>{stallItem.type}</td>
                <td>{stallItem.fName}</td>
                <td>{stallItem.lName}</td>
                <td>{stallItem.email}</td>
                <td>{stallItem.phone}</td>
                <td>
                  <button onClick={() => deleteCard(stallItem._id)} className="btn btn-primary mr-2">
                    Delete Card
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 className="bold">External incomes</h2>
        <table className="table table-striped table-bordered custom-table">
          <thead>
            <tr>
              <th>Input one</th>
              <th>Input two</th>
              <th>Input three</th>
              
            </tr>
          </thead>
          <tbody>
            {income.map((incomeItem) => (
              <tr key={incomeItem._id}>
                <td>{incomeItem.inputTypeOne}</td>
                <td>{incomeItem.inputTypeTwo}</td>
                <td>{incomeItem.inputTypeThree}</td>
               
                <td>
                  <button onClick={() => deleteCard(incomeItem._id)} className="btn btn-primary mr-2">
                    Delete Card
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="right-align-container searchbar">
        <div className="my-3 searchBar">
          <input
            type="text"
            placeholder="Search by order name"
            className="form-controlll"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
    </div>
  );
}

export default IncomePage;
