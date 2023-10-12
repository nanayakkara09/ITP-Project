import React, { useState } from 'react';
import axios from 'axios';
import paymentsuccess from '../images/paymentsuccess.gif';
import './paymentSuccess.css'

function PaymentSuccess() {
  
  return (
    
    <div className="container">
          
          <div className="col-sm delivermanImg">
                <img src={paymentsuccess} alt="Food 3"/>
              </div>
    <div className="messg">

        <h2>payment successfull</h2>
        <p>Your payment has been successfully made, and thank you for choosing us, keep touching with us!</p>
        <button
              onClick={() => navigate(`/CardDet`)}
              className="btn btn-secondary butbtn1"
              style={{ width: "200px", height: "50px" }}
            >
              Ok
            </button>
    </div>
    </div>
  );
}

export default PaymentSuccess;
