
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import creditcard from '../images/cardpayment.svg';
import './CardDet.css';

function CardDetails() {
  const [Cnum, setCnum] = useState('');
  const [Cvv, setCvv] = useState('');
  const [Ctype, setCtype] = useState('');
  const [Expiration, setExpiration] = useState('');
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  const navigate = useNavigate();

  const handleSubmitt = (e) => {
    
    e.preventDefault();
    if (order && order.name) {
      alert(order.name)
      updateOrderSuccess(`http://localhost:8000/SuccessOrder/OrderSuccess/${order._id}`);
    }
  };

  const updateOrderSuccess = (url) => {
    axios.put(url, { status: "success" })
      .then((response) => {
        if (response.status === 200) {
          console.log("Order data updated successfully.");
          navigate("/success"); // Replace "/success" with your desired route
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    // Function to fetch order data
    const fetchOrderById = async (orderId) => {
      try {
        const response = await axios.get(`http://localhost:8000/orderss/${orderId}`);
        setOrder(response.data.order);
      } catch (error) {
        console.error(error);
      }
    };

    // Check order collection
    fetchOrderById(id);
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <h1 className="cHead">Card details</h1>
          <img src={creditcard} alt="Food 3" />
        </div>
        <div className="text-start mb-2 fetchedTable">
          {order && order.name && (
            <div>
              <h2>Order Details</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{order.name}</td>
                    <td>{order.quantity}</td>
                    <td>{order.price}</td>
                    <td>{order.date}</td>
                    <td>{order.status}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          <button type="button" className="btn-primary insertButt" onClick={handleSubmitt}>
            Done
          </button>
        </div>
        <form>
        <div className="mb-3">
            <label htmlFor="cNum"><strong>Card number</strong></label>
            <input
              type="text"
              id="cNum"
              placeholder="Enter card number"
              className="form-control rounded-0"
              onChange={(e) => setCnum(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cvv"><strong>CVV</strong></label>
            <input
              type="text"
              id="cvv"
              placeholder="Enter CVV"
              className="form-control rounded-0"
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Ctype"><strong>Card type (Visa/Mastercard)</strong></label>
            <input
              type="text"
              id="Ctype"
              placeholder="Enter card type"
              autoComplete="off"
              className="form-control rounded-0"
              onChange={(e) => setCtype(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Expiration"><strong>Expiration (MM/YY)</strong></label>
            <input
              type="text"
              id="Expiration"
              placeholder="Enter expiration"
              autoComplete="off"
              className="form-control rounded-0"
              onChange={(e) => setExpiration(e.target.value)}
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CardDetails;
