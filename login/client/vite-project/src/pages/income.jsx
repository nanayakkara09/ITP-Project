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
  const [inputTypeFour, setInput4] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [stall, setStall] = useState([]);
  const [income, setIncome] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllorder = async () => {
      try {
        const response = await axios.get("http://localhost:8000/order");
        console.log(response);
        setOrder(response.data.order);
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
      await axios.delete(`http://localhost:8000/deleteOrder/${orderId}`);
      navigate("/DeleteCard");
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  const deleteIncome = async (incomeId) => {
    try {
      await axios.delete(`http://localhost:8000/deleteIncome/${incomeId}`);
      navigate("/DeleteCard");
    } catch (error) {
      console.error("Error deleting income:", error);
    }
  };

  const deleteStall = async (stallId) => {
    try {
      await axios.delete(`http://localhost:8000/deleteStall/${stallId}`);
      navigate("/DeleteCard");
    } catch (error) {
      console.error("Error deleting stall:", error);
    }
  };
  // Function to calculate the subtotal for "Input Type Two" in external incomes
const calculateInputTypeTwoSubtotal = () => {
  const total = income.reduce((acc, incomeItem) => {
    return acc + (parseFloat(incomeItem.inputTypeTwo) || 0);
  }, 0);
  return total;
};

useEffect(() => {
  // Recalculate the "Input Type Two" subtotal whenever the 'income' state changes
  const inputTypeTwoTotal = calculateInputTypeTwoSubtotal();
  setSubtotal(inputTypeTwoTotal);
}, [income]);


  useEffect(() => {
    const total = order.reduce((acc, currOrder) => acc + currOrder.total, 0);
    setSubtotal(total);
  }, [order]);

  // Calculate the subtotal for Income from Stalls
  const totalStallPayments = stall.reduce((acc, stallItem) => acc + stallItem.payment, 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send input data to the server
    axios
      .post("http://localhost:8000/Input", {
        inputTypeOne,
        inputTypeTwo,
        inputTypeThree,
        inputTypeFour,
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
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter where the income comes from"
                value={inputTypeOne}
                onChange={(e) => setInput1(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter amount"
                value={inputTypeTwo}
                onChange={(e) => setInput2(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter where the income comes from"
                value={inputTypeThree}
                onChange={(e) => setInput3(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter amount"
                value={inputTypeFour}
                onChange={(e) => setInput4(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn-primary externalBtn" onClick={handleSubmit}>
            Add external income
          </button>
          {/* Display success and error messages */}
          {successMessage && <p className="text-success">{successMessage}</p>}
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
        </div>
        <h2 className="bold IncHead">Income from orders</h2>
        <div className="AllIncomeTables">
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
          <h2 className="bold IncHead">Income from Stalls</h2>
          <table className="table table-striped table-bordered custom-table">
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
                    <button
                      onClick={() => deleteStall(stallItem._id)}
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
                <td colSpan="9" className="text-right">
                  <strong>Total Stall Payments:</strong>
                </td>
                <td>${totalStallPayments}</td>
              </tr>
            </tfoot>
          </table>
          <h2 className="bold IncHead">External incomes</h2>
          <table className="table table-striped table-bordered custom-table">
            <thead>
              <tr>
                <th>Input one</th>
                <th>Input two</th>
                <th>Input three</th>
                <th>Input Four</th>
              </tr>
            </thead>
            <tbody>
              {income.map((incomeItem) => (
                <tr key={incomeItem._id}>
                  <td>{incomeItem.inputTypeOne}</td>
                  <td>{incomeItem.inputTypeTwo}</td>
                  <td>{incomeItem.inputTypeThree}</td>
                  <td>{incomeItem.inputTypeFour}</td>
                  <td>
                    <button
                      onClick={() => deleteIncome(incomeItem._id)}
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
                <td colSpan="1" className="text-right">
                  <strong> Sub Total (Input Type Two):</strong>
                </td>
                <td>${calculateInputTypeTwoSubtotal()}</td>
              </tr>
            </tfoot>
          </table>
          <h2 className="bold IncHead">Total income for company</h2>
          <table className="table table-striped table-bordered custom-table totalIncome">
  <thead>
    <tr>
      <th>Total income from orders</th>
      <th>Total income from external income</th>
      <th>Total income from stalls</th>
      <th>Overall income</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${calculateInputTypeTwoSubtotal()}</td>
      <td>${subtotal}</td>
      <td>${totalStallPayments}</td> {/* Assuming this is your total income from stalls */}
      <td>${calculateInputTypeTwoSubtotal() + subtotal + totalStallPayments}</td>
    </tr>
  </tbody>
</table>



          </div>
         
        </div>
      </div>
    
  );
}

export default IncomePage;
