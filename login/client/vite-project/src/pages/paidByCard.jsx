import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import pCard from '../images/undraw_plain_credit_card_re_c07w.svg'
import cash from '../images/68a91e9d5f0b3e787706892300c82ce5.gif'
import './paidBycard.css';
function Paidbycard() {
  const navigate = useNavigate();

  return (
    <div className="main">
      <body>
        <div class="card">
      <div class="imgbox">
      <img
              src={cash}
              alt="Cash on Delivery"
            />
      </div>

      <div class="content">
        <h2>Paid by card</h2>
        <p>
          Your payment has successfully made!, keep touching with us
        </p>
        <button
          onClick={() => navigate(`/CardDet`)}
          className="btn btn-secondary btn1"
          style={{ width: "200px", height: "50px" }} // Adjust width and height as needed
        >
          Ok
        </button>
      </div>
    </div>
 
  </body>
      </div>
    
   
  );
}

export default Paidbycard;
