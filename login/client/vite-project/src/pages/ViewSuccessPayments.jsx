import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './getAllStalldata.css';

const ViewSuccessPayments = () => {

    const [order, setOrder] = useState(null)
    const [stall, setStall] = useState(null)

    useEffect(() => {
        console.log(stall)
    }, [stall])

    useEffect(() => {
        console.log(order)
    }, [order])
 
  // fetch orders
  useEffect(() => {
    const fetchAllorder = async () => {
      try {
        const response = await axios.get("http://localhost:8000/orders");
        console.log(response);
        setOrder(response.data.orders);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllorder();
  }, []);

  //   fetch stalls
  useEffect(() => {
    const fetchAllstall = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/stall/getAllStall"
        );
        setStall(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllstall();
  }, []);

  return (
    <>
    <div>
        {/* orders */}
        {order.length > 0 && (
            order.map((order, index) => (
                order.status === "success" && (
                    <div key={index} style={{backgroundColor:"lightcoral", marginBottom:"10px"}}>
                    <p>{order.name}</p>
                    <p>{order.price}</p>
                    <p>{order.quantity}</p>
                    <p>{order.status}</p>
                </div>
                )
            ))
        )}
    </div>
    <div style={{backgroundColor:"lightblue"}}>
        {/* orders */}
        {stall.length > 0 && (
            stall.map((stall, index) => (
                stall.status === "success" && (
                    <div key={index}>
                    <p>{stall.fName}</p>
                    <p>{stall.payment}</p>
                    <p>{stall.stallName}</p>
                    <p>{stall.status}</p>
                </div>
                )
            ))
        )}
    </div>
    </>
  ) ;
};

export default ViewSuccessPayments;
