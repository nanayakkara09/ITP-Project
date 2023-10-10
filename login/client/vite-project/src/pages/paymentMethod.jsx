import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import myImage from '../images/visaa.jpg';
import cashon from '../images/cashondeliveryy.jpg';
import './PaymentMeth.css';

function PaymentMeth() {
  const navigate = useNavigate();
  

  return (
    <div className="container mt-5 parent" >
      <div className="row mt-3 font">
        <h3>We accept</h3>
        <img src={myImage} alt="Food 3" width={"60vh"} />
        <h3>And</h3>
        <img src={cashon} alt="Food 3" width={"60vh"} />
      </div>

      <div className="col-md-6 cont1">
        <h3 style={{ color: "#FFFFFF", fontSize: "46px" }}>Select payment method</h3>
        <button
          onClick={() => navigate(`/CardDet`)}
          className="btn btn-secondary btn1"
          style={{ width: "200px", height: "100px" }} // Adjust width and height as needed
        >
          Credit/Debit card
        </button>
        <button
          onClick={() => navigate(`/CardDet`)}
          className="btn btn-secondary btn2"
          style={{ width: "200px", height: "100px" }} // Adjust width and height as needed
        >
          Cash on delivery
        </button>
      </div>
    </div>
  );
}

export default PaymentMeth;
