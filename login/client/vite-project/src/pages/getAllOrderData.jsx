import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './getAllOrderdata.css';
import backgroundImage from '../images/undraw_online_transactions_-02-ka.svg';
function GetOrder() {
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllorder = async () => {
      try {
        const response = await axios.get("http://localhost:8000/order/get");
        console.log(response)
        setOrder(response.data.order);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchAllorder();
  }, []);

  const deleteCard = async (orderId) => {
    try {
      await axios.delete(`http://localhost:8000/order/delete/${orderId}`);
      navigate("/DeleteCard");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredorder = order.filter((order) =>
    order.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const backgroundStyle = {
    backgroundImage: `url('../images/undraw_plain_credit_card_re_c07w.svg')`,
    backgroundSize: 'cover', // You can adjust this based on your GIF and layout needs
    /* Other background styles */
  };

  return (
    <div className="container my-5" style={backgroundStyle}>
      <div className="col-md-9">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredorder.map((order) => (
              <tr key={order._id}>
                <td>{order.name}</td>
                <td>{order.quantity}</td>
                <td>{order.price}</td>
                <td>{order.total}</td>
                <td>{order.image}</td>
                <td>
                 
                  <button onClick={() => deleteCard(order._id)} className="btn btn-primary mr-2">
                    Delete Card
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="right-align-container" >
        <div className="my-3">
          <input
            type="text"
            placeholder="Search by order name"
            className="form-control"
            value={searchTerm}
            onChange={handleSearch}

          />
        </div>
        <button onClick={() => navigate("/Table")} className="btn btn-primary search-button"> Search order name</button>
      </div>
    </div>
  );
}

export default GetOrder;
