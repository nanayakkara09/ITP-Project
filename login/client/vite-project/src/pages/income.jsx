import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './getAllOrderdata.css';

function IncomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [subtotal, setSubtotal] = useState(0); // Initialize subtotal to 0
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
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

  // Calculate the subtotal
  useEffect(() => {
    const total = order.reduce((acc, currOrder) => acc + currOrder.total, 0);
    setSubtotal(total);
  }, [order]);

  const filteredorder = order.filter((order) =>
    order.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/shippings', { Name, Address, City, StateP, Pcode })
      .then((result) => {
         console.log(result.status)
         if(result.status === 200) {
          navigate({
            pathname: `/GetShipping/${result.data._id}`
          })
         }

       })
      .catch(err => console.log(err));
  }

  return (
    <div className="container my-5 backgr">
      
      <div className="col-md-9">
        
    
        <h3 className="underline-bold">Monthly income</h3>
          {/* Add three input fields here */}
      <div className="inputs">
        <p style={{textAlign: "left", fontWeight: "bold", fontStyle: "italic"}}>Add external incomes</p>
        <input
          type="text"
          placeholder="Input 1"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Input 2"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
        <input
          type="text"
          placeholder="Input 3"
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
          
        />

         <button type="submit" className="btn-primary">Submit</button>
      </div>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Image</th>
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
              <td colSpan="3" className="text-right">
                <strong> Sub Total:</strong>
              </td>
              <td>${subtotal}</td> {/* Display the calculated subtotal */}
            </tr>
          </tfoot>
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
