import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import './receiptforOrder.css'

import { useReactToPrint } from 'react-to-print';

function ReceiptForOrder() {
  const componentPdf = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState({});
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchCardById = async (orderId) => {
      try {
        const response = await axios.get(`http://localhost:8000/order/get/${orderId}`);
        setOrder(response.data.order);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchCardById(id);
  }, [id]);

  const generatePDF = useReactToPrint({
    content: () => componentPdf.current,
    documentTitle: 'Userdata',
    onAfterPrint: () => alert("Data saved in PDF")
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Get the current date in the format "September 29, 2023"
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bgh-img">
      <div ref={componentPdf} style={{ width: '100%' }}>
       

        {/* Center the table */}
        <div className="text-center mx-uto" style={{ width: '80%' }}>
        <h1>Transaction receipt</h1>
        <div className="text-left">
          <div className="invoice-numb">
          <strong>Invoice Number:</strong> INV-2023-001<br />
          <strong>Invoice Date:</strong> {currentDate}

          </div>
        

      
          <strong>Street Bitez</strong><br />
        
            <strong>Street Address:</strong> 123 Main St, Colombo 01, StreetBitez<br />
            <strong>Country:</strong> Sri Lanka<br />
            <strong>City:</strong> Colombo<br />
            <strong>Email:</strong> StreetBitez@gmail.com
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{order.name}</td>
                <td>{order.quantity}</td>
                <td>${order.price}</td>
                <td>${order.total}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" className="text-right"><strong>Total:</strong></td>
                <td>${order.total}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div className="btn-group mt-4">
        <button onClick={() => navigate(`/UpdateCardDet/${order._id}`)} className="btn btn-primary btn1">Ok</button>
        <button onClick={generatePDF} className="btn btn-primary btn1">Save as PDF</button>
      </div>
    </div>
  );
}

export default ReceiptForOrder;
