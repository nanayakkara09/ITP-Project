import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import myImage from '../images/visaa.jpg';
import cashon from '../images/cashondeliveryy.jpg';
import './PaymentMeth.css';

function PaymentMeth() {
  const navigate = useNavigate();

  return (
    <div className="container mt-5 parent">
      <div className="row mt-3 font">
      <button
          onClick={() => navigate(`/CardDet`)}
          className="btn btn-secondary btn1"
          style={{ width: "100px", height: "100px" }} // Adjust width and height as needed
        >
          Deposit and upload a slip
        </button>
      </div>

      <div className="col-md-6 cont1">
      <button
          onClick={() => navigate(`/CardDet`)}
          className="btn btn-secondary btn2"
          style={{ width: "100px", height: "100px" }} // Adjust width and height as needed
        >
          Cash on delivery
        </button>
        
      </div>
    </div>
  );
}

export default PaymentMeth;
