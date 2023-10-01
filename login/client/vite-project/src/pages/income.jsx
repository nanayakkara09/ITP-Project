import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import './income.css';
function IncomePage() {
    const [order, setOrder] = useState({});

  return (
    <div >
        
       
        <div className="tableee">
        <h1 className="incomeHead">Monthly Income</h1>
        <table className="table">
            <thead class="table-light" >
              <tr>
                <th>Incomes</th>
                <th>Total</th>
             
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>adsas</td>
                <td>sdxa</td>
               
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" className="text-right"><strong>Sub Total:</strong></td>
                <td>{order.total}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        
     
    <p className="incomeHead">To generate monthly income report, press below button</p>
    <button onClick={() => navigate(`/IncomeReport/${order._id}`)} className="btn btn-primary buttas">Generate monthly report</button>
    </div>
  );
}

export default IncomePage;
